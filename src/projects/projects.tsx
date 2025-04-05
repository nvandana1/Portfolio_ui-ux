import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import image1 from './../assets/akshayakalpa.png';
import image2 from './../assets/organic-tea.png';
import { FaBehance,FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import React from "react";

const projects = [
  {
    title: 'Akshayakalpa',
    description: 'Redesigning the Akshayakalpa app for seamless ordering experience',
    behanceLink: 'https://www.behance.net/gallery/221262887/Case-study-of-Akshayakalpa-Organic-milk-delivery-app',
    image: image1, // replace with actual image
  },
  {
    title: 'Tiny Tale',
    description: 'A mock UI of storytelling app for kids',
    behanceLink: 'https://www.behance.net/embed/project/123456789?ilo0=1', // replace with actual link
    image: 'https://via.placeholder.com/400x300', // replace with actual image
  },
  {
    title: 'Organic tea shop landing page',
    description: 'Authentic Indian tea, Refreshing detox be',
    behanceLink: 'https://www.behance.net/gallery/222392883/Organic-tea-landing-page', // replace with actual link
    image: image2, // replace with actual image
  },
];

const Projects = () => {
  const sliderRef = React.useRef<Slider | null>(null);
  const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="custom-arrow next-arrow" onClick={onClick}><FaChevronRight></FaChevronRight></div>
  );
  
  const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="custom-arrow prev-arrow" onClick={onClick}><FaChevronLeft></FaChevronLeft></div>
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    nextArrow: <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />,
  };
  const handleMouseEnter = () => {
    sliderRef.current && sliderRef.current.slickPause();
  };

  const handleMouseLeave = () => {
    sliderRef.current && sliderRef.current.slickPlay();
  };

  return (
    <div className="carousel-container">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="carousel-slide" >
            <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.title} height='300' />
              </div>
              <div className="button-container">
                <button onClick={() => window.open(project.behanceLink, '_blank')}> <FaBehance></FaBehance>View on Behance</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;