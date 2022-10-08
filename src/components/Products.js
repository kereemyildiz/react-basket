import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../App";

const Products = (props) => {
	const context = useContext(BookContext);
	console.log(context);
	return (
		<div>
			<h2>
				<span>Kitap Listesi</span>
				<Link to="/cart">Sepetim</Link>
			</h2>
			{context.map((book) => {
				return (
					<div className="book" key={book.id}>
						<img src={book.image} alt={book.name} />
						<div>
							<h4>{book.name}</h4>
							<p>Yazar: {book.author}</p>
							<p>Fiyat: {book.price} &#8378; </p>
							<button>Sepete Ekle</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
