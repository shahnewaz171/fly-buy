import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { ProductsURL } from '../API/API';
import ProductLists from './ProductLists/ProductLists';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await fetch(ProductsURL);
            const data = await response.json();
            setProducts(data);
            return (data);
        }
        loadProducts();
    }, [])

    return (
        <View>
            {
                products?.map(product =>
                    <ProductLists
                        product={product}
                        key={product.id} />
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({})