import { useContext } from "react";
import {
  EventParameters, getPrivacyContext, ConfigParameters, TagType,
} from "../context/PrivacyContext";

export default function useAnalytics() {
  const { gtag, trackingId } = useContext(getPrivacyContext());

  const updateConfig = (params?: ConfigParameters) => {
    if (!trackingId) {
      return;
    }
    gtag(TagType.CONFIG, trackingId, params);
  };

  const trackEvent = (action: string, params?: EventParameters) => {
    gtag(TagType.EVENT, action, params);
  };

  return {
    trackEvent,
    updateConfig,
  };
}
