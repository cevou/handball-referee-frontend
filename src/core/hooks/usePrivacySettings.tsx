import { useContext } from "react";
import { getPrivacyContext } from "../context/PrivacyContext";

export default function usePrivacySettings() {
  const {
    allowReporting,
    allowTracking,
    updateReportingDecision,
    updateTrackingDecision,
  } = useContext(getPrivacyContext());

  return {
    allowReporting,
    allowTracking,
    updateReportingDecision,
    updateTrackingDecision,
  };
}
