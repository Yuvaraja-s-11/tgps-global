import React, { useEffect, useState } from "react";
import "./Home.css";
import BlogCarousel from "../../Components/Blog/BlogCarousel";
import LatestNews from "../../Components/LatestNews/LatestNews";
import LogoBrands from "..//..//Components/ourbrand/LogoBrands";
import HorizontalScroll from "..//..//Components/horizontalScroll/HorizontalScroll";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../error/errorBoundary";
import HeroBgImg from "..//..//assets/images/Home/heroimg1.jpg";
import Tgps1 from "..//..//assets/images/Home/tgps-1.jpeg";
import Tgps2 from "..//..//assets/images/Home/tgps-2.jpeg";
import Tgps3 from "..//..//assets/images/Home/tgps-3.jpeg";
import SevenGoals from "..//..//assets/images/Home/sevengoals.png";
import Popup from "../../Components/popup/Popup";

const Home = () => {
  const peopleSlides = [
    {
      title: "Life at TGPS Global",
      description:
        "Sustainability here isn't a poster on the wall; it's how decisions are made and lived every day.",
      link: "/careers",
      cta: "Explore careers",
      image: Tgps1,
      alt: "Life at TGPS Global",
    },
    {
      title: "Our Ethos",
      description:
        "Values that guide decisions, not just words. Innovation isn't locked inside a department - it's a shared responsibility.",
      link: "/careers",
      cta: "See our culture",
      image: Tgps2,
      alt: "Our ethos",
    },
    {
      title: "Work, Impact & Beyond",
      description:
        "Your work here shapes more than a career; every role connects to impact for communities, partners, and the planet.",
      link: "/careers",
      cta: "View opportunities",
      image: Tgps3,
      alt: "Work, impact and beyond",
    },
  ];

  const [activePerson, setActivePerson] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePerson((prev) => (prev + 1) % peopleSlides.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [peopleSlides.length]);

  const handlePrevPerson = () =>
    setActivePerson((prev) => (prev - 1 + peopleSlides.length) % peopleSlides.length);

  const handleNextPerson = () =>
    setActivePerson((prev) => (prev + 1) % peopleSlides.length);

  const currentSlide = peopleSlides[activePerson];

  return (
    <div>
      <section id="home" className="hero-bg container-fluid p-0 m-0">
        <div
          className="row g-0 align-items-center"
          style={{
            minHeight: "70vh",
          }}
        >
          <div className="col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center p-5 text-center text-md-start">
            <h1
              className="mb-3 fw-bold"
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 6.5rem)",
                lineHeight: "1.2",
              }}
            >
              The World of <br />
              Thai Green Power Solution <br />
              Company Limited
            </h1>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <img src={HeroBgImg} alt="Hero" className="img-fluid w-100 responsive-img" />
          </div>
        </div>
      </section>

      <section className="container-fluid py-5 stats-section" style={{ backgroundColor: "#001F82" }}>
        <div className="mb-3 ps-lg-5 text-center text-md-start" data-aos="fade-right">
          <h2
            className="fw-bold mb-0"
            style={{
              color: "#fff",
              fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
            }}
          >
            We are TGPS Global, Thailand
          </h2>
        </div>

        <div className="container px-3 text-center">
          <div className="row g-0 text-white justify-content-center align-items-stretch">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="stat-card bg-primary-alt h-100">
                <h2 className="fw-bold mb-1">8+ years</h2>
                <p className="m-0">Driving Renewable Innovation <br /> Across Asia.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="stat-card bg-blue-alt h-100">
                <h2 className="fw-bold mb-1">Layer-1 Blockchain</h2>
                <p className="m-0 fw-bold">
                  For the Global Energy Sector <br />(Frequency ChainX)
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="stat-card bg-primary-alt h-100">
                <h2 className="fw-bold mb-1">Top Choice</h2>
                <p className="m-0">
                  For Governments, Corporates & <br /> Clean-Tech Partners.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="stat-card bg-blue-alt h-100">
                <h2 className="fw-bold mb-1">100+ Green-Tech</h2>
                <p className="m-0">
                  Deployments in Solar, Storage & <br />Power Management
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center" data-aos="fade-up" data-aos-duration="3000">
          <div
            className="d-inline-flex align-items-center btn-hover button"
            style={{
              borderRadius: 0,
              overflow: "hidden",
              backgroundColor: "#6EE6F3",
            }}
          >
            <Link
              to="/ourcompany"
              className="btn border-0 fw-semibold"
              style={{
                backgroundColor: "#6EE6F3",
                color: "#1E2DC7",
                fontSize: "1rem",
                borderRadius: 0,
                padding: "10px 24px",
              }}
            >
              Find out more about Our Company
            </Link>

            <a
              href="#"
              className="btn border-0"
              style={{
                backgroundColor: "#6EE6F3",
                color: "#1E2DC7",
                fontSize: "1.2rem",
                borderLeft: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 0,
                padding: "10px 16px",
                fontWeight: "bold",
              }}
            >
              &gt;
            </a>
          </div>
        </div>
      </section>

      <Popup />

      <HorizontalScroll />

      <ErrorBoundary>
        <LogoBrands />
      </ErrorBoundary>

      <div className="people-engine-section">
        <div className="container py-5">
          <div
            className="text-start mb-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="text-center" style={{ fontWeight: 700, color: "#0032A0" }}>
              People are the engine of our success
            </h1>
            <p className="mt-3 text-center" style={{ color: "#0032A0", fontSize: "1.1rem" }}>
              TGPS Global is not driven by hierarchy; it's driven by impact. Where purpose meets everyday work.
            </p>
          </div>

          <div className="people-card row g-0 align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="people-copy">
                <p className="people-eyebrow">People first</p>
                <h3 className="people-title">{currentSlide.title}</h3>
                <p className="people-description">{currentSlide.description}</p>
                <Link to={currentSlide.link} className="people-cta">
                  {currentSlide.cta}
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="people-image">
                <img src={currentSlide.image} alt={currentSlide.alt} className="img-fluid w-100" />
              </div>
            </div>
          </div>

          <div className="people-dots d-flex justify-content-center gap-2 mt-4">
            {peopleSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`people-dot ${index === activePerson ? "active" : ""}`}
                aria-label={`Show story ${index + 1}`}
                onClick={() => setActivePerson(index)}
              />
            ))}
          </div>

          <div className="people-nav d-flex justify-content-center gap-3 mt-3">
            <button type="button" className="people-nav-btn" onClick={handlePrevPerson}>
              &lt;
            </button>
            <button type="button" className="people-nav-btn" onClick={handleNextPerson}>
              &gt;
            </button>
          </div>
        </div>
      </div>

      <LatestNews />
      <BlogCarousel />

      <section>
        <div className="fullwidth-image">
          <img src={SevenGoals} alt="Innovation" className="img-fluid w-100" style={{ objectFit: "contain" }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
