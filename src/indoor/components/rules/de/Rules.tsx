import React from "react";
import { useTranslation } from "react-i18next";
import foreword from "../../../data/de/Foreword.md";
import rule1 from "../../../data/de/1.md";
import rule2 from "../../../data/de/2.md";
import rule3 from "../../../data/de/3.md";
import rule4 from "../../../data/de/4.md";
import rule5 from "../../../data/de/5.md";
import rule6 from "../../../data/de/6.md";
import rule7 from "../../../data/de/7.md";
import rule8 from "../../../data/de/8.md";
import rule9 from "../../../data/de/9.md";
import rule10 from "../../../data/de/10.md";
import rule11 from "../../../data/de/11.md";
import rule12 from "../../../data/de/12.md";
import rule13 from "../../../data/de/13.md";
import rule14 from "../../../data/de/14.md";
import rule15 from "../../../data/de/15.md";
import rule16 from "../../../data/de/16.md";
import rule17 from "../../../data/de/17.md";
import rule18 from "../../../data/de/18.md";
import handSignals from "../../../data/de/HandSignals.md";
import clarification1 from "../../../data/de/Clarification1.md";
import clarification2 from "../../../data/de/Clarification2.md";
import clarification3 from "../../../data/de/Clarification3.md";
import clarification4 from "../../../data/de/Clarification4.md";
import clarification5 from "../../../data/de/Clarification5.md";
import clarification6 from "../../../data/de/Clarification6.md";
import clarification7 from "../../../data/de/Clarification7.md";
import clarification8 from "../../../data/de/Clarification8.md";
import sar from "../../../data/de/SAR.md";
import guidelines from "../../../data/de/Guidelines.md";
import newGuidelines from "../../../data/de/NewGuidelines.md";
import playingCourt from "../../../data/de/GuidelinesPlayingCourts.md";
import useScrollToAnchor from "../../../../core/hooks/useScrollToAnchor";
import equipment from "../../../data/de/EquipmentAccessories.md";

const German = () => {
  const { t } = useTranslation();
  useScrollToAnchor();

  const text = `
    ${foreword}
    <h1 id="spielregeln">${t("rules.rules")}</h1>
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
    <h1 id="erläuterungen-zu-den-spielregeln">${t("rules.clarifications")}</h1>
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
    ${equipment}
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default German;
