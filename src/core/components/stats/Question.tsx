/* eslint-disable no-mixed-operators */
import React, { FunctionComponent, KeyboardEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { faChevronDown, faChevronRight, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Question from "../../model/Question";
import "./Question.css";
import CheckBox from "../CheckBox";

interface Props {
  question: Question;
}

const QuestionComponent: FunctionComponent<Props> = ({ question }) => {
  const [open, setOpen] = useState(false);
  const { i18n: { language } } = useTranslation();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 32) {
      setOpen(!open);
    } else {
      return;
    }

    event.preventDefault();
  };

  const percent = question.numAsked
    ? Math.round(100 / question.numAsked * question.numCorrect)
    : 0;
  let color = "bad";
  if (question.numAsked === 0) {
    color = "empty";
  } else if (percent >= 80) {
    color = "good";
  } else if (percent >= 50) {
    color = "ok";
  }

  let icon;
  let content;
  if (open) {
    icon = faChevronDown;

    const answers = question.answers[language] || [];
    const options = Object.keys(answers).map((key) => {
      const isChecked = question.correct.includes(key);

      return (
        <React.Fragment key={key}>
          <div className="check">
            <CheckBox
              checked={isChecked}
              labelledBy={`test-option-${key}`}
              readOnly
            />
          </div>
          <div className="text">
            {question?.answers[language][key]}
          </div>
        </React.Fragment>
      );
    });

    content = (
      <div className="content">
        <div className="text">
          {question.question[language]}
        </div>
        <div className="options">
          {options}
        </div>
      </div>
    );
  } else {
    icon = faChevronRight;
  }

  return (
    <div
      key={question.id}
      className="stat-question"
      role="switch"
      aria-checked={open}
      tabIndex={0}
      onClick={toggleOpen}
      onKeyDown={handleKeyDown}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <div className="number">
        {question.id}
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faFolderOpen} size="lg" />
        <span>{question.box}</span>
      </div>
      <div className={`result ${color}`}>{`${question.numCorrect} / ${question.numAsked} (${percent}%)`}</div>
      {content}
    </div>
  );
};

export default QuestionComponent;
