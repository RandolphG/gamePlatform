import marioImage from "../../../assets/_Mario.png";
import marijaImage from "../../../assets/_Marija.jpg";
import randiImage from "../../../assets/_default_profile_img.png";

export const initialState = {
  games: ["cliff", "maze", "pumpMan"],
  maxScore: 500,
  cliff: {
    id: "cliff",
    list: [
      { id: 1, name: "Randi", score: 350, rank: 17, imgUrl: randiImage },
      { id: 3, name: "Marija", score: 275, rank: 2, imgUrl: marijaImage },
      {
        id: 2,
        name: "Goran",
        score: 220,
        rank: 54,
        imgUrl:
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        name: "Sime",
        score: 200,
        rank: 67,
        imgUrl:
          "https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
      },
      {
        id: 5,
        name: "Borna",
        score: 175,
        rank: 71,
        imgUrl:
          "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
      },
    ],
  },
  maze: {
    id: "maze",
    list: [
      {
        id: 1,
        name: "Pavao",
        score: 350,
        rank: 35,
        imgUrl:
          "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 3,
        name: "Sanya",
        score: 275,
        rank: 74,
        imgUrl:
          "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Peter",
        score: 220,
        rank: 58,
        imgUrl:
          "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
      },
      {
        id: 4,
        name: "Kevin",
        score: 200,
        rank: 91,
        imgUrl:
          "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      },
      {
        id: 5,
        name: "Borna",
        score: 175,
        rank: 55,
        imgUrl:
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  pumpMan: {
    id: "pumpMan",
    list: [
      { id: 1, name: "Mario", score: 350, rank: 18, imgUrl: marioImage },
      {
        id: 3,
        name: "Kirk",
        score: 275,
        rank: 21,
        imgUrl:
          "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Lovro",
        score: 220,
        rank: 28,
        imgUrl:
          "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        name: "Simon",
        score: 200,
        rank: 77,
        imgUrl:
          "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
      },
      {
        id: 5,
        name: "Borna",
        score: 175,
        rank: 30,
        imgUrl:
          "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};
