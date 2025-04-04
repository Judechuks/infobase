import {
  FaFacebook,
  FaWhatsapp,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { footerLinks } from "../../constant";
import { useGlobalContext } from "../../context/globalContext";
import "./Footer.scss";

const Footer = () => {
  // fetch footer links
  const { footerData } = useGlobalContext();

  return (
    <footer>
      <article>
        <div className="col">
          <Link to="/" className="brand">
            Infobase
          </Link>
          <p>{footerData?.data?.attributes.desc}</p>
          <form action="" className="subscribe">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Resources</h2>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Help Desk</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Contact</h2>
          <ul>
            {footerData?.data?.attributes?.contact_links.data.map(
              (item, index) => (
                <Link key={index} to={item?.attributes?.link}>
                  <li>{item?.attributes?.contact}</li>
                </Link>
              )
            )}
          </ul>
        </div>
      </article>
      <div className="divider">
        <p>All rights reserved &copy; Infobase {new Date().getFullYear()}</p>
        <div className="social-icons">
          {footerData?.data?.attributes?.social_links?.data.map(
            (item, index) => {
              if (item?.attributes?.platform == "facebook") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaFacebook />
                  </a>
                );
              }
              if (item?.attributes?.platform == "twitter") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaSquareXTwitter />
                  </a>
                );
              }
              if (item?.attributes?.platform == "instagram") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaSquareInstagram />
                  </a>
                );
              }
              if (item?.attributes?.platform == "whatsapp") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaWhatsapp />
                  </a>
                );
              }
              if (item?.attributes?.platform == "youtube") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaYoutube />
                  </a>
                );
              }
              if (item?.attributes?.platform == "tiktok") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaTiktok />
                  </a>
                );
              }
              if (item?.attributes?.platform == "linkedin") {
                return (
                  <a key={index} href={item?.attributes?.link} target="_blank">
                    <FaLinkedin />
                  </a>
                );
              }
            }
          )}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
