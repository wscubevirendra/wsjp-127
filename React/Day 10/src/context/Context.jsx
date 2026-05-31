import React, { createContext, useState } from 'react'

const Store = createContext();
function Context({ children }) {
    const [cart, setCart] = useState([]);


    function addToCart(product) {
        const productExist = cart.find((item) => item.id == product.id);
        if (productExist) {
            const updateItem = cart.map((prod) => {
                return prod.id === product.id ? { ...prod, qty: prod.qty + 1 } : prod
            })

            setCart(updateItem);

        } else {
            setCart([...cart, product])
        }

    }

    function qtyHandler(id, flag) {
        const productExist = cart.find((item) => item.id == id);
        if (productExist) {
            let updateItem = null;
            if (flag === "inc") {
                updateItem = cart.map((prod) => {
                    return prod.id === id ? { ...prod, qty: prod.qty + 1 } : prod
                })

            } else {
                updateItem = cart.map((prod) => {
                    return prod.id === id ? { ...prod, qty: prod.qty - 1 } : prod
                })

            }

            setCart(updateItem);

        }

    }


    function removeHanlder(id) {
        const productExist = cart.find((item) => item.id == id);
        if (productExist) {
            const updateCart = cart.filter((item) => item.id !== id);
            setCart(updateCart)
        }
    }

    return (
        <Store.Provider value={{ cart, addToCart, qtyHandler, removeHanlder }}>
            {children}
        </Store.Provider>
    )
}


export default Context;
export { Store };