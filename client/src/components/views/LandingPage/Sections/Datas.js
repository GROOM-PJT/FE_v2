const continents = [
  {
    _id: 1,
    name: "인사동",
  },
  {
    _id: 2,
    name: "신림동",
  },
  {
    _id: 3,
    name: "반포동",
  },
  {
    _id: 4,
    name: "서초동",
  },
  {
    _id: 5,
    name: "역삼동",
  },
  {
    _id: 6,
    name: "방배동",
  },
  {
    _id: 7,
    name: "한남동",
  },
  {
    _id: 8,
    name: "후암동",
  },
];

const price = [
  {
    _id: 0,
    name: "Any",
    array: [],
  },
  {
    _id: 1,
    name: "$0 to $199",
    array: [0, 199],
  },
  {
    _id: 2,
    name: "$200 to $249",
    array: [200, 249],
  },
  {
    _id: 3,
    name: "$250 to $279",
    array: [250, 279],
  },
  {
    _id: 4,
    name: "$280 to 299",
    array: [280, 299],
  },
  {
    _id: 5,
    name: "More than $300",
    array: [300, 1500000],
  },
];

export { continents, price };
