import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setBooks, addBooks } from "./actions/books";
import { setCart } from "./actions/cart";

import Loader from "./components/Loader";
import TopMenu from "./components/TopMenu";
import SideBar from "./components/SideBar";

import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Items from "./components/Items";

import orderBy from "lodash/orderBy";

function App(props) {
  const { books, isReady } = props;
  const { set } = props;

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://balenokmaks.github.io/JsonForShop/items.json"
      );
      console.log(11);
      let data = await response.json();
      set(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {!isReady ? (
        <Loader />
      ) : (
        <React.Fragment>
          <TopMenu amountBooks={props.amountBooks} />
          <SideBar setSearch={props.setSearch} />
          <Items
            books={books}
            setCart={props.addToCart}
            amountBooks={props.amountBooks}
          />
        </React.Fragment>
      )}
    </Container>
  );
}

const sort = (books, sortBy, searchBy) => {
  let arrReady = books;

  switch (sortBy) {
    case "price_high":
      arrReady = orderBy(books, "price", "desc");
      break;
    case "price_low":
      arrReady = orderBy(books, "price", "asc");
      break;
    case "author":
      arrReady = orderBy(books, "author", "asc");
      break;
    default:
      arrReady = arrReady;
  }

  arrReady = arrReady.filter((element) => {
    return (
      element.name.toLowerCase().indexOf(searchBy.toLowerCase()) !== -1 ||
      element.author.toLowerCase().indexOf(searchBy.toLowerCase()) !== -1
    );
  });

  return arrReady;
};

const mapStateToProps = (state) => ({
  books: sort(state.books.books, state.books.sortBy, state.books.search),
  isReady: state.books.isReady,
  amountBooks: (id) =>
    state.cart.cartArr.reduce(
      (prev, currentEll) => prev + (currentEll.id === id ? 1 : 0),
      0
    ),
});

const mapDispatchToProps = (dispatch) => ({
  set: (books) => dispatch(setBooks(books)),
  setSearch: (search) => dispatch(addBooks(search)),
  addToCart: (book) => dispatch(setCart(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
