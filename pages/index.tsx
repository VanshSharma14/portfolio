import type { NextPage } from "next";
import Head from "next/head";
import "animate.css";
import Button from "../styles/button.module.css";
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

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" integrity="sha512-mq6TSOBEH8eoYFBvyDQOQf63xgTeAk7ps+MHGLWZ6Byz0BqQzrP+3GIgYL+KvLaWgpL8XgDVbIRYQeLa3Vqu6A==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" integrity="sha512-5/OHwmQzDSBS0Ous4/hlYoWLHd06/d2r7LdKZQVBXOA6PvOqWVXtdboiLTU7lQTGyVoKVTNkwi0ol4gHGlw5ww==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenLite.min.js" integrity="sha512-pvDW4tehKKsohH97164HwKwRGFpzayEFWTVbk8HuUoLIQ7Jp+WLN5XYokVuoCj2aT6dy8ihbW8SRTG1k0W4mSQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TimelineLite.min.js" integrity="sha512-tSIDeirKC6suYILHqqPuZH3s0MvD4a5vCHXhBIcdmq4gQXZ2IB3fEYA5x2f3D2p/CbSqzKEvuTEVbS5VZ2u+ew==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/CSSPlugin.min.js" integrity="sha512-ocsFo48WU8Xq6Y1Lwi7psXRAujG9E4TKNR4q1DbrKzaaxOMTEoao/a+mDoB+cYzY4lwbyxvqjkp/ZA1/MNlfsg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/BezierPlugin.min.js" integrity="sha512-plyexAULVlTExvDn2yUZFJV9F8q+53MC/GpU9dEuNGXmrrI3J8Rcffjvxg3OOBALBvF+UILPLIBEoCeF2maqTQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="../scripts/app.js"/> */}
        <script src="/static/scripts/scrollTrigger.tsx" />
        <script src="/static/scripts/scroll-invis.tsx" />
      </div>
    </div>
  );
};

export default Home;
