import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const LinkWrap = styled("div")({
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    color: `#fbfaf5`,
    padding: `0px 26px`
  },

  "& > span": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    letterSpacing: `0.045em`,
    color: ` #1e7813`,
    backgroundColor: `#fbfaf5`,
    borderRadius: `9px`,
    padding: `7px 16px`,
    cursor: `pointer`,
    marginLeft: `26px`
  },
  // "@media (max-width: 768px)": {
  //   "& > a": {
  //     fontSize: `16px`
  //   }
  // }
});

const Navbar = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)",
        paddingX: "10px",
        paddingY: "10px"
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: " space-between"
          }}
        >
          <Box>
            <img src="/logo.png" alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center"
            }}
          >
            <LinkWrap>
              {links.map((item, index) => {
                return (
                  <a key={index} href="#">
                    {item.title}
                  </a>
                );
              })}
              <span>Get the app</span>
            </LinkWrap>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

const links = [
  {
    title: "Home"
  },
  {
    title: "About"
  },
  {
    title: "Services"
  },
  {
    title: "Contact"
  }
];
