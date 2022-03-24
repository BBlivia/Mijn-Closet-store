import {  Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { StoreItem } from "./StoreItem"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utility/formatCurreny";

type CartItemProps ={
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if( item == null) return null 

    return(
        



    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
            src={item.imgUrl}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
            <div>
            {item.name}{" "}
            {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
                </span>
            )}
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
            </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
            variant="default"
            size="sm"
            onClick={() => removeFromCart(item.id)}
        >  <svg width="15" height="14" fill="none" stroke="#000" className="trash-svg"><path d="M11,13H4a1,1,0,0,1-1-1V3h9v9a1,1,0,0,1-1,1Z"></path><path d="M6,10V6"></path><path d="M9,10V6"></path><path d="M1,3H14"></path><path d="M9,1H6a1,1,0,0,0-.71.29A1,1,0,0,0,5,2V3h5V2a1,1,0,0,0-.29-.71A1,1,0,0,0,9,1Z"></path></svg>
           
        </Button>
        </Stack>



                 
           
            
    )

}