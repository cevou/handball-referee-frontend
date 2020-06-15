/* eslint-disable no-underscore-dangle */
import { IDBPDatabase } from "idb";
import {
  IAnswer, IQuestion, ITestData, RefereeDB,
} from "./index";

export default class Question {
  private _id: string;

  private _rule: string;

  private number: number|null;

  private _question: { [lang: string]: string };

  private _answers: { [lang: string]: { [key: string]: string } };

  private _correct: string[];

  private _rules: string[];

  private _box = 1;

  private lastAsked: Date | null = null;

  private previousResults: boolean[] = [];

  private _numAsked = 0;

  private _numCorrect = 0;

  private _numWrong = 0;

  constructor(lang: string, question: IQuestion, answer: IAnswer, testData?: ITestData) {
    const [rule, number] = question.id.split(".");

    this._id = question.id;
    this._rule = rule;
    this.number = number ? parseInt(number, 10) : null;
    this._question = {
      [lang]: question.question,
    };
    this._answers = {
      [lang]: question.answers,
    };
    this._correct = answer.correct;
    this._rules = answer.rule;

    if (testData) {
      this._box = testData.box;
      this.lastAsked = testData.lastAsked;
      this.previousResults = testData.previousResults;
      this._numAsked = testData.asked;
      this._numCorrect = testData.correct;
      this._numWrong = testData.wrong;
    }
  }

  get id(): string {
    return this._id;
  }

  get rule(): string {
    return this._rule;
  }

  get question(): { [p: string]: string } {
    return this._question;
  }

  get answers(): { [p: string]: { [p: string]: string } } {
    return this._answers;
  }

  get box(): number {
    return this._box;
  }

  get correct(): string[] {
    return this._correct;
  }

  get rules(): string[] {
    return this._rules;
  }

  get numWrong(): number {
    return this._numWrong;
  }

  get numCorrect(): number {
    return this._numCorrect;
  }

  get numAsked(): number {
    return this._numAsked;
  }

  public updateData(lang: string, question: IQuestion) {
    this._question[lang] = question.question;
    this._answers[lang] = question.answers;
  }

  public checkAnswer(answers: string[]) {
    let answeredCorrect = true;
    if (answers.length !== this._correct.length) {
      answeredCorrect = false;
    } else {
      for (let i = 0; i < answers.length; i += 1) {
        if (answers[i] !== this._correct[i]) {
          answeredCorrect = false;
          break;
        }
      }
    }

    this.lastAsked = new Date();
    this._numAsked += 1;
    this.previousResults.splice(0, 0, answeredCorrect);
    if (answeredCorrect) {
      this._numCorrect += 1;
      this._box = Math.min(5, this._box + 1);
    } else {
      this._numWrong += 1;
      this._box = 1;
    }

    return {
      answeredCorrect,
      correct: this._correct,
      rules: this._rules,
    };
  }

  public async persist(db: IDBPDatabase<RefereeDB>) {
    await db.put("questions", {
      box: this._box,
      asked: this._numAsked,
      correct: this._numCorrect,
      wrong: this._numWrong,
      previousResults: this.previousResults,
      lastAsked: this.lastAsked,
    }, this.id);
  }
}
