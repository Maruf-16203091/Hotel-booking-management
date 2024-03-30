import React from "react";

const ViewAllLink = () => {
  return (
    <a
      href="#"
      style={{
        backgroundColor: "transparent",
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: "20px",
        fontWeight: 400,
        color: "rgb(83, 146, 249)",
        textDecorationColor: "transparent", // Initial hide underline
        transition: "text-decoration-color 0.3s ease-in-out", // Smooth transition for underline
        display: "inline-block", // Ensures hover area covers entire text
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecorationColor = "rgb(83, 146, 249)"; // Show underline on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecorationColor = "transparent"; // Hide underline when not hovering
      }}
    >
      View All
    </a>
  );
};

export default ViewAllLink;
