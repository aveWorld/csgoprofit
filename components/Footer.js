import Link from 'next/link';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className="footer">
    <div className="footer-text">© 2020-2021 All rights reserved</div>
    <span className="icons">
      <a href="mailto:texnarb228@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} id="gmail" />
      </a>
      <a href="tg://resolve?domain=Ave_u">
        <img src="/telegram.svg" alt="telegram" id="telegram" />
      </a>
    </span>
  </footer>
);

export default Footer;
