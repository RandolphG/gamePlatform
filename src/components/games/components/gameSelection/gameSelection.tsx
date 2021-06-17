//@ts-nocheck
import { Game } from "../game";
import React from "react";
import "./styles/_renderBoards.scss";
import _rabbitCover from "../game/components/image/assets/_rabbitCover.png";
import _tiltCover from "../game/components/image/assets/_tiltCover.png";
import _cliffHanger from "../game/components/image/assets/_cliffHanger.png";

/**
 * Rendering of boards on dashboard
 * @param singleRefs
 * @param boards
 * @param draggableArea
 * @param dragging
 * @param stopDragging
 * @param startDragging
 * @returns {JSX.Element}
 * @constructor
 */
const GameSelection = ({
  singleRefs,
  draggableArea,
  dragging,
  stopDragging,
  startDragging,
}) => {
  return (
    <div className="projectDragContainer">
      <div
        className="projectDragContainer_area "
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={dragging}
        ref={draggableArea}
      >
        {singleRefs &&
          [
            { title: "_rabbit", imgUrl: _rabbitCover, url: "/rabbit" },
            { title: "_tilt", imgUrl: _tiltCover, url: "/tilt" },
            {
              title: "_cliffHanger",
              imgUrl: _cliffHanger,
              url: "/cliffhanger",
            },
          ].map((game, index) => {
            return (
              <Game game={game} ref={singleRefs} key={index} index={index} />
            );
          })}
      </div>
    </div>
  );
};

export default GameSelection;
