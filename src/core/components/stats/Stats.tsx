/* eslint-disable no-param-reassign, no-mixed-operators */
import React, { FunctionComponent, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { faCheck, faPercent, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRulesTestData } from "../../context/TestDataContext";
import Question from "../../model/Question";
import "./Stats.css";
import Rule from "./Rule";

type OrderedData = {
  [rule: string]: {
    asked: number;
    correct: number;
    questions: Question[];
  };
};

const Stats: FunctionComponent = () => {
  const { asked, correct, data } = useRulesTestData();
  const { t } = useTranslation();

  const percent = asked ? Math.round(100 / asked * correct) : 0;
  const orderedData = useMemo(() => Object.values(data).reduce<OrderedData>((prev, question) => {
    const { rule, numAsked, numCorrect } = question;
    if (!prev[question.rule]) {
      prev[rule] = {
        asked: 0,
        correct: 0,
        questions: [],
      };
    }

    prev[rule] = {
      asked: prev[rule].asked + numAsked,
      correct: prev[rule].correct + numCorrect,
      questions: [...prev[rule].questions, question],
    };

    return prev;
  }, {}), [data]);

  const rules = Object.keys(orderedData).map((id: string) => {
    const ruleData = orderedData[id];
    return (
      <Rule
        key={id}
        id={id}
        asked={ruleData.asked}
        correct={ruleData.correct}
        questions={ruleData.questions}
      />
    );
  });

  return (
    <div id="stats">
      <div id="stats-overall">
        <h2>{t("stats.overall")}</h2>
        <div id="stats-asked">
          <FontAwesomeIcon icon={faQuestion} size="lg" />
          {`${asked} ${t("stats.asked")}`}
        </div>
        <div id="stats-correct">
          <FontAwesomeIcon icon={faCheck} size="lg" />
          {`${correct} ${t("stats.correct")}`}
        </div>
        <div id="stats-percent">
          <FontAwesomeIcon icon={faPercent} size="lg" />
          {`${percent}%`}
        </div>
      </div>
      {rules}
    </div>
  );
};

export default Stats;
