import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
const BoxWrapper = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  background: "linear-gradient(98.69deg, #0CB031 -7.86%, #28B077 129.15%)",
  padding: "30px 30px",
  borderRadius: "9px",
  width: "500px",
  height: "156px",
  margin: "40px 0px 60px",
  "@media (max-width: 768px)": {
    width: "100%"
  },
  "& > div > h1": {
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `30px`,
    lineHeight: `150.9%`,
    letterSpacing: `0.05em`,
    color: `#FBFAF5`,
    "@media (max-width: 768px)": {
      fontSize: `18px`,
      lineHeight: `26px`,
      textAlign:"right"
    },
  },
  "& > div > p": {
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `15px`,
    lineHeight: `150.9%`,
    letterSpacing: `0.05em`,
    color: `#D7D7D7`,
    maxWidth: "350px",
    "@media (max-width: 768px)": {
      fontSize: `13px`,
      lineHeight: `22px`,
      textAlign:"right",
      display: "flex",
      justifyContent:"flex-end"
    
    },
  },
  "& > span": {
    display: "block",
    border: `5px solid #0CB031`,
    boxSizing: `border-box`,
    borderRadius: `9px`,
    width: "500px",
    height: "156px",
    position: "absolute",
    left: "12px",
    top: "12px",
    zIndex: "-1",
    "@media (max-width: 768px)": {
      width: "100%"
    }
  }
});
const BoxWrapperTwo = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  background: "linear-gradient(98.69deg, #0CB031 -7.86%, #28B077 129.15%)",
  padding: "30px 30px",
  borderRadius: "9px",
  width: "500px",
  height: "156px",
  margin: "40px 0px 60px 100px",
  "@media (max-width: 768px)": {
    width: "100%",
    margin: "40px 0px"
  },

  "& > div > h1": {
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `30px`,
    lineHeight: `150.9%`,
    letterSpacing: `0.05em`,
    color: `#FBFAF5`,
    "@media (max-width: 768px)": {
      fontSize: `18px`,
      lineHeight: `26px`,
      textAlign:"right"
    },
  },
  "& > div > p": {
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `15px`,
    lineHeight: `150.9%`,
    letterSpacing: `0.05em`,
    color: `#D7D7D7`,
    maxWidth: "350px",
    "@media (max-width: 768px)": {
      fontSize: `13px`,
      lineHeight: `22px`,
      textAlign:"right",
      display: "flex",
      justifyContent:"flex-end"
    
    },
  },
  "& > span": {
    display: "block",
    border: `5px solid #0CB031`,
    boxSizing: `border-box`,
    borderRadius: `9px`,
    width: "500px",
    height: "156px",
    position: "absolute",
    left: "12px",
    top: "12px",
    zIndex: "-1",
    "@media (max-width: 768px)": {
      width: "100%"
    }
  }
});

const LeftImage = styled("img")({
  position: "absolute",
  left: "40px",
  zIndex: "-1",
  "@media (max-width: 1200px)": {
    display: "none"
  }
});
const RightImage = styled("img")({
  position: "absolute",
  right: "40px",
  zIndex: "-1",
  "@media (max-width: 1200px)": {
    display: "none"
  }
});
const AppleImage = styled("img")({

  "@media (max-width: 1200px)": {
    width: "40px",
    display: "flex",
    alignSelf:"center"
  }
});
const Equity = () => {
  return (
    <Box
      sx={{
        padding: "100px 4px",
        position: "relative",
        overflow: "hidden",
        "@media (max-width: 1200px)": {
          padding: "50px 4px 0px"
        }
      }}
    >
      <Container maxWidth="lg">
        <LeftImage src="/left.png" alt="" />
        <RightImage src="/left.png" alt="" />
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Box>
                <BoxWrapper>
                  <span />
                  <Box>
                    <AppleImage src="/apple.png" alt="" />
                  </Box>
                  <div>
                    <h1>Own Equity</h1>
                    <p>Trade 4,500+ US and Etfs </p>
                  </div>
                </BoxWrapper>
                <BoxWrapperTwo>
                  <span />
                  <Box>
                    <AppleImage src="/apple.png" alt="" />
                  </Box>
                  <div>
                    <h1>Invest from 5$</h1>
                    <p>
                      You can buy as little as 0.00001 shares with a minimum of
                      5$
                    </p>
                  </div>
                </BoxWrapperTwo>
                <BoxWrapper>
                  <span />
                  <Box>
                    <AppleImage src="/apple.png" alt="" />
                  </Box>
                  <div>
                    <h1>Grow your Wealth</h1>
                    <p>
                      Investing is one of the best ways to grow your savings
                      over the long term - invest in the world's leading brands.
                    </p>
                  </div>
                </BoxWrapper>
                <BoxWrapperTwo>
                  <span />
                  <Box>
                    <AppleImage src="/apple.png" alt="" />
                  </Box>
                  <div>
                    <h1>Safety you Deserve </h1>
                    <p>
                      Prospuh and its partners are regulated. Your account is
                      protected for up to USD 500,000 by the SIPC
                    </p>
                  </div>
                </BoxWrapperTwo>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <img src="/Home2 1.png" alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Equity;
