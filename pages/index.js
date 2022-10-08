import { ColorModeScript, Box } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Feature from "../components/Feature";
import Link from "next/link";

const Home = () => {
  return (
    <Link href="/">
      <>
        <ColorModeScript initialColorMode={'light'} />
        <Nav />
        <Box
          bgImage="/pictures/gradient1.jpg"
          bgSize="cover"
          backgroundRepeat="no-repeat"
          bgPosition="center center"
          h="100%"
          minH="100vh"
          w="100vw"
        >
          <Box
            px={["1rem", "1rem", "1rem", "5rem"]}
          // maxWidth='1920px' m='0 auto'
          >
            <Hero />
          </Box>
        </Box>
        <span className="anchor" id="Services"></span>
        <Box pb="5">
          <Services />
        </Box>
        <span className="anchor" id="Track"></span>
        <Feature />
        <span className="anchor" id="Contact"></span>
        <Footer />
      </>
    </Link>
  );
};

export default Home;
