 
import React, {useState, useEffect} from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';  //Footer
import { TbBrandFiverr } from "react-icons/tb"; //Footer
import { FaSquareXTwitter } from "react-icons/fa6"; //footer
import { AiFillTikTok } from "react-icons/ai"; //footer
import { FaLinkedin } from "react-icons/fa6";  //footer
 
{/*----------4---------*/}
const reviews = [
  {
    title: 'Best planning service',
    description: 'Wolf Media exceeded my expectations. Communication and quick delivery turnaround were beyond amazing. Highly recommend this company!',
    name: 'John Doe',
    position: 'Project manager of cupalo',
    image: './images/client1.png'  
  },
  {
    title: 'Flexible and reliable',
    description: 'This is my number one editor he does not miss! Every project comes out amazing! Definitely would recommend 10/10.',
    name: 'Woods Moniq',
    position: 'Freelancer',
    image: './images/client2.png'  
  },
  {
    title: 'Solution innovative',
    description: 'This company always does an amazing job and listens to any corrections I may have! I have been using him for over a year now and I plan on it for a while!',
    name: 'Denis Rara',
    position: 'Architect at BFPLU',
    image: './images/client3.png'  
  }
];
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This will scroll the page to the top
  }, []);
  {/*------2------*/}
  const features = [
    {
      title: 'Professionalism',
      description: 'We deliver the final work with great professional way.',
      
      icon: './images/icon.png'  
    },
    {
      title: 'Smooth workflow',
      description: 'We provide the most easy smoth workflow of interior design.',
     
      icon: './images/icon1.png' 
    },
    {
      title: 'Trusted Platform',
      description: 'People trust us since we openend the company',
      
      icon: './images/icon2.png' 
    },
    {
      title: 'Qualified employee',
      description: 'Our employees are the best of the field from the city',
      
      icon: './images/icon3.png' 
    }
  ];

  {/*-----------3---------*/}

  const [expanded, setExpanded] = useState({
    contemporary: false,
    minimalis: false,
    industrial: false,
  });

  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };


  {/*--------- 5 ----------*/}

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can add your email submission logic, e.g., an API call
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
  };




  return (
 
 <div>
  {/*---------- 1 -----------*/}
  <div className="about-us-section">
      <div className="hero-container">
        <div className="overlay"></div>
        <div className="about-logo">
          <img src="./images/about_logo.png" alt="Wolf Media Logo" />
        </div>
        <div className="hero-content">
          <h1>Elevating Property Visuals<br/> with Modern Precision</h1>
          <p>Enhancing property visuals, understanding the needs of buyers <br/> is the key to creating compelling listings.</p>
        </div>
        <nav className="about-navbar">
          <ul>
            <li><Link to="/Header">Home</Link></li>
            <li className='about-item active'><Link to="/AboutUs"><span>About</span></Link></li>
            <li><Link to="/Services">Services</Link></li>
          </ul>
        </nav>
      </div>
    </div>

 {/*----- 2 ------*/}

    <div className="why-choose-us-section">
      <h2>Why Choosing Us</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className={`feature-card ${index === 0 ? 'feature-card-special' : ''}`} key={index}>
            <div className="icon">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            
          </div>
        ))}
      </div>
    </div>

{/*------- 3 ---------- */}

<div className="who-we-are-section">
      <div className="content">
        <h2>Who We Are?</h2>
        <p>We are here to help you enhance and bring your property images to life, turning your vision into reality with our expert team and tailored recommendations.</p>
        <p>In the world of real estate, visual appeal is everything. Our expertise lies in transforming property photos with clean, modern enhancements that highlight the beauty of every space, using techniques like virtual staging, HDR, and twilight editing.</p>
        
        <div className="categories">
          <div className="category" onClick={() => toggleExpand('contemporary')}>
            <span>Contemporary</span>
            <span>{expanded.contemporary ? '-' : '+'}</span>
          </div>
          {expanded.contemporary && (
            <p className="description">Contemporary design uses HDR and virtual staging to highlight modern elegance.</p>
          )}
          <div className="category" onClick={() => toggleExpand('minimalis')}>
            <span>Minimalis</span>
            <span>{expanded.minimalis ? '-' : '+'}</span>
          </div>
          {expanded.minimalis && (
            <p className="description">Minimalist design embraces simplicity with single-shot HDR and clutter removal.</p>
          )}
          <div className="category" onClick={() => toggleExpand('industrial')}>
            <span>Industrial</span>
            <span>{expanded.industrial ? '-' : '+'}</span>
          </div>
          {expanded.industrial && (
            <p className="description">Industrial design blends HDR, twilight, and virtual staging for a raw, urban aesthetic.</p>
          )}
        </div>
      </div>
      <div className="about-image">
        <img src="./images/about_3.png" alt="Room Design" />
      </div>
    </div>
    

{/*------------ 4 ---------- */}


<div className="service-reviews-section">
      <h2>What they say about our services</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3>{review.title}</h3>
            <p>{review.description}</p>
            <div className="review-author">
              <img src={review.image} alt={review.name} />
              <div>
                <span className="author-name">{review.name}</span>
                <br/> 
                <span className="author-position">{review.position}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/*-------- 5 -----------*/}
    <div className="room-feel-homey-section">
      <div className="image-container">
        <img src="./images/about_5.png" alt="Room Design" />
      </div>
      <div className="content">
        <h2>Make Your Listings Stand Out</h2>
        <p>We help clients transform ordinary property photos into captivating visuals that make homes feel warm and inviting. Our services, including virtual staging and HDR enhancement, are designed by industry professionals who understand the importance of elegance, luxury, and quality in every detail. With our expert touch, you can be confident that your listings will not only attract attention but also resonate with potential buyers.</p>
        <p>Contact us if you are interested in working with us</p>
        {submitted ? (
          <p className="submission-message">Your email has been submitted!</p>
        ) : (
          <form className="email-input-container" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Insert your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">➔</button>
          </form>
        )}
      </div>
    </div>

    {/*------- 6 ----------*/}

    <div className="newsletter-container newsletter">
       
      <footer className="footer foot">
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
            <li><a href="https://twitter.com/@wolfmediaw" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://tiktok.com/@wolfmedia_" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://www.linkedin.com/company/wolf-media-designs" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>        
          </ul>
        </div>
        <div className="footer-bottom">
          <p>@2026 wolfmedia. All rights reserved</p>
          {/* 
          <p><Link to="/Terms & Conditions">Terms & Conditions</Link></p>
          */}
          <p>Terms & Conditions</p> 
        </div>
      </footer>
    </div> 
     </div> 
  );
} 
export default AboutUs;
