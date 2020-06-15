/* eslint-disable no-underscore-dangle */
import { IDBPDatabase, openDB } from "idb";
import {
  IAnswer, IQuestion, ITestData, RefereeDB,
} from "./index";
import Question from "./Question";

export default class TestDataManager {
  private db: IDBPDatabase<RefereeDB> | null = null;

  private _data: { [id: string]: Question } = {};

  private loadedLanguages: string[] = [];

  private todo: string[] = [];

  private initialized = false;

  private currentId = "";

  private _asked = 0;

  private _correct = 0;

  private _wrong = 0;

  private _answerData: Array<IAnswer> = [];

  constructor(answerData: Array<IAnswer>) {
    this._answerData = answerData;
  }

  public async initialize(language: string) {
    if (this.initialized) {
      await this.switchLanguage(language);
      return this._data[this.currentId];
    }

    const mappedAnswers = this._answerData.reduce<{ [id: string]: IAnswer }>((prev, curr) => ({
      ...prev,
      [curr.id]: curr,
    }), {});

    const questions = await TestDataManager.loadQuestions(language);

    this.loadedLanguages = [language];

    const mappedQuestions = questions.reduce<{ [id: string]: IQuestion }>((prev, curr) => ({
      ...prev,
      [curr.id]: curr,
    }), {});

    const mappedTestData: { [id: string]: ITestData } = {};

    let db;

    // idb library does not support IE
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);
    if (!isIE) {
      db = await openDB<RefereeDB>("referee", 1, {
        async upgrade(currentDB, oldVersion) {
          if (oldVersion < 1) {
            currentDB.createObjectStore("questions");
          }
        },
      });
    }

    const ids = Object.keys(mappedAnswers);
    this.todo = [...ids];

    if (db) {
      const tx = db.transaction("questions", "readwrite");

      const currentDate = new Date();

      let cursor = await tx.store.openCursor();

      while (cursor) {
        mappedTestData[cursor.key] = cursor.value;

        const testData = cursor.value;

        this._asked += testData.asked;
        this._correct += testData.correct;
        this._wrong += testData.wrong;

        if (testData.lastAsked) {
          let remove = false;
          const diffTime = Math.abs(+testData.lastAsked - +currentDate);
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

          // remove if needed
          if (
            (testData.box === 2 && diffDays < 1)
            || (testData.box === 3 && diffDays < 3)
            || (testData.box === 4 && diffDays < 7)
            || (testData.box === 5 && diffDays < 30)
          ) {
            remove = true;
          }

          if (remove) {
            // eslint-disable-next-line no-loop-func
            const index = this.todo.findIndex((val) => val === cursor?.key);
            if (index > -1) {
              this.todo.splice(index, 1);
            }
          }
        }

        // eslint-disable-next-line no-await-in-loop
        cursor = await cursor.continue();
      }

      await tx.done;

      this.db = db;
    }

    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      this._data[id] = new Question(
        language,
        mappedQuestions[id],
        mappedAnswers[id],
        mappedTestData[id],
      );
    }

    this.initialized = true;

    return this.next();
  }

  get wrong(): number {
    return this._wrong;
  }

  get correct(): number {
    return this._correct;
  }

  get asked(): number {
    return this._asked;
  }

  get data(): { [p: string]: Question } {
    return this._data;
  }

  public async checkAnswer(answers: string[]) {
    if (!this.currentId) {
      return {
        correct: [],
        rules: [],
      };
    }

    // persist test data

    const question = this._data[this.currentId];

    const result = question.checkAnswer(answers);

    this._asked += 1;
    if (result.answeredCorrect) {
      this._correct += 1;
    } else {
      this._wrong += 1;
    }

    if (this.db) {
      await question.persist(this.db);
    }

    if (question.box > 1) {
      const index = this.todo.findIndex((val) => val === question.id);
      this.todo.splice(index, 1);
    }

    return result;
  }

  public next() {
    this.currentId = this.todo[Math.floor(Math.random() * this.todo.length)];
    return this._data[this.currentId];
  }

  private async switchLanguage(language: string) {
    if (this.loadedLanguages.includes(language)) {
      return;
    }

    const questions = await TestDataManager.loadQuestions(language);
    for (let i = 0; i < questions.length; i += 1) {
      const question = questions[i];
      this._data[question.id].updateData(language, question);
    }

    this.loadedLanguages = [...this.loadedLanguages, language];
  }

  private static async loadQuestions(language: string): Promise<IQuestion[]> {
    const response = await fetch(`/data/questions/${language}.json`);
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json);
    }

    return json;
  }
}
