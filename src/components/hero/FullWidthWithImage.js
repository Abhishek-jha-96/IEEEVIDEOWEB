import React from "react";
import tw from "twin.macro";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import { BsInstagram } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';
import "../features/stylee.css"
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
import img1 from "../components_images/ieeefinalimghome.jpg"

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-white`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url(${img1});
  ${tw`bg-green-500 bg-cover bg-center xl:ml-4 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-blue-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="#About">About</NavLink>
      <NavLink href="#Galleria">Gallery</NavLink>
      <NavLink href="#Contact">Contact</NavLink>
      <NavLink href="#Contact">DSC' 22</NavLink>
      <NavLink href="/Editions">Editions</NavLink>
      <NavLink href="/Events_Display">Events</NavLink>
      <NavLink href="/Reports_Display">Reports</NavLink>
      
    </NavLinks>
  ],
  heading = (
    <>
  
    
      We are
   
     
      <h4 className="h4mainpg">IEEE DELHI</h4>
      
      <span tw="text-blue-500"> <ReactTypingEffect className="type-mob" speed={100} eraseSpeed={50} cursorClassName="crname"
          text={["STUDENTS ACTIVITES"]}
        /></span>
              <h4 className="h5mainpg">COMMITTEE</h4> 
    </>
  ),
  description = "Delhi Section is one of the 12 Sections in India coming under Asia-Pacific Region, the Region 10 of IEEE.",
  primaryActionUrl = "/Event",
  primaryActionText = "Event Submission",
  secondaryActionUrl = "#eventpro",
  secondaryActionText = "Event Proposal"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};