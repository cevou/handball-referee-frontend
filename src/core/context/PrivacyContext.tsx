import React from "react";

export enum Decision {
  DECLINED,
  ACCEPTED
}

export enum TagType {
  CONFIG = "config",
  EVENT = "event"
}

export interface EventParameters {
  event_category?: string;
  event_label?: string;
  value?: number;
  anonymize_ip?: boolean;
}

export interface ConfigParameters {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  anonymize_ip?: boolean;
}

export interface PrivacyContextValue {
  gtag(type: TagType.EVENT, action: string, params?: EventParameters): void;
  gtag(
    type: TagType.CONFIG,
    measurementId: string,
    params?: ConfigParameters
  ): void;
  trackingId?: string;
  allowTracking?: Decision;
  allowReporting?: Decision;
  updateTrackingDecision(decision: Decision): void;
  updateReportingDecision(decision: Decision): void;
}

let PrivacyContext: React.Context<PrivacyContextValue>;

export function getPrivacyContext() {
  if (!PrivacyContext) {
    PrivacyContext = React.createContext<PrivacyContextValue>({
      gtag: () => {
        // do nothing by default
      },
      updateTrackingDecision: () => {
        // do nothing by default
      },
      updateReportingDecision: () => {
        // do nothing by default
      },
    });
  }
  return PrivacyContext;
}
