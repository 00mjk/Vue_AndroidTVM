import hyperid from "hyperid";
import { loremIpsum } from "lorem-ipsum";
import WidgetCategories from "@/mock/widget-categories";

const descriptionOpt = {
  wordsPerSentence: {
    max: 32,
    min: 5
  }
};

const subDescriptionOpt = {
  wordsPerSentence: {
    max: 64,
    min: 14
  }
};

export default {
  DateTime: {
    Small: {
      name: "Uhrzeit",
      category: WidgetCategories.DateTime,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "datetime-small",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  HouseholdState: {
    Medium: {
      name: "Haushalt Status",
      category: WidgetCategories.Family,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "household-state-medium",
        id: hyperid()()
      },
      w: 2,
      h: 1
    }
  },
  BabyMonitor: {
    Small: {
      name: "Babymonitor",
      category: WidgetCategories.Family,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "baby-monitor-small",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  Weather: {
    Medium: {
      category: WidgetCategories.Weather,
      name: "Wetter",
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "weather-medium",
        id: hyperid()()
      },
      w: 2,
      h: 1
    }
  },
  Speedtest: {
    Small: {
      name: "Speedtest",
      category: WidgetCategories.Internet,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "speedtest-small",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  GuestWifi: {
    Small: {
      name: "Aktivieren / Deaktivieren des Gästenetzwerks",
      category: WidgetCategories.Internet,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "guest-wifi",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  ShareGuestWifi: {
    Small: {
      name: "QR Code des Gästenetzwerks",
      category: WidgetCategories.Internet,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "share-guest-wifi",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  InternetUsage: {
    Large: {
      name: "Internetverbrauch",
      category: WidgetCategories.Internet,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "internet-usage-large",
        id: hyperid()()
      },
      w: 2,
      h: 1
    }
  },
  PetTracker: {
    Small: {
      name: "Haustier-Tracker",
      category: WidgetCategories.Family,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "pet-tracker-small",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  },
  // Disabled this widget because the branch is getting merged for the demo.
  BestFriend: {
    Small: {
      name: "Bester Freund",
      category: WidgetCategories.Family,
      description: loremIpsum(descriptionOpt),
      subDescription: loremIpsum(subDescriptionOpt),
      component: {
        name: "best-friend-small",
        id: hyperid()()
      },
      w: 1,
      h: 1
    }
  }
};
