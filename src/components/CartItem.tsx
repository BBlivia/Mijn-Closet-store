import {  Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"

type CartItemProps ={
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if( item == null) return null 

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
            <img src={item.imgUrl} style={{width: "125px", height:"75 px", objectFit: "cover"}} />
            <h2>{item.name}</h2>
            <span>{item.price}</span>
            <span>{quantity}</span>
         </Stack>
    )

}