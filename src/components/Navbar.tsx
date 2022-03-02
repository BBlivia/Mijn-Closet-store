import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"


export function Navbar(){
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3"> 
        <Container>  
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            <Button style={{ width: "3rem", height: "3rem", position: "relative"}} variant="outline-primary" className="rounded-circle btn-outline-dark bg-white " > 
           
            <svg aria-hidden="true" focusable="false" role="presentation"  viewBox="0 0 64 64">
                
                <path stroke="black" fill="white" id="svg_4" fill-opacity="0" stroke-opacity="null"  d="M11.375 17.863h41.25v36.75h-41.25z">
                </path><path stroke="black" fill="null" fill-opacity="0" id="svg_2" d="M22.25 18c0-7.105 4.35-9 9.75-9s9.75 1.895 9.75 9"></path>
            </svg>
            <div className="rounded bg-white d-flex justify-content-center align-items-center " 
            style={{color: "black",
             width:"1.5rem",
            height:"1.5rem", 
            position:"absolute"}}>3</div>
            
           </Button>
        </Container>
    </NavbarBs>
}