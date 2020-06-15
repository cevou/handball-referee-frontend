/* eslint-disable no-param-reassign */
import React, {
  FunctionComponent, ReactNode, useEffect, useRef, useState,
} from "react";
import { useTranslation } from "react-i18next";
import { getTestDataContext } from "./TestDataContext";
import Loading from "../components/Loading";
import TestDataManager from "../model/TestDataManager";
import Question from "../model/Question";
import { IAnswer } from "../model";

interface TestDataProviderProps {
  children: ReactNode;
  answerData: IAnswer[];
}

const TestDataProvider: FunctionComponent<TestDataProviderProps> = ({ children, answerData }) => {
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<Question | undefined>();
  const [asked, setAsked] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState<string[]>([]);
  const [reveal, setReveal] = useState(false);
  const manager = useRef<TestDataManager>(new TestDataManager(answerData));
  const { i18n: { language } } = useTranslation();

  // Load questions
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        setQuestion(await manager.current.initialize(language));
        setAsked(manager.current.asked);
        setCorrect(manager.current.correct);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [language]);

  const nextQuestion = () => {
    setQuestion(manager.current.next());
    setReveal(false);
    setChecked([]);
  };

  const checkAnswers = async (options: string[]) => {
    const result = manager.current.checkAnswer(options);

    setAsked(manager.current.asked);
    setCorrect(manager.current.correct);
    setChecked(options);
    setReveal(true);

    return result;
  };

  const TestDataContext = getTestDataContext();
  return (
    <TestDataContext.Consumer>
      {(context = {
        asked: 0,
        correct: 0,
        data: {},
        checked: [],
        reveal: false
      }) => {
        context = {
          ...context,
          checkAnswers,
          nextQuestion,
          question,
          asked,
          correct,
          checked,
          reveal,
          data: manager.current.data,
        };

        let content;
        if (loading) {
          content = (
            <Loading />
          );
        } else {
          content = children;
        }

        return (
          <TestDataContext.Provider value={context}>
            {content}
          </TestDataContext.Provider>
        );
      }}
    </TestDataContext.Consumer>
  );
};

export default TestDataProvider;
