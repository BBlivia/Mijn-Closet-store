import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"


export function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3"> 
        <Container>  
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
            <Button onClick={ openCart} style={{ width: "3rem", height: "3rem", position: "relative"}} variant="outline-primary" className="rounded-circle btn-outline-dark bg-white " > 
           
            <svg aria-hidden="true" focusable="false" role="presentation"  viewBox="0 0 64 64">
                
                <path stroke="black" fill="white" id="svg_4" fillOpacity="0" strokeOpacity="null"  d="M11.375 17.863h41.25v36.75h-41.25z">
                </path><path stroke="black" fill="null" fillOpacity="0" id="svg_2" d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"></path>
            </svg>
            <div className="rounded bg-white d-flex justify-content-center align-items-center " 
            style={{color: "black",
             width:"1.5rem",
            height:"1.5rem", 
            position:"absolute"}}>{cartQuantity}</div>
            
           </Button>)}
        </Container>
    </NavbarBs>
}