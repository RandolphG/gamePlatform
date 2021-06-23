import React from "react";
import { useSelector } from "react-redux";
import { Nothing } from "../index";
import ListCarousel from "./listCarousel";
// import { getList } from "../../../../../listLayout";
// import { getBoards } from "../../../../../boardLayout";

const BoardSection = (boardID: any) => {
  // const lists = useSelector(getList);
  // const boards = useSelector(getBoards);

  return (
    <span className="projects_link_info_container_section">
      {/* {boards[boardID].lists.length
        ? ListCarousel({ boards, boardID, lists })
        : Nothing()} */}
    </span>
  );
};

export default BoardSection;
