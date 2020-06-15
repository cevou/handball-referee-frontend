import React from "react";
import { useTranslation } from "react-i18next";
import useScrollToAnchor from "../../../../core/hooks/useScrollToAnchor";
import foreword from "../../../data/fr/Foreword.md";
import rule1 from "../../../data/fr/1.md";
import rule2 from "../../../data/fr/2.md";
import rule3 from "../../../data/fr/3.md";
import rule4 from "../../../data/fr/4.md";
import rule5 from "../../../data/fr/5.md";
import rule6 from "../../../data/fr/6.md";
import rule7 from "../../../data/fr/7.md";
import rule8 from "../../../data/fr/8.md";
import rule9 from "../../../data/fr/9.md";
import rule10 from "../../../data/fr/10.md";
import rule11 from "../../../data/fr/11.md";
import rule12 from "../../../data/fr/12.md";
import rule13 from "../../../data/fr/13.md";
import rule14 from "../../../data/fr/14.md";
import rule15 from "../../../data/fr/15.md";
import rule16 from "../../../data/fr/16.md";
import rule17 from "../../../data/fr/17.md";
import rule18 from "../../../data/fr/18.md";
import handSignals from "../../../data/fr/HandSignals.md";
import clarification1 from "../../../data/fr/Clarification1.md";
import clarification2 from "../../../data/fr/Clarification2.md";
import clarification3 from "../../../data/fr/Clarification3.md";
import clarification4 from "../../../data/fr/Clarification4.md";
import clarification5 from "../../../data/fr/Clarification5.md";
import clarification6 from "../../../data/fr/Clarification6.md";
import clarification7 from "../../../data/fr/Clarification7.md";
import clarification8 from "../../../data/fr/Clarification8.md";
import sar from "../../../data/fr/SAR.md";
import guidelines from "../../../data/fr/Guidelines.md";
import newGuidelines from "../../../data/fr/NewGuidelines.md";
import playingCourt from "../../../data/fr/GuidelinesPlayingCourts.md";

const French = () => {
  const { t } = useTranslation();
  useScrollToAnchor();

  const text = `
    ${foreword}
    <h1 id="règles-de-jeu">${t("rules.rules")}</h1>
    ${rule1}
    ${rule2}
    ${rule3}
    ${rule4}
    ${rule5}
    ${rule6}
    ${rule7}
    ${rule8}
    ${rule9}
    ${rule10}
    ${rule11}
    ${rule12}
    ${rule13}
    ${rule14}
    ${rule15}
    ${rule16}
    ${rule17}
    ${rule18}
    ${handSignals}
    <h1 id="interprétations-des-règles-de-jeu">${t("rules.clarifications")}</h1>
    ${clarification1}
    ${clarification2}
    ${clarification3}
    ${clarification4}
    ${clarification5}
    ${clarification6}
    ${clarification7}
    ${clarification8}
    ${sar}
    ${guidelines}
    ${newGuidelines}
    ${playingCourt}
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default French;
