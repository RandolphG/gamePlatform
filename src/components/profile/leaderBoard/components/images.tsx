import React from "react";

const leaderAccounts = [
  {
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Kalyan",
  },
  {
    src: "https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    name: "Suchitra Tiwari",
  },
  {
    src: "https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80",
    name: "Sajid Ghani",
  },
  {
    src: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Dhriti",
  },
  {
    src: "https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Milind",
  },
  {
    src: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80",
    name: "Srikant Tiwari",
  },
  {
    src: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    name: "Major Sameer",
  },
];

const Images = ({ leaderAccounts }: any) => (
  <div className="leaderContainer">
    <div className="leaderBoardTitle">leaderBoard</div>
    <div className="containerLeaderboard">
      {leaderAccounts &&
        leaderAccounts.map(({ src, name }: any, idx: number) => (
          <div key={idx} className="profileImg">
            <img src={src} alt="" />
            <span className="nameItem">{name}</span>
          </div>
        ))}
    </div>
  </div>
);

export default Images;
