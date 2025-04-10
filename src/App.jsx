import React, { createContext, useEffect, useState } from 'react';
import Router from './ecommerce/router';





export const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [initialLoad,setInitialLoad] = useState(true)
  console.log({cart})
  const addToCart = (product) => {
    setCart((prevCart) => {
    
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
      
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        
        return [...prevCart, { ...product, quantity: 1 }];
      }
      
    });
  
  };
  

  const removeFromCart =(productId)=>{
    setCart((prevCart)=>(prevCart.filter((item)=> item.id !==productId)) )
  }

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart"))??[])
  },[])

  useEffect(()=>{
    if(initialLoad){
      setInitialLoad(false)
      return
    }
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

 

  return (
    <ProductContext.Provider value={{  cart, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

const App = () => {
  return (
    <ProductProvider>
    <Router/>

    

     
    </ProductProvider>
  );
};

export default App;
