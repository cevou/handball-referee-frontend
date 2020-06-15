import React, { FunctionComponent } from "react";
import "./Tracking.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import usePrivacySettings from "../hooks/usePrivacySettings";
import { Decision } from "../context/PrivacyContext";

const Tracking: FunctionComponent = () => {
  const { t } = useTranslation();
  const {
    allowReporting,
    allowTracking,
    updateReportingDecision,
    updateTrackingDecision,
  } = usePrivacySettings();

  if (allowReporting !== undefined || allowTracking !== undefined) {
    return null;
  }

  const handleAccept = () => {
    updateReportingDecision(Decision.ACCEPTED);
    updateTrackingDecision(Decision.ACCEPTED);
  };

  const handleDecline = () => {
    updateReportingDecision(Decision.DECLINED);
    updateTrackingDecision(Decision.DECLINED);
  };

  return (
    <div id="tracking">
      <div id="tracking-text">
        We use cookies to analyse our traffic. We may also use features such as offline data,
        browser storage and error reporting to help improve our service. By clicking &quot;
        {t("privacy.accept")}
        &quot; you will allow the use of cookies.
        {" "}
        <Link to="/about">More information</Link>
      </div>
      <div id="tracking-buttons">
        <button id="accept-button" type="button" onClick={handleAccept}>{t("privacy.accept")}</button>
        <button id="decline-button" type="button" onClick={handleDecline}>{t("privacy.decline")}</button>
      </div>
    </div>
  );
};

export default Tracking;
