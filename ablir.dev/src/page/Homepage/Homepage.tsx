import { useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import { Box, Typography, Fade } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sections = [
  {
    text: "Innovate",
    description: "Exploring new ideas that drive technology forward.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    text: "Create",
    description: "Transforming visions into digital products.",
    image:
      "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    text: "Adapt",
    description: "Embracing change and evolving with innovation.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (i) => setIndex(i),
    arrows: false, // 🔹 disable arrow buttons
    dotsClass: "slick-dots custom-dots", // custom class for styling
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "black",
      }}
    >
      {/* Slider */}
      <Box sx={{ width: "80%", maxWidth: 800, position: "relative" }}>
        <Slider {...settings}>
          {sections.map((section, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                height: "40vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={section.image}
                alt={section.text}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(50%)",
                  borderRadius: 3,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  position: "absolute",
                  bottom: 20,
                  color: "rgba(255,140,0,0.85)", // rustic orange
                  fontWeight: "bold",
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
                }}
              >
                {section.text}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Description underneath */}
      <Box sx={{ mt: 4, width: "80%", maxWidth: 700, textAlign: "center" }}>
        <Fade in timeout={800}>
          <Typography
            key={index}
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              color: "#CC5500",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // 🔹 font stack
              minHeight: "60px", // keeps layout stable
              transition: "opacity 0.8s ease",
            }}
          >
            {sections[index].description}
          </Typography>
        </Fade>
      </Box>

      {/* Custom dots CSS */}
      <style>
        {`
          .custom-dots {
            bottom: -35px; /* move below slider */
          }
          .custom-dots li button:before {
            font-size: 12px;
            color: #888; /* inactive dot color */
            opacity: 0.6;
          }
          .custom-dots li.slick-active button:before {
            color: #ff8c00; /* rustic orange active */
            opacity: 1;
            font-size: 14px; /* make active slightly bigger */
          }
        `}
      </style>
    </Box>
  );
}
