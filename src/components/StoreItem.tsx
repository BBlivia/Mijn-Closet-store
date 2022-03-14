import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utility/formatCurreny"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}
   let quantity = 1
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return <Card className="h-100">
                <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:'cover'}}></Card.Img>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2" >{name}</span>
                        <span className="ms-2 text-muted">{ formatCurrency(price)}</span>   
                    </Card.Title>
                    
                    <div className="mt-auto" >
                        {quantity === 0 ? (  <Button className="w-100 bg-black" onClick={() => increaseCartQuantity(id)}> Add to Cart! </Button>
                        ): <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}> 
                            
                                
                            <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}} >
                            <Button variant="default" onClick={() => decreaseCartQuantity(id)}> - </Button>  
                            <div>  
                            <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button variant="default" onClick={() => increaseCartQuantity(id)}> + </Button> 
                            </div>
                            <Button variant="dander" onClick={() => removeFromCart(id)}> <svg width="15" height="14" fill="none" stroke="#000" className="trash-svg"><path d="M11,13H4a1,1,0,0,1-1-1V3h9v9a1,1,0,0,1-1,1Z"></path><path d="M6,10V6"></path><path d="M9,10V6"></path><path d="M1,3H14"></path><path d="M9,1H6a1,1,0,0,0-.71.29A1,1,0,0,0,5,2V3h5V2a1,1,0,0,0-.29-.71A1,1,0,0,0,9,1Z"></path></svg></Button> 
                        </div> 
                        }
                    </div>
                </Card.Body>

         </Card>
}