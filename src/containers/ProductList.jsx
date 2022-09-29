import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import '@styles/ProductList.scss'
import axios from 'axios'

const API = 'http://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProducts = async () => {
			fetch(API)
				.then((response) => response.json())
				.then((data) => setProducts(data))
				.catch((err) => console.log(err))
		}
		getProducts()
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(({ id }) => (
					<ProductItem key={id} />
				))}
			</div>
		</section>
	)
}

export default ProductList
