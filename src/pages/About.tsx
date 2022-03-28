import { Container } from "react-bootstrap";

export function About(){
    return <>
    <h1>About</h1>
    <Container>
        <p>Hey im <span className="fw-bold">Saren,</span> I Love shopping and expressing myself through fashion</p>
        <p>Over the years, I've accumilated a huge clothing collection, and have decided to sell some of my pieces to make room for more!!!! </p>
       <div className="justify-content">
        <svg width="20" height="20" fill="none">
            <path d="M14.48 0H5.52A5.525 5.525 0 000 5.52v8.96A5.525 5.525 0 005.52 20h8.96A5.526 5.526 0 0020 14.48V5.52A5.525 5.525 0 0014.48 0zm3.745 14.48a3.75 3.75 0 01-3.744 3.745H5.519a3.749 3.749 0 01-3.745-3.744V5.519A3.749 3.749 0 015.52 1.774h8.961a3.75 3.75 0 013.745 3.745v8.962z" fill="rgb(214, 133, 133)"></path>
            <path d="M10 4.847A5.16 5.16 0 004.846 10 5.16 5.16 0 0010 15.153 5.16 5.16 0 0015.153 10 5.16 5.16 0 0010 4.847zm0 8.532A3.383 3.383 0 016.62 10 3.383 3.383 0 0110 6.621 3.383 3.383 0 0113.379 10a3.383 3.383 0 01-3.38 3.379zM15.37 3.342a1.306 1.306 0 00-1.302 1.301c0 .342.14.678.383.92.24.242.577.382.919.382.343 0 .678-.14.92-.381a1.307 1.307 0 000-1.84 1.307 1.307 0 00-.92-.382z" fill="rgb(214, 133, 133)"></path>
          </svg>
          
          

        </div>
    </Container>
    </>
}