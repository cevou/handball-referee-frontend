import React from "react";
import { useTranslation } from "react-i18next";
import foreword from "../../../data/es/Foreword.md";
import rule1 from "../../../data/es/1.md";
import rule2 from "../../../data/es/2.md";
import rule3 from "../../../data/es/3.md";
import rule4 from "../../../data/es/4.md";
import rule5 from "../../../data/es/5.md";
import rule6 from "../../../data/es/6.md";
import rule7 from "../../../data/es/7.md";
import rule8 from "../../../data/es/8.md";
import rule9 from "../../../data/es/9.md";
import rule10 from "../../../data/es/10.md";
import rule11 from "../../../data/es/11.md";
import rule12 from "../../../data/es/12.md";
import rule13 from "../../../data/es/13.md";
import rule14 from "../../../data/es/14.md";
import rule15 from "../../../data/es/15.md";
import rule16 from "../../../data/es/16.md";
import rule17 from "../../../data/es/17.md";
import rule18 from "../../../data/es/18.md";
import handSignals from "../../../data/es/HandSignals.md";
import clarification1 from "../../../data/es/Clarification1.md";
import clarification2 from "../../../data/es/Clarification2.md";
import clarification3 from "../../../data/es/Clarification3.md";
import clarification4 from "../../../data/es/Clarification4.md";
import clarification5 from "../../../data/es/Clarification5.md";
import clarification6 from "../../../data/es/Clarification6.md";
import clarification7 from "../../../data/es/Clarification7.md";
import clarification8 from "../../../data/es/Clarification8.md";
import sar from "../../../data/es/SAR.md";
import guidelines from "../../../data/es/Guidelines.md";
import newGuidelines from "../../../data/es/NewGuidelines.md";
import playingCourt from "../../../data/es/GuidelinesPlayingCourts.md";
import useScrollToAnchor from "../../../../core/hooks/useScrollToAnchor";
import equipment from "../../../data/es/EquipmentAccessories.md";

const Spanish = () => {
  const { t } = useTranslation();
  useScrollToAnchor();

  const text = `
    ${foreword}
    <h1 id="reglas-de-juego">${t("rules.rules")}</h1>
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
    <h1 id="aclaraciones-a-las-reglas-de-juego">${t("rules.clarifications")}</h1>
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

export default Spanish;
