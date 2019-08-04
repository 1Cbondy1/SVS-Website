import React from 'react';

function Footer() {
  return (
    <footer className="section5" id="footer">
        <span>
            <a className="links" href="mailto:clayton.bondy@slicevisualstudio.com"><i className="fa fa-envelope"></i></a>
        </span>
        <span>
            <a className="links" href="tel:225-718-5327"><i className="fa fa-phone"></i></a>
        </span>
        {/* <span>
            <a className="links" href="https://www.linkedin.com/in/clayton-bondy-52953893/"><i className="fa fa-linkedin-square"></i></a>
        </span> */}
        <span>
            <a className="links" href="https://www.instagram.com/slicevisualstudio/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        </span>
    </footer>
  );
}

export default Footer;
