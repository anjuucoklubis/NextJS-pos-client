import React, { useEffect, useState } from 'react';
import Layout from "@/components/layouts/Layout";
import api from '@/api';
import ProductList from '@/components/elements/ProductList/ProductList';
import Cart from '@/components/elements/Cart/Cart';
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    const response = await api.get('/products');
    const data = await response.data.payload;
    setProducts(data)
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <Layout>
      <h1>HOME</h1>
      <div className={styles.home}>
        <ProductList products={products} />
        <Cart />
      </div>
    </Layout>
  )
}
