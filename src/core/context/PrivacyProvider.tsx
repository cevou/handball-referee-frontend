import React, { FunctionComponent, useEffect, useState } from "react";
import * as Sentry from "@sentry/browser";
import { Decision, getPrivacyContext } from "./PrivacyContext";

declare global {
  interface Window { dataLayer: any[] }
}

window.dataLayer = window.dataLayer || [];

// eslint-disable-next-line prefer-rest-params,no-unused-vars
function gtag(...args: any[]) { window.dataLayer.push(arguments); }

interface Props {
  trackingId?: string;
  sentryDsn?: string;
  environment?: string;
}

const TRACKING_KEY = "allowTracking";
const ERROR_REPORTING_KEY = "allowErrorReporting";

function toDecision(key: string): Decision|undefined {
  const currentValue = localStorage.getItem(key);
  if (currentValue) {
    return parseInt(currentValue, 10);
  }
  return undefined;
}

function fromDecision(key: string, decision: Decision) {
  localStorage.setItem(key, `${decision}`);
}

const PrivacyProvider: FunctionComponent<Props> = ({ trackingId, children }) => {
  const PrivacyContext = getPrivacyContext();
  const [allowTracking, setAllowTracking] = useState<Decision|undefined>(toDecision(TRACKING_KEY));
  const [allowReporting, setAllowReporting] = useState<Decision|undefined>(
    toDecision(ERROR_REPORTING_KEY),
  );
  const [trackingCodeLoaded, setTrackingCodeLoaded] = useState(false);

  useEffect(() => {
    if (!allowTracking || trackingCodeLoaded) {
      return;
    }

    // Google Analytics
    gtag("js", new Date());
    gtag("config", trackingId, {
      anonymize_ip: true,
      page_path: window.location.pathname,
    });

    const gascript = document.createElement("script");
    gascript.async = true;
    gascript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`;

    document.getElementsByTagName("head")[0].append(gascript);

    setTrackingCodeLoaded(true);
  }, [allowTracking, trackingCodeLoaded]);

  useEffect(() => {
    if (!allowReporting) {
      return;
    }

    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      environment: process.env.SENTRY_ENV,
    });
  }, [allowReporting]);

  const updateTrackingDecision = (decision: Decision) => {
    setAllowTracking(decision);
    fromDecision(TRACKING_KEY, decision);
    if (decision === Decision.DECLINED) {
      window.location.reload();
    }
  };

  const updateReportingDecision = (decision: Decision) => {
    setAllowReporting(decision);
    fromDecision(ERROR_REPORTING_KEY, decision);
  };

  return (
    <PrivacyContext.Consumer>
      {(context: any = {}) => {
        // eslint-disable-next-line no-param-reassign
        context = {
          gtag,
          trackingId,
          allowTracking,
          allowReporting,
          updateTrackingDecision,
          updateReportingDecision,
        };
        return (
          <PrivacyContext.Provider value={context}>
            {children}
          </PrivacyContext.Provider>
        );
      }}
    </PrivacyContext.Consumer>
  );
};

export default PrivacyProvider;
