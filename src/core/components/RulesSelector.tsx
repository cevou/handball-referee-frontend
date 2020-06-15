import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { ItemProps } from "./Item";
import "./RulesSelector.css";

interface Props {
  children: Array<ReactElement<ItemProps>>;
}

const RulesSelector: FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleTogglePopup = () => {
    setOpen(!open);
  };

  const className = classNames({
    open,
  });

  return (
    <aside id="rules-selector-wrapper">
      <div
        id="rules-selector"
        className={className}
        role="listbox"
        tabIndex={0}
        onClick={handleTogglePopup}
      >
        <div id="selector-content">
          {t("app.quicknav")}
        </div>
        <div id="selector-indicator">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul id="selector-popup">
          {children}
        </ul>
      </div>
    </aside>
  );
};

export default RulesSelector;
