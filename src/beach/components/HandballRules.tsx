import React, { FunctionComponent } from "react";
import "./HandballRules.css";
import { useTranslation } from "react-i18next";
import RulesSelector from "../../core/components/RulesSelector";
import Item from "../../core/components/Item";
import RulesText from "../../core/components/rules/RulesText";

interface RuleItemProps {
  textKey: string;
  className?: string;
}

const RulesItem: FunctionComponent<RuleItemProps> = ({ textKey, className }) => {
  const { t } = useTranslation();
  const name = t(textKey);
  const href = name.toLowerCase().replace(/\s/g, "-").replace(/,/g, "");
  return (
    <Item code={textKey} className={className}>
      <a href={`#${href}`}>
        {name}
      </a>
    </Item>
  );
};

const HandballRules = () => (
  <div id="rules">
    <RulesSelector>
      <RulesItem textKey="rules.foreword" />
      <RulesItem textKey="rules.rules" />
      <RulesItem textKey="rules.rule.rule1" className="indent" />
      <RulesItem textKey="rules.rule.rule2" className="indent" />
      <RulesItem textKey="rules.rule.rule3" className="indent" />
      <RulesItem textKey="rules.rule.rule4" className="indent" />
      <RulesItem textKey="rules.rule.rule5" className="indent" />
      <RulesItem textKey="rules.rule.rule6" className="indent" />
      <RulesItem textKey="rules.rule.rule7" className="indent" />
      <RulesItem textKey="rules.rule.rule8" className="indent" />
      <RulesItem textKey="rules.rule.rule9" className="indent" />
      <RulesItem textKey="rules.rule.rule10" className="indent" />
      <RulesItem textKey="rules.rule.rule11" className="indent" />
      <RulesItem textKey="rules.rule.rule12" className="indent" />
      <RulesItem textKey="rules.rule.rule13" className="indent" />
      <RulesItem textKey="rules.rule.rule14" className="indent" />
      <RulesItem textKey="rules.rule.rule15" className="indent" />
      <RulesItem textKey="rules.rule.rule16" className="indent" />
      <RulesItem textKey="rules.rule.rule17" className="indent" />
      <RulesItem textKey="rules.rule.rule18" className="indent" />
      <RulesItem textKey="rules.hand-signals" />
      <RulesItem textKey="rules.clarifications" />
      <RulesItem textKey="rules.sar" />
      <RulesItem textKey="rules.athlete-uniform-regulations" />
      <RulesItem textKey="rules.sand-quality-and-lighting-regulations" />
      <RulesItem textKey="rules.glossary" />
    </RulesSelector>
    <RulesText ruleBasePath="beach/components/rules" />
  </div>
);

export default HandballRules;
