import React, { useState, useRef,useEffect  } from 'react';
 import "./Services.css" 
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; //page3
import 'slick-carousel/slick/slick.css'; //page3
import 'slick-carousel/slick/slick-theme.css'; //page3
import pic1 from './image/virtual stging(2-R).jpg';  //page3
import pic2 from './image/twilight(4).jpg';  //page3
import pic3 from './image/single(4).jpg';  //page3
import pic4 from './image/removal(3).jpg';  //page3
import pic5 from './image/HDR(4).jpg';  //page3

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';  //Footer
import { TbBrandFiverr } from "react-icons/tb"; //Footer
import { FaSquareXTwitter } from "react-icons/fa6"; //footer
import { AiFillTikTok } from "react-icons/ai"; //footer
import { FaLinkedin } from "react-icons/fa6";   //footer


import { CiLocationOn } from "react-icons/ci"; //page2
import { AiOutlinePhone } from "react-icons/ai"; //page2
import { MdOutlineMail } from "react-icons/md"; //page2
import { FaBars } from 'react-icons/fa'; //page2
import { MdOutlineDesignServices, MdOutlineConstruction, MdOutlineBusinessCenter } from 'react-icons/md'; //page2
import { IoMdSettings } from 'react-icons/io'; //page2

{/* ---3--- */}

 

const picture = [
  { id: 1, src: pic1, title: "Virtual Staging", description: "Transform empty spaces into inviting homes that capture buyers imaginations.", path:'/VirtualStaging' },
  { id: 2, src: pic2, title: "Twilight & Dusk", description: "Add a warm, inviting glow to highlight your property's best features at dusk.", path:'/TwilightDusk'  },
  { id: 3, src: pic3, title: "Single", description: "Highlight unique features in dedicated property presentations." , path:'/Single'},
  { id: 4, src: pic4, title: "Removal", description: "Enhance property photos by removing clutter, highlighting key features.", path:'/Removal' },
  { id: 5, src: pic5, title: "HDR", description: "Enhance property photos with HDR, highlighting vivid colors and details." , path:'/HDR' },

];
 const Services = () => {

  useEffect(() => {
    window.scrollTo(800, 800); // This will scroll the page to the top
  }, []);

{/*--3-- */}
const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  customPaging: (i) => (
    <div className="custom-carousel-dot"></div>
  ),
  dotsClass: "slick-dots custom-carousel-dots",
};

{/*---2---*/}
{/*---I--- */}
const [currentIndex, setCurrentIndex] = useState(0);
const items = [
  {
    title: 'Home Decoration',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/home-decoration.jpg',
  },
  {
    title: 'Renovation Ideas',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/renovation-ideas.jpg',
  },
  {
    title: 'Lighting Styles',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/lighting-styles.jpg',
  },
];

