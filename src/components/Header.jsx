  import React, { useState, useEffect } from 'react';
  import { Link  } from 'react-router-dom';
  import axios from 'axios';  
  import './Header.css';
  import { CiLocationOn } from "react-icons/ci";
  import { AiOutlinePhone } from "react-icons/ai";
  import { MdOutlineMail } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; //page3
import pic1 from './image/virtual stging(1-R).jpg'; //page3
import pic2 from './image/twilight(1-R).jpg'; //page3
import pic3 from './image/single(1-R).jpg'; //page3
import pic4 from './image/renovation(1-R).jpg'; //page3
import pic5 from './image/removal(1-L).jpg'; //page3
import pic6 from './image/pic6.jpg'; //page3
import Slider from 'react-slick'; //page4
import 'slick-carousel/slick/slick.css'; //page4
import 'slick-carousel/slick/slick-theme.css'; //page4
import pics1 from './image/virtual stging(2-R).jpg'; //page4
import pics2 from './image/twilight(4).jpg'; //page4
import pics3 from './image/single(4).jpg'; //page4
import pics4 from './image/removal(3).jpg'; //page4
import pics5 from './image/HDR(4).jpg'; //page4
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; //footer
import { TbBrandFiverr } from "react-icons/tb"; //footer
import { FaSquareXTwitter } from "react-icons/fa6"; //footer
import { AiFillTikTok } from "react-icons/ai"; //footer
import { FaLinkedin } from "react-icons/fa6"; //footer

{/* page 3 */}
const images3 = [
  { src: pic1, description: 'Virtual Staging', path:'/VirtualStaging' },
  { src: pic2, description: 'Twilight & Dusk', path:'/TwilightDusk' },
  { src: pic3, description: 'Single', path:'/Single' },
  { src: pic4, description: 'Renovation', path:'/Renovation' },
  { src: pic5, description: 'Removal', path:'/Removal' },
  { src: pic6, description: 'HDR', path:'/HDR' },
];

{/* page4 */}
const images4 = [
  { id: 1, src: pics1 },
  { id: 2, src: pics2 },
  { id: 3, src: pics3 },
  { id: 4, src: pics4 },
  { id: 5, src: pics5 },
];

