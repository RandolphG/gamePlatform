import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, Home, Author, Books, Order, Modal } from "./components";
import "./styles/_wizardStyles.scss";

const Wizard = () => {
  const location = useLocation();
  const [books, setBooks] = useState({ author: "", Books: [] });
  const [showModal, setShowModal] = useState(false);
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

  const routes = [
    {
      path: "/wizard/order",
      component: <Order books={books} setShowModal={setShowModal} />,
    },
    {
      path: "/wizard/books",
      component: <Books addBooks={addBooks} books={books} />,
    },
    {
      path: "/wizard/authors",
      component: <Author addAuthor={addAuthor} books={books} />,
    },
    {
      path: "/wizard",
      component: <Home />,
    },
  ];

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.pathname}>
          {routes.map(({ path, component }, idx) => (
            <Route key={idx} path={path}>
              {component}
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default Wizard;