const handlePrev = () => {
  const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const handleNext = () => {
  const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

  const [position, setPosition] = useState(50);
const containerRef = useRef(null);
const isDraggingRef = useRef(false);

const handleMouseDown = () => {
  isDraggingRef.current = true;
};

const handleMouseUp = () => {
  isDraggingRef.current = false;
};

const handleMouseMove = (e) => {
  if (isDraggingRef.current) {
    const containerRect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  }
};

useEffect(() => {
  window.addEventListener('mouseup', handleMouseUp);
  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

{/*---II---- */}
const [currentIndexII, setCurrentIndexII] = useState(0);
const itemsII = [
  {
    title: 'Home Decoration',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/home-decoration.jpg',
  },
  {
    title: 'Renovation Ideas',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/renovation-ideas.jpg',
  },
  {
    title: 'Lighting Styles',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/lighting-styles.jpg',
  },
];

const handlePrevII = () => {
  const newIndexII = currentIndexII === 0 ? itemsII.length - 1 : currentIndexII - 1;
  setCurrentIndexII(newIndexII);
};

const handleNextII = () => {
  const newIndexII = currentIndexII === itemsII.length - 1 ? 0 : currentIndexII + 1;
  setCurrentIndexII(newIndexII);
};

  const [positionII, setPositionII] = useState(50);
const containerRefII = useRef(null);
const isDraggingRefII = useRef(false);

const handleMouseDownII = () => {
  isDraggingRefII.current = true;
};

const handleMouseUpII = () => {
  isDraggingRefII.current = false;
};

const handleMouseMoveII = (e) => {
  if (isDraggingRefII.current) {
    const containerRectII = containerRefII.current.getBoundingClientRect();
    const newPositionII = ((e.clientX - containerRectII.left) / containerRectII.width) * 100;
    if (newPositionII >= 0 && newPositionII <= 100) {
      setPositionII(newPositionII);
    }
  }
};

useEffect(() => {
  window.addEventListener('mouseup', handleMouseUpII);
  window.addEventListener('mousemove', handleMouseMoveII);

  return () => {
    window.removeEventListener('mouseup', handleMouseUpII);
    window.removeEventListener('mousemove', handleMouseMoveII);
  };
}, []);
{/*-----III----- */}
const [currentIndexIII, setCurrentIndexIII] = useState(0);
const itemsIII = [
  {
    title: 'Home Decoration',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/home-decoration.jpg',
  },
  {
    title: 'Renovation Ideas',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/renovation-ideas.jpg',
  },
  {
    title: 'Lighting Styles',
    description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
    image: './images/lighting-styles.jpg',
  },
];

const handlePrevIII = () => {
  const newIndexIII = currentIndexIII === 0 ? itemsIII.length - 1 : currentIndexIII - 1;
  setCurrentIndexIII(newIndexIII);
};

const handleNextIII = () => {
  const newIndexIII = currentIndexIII === itemsIII.length - 1 ? 0 : currentIndexIII + 1;
  setCurrentIndexIII(newIndexIII);
};

  const [positionIII, setPositionIII] = useState(50);
const containerRefIII = useRef(null);
const isDraggingRefIII = useRef(false);

const handleMouseDownIII = () => {
  isDraggingRefIII.current = true;
};

const handleMouseUpIII = () => {
  isDraggingRefIII.current = false;
};

const handleMouseMoveIII = (e) => {
  if (isDraggingRefIII.current) {
    const containerRectIII = containerRefIII.current.getBoundingClientRect();
    const newPositionIII = ((e.clientX - containerRectIII.left) / containerRectIII.width) * 100;
    if (newPositionIII >= 0 && newPositionIII <= 100) {
      setPositionIII(newPositionIII);
    }
  }
};

useEffect(() => {
  window.addEventListener('mouseup', handleMouseUpIII);
  window.addEventListener('mousemove', handleMouseMoveIII);

  return () => {
    window.removeEventListener('mouseup', handleMouseUpIII);
    window.removeEventListener('mousemove', handleMouseMoveIII);
  };
}, []);


 {/*---IV---- */}

 const [currentIndexIV, setCurrentIndexIV] = useState(0);
 const itemsIV = [
   {
     title: 'Home Decoration',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/home-decoration.jpg',
   },
   {
     title: 'Renovation Ideas',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/renovation-ideas.jpg',
   },
   {
     title: 'Lighting Styles',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/lighting-styles.jpg',
   },
 ];

 const handlePrevIV = () => {
   const newIndexIV = currentIndexIV === 0 ? itemsIV.length - 1 : currentIndexIV - 1;
   setCurrentIndexIV(newIndexIV);
 };

 const handleNextIV = () => {
   const newIndexIV = currentIndexIV === itemsIV.length - 1 ? 0 : currentIndexIV + 1;
   setCurrentIndexIV(newIndexIV);
 };

   const [positionIV, setPositionIV] = useState(50);
 const containerRefIV = useRef(null);
 const isDraggingRefIV = useRef(false);

 const handleMouseDownIV = () => {
   isDraggingRefIV.current = true;
 };

 const handleMouseUpIV = () => {
   isDraggingRefIV.current = false;
 };

 const handleMouseMoveIV = (e) => {
   if (isDraggingRefIV.current) {
     const containerRectIV = containerRefIV.current.getBoundingClientRect();
     const newPositionIV = ((e.clientX - containerRectIV.left) / containerRectIV.width) * 100;
     if (newPositionIV >= 0 && newPositionIV <= 100) {
       setPositionIV(newPositionIV);
     }
   }
 };

 useEffect(() => {
   window.addEventListener('mouseup', handleMouseUpIV);
   window.addEventListener('mousemove', handleMouseMoveIV);

   return () => {
     window.removeEventListener('mouseup', handleMouseUpIV);
     window.removeEventListener('mousemove', handleMouseMoveIV);
   };
 }, []); 

 {/*---V--- */}
 const [currentIndexV, setCurrentIndexV] = useState(0);
 const itemsV = [
   {
     title: 'Home Decoration',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/home-decoration.jpg',
   },
   {
     title: 'Renovation Ideas',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/renovation-ideas.jpg',
   },
   {
     title: 'Lighting Styles',
     description: '2 Past more emotionless this along goodness this sad wow manatee mongos',
     image: './images/lighting-styles.jpg',
   },
 ];

 const handlePrevV = () => {
   const newIndexV = currentIndexV === 0 ? itemsV.length - 1 : currentIndexV - 1;
   setCurrentIndexV(newIndexV);
 };

 const handleNextV = () => {
   const newIndexV = currentIndexV === itemsV.length - 1 ? 0 : currentIndexV + 1;
   setCurrentIndexV(newIndexV);
 };

   const [positionV, setPositionV] = useState(50);
 const containerRefV = useRef(null);
 const isDraggingRefV = useRef(false);

 const handleMouseDownV = () => {
   isDraggingRefV.current = true;
 };

 const handleMouseUpV = () => {
   isDraggingRefV.current = false;
 };

 const handleMouseMoveV = (e) => {
   if (isDraggingRefV.current) {
     const containerRectV = containerRefV.current.getBoundingClientRect();
     const newPositionV = ((e.clientX - containerRectV.left) / containerRectV.width) * 100;
     if (newPositionV >= 0 && newPositionV <= 100) {
       setPositionV(newPositionV);
     }
   }
 };

 useEffect(() => {
   window.addEventListener('mouseup', handleMouseUpV);
   window.addEventListener('mousemove', handleMouseMoveV);

   return () => {
     window.removeEventListener('mouseup', handleMouseUpV);
     window.removeEventListener('mousemove', handleMouseMoveV);
   };
 }, []);


   return (
     <div>
        {/* Header */}
        <div className="header-container">
          {/* 
      <div className="header-item header-item-1">
      <CiLocationOn />
        <span className='item1'>Ali Villa, Sozo water park, Jallo, Lahore Pakistan</span>
      </div>
      */}
      <div className="header-item header-item-2">
      <AiOutlinePhone />
        <span className='item2'>+92 307 6238021</span>
      </div>
      <div className="header-item header-item-3">
      <MdOutlineMail />
      
      <span className='item3'> <a href="mailto:info@wolfmediadesigns.com" target="_blank" rel="noopener noreferrer">info@wolfmediadesigns.com</a></span>
        
      </div>
    </div>

{/* Navbar */}

<div className="navbar-container">
      <div className="navbar-items">
     
        <div className="navbar-item ">
        <Link to="/Header"> Home  </Link>
        </div>
        
       <div className="navbar-item"> <Link to="/AboutUs">About</Link></div>
        <div className="navbar-item active"> <Link to="/Renovation"><span>Services</span></Link></div>
        
      </div>
      <div className="navbar-logo-section">
        <img src="./images/navbar.png" alt="Logo" className="navbar-logo-icon" loading="eager" decoding="async" />
      </div>
     {/*  <div className="navbar-user-section">
        <div className="navbar-user-item">
          <img src="./images/navbar-2.svg" alt="Login Icon" className="navbar-user-icon" />
          <span>Login/Register</span>
        </div>
        <div className="navbar-user-item navbar-add-listing">
          <img src="./images/navbar-3.svg" alt="Add Listing Icon" className="navbar-user-icon" />
          <span>Add Listing</span>
        </div>
      </div>
      */}
    </div>


{/*----------1---------*/}
<div className="services-page">
      <header className="header">
        <div className="menu-icon">
          <FaBars />
          <img src="./images/Vector.png" alt="Image" loading="eager" decoding="async" />
        </div>
        <div className="header-title">
          <Link to="/services">Services</Link>
        </div>
      </header>
      <div className="service-main-image">
        <img src="./images/service-main-image.png" alt="Image" loading="eager" decoding="async" />
      </div>
      <main className="main-content">
        <h1>Your choice is our first<br/> and top-tier<br/> <span className="highlight">Priority</span></h1>
        <h2>Enhancing Images, Empowering Listings</h2>
        <p>Transform your real estate presentations with our precision-driven image <br/> editing services. We specialize in elevating the aesthetic and marketability <br/> of each property, ensuring your listings captivate and engage potential buyers.</p>
        <div className="services-list">
          {/*  
          <div className="service-item">
            <MdOutlineBusinessCenter className="service-icon" />
            <Link to="/consulting">Consulting</Link>
          </div>
          <div className="service-item">
            <MdOutlineDesignServices className="service-icon" />
            <Link to="/concept-design">Concept Design</Link>
          </div>
         
          <div className="service-item">
            <MdOutlineConstruction className="service-icon" />
            <Link to="/construction">Construction</Link>
          </div>
          <div className="service-item">
            <IoMdSettings className="service-icon" />
            <Link to="/design-development">Design Development</Link>
          </div> 
          */}
 
          <div className="service-item">
            <MdOutlineBusinessCenter className="service-icon" />
             <h3 className='service-text'>Consulting</h3> 
          </div>
          <div className="service-item">
            <MdOutlineDesignServices className="service-icon" /> 
            <h3 className='service-text'>Concept Design</h3> 
          </div> 
          <div className="service-item">
            <MdOutlineConstruction className="service-icon" /> 
            <h3 className='service-text'>Image Enhancement</h3> 
          </div>
          <div className="service-item">
            <IoMdSettings className="service-icon" /> 
            <h3 className='service-text'>Design Development</h3> 
          </div>
        </div>
      </main>
    </div>  
{/*------ 2 ------- */}

        {/* I */}
<div className="image-enhancement-container">
      <h2>Renovation</h2>
      <p>Transform your vision with our detailed renovation imaging services. We provide precise, clear visualizations that show the full potential of spaces, facilitating informed planning and effective decision-making.</p>
      <div className="bg">
      <div className="image-enhancement" ref={containerRef}>
        <div className="image-left" style={{ width: `${position}%` }}>
          <img src="./images/renovation(L-6).jpg" alt="LeftImage" loading="lazy" decoding="async" />
        </div>
        <div className="image-right" style={{ width: `${100 - position}%` }}>
          <img src="./images/renovation(R-6).jpg" alt="RightImage" loading="lazy" decoding="async" />
        </div>
        <div
          className="divider"
          style={{ left: `calc(${position}% - 4px)` }}
          onMouseDown={handleMouseDown}
        >
          <div className="handle"></div>
        </div>
      </div> 
      </div>
    </div> 
        {/* II */}
    <div className="image-enhancement-container">
       
      <div className="bg">
      <div className="image-enhancement" ref={containerRefII}>
        <div className="image-left" style={{ width: `${positionII}%` }}>
          <img src="./images/renovation(2-L).jpg" alt="LeftImage" loading="lazy" decoding="async" />
        </div>
        <div className="image-right" style={{ width: `${100 - positionII}%` }}>
          <img src="./images/renovation(2-R).jpg" alt="RightImage" loading="lazy" decoding="async" />
        </div>
        <div
          className="divider"
          style={{ left: `calc(${positionII}% - 4px)` }}
          onMouseDown={handleMouseDownII}
        >
          <div className="handle"></div>
        </div>
      </div> 
      </div>
    </div>

     {/* III */}
     <div className="image-enhancement-container">
       
       <div className="bg">
       <div className="image-enhancement" ref={containerRefIII}>
         <div className="image-left" style={{ width: `${positionIII}%` }}>
           <img src="./images/renovation(L-7).jpg" alt="LeftImage" loading="lazy" decoding="async" />
         </div>
         <div className="image-right" style={{ width: `${100 - positionIII}%` }}>
           <img src="./images/renovation(R-7).jpg" alt="RightImage" loading="lazy" decoding="async" />
         </div>
         <div
           className="divider"
           style={{ left: `calc(${positionIII}% - 4px)` }}
           onMouseDown={handleMouseDownIII}
         >
           <div className="handle"></div>
         </div>
       </div> 
       </div>
     </div>


      {/* IV */}
    <div className="image-enhancement-container">
       
       <div className="bg">
       <div className="image-enhancement" ref={containerRefIV}>
         <div className="image-left" style={{ width: `${positionIV}%` }}>
           <img src="./images/renovation(4-L).jpg" alt="LeftImage" loading="lazy" decoding="async" />
         </div>
         <div className="image-right" style={{ width: `${100 - positionIV}%` }}>
           <img src="./images/renovation(4-R).jpg" alt="RightImage" loading="lazy" decoding="async" />
         </div>
         <div
           className="divider"
           style={{ left: `calc(${positionIV}% - 4px)` }}
           onMouseDown={handleMouseDownIV}
         >
           <div className="handle"></div>
         </div>
       </div> 
       </div>
     </div>


      {/* V */}
    <div className="image-enhancement-container"> 
       <div className="bg">
       <div className="image-enhancement" ref={containerRefV}>
         <div className="image-left" style={{ width: `${positionV}%` }}>
           <img src="./images/renovation(5-L).jpg" alt="LeftImage" loading="lazy" decoding="async" />
         </div>
         <div className="image-right" style={{ width: `${100 - positionV}%` }}>
           <img src="./images/renovation(5-R).jpg" alt="RightImage" loading="lazy" decoding="async" />
         </div>
         <div
           className="divider"
           style={{ left: `calc(${positionV}% - 4px)` }}
           onMouseDown={handleMouseDownV}
         >
           <div className="handle"></div>
         </div>
       </div> 
       </div>
     </div>


    {/*------3------*/}

    <div className="custom-carousel-container">
      <Slider {...setting}>
        {picture.map((image) => (
          <div key={image.id} className="custom-carousel-image-wrapper">
             <Link to={image.path}>
            <img src={image.src} alt={`Image ${image.id}`} className="custom-carousel-image" loading="lazy" decoding="async" />
            </Link>
            <div className="custom-carousel-context">
            <Link to={image.path}>
            <h3 className='custom-carousel-heading'>{image.title}</h3>
            <p className='custom-carousel-para'>{image.description}</p>
            </Link>
            </div> 
          </div>
        ))}
      </Slider> 
    </div>


{/*----4---- */}

    <div className="service-page-container">
      <h2 className=" service-page-heading">Real comfort, visual and <br/>physical, is vital to every space</h2>
      <div className="service-image-container">
        <img src="./images/service1.png" alt="Comfort_Room" className="service-content-image" loading="lazy" decoding="async" />
      </div>
      </div>

{/*----------5------------ */}

<div className="newsletter-container newsletter"> 
      <footer className="footer foot">
        <div className="footer-section section1"> 
        <img src="./images/wolf logo.png" alt="Image" loading="lazy" decoding="async" />
          <h3>Wolf Media</h3>
          <img src="./images/real state.png" alt="Image" loading="lazy" decoding="async" />
          <p>Our experts specialize in editing real estate images to improve lighting, clarity, and overall presentation.</p>
          <div className="social-media">
          <a href="https://www.fiverr.com/hussnainali537" target="_blank" rel="noopener noreferrer"><TbBrandFiverr /></a>
            <a href="https://www.youtube.com/@WolfMedia0" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/wolfmedia0/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/WolfMedia0" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/@wolfmediaw" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <a href="https://tiktok.com/@wolfmedia_" target="_blank" rel="noopener noreferrer"><AiFillTikTok /></a>
            <a href="https://www.linkedin.com/company/wolf-media-designs" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section section2">
          <h4>Support</h4>
          <ul>
            {/*  
            <li><Link to="/Account">Account</Link></li>
            <li><Link to="/Help">Help</Link></li>
            <li><Link to="/Contact Us">Contact Us</Link></li>
            */}
            <li>Account</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section section3">
          <h4>Legal</h4>
          <ul>
            {/* 
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/Terms">Terms of Use</Link></li>
            */}
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-section section4"> 
          <h4>Social Media</h4>
          <ul>
          <li><a href="https://www.fiverr.com/hussnainali537" target="_blank" rel="noopener noreferrer">Fiverr</a></li>
            <li><a href="https://www.youtube.com/@WolfMedia0" target="_blank" rel="noopener noreferrer">Youtube</a></li>
            <li><a href="https://www.instagram.com/wolfmedia0/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/WolfMedia0" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/wolfmediaw" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://tiktok.com/@wolfmedia_" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.linkedin.com/company/wolf-media-designs" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>@2026 wolfmedia. All rights reserved</p>
          {/* 
          <p><Link to="/Terms & Conditions">Terms & Conditions</Link></p>
          */}
          <p>Terms & Condition</p>
        </div>
      </footer>
    </div> 
    </div>
  );
};


{/*---3----*/}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-carousel-next`}
      style={{ ...style, display: 'block', background: 'white', borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    >
     <div className="carousel-arrow"> 
              <img src="./images/right-arrow.png" alt="right_arrow" className='right-arrow' loading="eager" decoding="async" />
            </div>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-carousel-prev`}
      style={{ ...style, display: 'block', background: 'white',  borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    >
     <div className="carousel-arrow">
              <img src="./images/left-arrow.png" alt="left_arrow" className='left-arrow' loading="eager" decoding="async" /> 
            </div>
    </div>
  );
}; 
 export default Services
 