import hyperid from "hyperid";

export default {
  Information: {
    id: hyperid()(),
    name: "information"
  },
  LowBandwidth: {
    id: hyperid()(),
    name: "low-bandwidth"
  }
};
