import { Container } from "react-bootstrap"

function Header() {

    return (
    <div className="d-flex flex-row header-cont cont">
        <div className="image-cont">
            <img className="header-image" src="src/assets/Photo_1.png" alt="professional-headshot"/>
        </div>
        <div className="d-flex flex-column justify-content-center header-name">
            <h1 className="rounded-2 title-name">Joshua</h1>
            <h1 className="rounded-2 title-name">Fentress</h1>
            <h5 id="header-desc">Fullstack Engineer</h5>
        </div>
    </div>
    )
}

export default Header