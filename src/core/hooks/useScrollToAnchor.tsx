import { useEffect } from "react";
import { useLocation } from "react-router";

function scrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elem = document.getElementById(hash.substr(1));
      if (elem) {
        elem.scrollIntoView();
      }
    }
  }, []);
}

export default scrollToAnchor;
