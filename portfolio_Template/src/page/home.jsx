import AboutMe from '../componenets/AboutMe/AboutMe ';
import HomeSection from '../componenets/HomeSection/HomeSection';
import Navbar from '../componenets/nav/NavBar';
import Services from '../componenets/Services/Services';
import Projects from '../componenets/Projects/Projects';
import TestimonialsContact from '../componenets/TestimonialsContact.jsx/TestimonialsContact ';
import Footer from '../componenets/Footer/Footer';


const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeSection/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <TestimonialsContact/>
      <Footer/>
    </>
  );
};

export default Home;