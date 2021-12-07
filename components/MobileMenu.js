import React, {useState} from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
const Logo = styled("img")({
  width: "170px"
});
const StyledStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `20px`,
    lineHeight: `144.4%`,
    color: `#fbfaf5`,
    padding: `14px 26px`
    // borderBottom: "1px solid #fbfaf5"
  }
});

const StyledIcon = styled(MenuIcon)({
    color: "#fbfaf5",
    width: "40px",
    height: "40px",
    cursor: "pointer"
  });
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          background:
            "linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)",
          paddingX: "30px",
          paddingY: "15px",
          borderBottom: "1px solid #fbfaf5"
        }}
      >
        <div>
          <span >
            <Logo src="/logo.png" alt="" />
          </span>
        </div>
        <Stack  onClick={toggleDrawer} sx={{
          display: "flex",
          alignSelf: "center"
        }}>
          <StyledIcon />
        </Stack>
      </Stack>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          background:
            "linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0px"
          }}
        >
          <Logo src="/logo.png" alt="" />
        </Box>
        <Box>
          <StyledStack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {links.map((item, index) => {
              return (
                <a key={index} href="#">
                  {item.title}
                </a>
              );
            })}
          </StyledStack>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileMenu;

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
