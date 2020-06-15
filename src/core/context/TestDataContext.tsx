import React from "react";
import invariant from "ts-invariant";
import Question from "../model/Question";
import { ITestResponse } from "../model";

export interface TestDataContextValue {
  checkAnswers?: (options: string[]) => Promise<ITestResponse>;
  nextQuestion?: () => void;
  question?: Question;
  asked: number;
  correct: number;
  checked: string[];
  data: { [id: string]: Question };
  reveal: boolean;
}

let TestDataContext: React.Context<TestDataContextValue>;

export function getTestDataContext() {
  if (!TestDataContext) {
    TestDataContext = React.createContext<TestDataContextValue>({
      asked: 0,
      correct: 0,
      data: {},
      checked: [],
      reveal: false,
    });
  }
  return TestDataContext;
}

export function useRulesTestData(): TestDataContextValue {
  const ctx = React.useContext(getTestDataContext());
  invariant(
    ctx.checkAnswers,
    "Can't initialize test data. Please ensure that you have called `TestDataProvider` higher up in your tree.",
  );
  return ctx!;
}
