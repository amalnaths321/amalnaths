// Correct paths to images (make sure they are inside the `src/` directory)
import projectOneImage from "./components/images/amalcon.jpg"; 
import projectTwoImage from "./components/images/music-p.jpg"; // Ensure there are no spaces in file names

// Projects Data
export const projects = [
  {
    title: "Project One",
    subtitle: "React App",
    description: "This is the first project showcasing a simple React app.",
    link: "https://glittering-clafoutis-31d33c.netlify.app",
    image: projectOneImage,
  },
  {
    title: "Project Two",
    subtitle: "Music Player",
    description: "A music player app with a sleek design and great features.",
    link: "https://aesthetic-marshmallow-f6fb20.netlify.app",
    image: projectTwoImage,
  },
];

// Skills Data
export const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "CSS",
];

// Testimonials Data
export const testimonials = [
  {
    quote: "This is a great service!",
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    company: "Acme Corp",
  },
  {
    quote: "I highly recommend this.",
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    company: "Global Inc",
  },
];
