import React, {
  FunctionComponent, MouseEvent, KeyboardEvent, ReactElement, useState,
} from "react";
import "./LanguagePicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { ItemProps } from "./Item";
import useAnalytics from "../hooks/useAnalytics";

interface Props {
  children: Array<ReactElement<ItemProps>>;
}

const LanguagePicker: FunctionComponent<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAnalytics();

  const handleLanguageChange = async (lang: string) => {
    await i18n.changeLanguage(lang);
    trackEvent("language_change", {
      event_category: "engagement",
      event_label: lang,
    });
  };

  const handleTogglePopup = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setOpen(!open);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 32) {
      setOpen(!open);
    } else if (open) {
      if (event.keyCode === 27 || event.keyCode === 9) {
        setOpen(false);
      } else {
        return;
      }
    } else if (event.keyCode === 40) {
      setOpen(true);
    } else {
      return;
    }

    event.preventDefault();
  };

  let content = null;
  const currentLanguage = i18n.language;
  const items = React.Children.map(children, (item: ReactElement<ItemProps>) => {
    const isSelected = item.props.code === currentLanguage;
    if (isSelected) {
      content = item.props.children;
    }

    return React.cloneElement(item, {
      selected: isSelected,
      onClick: () => handleLanguageChange(item.props.code),
    });
  });

  const className = classNames({
    open,
  });

  return (
    <div
      id="language-picker"
      className={className}
      role="listbox"
      aria-label={t("app.language")}
      tabIndex={0}
      onClick={handleTogglePopup}
      onKeyDown={handleKeyDown}
    >
      <div id="picker-content">
        {content}
      </div>
      <div id="picker-indicator">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <ul id="picker-popup">
        {items}
      </ul>
    </div>
  );
};

export default LanguagePicker;
