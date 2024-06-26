import { Button } from "react-bootstrap"

export default function Header() {
    const fileUrl = "./resume/Joshua_Fentress_Resume.pdf"
    const fileName = "JoshuaCFentress.pdf"

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
    };

    
    return (
    <div id="resume" className="d-flex flex-column justify-content-center header-cont">
        <div className="d-flex flex-column justify-content-center align-items-center header-name">
            <img className="rounded-circle header-img" src="./photos/headshot_1.png" alt="professional-headshot" />
            <h1 className="rounded-2 title-name">Joshua</h1>
            <h1 className="rounded-2 title-name">Fentress</h1>
            <h4 id="header-desc">Fullstack Engineer</h4>
        </div>
        <div>
            <Button variant="primary" className="mt-3 download-res-butt" onClick={downloadResume}>Resume/CV</Button>
        </div>
    </div>
    )
}

