import React, { FunctionComponent, MouseEvent, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight, faBookOpen, faChartArea, faInfoCircle, faTasks,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.css";

interface MenuProps {
  logo: string;
}

const Menu: FunctionComponent<MenuProps> = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggleOpen = (event: MouseEvent) => {
    event.preventDefault();

    setOpen(!open);
  };

  const className = classNames({
    open,
  });
  const rotation = open ? 180 : undefined;

  return (
    <div id="menu" className={className}>
      <div id="logo">
        <img src={logo} alt={t("app.title")} />
      </div>
      <nav>
        <NavLink to="/" exact>
          <div className="icon"><FontAwesomeIcon icon={faTasks} size="lg" /></div>
          <div className="text">{t("menu.test")}</div>
        </NavLink>
        <NavLink to="/rules">
          <div className="icon"><FontAwesomeIcon icon={faBookOpen} size="lg" /></div>
          <div className="text">{t("menu.rules")}</div>
        </NavLink>
        <NavLink to="/stats">
          <div className="icon"><FontAwesomeIcon icon={faChartArea} size="lg" /></div>
          <div className="text">{t("menu.stats")}</div>
        </NavLink>
        <NavLink to="/about">
          <div className="icon"><FontAwesomeIcon icon={faInfoCircle} size="lg" /></div>
          <div className="text">{t("menu.about")}</div>
        </NavLink>
      </nav>
      <div id="menu-spacer" />
      <div id="menu-footer">
        <button type="button" onClick={handleToggleOpen} aria-pressed={open} aria-label={t("app.toggle-menu")}>
          <div className="icon">
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" rotation={rotation} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menu;
