const today = new Date();

// Extract the year, month, and day
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
const day = String(today.getDate()).padStart(2, "0");

// Format the date as yyyy-mm-dd
const now = `${year}-${month}-${day}`;

const gantData = {
  4500012490: {
    flag: "./french.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-12",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-12",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-22",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-01-08",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-01-08",
          endingDate: now,
          status: "",
        },
        {
          name: "ETA Date Supplier JFC1",
          startingDate: "2025-03-12",
          endingDate: now,
          status: "",
        },

        {
          name: "ETA Date Supplier JFC2",
          startingDate: "2025-01-31",
          endingDate: now,
          status: "",
        },

        {
          name: "ETA Date Supplier JFC4",
          startingDate: "2025-01-31",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013501: {
    flag: "./spain.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-19",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-19",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-04-18",
          endingDate: now,
          status: "",
        },

        {
          name: "ETA Date Supplier JFC1",
          startingDate: "2025-04-18",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-02-14",
          endingDate: now,
          status: "",
        },

        {
          name: "ETA Date Supplier JFC2",
          startingDate: "2025-02-18",
          endingDate: now,
          status: "",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-01-30",
          endingDate: now,
          status: "",
        },

        {
          name: "ETA Date Supplier JFC4",
          startingDate: "2025-01-30",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500012607: {
    flag: "./french.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-03",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-03",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2024-12-04",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta Date supplier JFC1",
          startingDate: "2025-03-03",
          endingDate: now,
          status: "Annexes not yet signed",
        },
      ],
    },
  },
  "4500012656 / 4500012657": {
    flag: "./morroco.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-08",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-24",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-01-08",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-23",
          endingDate: now,
          status: "Annexes not yet signed",
        },
      ],
    },
  },
  4500012610: {
    flag: "./turkey.jpg",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-04",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-28",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "Annexes not yet signed",
        },

        {
          name: "Eta date supplier JFC4",
          startingDate: "2025-02-26",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013344: {
    flag: "./india.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-04",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-16",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-03-27",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta Date Supplier JFC1",
          startingDate: "2025-03-27",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-03-27",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta Date Supplier JFC2",
          startingDate: "2025-02-14",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-03-27",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta Date Supplier JFC4",
          startingDate: "2025-01-31",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013003: {
    flag: "./morroco.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-29",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-29",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-06-09",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta supplier JFC1",
          startingDate: "2025-05-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-06-09",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta supplier JFC2",
          startingDate: "2025-05-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-06-25",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta supplier JFC4",
          startingDate: "2025-05-26",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013060: {
    flag: "./french.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-29",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-29",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-06-02",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta supplier JFC1",
          startingDate: "2025-05-19",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-06-02",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta supplier JFC2",
          startingDate: "2025-05-19",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-06-09",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta supplier JFC4",
          startingDate: "2025-05-19",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013028: {
    flag: "./french.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-08-13",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-22",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-03-03",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-02-22",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2025-03-03",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-06-02",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC4",
          startingDate: "2025-03-03",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  45000126717: {
    flag: "./turkey.jpg",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-07-04",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-07-04",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-01",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-01",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013350: {
    flag: "./morroco.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-08-16",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-16",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2024-11-14",
          endingDate: now,
          status: "Annexes not yet signed",
        },
        {
          name: "Eta date supplier JFC4",
          startingDate: "2024-11-15",
          endingDate: now,
          status: "Annexes not yet signed",
        },
      ],
    },
  },
  4500013347: {
    flag: "./china.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-08-16",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-09-12",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-01-15",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-25",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-01-15",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2025-01-15",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2024-11-15",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC4",
          startingDate: "2025-01-15",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  "4500007152-53/J-2023": {
    flag: "./morroco.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-05-09",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-08-24",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2024-10-10",
          endingDate: now,
          status: "Annexes not yet signed",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2024-10-30",
          endingDate: now,
          status: "Annexes not yet signed",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-01-02",
          endingDate: now,
          status: "Annexes not yet signed",
        },

        {
          name: "Eta date supplier JFC4",
          startingDate: "2024-10-30",
          endingDate: now,
          status: "Annexes not yet signed",
        },
      ],
    },
  },
  "4500013694/JESA/24": {
    flag: "./morroco.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-12",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-09-12",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2024-12-11",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-01-06",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2024-12-11",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2024-12-15",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2024-12-11",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta date supplier JFC4",
          startingDate: "2024-12-06",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  "4500013524/24": {
    flag: "./bahrein.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-10",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-09-27",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "Annexes not yet signed",
        },

        {
          name: "Eta date supplier JFC4",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  "4500013627/24": {
    flag: "./emirates.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-20",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-09-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-02-20",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC1",
          startingDate: "2025-02-17",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-02-20",
          endingDate: now,
          status: "",
        },

        {
          name: "Eta date supplier JFC2",
          startingDate: "2025-02-17",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-02-07",
          endingDate: now,
          status: "",
        },
        {
          name: "Eta date supplier JFC4",
          startingDate: "2025-02-17",
          endingDate: now,
          status: "",
        },
      ],
    },
  },

  4500013478: {
    flag: "./usa.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-24",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
  4500013749: {
    flag: "./netherlands.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-26",
          endingDate: now,
          status: "",
        },
        {
          name: "Annexes signature",
          startingDate: "2024-09-26",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2025-01-24",
          endingDate: now,
          status: "",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2025-01-24",
          endingDate: now,
          status: "",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2025-01-24",
          endingDate: now,
          status: "",
        },
      ],
    },
  },

  4500013596: {
    flag: "./french.png",
    gantData: {
      milestones: [
        {
          name: "PO signature",
          startingDate: "2024-09-06",
          endingDate: now,
          status: "",
        },
        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC1",
          startingDate: "2024-05-12",
          endingDate: now,
          status: "",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC2",
          startingDate: "2024-05-12",
          endingDate: now,
          status: "",
        },

        {
          name: "PO CONTRACTUAL DELIVERY DATE JFC4",
          startingDate: "2024-05-12",
          endingDate: now,
          status: "",
        },
      ],
    },
  },
};

export default gantData;
