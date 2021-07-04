import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Author from "./components/Author";
import Books from "./components/Books";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";
import "./styles/_wizardStyles.scss";

const Wizard = () => {
  const location = useLocation();
  const [books, setBooks] = useState({ author: "", Books: [] });
  const [showModal, setShowModal] = useState(false);
  console.log(books);
  const addAuthor = (base: any) => {
    setBooks({ ...books, author: base });
  };

  const addBooks = (topping: any) => {
    let newToppings; /*@ts-ignore*/
    if (!books.Books.includes(topping)) {
      newToppings = [...books.Books, topping];
    } else {
      newToppings = books.Books.filter((item) => item !== topping);
    } /*@ts-ignore*/
    setBooks({ ...books, Books: newToppings });
  };

  return (
    <>
      {/*<Header />*/}
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.pathname}>
          <Route path="/authors">
            <Author addAuthor={addAuthor} books={books} />
          </Route>
          <Route path="/books">
            <Books addBooks={addBooks} books={books} />
          </Route>
          <Route path="/order">
            <Order books={books} setShowModal={setShowModal} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Wizard;
