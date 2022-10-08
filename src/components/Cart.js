import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../App";
const Cart = () => {
	const context = useContext(BookContext);
	const basket = context.basket;
	const increase = context.increase;
	const decrease = context.decrease;
	return (
		<div>
			<h2>
				<Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
			</h2>

			{basket.length ? <h3>Toplam Sepet Tutarı: 19.99 &#8378;</h3> : ""}

			{basket.map((basketItem) => {
				return (
					<div className="book" key={basketItem.id}>
						<img src={basketItem.image} alt={basketItem.name} />
						<div>
							<h4>{basketItem.name}</h4>
							<p>Yazar: {basketItem.author}</p>
							<p>Fiyat: {basketItem.price} &#8378;</p>
							<p>Toplam: &#8378;19.99</p>
							<p>Sepetinizde bu kitaptan toplam {basketItem.count} adet var.</p>
							<button
								onClick={() => {
									decrease(basketItem.id);
								}}
							>
								-
							</button>
							<button>Sepetten Çıkar</button>
							<button
								onClick={() => {
									increase(basketItem.id);
								}}
							>
								+
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cart;
