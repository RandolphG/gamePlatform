import React from "react";
import "./styles/_leadberStyles.scss";

const LeaderBoard = () => {
  const Images = () => (
    <div className="leaderContainer">
      <div className="leaderBoardTitle">leaderBoard</div>
      <div className="containerLeaderboard">
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className="nameItem">Kalyan</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1530577197743-7adf14294584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className="nameItem">Suchitra Tiwari</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1598641795816-a84ac9eac40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className="nameItem">Sajid Ghani</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className="nameItem">Dhriti</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1618018352910-72bdafdc82a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt=""
          />
          <span className="nameItem">Milind</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80"
            alt=""
          />
          <span className="nameItem">Srikant Tiwari</span>
        </div>
        <div className="profileImg">
          <img
            src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
            alt=""
          />
          <span className="nameItem">Major Sameer</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="leaderBoard">
      <Images />
    </div>
  );
};

export default LeaderBoard;
