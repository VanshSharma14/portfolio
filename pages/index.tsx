import type { NextPage } from "next";
import Head from "next/head";
import "animate.css";
import Button from "../styles/button.module.css";
import Page from "../styles/page.module.css";
import Styles from "../styles/main.module.css";
import Image from "next/image";
import Link from "next/link";
import Body from "next";
import button from "../components/navbar";
import { MiddlewareNotFoundError } from "next/dist/shared/lib/utils";

const Home: NextPage = () => {
  const clickhandle = () => {
    window.open("https://linktr.ee/vsharma14", "_blank");
  };
  return (
    <div>
      <Head>
        <meta charSet="UTF8-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="../styles/mainStyle.css" /> */}
        <title>Vansh Sharma - Portfolio</title>
      </Head>
      <div>
        <header>
        {/* <div className={Page.basePage} role="basePage"></div> */}

          <h1>Vansh Sharma</h1>
          <div className="fadeDown">
            <button className={Button.button} id="projects" role="button">
              projects
            </button>
            <button className={Button.button} id="experience" role="button">
              experience
            </button>
            <button className={Button.button} id="skills" role="button">
              skills
            </button>
          </div>
          <div className="fadeIn scroller">
            <div className="head2">scroll down</div>
            <img src="/static/arrow1.svg" className="svg"></img>
          </div>
        </header>

        <section>
          {/* <img className="paper-plane" src={"/static/paper.png"} alt="paper-plane"/> */}
          <div className="whole-container">
            <div className="mini-container-left">
              <div className="scroll-wrapper">
                <div className="para head1 fadeRight">About Me</div>
              </div>
              <div className="scroll-wrapper">
                <p className="para fadeRight">
                  I'm currently a rising junior studying Computer Science at
                  <span
                    style={{
                      color: "lavender",
                      fontWeight: "900",
                      fontSize: "1.3",
                    }}
                  >
                    {" "}
                    Rutgers University, New Brunswick.{" "}
                  </span>
                  I have learned a lot through my experiences at school,
                  internships, countless clubs, and most importantly, personal
                  projects.
                  <br></br>
                  <br></br>
                </p>
              </div>
              <div className="scroll-wrapper">
                <div className="para fadeRight">
                  While I have exposure to numerous fields like frontend,
                  backend, game dev, vairous forms of microservices, and exiting
                  vim. I'm extremely passionate about ML & AI dev and how it can
                  impact the world in a profound way.
                  <br></br>
                  <br></br>
                </div>
              </div>
              <div className="scroll-wrapper">
                <div className="para fadeRight">
                  I'm also a very outgoing person with the constant need to
                  challenge myself to try new things and to master the ones I'm
                  already familiar with. I have explored may things like
                  attending Rubik's Cube solving competitions nationwide and
                  trying some extreme sports.
                </div>
              </div>

              <div className="scroll-wrapper">
                <div className="para fadeRight">
                  <button
                    style={{ color: "rgba(255, 255, 255, 1)" }}
                    className={Button.button}
                    id="social-media"
                    role="button"
                    onClick={clickhandle}
                  >
                    reach out!
                  </button>
                </div>
              </div>
            </div>
            <div className="mini-container-right">
              <img className="me-image" src="/static/me.png"></img>
            </div>
          </div>
        </section>

        <footer>
          <h1>wooooo!</h1>
        </footer>
        <script src="/static/scripts/scrollTrigger.tsx" />
        <script src="/static/scripts/scroll-invis.tsx" />
      </div>
    </div>
    
  );
};

export default Home;
