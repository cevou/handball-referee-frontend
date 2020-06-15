import React from "react";
import { useTranslation } from "react-i18next";
import useScrollToAnchor from "../../../../core/hooks/useScrollToAnchor";
import foreword from "../../../data/en/Foreword.md";
import rule1 from "../../../data/en/1.md";
import rule2 from "../../../data/en/2.md";
import rule3 from "../../../data/en/3.md";
import rule4 from "../../../data/en/4.md";
import rule5 from "../../../data/en/5.md";
import rule6 from "../../../data/en/6.md";
import rule7 from "../../../data/en/7.md";
import rule8 from "../../../data/en/8.md";
import rule9 from "../../../data/en/9.md";
import rule10 from "../../../data/en/10.md";
import rule11 from "../../../data/en/11.md";
import rule12 from "../../../data/en/12.md";
import rule13 from "../../../data/en/13.md";
import rule14 from "../../../data/en/14.md";
import rule15 from "../../../data/en/15.md";
import rule16 from "../../../data/en/16.md";
import rule17 from "../../../data/en/17.md";
import rule18 from "../../../data/en/18.md";
import handSignals from "../../../data/en/HandSignals.md";
import clarification1 from "../../../data/en/Clarification1.md";
import clarification2 from "../../../data/en/Clarification2.md";
import clarification3 from "../../../data/en/Clarification3.md";
import clarification4 from "../../../data/en/Clarification4.md";
import clarification5 from "../../../data/en/Clarification5.md";
import clarification6 from "../../../data/en/Clarification6.md";
import clarification7 from "../../../data/en/Clarification7.md";
import clarification8 from "../../../data/en/Clarification8.md";
import clarification9 from "../../../data/en/Clarification9.md";
import sar from "../../../data/en/SAR.md";
import uniforms from "../../../data/en/AthleteUniformRegulations.md";
import sandRegulations from "../../../data/en/SandRegulations.md";
import glossary from "../../../data/en/Glossary.md";

const English = () => {
  const { t } = useTranslation();
  useScrollToAnchor();

  const text = `
    ${foreword}
    <h1 id="rules-of-the-game">${t("rules.rules")}</h1>
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
    <h1 id="clarifications-to-the-rules-of-the-game">${t("rules.clarifications")}</h1>
    ${clarification1}
    ${clarification2}
    ${clarification3}
    ${clarification4}
    ${clarification5}
    ${clarification6}
    ${clarification7}
    ${clarification8}
    ${clarification9}
    ${sar}
    ${uniforms}
    ${sandRegulations}
    ${glossary}
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default English;
