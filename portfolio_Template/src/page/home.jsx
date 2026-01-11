import AboutMe from '../componenets/AboutMe/AboutMe ';
import HomeSection from '../componenets/HomeSection/HomeSection';
import Navbar from '../componenets/nav/NavBar';


const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeSection/>
      <AboutMe/>
    </>
  );
};

export default Home;