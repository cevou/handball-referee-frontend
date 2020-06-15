export default function mapRuleToAnchor(rule: string, language: string) {
  const matchBasicRule = rule.match(/^([0-9]+:[0-9]+)/);

  if (matchBasicRule) {
    return `#${matchBasicRule[1]}`;
  }

  const mapClarification = rule.match(/^Clarification\sNo.\s([0-9]+)/);
  if (mapClarification) {
    switch (mapClarification[1]) {
      case "1":
        switch (language) {
          default:
            return "#1.-awarding-of-points";
        }
      case "2":
        switch (language) {
          default:
            return "#2.-special-circumstances";
        }
      case "3":
        switch (language) {
          default:
            return "#3.-free-throw-execution-after-the-final-signal";
        }
      case "4":
        switch (language) {
          default:
            return "#4.-passive-play";
        }
      case "5":
        switch (language) {
          default:
            return "#5.-unsportsmanlike-conduct";
        }
      case "6":
        switch (language) {
          default:
            return "#6.-seriously-unsportsmanlike-conduct";
        }
      case "7":
        switch (language) {
          default:
            return "#7.-definition-of-a-clear-chance-of-scoring”";
        }
      case "8":
        switch (language) {
          default:
            return "#8.-interruption-by-the-timekeeper";
        }
      case "9":
        switch (language) {
          default:
            return "#9.-shoot-out-and-fast-break";
        }
      default:
        switch (language) {
          default:
            return "#clarifications-to-the-rules-of-the-game";
        }
    }
  }

  const matchSAR = rule.match(/^Substitution Area Regulations/);
  if (matchSAR) {
    switch (language) {
      default:
        return "#substitution-area-regulations";
    }
  }

  const matchHandSignals = rule.match(/^Hand signals/);
  if (matchHandSignals) {
    switch (language) {
      default:
        return "#hand-signals";
    }
  }

  return "";
}
