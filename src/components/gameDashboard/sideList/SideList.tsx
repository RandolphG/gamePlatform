import React, { useState } from "react";
import "./styles/_sideListStyles.scss";
import { motion, usePresence, AnimatePresence } from "framer-motion";
/*@ts-ignore*/
import faker from "faker";
/*@ts-ignore*/
import Color from "color";

const colorStart = Color("#FF9900");
const colorEnd = Color("#FF320D");

const name = () => `${faker.name.firstName()} ${faker.name.lastName()}`;
const initialState = [...Array(4)].map(name);

const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

const ListItem = ({ children, onClick, color }: any) => {
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    style: {
      color: color.hex(),
      position: isPresent ? "static" : "absolute",
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1, color: color.hex() },
      out: { scaleY: 0, opacity: 0, zIndex: -1, color: color.hex() },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
    } /*@ts-ignore*/,
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };

  return (
    /*@ts-ignore*/
    <motion.h2 className="h2Text" {...animations} onClick={onClick}>
      {children}
    </motion.h2>
  );
};

const SideList = () => {
  const [items, setItems] = useState(initialState);
  const [isSorted, setIsSorted] = useState(false);

  const addAtStart = () => setItems([name(), ...items]);
  const removeAtStart = () => {
    items.shift();
    setItems([...items]);
  };
  const reset = () => setItems([...initialState]);
  const removeSelf = (n: any) => {
    setItems([...items.filter((name) => name !== n)]);
  };

  const handleSort = () => setIsSorted(!isSorted);
  const sorter = (a: any, b: any) => (isSorted ? a.localeCompare(b) : 0);

  return (
    <div className="sideList">
      <div className="sideButtons">
        <div className="editButtons">
          <button className="buttonContainer" onClick={addAtStart}>
            Add
          </button>
          <button className="buttonContainer" onClick={removeAtStart}>
            Remove
          </button>
        </div>
        <button className="buttonContainer" onClick={handleSort}>
          Sort: {!isSorted ? "A → Z" : "as added"}
        </button>
        <button className="buttonContainer" onClick={reset}>
          Reset
        </button>
      </div>
      <AnimatePresence>
        {[...items].sort(sorter).map((name, i) => (
          <ListItem
            color={colorStart.mix(colorEnd, (1 / items.length) * i)}
            key={name}
            onClick={() => removeSelf(name)}
          >
            {name}
          </ListItem>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SideList;
