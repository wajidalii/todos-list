import React from "react";

function Footer() {
  const styles = {
    position: "absolute",
    bottom: "0px",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3 footer" style={styles}>
      <p className="text-center">
        copyright&copy; <a href="https://wajidali.netlify.app"> Wajid Ali</a>
      </p>
    </footer>
  );
}

export default Footer;
