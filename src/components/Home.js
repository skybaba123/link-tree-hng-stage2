import { useState } from "react";
import React from "react";
import profileImage from "../assets/profile-img.png";
import profileImageHover from "../assets/profile-img-hover.png";
import shareIcon from "../assets/share-default.png";
import more from "../assets/more-default.png";
import github from "../assets/github.png";
import slack from "../assets/slack.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [profileHover, setProfileHover] = useState(false);

  return (
    <>
      <div className="share-more">
        <img className="share" src={shareIcon} alt="" />
        <img className="more" src={more} alt="" />
      </div>

      <section className="profile-section">
        <img
          onMouseEnter={() => setProfileHover(true)}
          onMouseLeave={() => setProfileHover(false)}
          id="profile_img"
          src={profileHover ? profileImageHover : profileImage}
          alt="profile"
        />
        <h3 id="twitter">whonosabi</h3>
        <h3 id="slack">Skybaba</h3>
      </section>

      <section className="link-section">
        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".1s",
          }}
          id="btn__twitter"
          href="/"
        >
          Twitter Link
          <sub>Twitter profile.</sub>
        </a>

        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".2s",
          }}
          id="btn__zuri"
          href="https://training.zuri.team/"
        >
          Zuri Team
          <sub>Check out the zuri home Page.</sub>
        </a>

        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".3s",
          }}
          id="books"
          href="http://books.zuri.team/"
        >
          Zuri Books
          <sub>Get books related to design and coding.</sub>
        </a>

        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".4s",
          }}
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=skybaba"
        >
          Python Books
          <sub>
            Start your journey with basic coding and progress to mastery.
          </sub>
        </a>

        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".5s",
          }}
          id="pitch"
          href="https://background.zuri.team/"
        >
          Background Check for Coders
          <sub>
            Proceed to complete a background check with our 98% accuracy
            service. Given you a chance of a getting a Job.
          </sub>
        </a>

        <a
          style={{
            animation: "fadeInDown",
            animationDuration: "1s",
            animationDelay: ".6s",
          }}
          id="book__design"
          href="https://books.zuri.team/design-rules"
        >
          Design Books
          <sub>
            Get free design guide that will helps you get started as a beginner
            on your design part.
          </sub>
        </a>

        <Link id="contact" to="/contact">
          Contact Me
        </Link>
      </section>

      <section className="social-section">
        <div>
          <img src={github} alt="github" />
          <img src={slack} alt="slack" />
        </div>
      </section>
    </>
  );
};

export default Home;
