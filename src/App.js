import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";
import { useState, createContext, useEffect } from "react";

export const BookContext = createContext();

export default function App() {
	const [basket, setBasket] = useState([]);

	const addToBasket = (book) => {
		// book can already exist in basket or not
		// book dısındakileri al bookun countunu bir arttır.
		setBasket(
			basket.find((basketItem) => basketItem.id === book.id)
				? basket.map((basketItem) =>
						basketItem.id === book.id
							? { ...book, count: basketItem.count + 1 }
							: book
				  )
				: [...basket, { ...book, count: 1 }]
		);
	};
	return (
		<BookContext.Provider value={{ data, addToBasket }}>
			<div className="App">
				<Route exact path="/" component={Products} />
				<Route path="/cart" component={Cart} />
			</div>
		</BookContext.Provider>
	);
}
