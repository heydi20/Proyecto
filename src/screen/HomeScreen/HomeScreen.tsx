import React, { useState } from 'react'
import {FlatList, Text, View } from 'react-native'
import { TitleComponent } from '../../components/TitleComponent'
import { CardProduct } from './components/CardProduct';
import { styles } from '../../theme/appTheme';
import { SECUNDARY_COLOR } from '../../commons/constans';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCar } from './components/ModalCar';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
}

export const HomeScreen = () => {

  const products: Product[] = [
    { id: 1, name: 'Vestido Gala', price: 74.70, stock: 5, pathImage: 'https://taty.com.ec/wp-content/uploads/2024/08/taty_vestido_qd5196a_1-768x1024.jpg'},
    { id: 2, name: 'Vestido Prima', price: 84.60, stock: 3, pathImage: 'https://taty.com.ec/wp-content/uploads/2024/08/taty_vestido_dce13854_1-768x1024.jpg' },
    { id: 3, name: 'Vestido Noelia', price: 109.00, stock: 2, pathImage: 'https://ivannyboutique.com/30175-large_default/vestido-noelia.jpg' },
    { id: 4, name: 'Vestido Berta', price: 142.50, stock: 0, pathImage: 'https://ivannyboutique.com/30052-large_default/vestido-berta.jpg' },
    { id: 5, name: 'Falda Verde', price: 59.00, stock: 9, pathImage: 'https://ivannyboutique.com/29424-large_default/falda-alicia-verde.jpg' },
    { id: 6, name: 'Falda Menta', price: 59.00, stock: 6, pathImage: 'https://ivannyboutique.com/27941-large_default/falda-alicia-menta.jpg' },
    { id: 7, name: 'Saco Naranja', price: 39.00, stock: 1, pathImage: 'https://ivannyboutique.com/22132-large_default/saco-laura-naranja.jpg' },
    { id: 8, name: 'Zapatos Corina', price: 58.60, stock: 3, pathImage: 'https://ivannyboutique.com/29221-large_default/zapatos-corina.jpg' },
  ];

  const [productsState, setProductsState] = useState(products);

    const [car, setCar] = useState<Car[]>([]);

    const [showModal, setShowModal] = useState<boolean>(false);

    const changeStockProduct = (idProduct: number, quantity: number) => {
        const updateStock = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        setProductsState(updateStock);
        addProduct(idProduct, quantity);
    }

    const addProduct = (idProduct: number, quantity: number) => {
        const product = productsState.find(product => product.id === idProduct);
        if (!product) {
            return;
        }
        const newProductCar: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            totalQuantity: quantity
        }
        setCar([...car, newProductCar]);
    }

    return (
        <View style={styles.containerHome}>
            <View style={styles.contentHeaderHome}>

                <TitleComponent title='Productos' />

                <View style={styles.iconCardHome}>
                    <Text style={styles.textIconCard}>{car.length}</Text>
                    <Icon
                        name='shopping-cart'
                        size={33}
                        color={SECUNDARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
                <FlatList data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()} />

            <ModalCar isVisible={showModal} car={car} setShowModal={() => setShowModal(!showModal)} />
        </View>
    )
}

