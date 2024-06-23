import { Header } from "@/comps/Header";
import { ContactForm } from "@/forms/Contact.Form";
import { HomeScene } from "@/three-scenes/home.scene";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-left__scene">
            <HomeScene />
          </div>
          <div className="hero-left__image"
            style={{ backgroundImage: "url(/img/hero.png)" }}
          />
          <div className="hero-left__text">
            <h1>Expert Software Solutions Aligned with Cutting Edge IoT Development.</h1>
            <p>Driving progress through expert Software Development & IoT Engineering.</p>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right__text">
            <h2>Contact.</h2>
            <p>Whether you need software solutions, kick start a new project, or just want to discuss the industry, we are always open for a chat.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
