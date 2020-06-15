export default function mapRuleToAnchor(rule: string, language: string) {
  const matchBasicRule = rule.match(/^([0-9]+:[0-9]+)/);

  if (matchBasicRule) {
    return `#${matchBasicRule[1]}`;
  }

  const mapClarification = rule.match(/^Clarification\s([0-9]+)/);
  if (mapClarification) {
    switch (mapClarification[1]) {
      case "2":
        switch (language) {
          case "de":
            return "#2.-time-out";
          case "es":
            return "#2.-tiempo-muerto";
          default:
            return "#2.-time-out";
        }
      case "3":
        switch (language) {
          case "de":
            return "#3.-team-time-out";
          case "es":
            return "#3.-tiempo-muerto-de-equipo";
          default:
            return "#3.-team-time-out";
        }
      case "4":
        switch (language) {
          case "de":
            return "#4.-passives-spiel";
          case "es":
            return "#4.-juego-pasivo";
          default:
            return "#4.-passive-play";
        }
      case "6":
        switch (language) {
          case "de":
            return "#6.-definition-einer-klaren-torgelegenheit";
          case "es":
            return "#6.--definición-de-clara-ocasión-de-gol";
          default:
            return "#6.-definition-of-clear-chance-of-scoring";
        }
      case "7":
        switch (language) {
          case "de":
            return "#7.-eingreifen-durch-den-zeitnehmer";
          case "es":
            return "#7.-intervención/interrupción-por-parte-del-cronometrador-o-del-delegado";
          default:
            return "#7.-intervention-by-the-timekeeper-or-a-delegate";
        }
      case "8":
        switch (language) {
          case "de":
            return "#8.-verletzter-spieler";
          case "es":
            return "#8.-jugador-lesionado";
          default:
            return "#8.-injured-player";
        }
      default:
        switch (language) {
          case "de":
            return "#erläuterungen-zu-den-spielregeln";
          case "es":
            return "#aclaraciones-a-las-reglas-de-juego";
          default:
            return "#clarifications-to-the-rules-of-the-game";
        }
    }
  }

  const mapGuidelines = rule.match(/^Guidelines(?:\s(.+))?|^New Guideline/);
  if (mapGuidelines) {
    switch (mapGuidelines[1]) {
      case "8:10c":
        switch (language) {
          case "de":
            return "#abstandsvergehen";
          case "es":
            return "#no-respetar-la-distancia";
          default:
            return "#not-respecting-the-distance";
        }
      case "8:10d":
        switch (language) {
          case "de":
            return "#disqualifikation-in-den-letzten-30-sekunden";
          case "es":
            return "#descalificación-durante-los-últimos-30-segundos-de-juego";
          default:
            return "#disqualification-during-the-last-30-seconds";
        }
      default:
        switch (language) {
          case "de":
            return "#guidelines-und-interpretationen";
          case "es":
            return "#directrices-e-interpretaciones";
          default:
            return "#guidelines-and-interpretations";
        }
    }
  }

  const matchSAR = rule.match(/^Substitution Area Regulations/);
  if (matchSAR) {
    switch (language) {
      case "de":
        return "#auswechselraum-reglement";
      case "es":
        return "#reglamento-relativo-a-la-zona-de-cambios";
      default:
        return "#substitution-area-regulations";
    }
  }

  const matchHandSignals = rule.match(/^Hand signals/);
  if (matchHandSignals) {
    switch (language) {
      case "de":
        return "#handzeichen";
      case "es":
        return "#gestoforma";
      default:
        return "#hand-signals";
    }
  }

  const matchEquipment = rule.match(/^Regulations on Protective Equipment and Accessories/);
  if (matchEquipment) {
    switch (language) {
      case "de":
        return "#ausrüstungsreglement";
      case "es":
        return "#reglamento-sobre-equipos-de-protección-y-accesorios";
      default:
        return "#regulations-on-protective-equipment-and-accessories";
    }
  }

  return "";
}
