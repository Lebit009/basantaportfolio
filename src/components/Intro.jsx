import "../css/Intro.css";
import hisoka from "../assets/hisoka.png";

export default function Intro() {
    return (
        <section className="intro-container">
            <div className="intro-content">
                <h1 className="animated-text">Hi, I'm Roronoa Zoro</h1>
                <p className="intro-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="intro-image">
                <img src={hisoka} alt="Character Illustration" />
            </div>
        </section>
    );
}
