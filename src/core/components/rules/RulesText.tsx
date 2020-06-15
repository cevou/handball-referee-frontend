import React, { FunctionComponent } from "react";
import loadable from "@loadable/component";
import { useTranslation } from "react-i18next";
import Loading from "../Loading";
import "./RulesText.css";

interface Props {
  lang: string;
  basePath: string;
}

interface RulesTextProps {
  ruleBasePath: string;
}

const Rules = loadable<Props>((props) => import(`../../../../src/${props.basePath}/${props.lang}/Rules`), {
  fallback: <Loading />,
});

const RulesText: FunctionComponent<RulesTextProps> = ({ ruleBasePath }) => {
  const { t, i18n } = useTranslation();
  return (
    <div id="rules-text">
      <div id="rules-source">
        <div>{t("rules.edition")}</div>
        <div>{t("rules.source")}</div>
      </div>
      <Rules lang={i18n.language} basePath={ruleBasePath} />
    </div>
  );
};

export default RulesText;
