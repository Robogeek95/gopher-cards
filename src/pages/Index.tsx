import { Box, Grid, VStack, Code, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Modules from "../components/sections/Modules";

export default function Index() {
  return (
    <div>
      <NavBar />

      <Hero />

      <Modules />

      <Box mt="12" />

      <Footer />
    </div>
  );
}
