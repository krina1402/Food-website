import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const Storecontext = createContext(null)
const Storecontextprovider= (props)=> {
     
    const[cartItem,setCartItem] = useState({})

    const addtoCart = (itemId) => {
        if (!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        removeFromCart
    }
    return(
         <Storecontext.Provider value={contextValue}>
            {props.children}
         </Storecontext.Provider>
    )

}   
export default Storecontextprovider