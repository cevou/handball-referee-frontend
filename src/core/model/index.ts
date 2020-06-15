import { DBSchema } from "idb";

export interface IQuestion {
  id: string;
  question: string;
  answers: { [key: string]: string };
}

export interface IAnswer {
  id: string;
  correct: string[];
  rule: string[];
}

export interface ITestData {
  box: number;
  lastAsked: Date | null;
  previousResults: boolean[];
  asked: number;
  correct: number;
  wrong: number;
}

export interface ITestResponse {
  correct: string[];
  rules: string[];
  answeredCorrect?: boolean;
}

export interface RefereeDB extends DBSchema {
  questions: {
    key: string;
    value: ITestData;
    indexes: {
      pick: [number, Date];
    };
  };
}
