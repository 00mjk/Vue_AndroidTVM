import NotificationComponents from "./notification-components";
import DatesHelper from "@/helpers/dates";
import hyperid from "hyperid";

export default [
  {
    id: hyperid()(),
    component: NotificationComponents.Information,
    data: {
      title: "Internetprobleme lösen",
      timestamp: new Date(),
      icon: "wlan_graphical.svg",
      description:
        "Die zur Verfügung stegende Bandbreite ist ausgereizt. Priorisieren Sie ein bestimmtes Gerät, um es störungsfrei nutzen zu können. \n\n Alternativ können Sie ihren Tarif upgraden.",
      actions: ["Geräte priorisieren", "Tarifupgrade testen"]
    },
    isSeen: false,
    isCollapsable: true,
    isCollapsed: false
  },
  {
    id: hyperid()(),
    component: NotificationComponents.Information,
    data: {
      title: "Gestnetzwerk aktivert",
      timestamp: DatesHelper.createAndSubstractMinutes(4),
      icon: "home-wifi_graphical.svg",
      description: "Das Gästenetzwerk wurde aktiviert.",
      actions: ["Ok"]
    },
    isSeen: false,
    isCollapsable: true,
    isCollapsed: false
  },
  {
    id: hyperid()(),
    component: NotificationComponents.Information,
    data: {
      title: "Firmware update für Router verfügbar",
      timestamp: DatesHelper.createAndSubstractMinutes(12),
      icon: "speedport-smart-3.svg",
      description:
        "Eine neue Router Firmware ist verfügbar. Nachdem update profitieren Sie von einer stabileren Wifi Verbindung.",
      actions: ["Installieren"]
    },
    isSeen: false,
    isCollapsable: true,
    isCollapsed: false
  },
  {
    id: hyperid()(),
    component: NotificationComponents.Information,
    data: {
      title: "Dogtracker erkannt",
      timestamp: DatesHelper.createAndSubstractMinutes(24),
      icon: "pet.svg",
      feedImage: "dog-placeholder.jpg",
      description:
        "Diesen Schreckmoment kennen viele Hundebesitzer: Beim Spazierengehen ohne Leine sieht Ihr Liebling etwas Spannendes - und ist auf einmal weg. Mit dem GPS-Hunde-Tracker Combi Protect Movetrack Tracker ist das kein Problem. Denn wo Ihr vierbeiniger Freund gerade ist, sehen Sie ganz genau in der Movetrack-App.",
      actions: ["Gerät verbinden"]
    },
    isSeen: false,
    isCollapsable: true,
    isCollapsed: false
  }
];
