/* eslint-disable no-mixed-operators */
import React, { FunctionComponent } from "react";
import "./Rule.css";
import { useTranslation } from "react-i18next";
import QuestionComponent from "./Question";
import Question from "../../model/Question";

interface Props {
  id: string;
  asked: number;
  correct: number;
  questions: Question[];
}

const Rule: FunctionComponent<Props> = ({
  id, asked, correct, questions,
}) => {
  const { t } = useTranslation();

  let key;
  if (id === "SAR") {
    key = "rules.sar";
  } else {
    key = `rules.rule.rule${id}`;
  }

  const percent = asked ? Math.round(100 / asked * correct) : 0;
  let color = "bad";
  if (!asked) {
    color = "empty";
  } else if (percent >= 80) {
    color = "good";
  } else if (percent >= 50) {
    color = "ok";
  }

  const details = questions.map((question) => (
    <QuestionComponent key={question.id} question={question} />
  ));

  return (
    <div className="rule-stat-box">
      <div className="rule-stat-header">
        <h2 className="rule-stat-title">{t(key)}</h2>
        <div className={`rule-stat-stats ${color}`}>{`${correct} / ${asked} (${percent}%)`}</div>
      </div>
      <div className="rule-stat-content">
        {details}
      </div>
    </div>
  );
};

export default Rule;
