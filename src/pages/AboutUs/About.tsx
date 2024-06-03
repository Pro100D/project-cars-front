import React, { useState } from "react";

const styles = {
  container: {
    fontFamily: "'Helvetica Neue', sans-serif",
    color: "#333",
    lineHeight: "1.6",
    margin: "0",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#444",
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
  },
  sectionHover: {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "    color: rgb(68, 68, 68);",
  },
  text: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  contact: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  contactInfo: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  socialMedia: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  socialMediaLink: {
    margin: "0 10px",
    color: "    color: rgb(68, 68, 68);",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease-in-out",
  },
  socialMediaLinkHover: {
    color: "#0056b3",
  },
};

export const About = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      {["Welcome to [Your Company Name]", "Our Mission", "Why Choose Us?"].map(
        (sectionTitle, index) => (
          <div
            key={index}
            style={{
              ...styles.section,
              ...(hoverIndex === index ? styles.sectionHover : {}),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <h2 style={styles.title}>{sectionTitle}</h2>
            <p style={styles.text}>
              {sectionTitle === "Welcome to [Your Company Name]" && (
                <>
                  Your trusted partner in the world of automobiles. We take
                  pride in offering a wide selection of high-quality vehicles
                  and an unparalleled level of service.
                </>
              )}
              {sectionTitle === "Our Mission" && (
                <>
                  Our mission is to help you find your dream car while ensuring
                  a transparent and enjoyable purchasing process. We strive to
                  create the most convenient conditions for our clients, making
                  every visit a pleasant experience.
                </>
              )}
              {sectionTitle === "Why Choose Us?" && (
                <>
                  <strong>Experience and Reliability:</strong> With [Number of
                  years] years in the automotive industry, we have earned a
                  reputation as a reliable and responsible dealer. Our team
                  consists of professionals ready to assist you at every step of
                  the purchasing journey.
                  <br />
                  <br />
                  <strong>Wide Selection:</strong> Our catalog features a
                  variety of makes and models, from new to pre-owned, from
                  economical to premium. We regularly update our inventory to
                  offer you the best options.
                  <br />
                  <br />
                  <strong>Quality and Assurance:</strong> All our vehicles
                  undergo thorough inspections to ensure their high quality and
                  reliability. We are confident in our cars and offer only the
                  best to our customers.
                  <br />
                  <br />
                  <strong>Personalized Approach:</strong> We value each client
                  and strive to accommodate all your wishes and needs. Our
                  consultants are always ready to provide personalized solutions
                  and help you make the right choice.
                </>
              )}
            </p>
          </div>
        )
      )}
      <div style={styles.contact}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.contactInfo}>Phone: +48793073489</p>
        <p style={styles.contactInfo}>Email: dvinzed@gmail.com</p>
        <p style={styles.contactInfo}>Address: Wspolna 13</p>
        <div style={styles.socialMedia}>
          {["Facebook", "Twitter", "Instagram"].map((platform, index) => (
            <a
              key={index}
              style={{
                ...styles.socialMediaLink,
                ...(hoverIndex === index + 3
                  ? styles.socialMediaLinkHover
                  : {}),
              }}
              href="#"
              onMouseEnter={() => handleMouseEnter(index + 3)}
              onMouseLeave={handleMouseLeave}
            >
              Follow us on {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