function Header() {
  {/* page3 */}
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slidesToShow based on window width
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, images3.length - slidesToShow);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  {/* page4 */}
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div className="custom-dot"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  {/* footer-subscribe */}
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.yourwebsite.com/subscribe', { email: subscriberEmail });
      if (response.status === 200) {
        setSubscriptionStatus('Successfully subscribed!');
      } else {
        setSubscriptionStatus('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error.response ? error.response.data : error.message);
      setSubscriptionStatus('An error occurred. Please try again.');
    }
  };


  
  return (
    <div>
      {/* Header */}
      <div className="header-container">
        <div className="header-item header-item-1">
          <CiLocationOn />
          <span className='item1'>Ali Villa, Sozo water park, Jallo, Lahore Pakistan</span>
        </div>
        <div className="header-item header-item-2">
          <AiOutlinePhone />
          <span className='item2'>+92 307 6238021</span>  
        </div>
        <div className="header-item header-item-3">
          <MdOutlineMail />
          <span className='item3'> <a href="mailto:info@wolfmediadesigns.com" target="_blank" rel="noopener noreferrer">info@wolfmediadesigns.com</a></span>
        </div>
      </div>

      {/* NavBar */}
      <div className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-item active">
            <Link to="/Header"> <span>Home</span> </Link>
          </div>
          <div className="navbar-item"> <Link to="/AboutUs">About</Link></div>
          <div className="navbar-item"> <Link to="/Services">Services</Link></div>
        </div>
        <div className="navbar-logo-section">
          <img src="./images/navbar.png" alt="Logo" className="navbar-logo-icon" />
        </div>
        <div className="navbar-user-section">
          <div className="navbar-user-item">
            <img src="./images/navbar-2.svg" alt="Login Icon" className="navbar-user-icon" />
            <span>Login/Register</span>
          </div>
          <div className="navbar-user-item navbar-add-listing">
            <img src="./images/navbar-3.svg" alt="Add Listing Icon" className="navbar-user-icon" />
            <span>Add Listing</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="hero-container">
        <img src="./images/hero.png" alt="Image" className='hero-img'/>
        <div className="hero-text text">
          <h1>Don't wait for inspiration</h1>
        </div>
        <div className="hero-subtitle-section">
          <p className='hero-para'>INTERIOR DESIGN</p>
          <button className="hero-button">Get Started</button>
        </div>
          <div className="hero-info">
          <div className="hero-info-item item-1">
            <img src="./images/hero-1.png" alt="Customer_Icon" className="hero-info-icon icon-1" />
            <span className='hero-span'>8k+ Happy <br/> Customers</span>
          </div>
          <div className="hero-info-item item-2">
            <img src="./images/hero-2.png" alt="Listing_Icon" className="hero-info-icon icon-2" />
            <span className='hero-span span-2'> 20+ New<br/> Listings Everyday!</span>
          </div>
        </div>
      </div>

      {/* Hero2 */}
      <div className="container">
        <div className="text-section">
          <div className="solutions-header">
            <img src='./images/Hero2(0).png' alt="House_icon" className="text-section-image" />
            <h2>SOLUTIONS</h2>
          </div>
          <h1>We Assist Buyers In Finding Their Dream Homes.</h1>
          <p>Our agents will guide you through the entire buying process, from property search to closing the deal.</p>
        </div>
        <div className="image-section">
          <img src='./images/Hero2.png' alt="Family_moving" className="main-image" />
        </div>
        <div className="icons-section">
          <img src='./images/Hero2(1).png' alt="House_icon" className="icon-image image1" />
          <img src='./images/Hero2(3).png' alt="House_icon" className="icon-image image2" />
          <img src='./images/Hero2(2).png' alt="4+_icon" className="icon-image image3" />
          <span className="icon">4+</span>
        </div>
      </div>

      {/* Page 3 */}
      <div className="service-carousel-container">
        <div className="service-carousel-text-section">
          <h1>Our Services</h1>
          <p>We've designed and curated pieces that are a cut above your average home goods, because when you level up your everyday objects, you elevate your daily rituals.</p>
          <Link to="/Services" className="view-all-link">VIEW ALL</Link>
        </div>
        <div className="service-carousel-section">
          <div className="carousel-images-wrapper">
            <div
              className={`carousel-images ${isTransitioning ? 'transition' : ''}`}
              onTransitionEnd={handleTransitionEnd}
              style={{ transform: `translateX(${-currentIndex * (100 / slidesToShow)}%)` }}  
            >
              {images3.slice(0, 6).map((image, index) => (
                <div key={index} className="carousel-item-container">
                  <Link to={image.path} >
                    <img
                      src={image.src}
                      alt={`Service ${index + 1}`}
                      className="carousel-image"
                       
                    />
                  </Link>
                  <p className="carousel-description">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <hr className="carousel-divider" />
            <button onClick={prevImage} className="carousel-btn btn1">
              <FaChevronLeft />
            </button>
            <button onClick={nextImage} className="carousel-btn btn2">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Page 4 */}
      <div className="carousel-container">
      <div className="project-header">
        <div className="project-logo">
          <img src='./images/logo.png' alt="Logo" />
        </div>
        <h2>The Project</h2>
        <p className="project-description">
        Together, we can transform spaces, amplify <br/> strengths, and achieve stunning success in <br/> this visionary real estate project.
        </p>
      </div>
      <Slider {...settings}>
        {images4.map((image) => (
          <div key={image.id} className="carousel-image-wrapper">
            <img src={image.src} alt={`Image ${image.id}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>

      {/* Page 5 */}
      <div className="testimonial-container">
        <div className="testimonial-text">
          <div className="heading-text">
            <h2>Our Customers Think We're The Best</h2>
          </div>
        </div>
        <div className="testimonial-card-wrapper">
          <div className="image">
            <img src="./images/Page5(1).png" alt="Image" />
          </div>
          <div className="testimonial-card">
            <div className="quote">
              <img src="./images/quote.png" alt="Image" />
            </div>
            <p className='par'>
            I can wholeheartedly recommend Wolf Media. Their team is reliable, professional and incredibly patient, always focused on understanding what the client truly needs.
            </p>
            <hr className="testimonial-divider"/>
            <div className="testimonial-author">
              <img src="./images/Page5(2).png" alt="Bunker media" className="author-image" />
              <p className='para-author'>Bunker media</p>
              <div className="star-rating">
                <span className="star-filled">★</span>
                <span className="star-filled">★</span>
                <span className="star-filled">★</span>
                <span className="star-filled">★</span>
                <span className="star-filled">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter <br/> for Design Insights</h2>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <img src="./images/home.svg" alt="Image" />
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="email-input"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
          {subscriptionStatus && <p className="subscription-message">{subscriptionStatus}</p>}
        </div>
        <footer className="footer">
          <div className="footer-section section1">
            <img src="./images/wolf logo.png" alt="Image" />
            <h3>Wolf Media</h3>
            <img src="./images/real state.png" alt="Image" />
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
             {/*                Links 
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
              {/*       Links 
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
            <li><a href="https://twitter.com/@wolfmediaw" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://tiktok.com/@wolfmedia_" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.linkedin.com/company/wolf-media-designs" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>@2026 wolfmedia. All rights reserved</p>
            {/*     Links
            <p><Link to="/Terms & Conditions">Terms & Conditions</Link></p>
            */}
            <p>Terms & Conditions</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
 {/* page4 */}
 const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <div className="arrow-right"> 
              <img src="./images/arrow-right.png" alt="right arrow" className='arrowright'/>
            </div>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
        <div className="arrow-left">
              <img src="./images/arrow-left.png" alt="left arrow" className='arrowleft'/> 
            </div>
    </div>
  );
}; 
export default Header;
