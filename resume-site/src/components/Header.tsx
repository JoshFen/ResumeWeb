import { Container } from "react-bootstrap"

function Header() {

    return (
    <Container className="header-cont">
        <div className="header-name">
            <h1 className="rounded-2">Joshua Fentress</h1>
        </div>
        <div>
            <h5 id="header-desc">Fullstack Developer  | Data Engineer | Enjoyer of Life</h5>
        </div>
    </Container>
    )
}

export default Header