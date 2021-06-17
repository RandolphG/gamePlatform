// @ts-nocheck
import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsAnim } from "./motionSettings";
import { Image, OptionsSvg } from "./components";
import "./styles/_gameStyles.scss";
import { Link } from "react-router-dom";

/* TODO
    Resolve scrolling issue.
*/

/**
 * Project frame
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly index?: *, readonly title?: *, readonly boardID?: *}> & React.RefAttributes<unknown>>}
 */
const Game = forwardRef(({ game, index }, ref) => {
  function setReferences(element: any) {
    if (ref && ref.current) {
      ref.current[index] = element;
    }
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current[index].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  return (
    <motion.div
      ref={(element) => setReferences(element)}
      className="projects"
      {...projectsAnim}
    >
      <Link to={game.url}>
        <span className="projects_link" key="project">
          <span className="projects_link_deleteButton">{OptionsSvg()}</span>
          {Image(game.title, game.imgUrl)}
        </span>
      </Link>
    </motion.div>
  );
});

export default Game;
