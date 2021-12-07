import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `900`,
  fontSize: "61px",
  lineHeight: `137.4%`,
  letterSpacing: `0.05em`,
  color: `#fbfaf5`,
  "& > span": {
    color: `#ffe14b`
  },
  "@media (max-width: 900px)": {
    fontSize: "40px",
    lineHeight: `48px`
  }
});
const TinyText = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `23px`,
  lineHeight: `144.4%`,
  letterSpacing: `0.05em`,
  color: `#fbfaf5`,
  paddingTop: `60px`
});
const Paragraph = styled("p")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `18px`,
  lineHeight: `151.4%`,
  color: `#ebebeb`,
  marginBottom: `50px`
});
const ButtonCustom = styled(Button)({
  fontStyle: `normal`,
  fontWeight: `900`,
  fontSize: `20px`,
  lineHeight: `137.4%`,
  letterSpacing: `0.05em`,
  color: `#fbfaf5`,
  border: `2px solid #fbfaf5`,
  boxSizing: ` border-box`,
  borderRadius: `7px`,
  background: `transparent`,
  padding: `6px 20px`,
  cursor: `pointer`
});
const ButtonInput = styled("span")({
  background: `#cac9c5`,
  borderTopRightRadius: `8px`,
  borderBottomRightRadius: `8px`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `16px`,
  lineHeight: `144.4%`,
  color: ` #0db033`,
  padding: `11.5px 20px`,
  marginTop: `0px`,
  marginLeft: `-5px`,
  display: `block`,
  textAlign: "center",
  "@media (max-width: 520px)": {
    borderRadius: "4px"
  }
});
const Header = () => {
  const [phone, setPhone] = useState();
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="header">
              <TinyText>Build your wealth</TinyText>
              <Title>
                <span>Putting</span> Ownership in the Hands of the People
              </Title>
              <Paragraph>
                Putting Ownership in the Hands of the People
              </Paragraph>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "60px",
                  "@media (max-width: 520px)": {
                    flexDirection: "column"
                  }
                }}
              >
                <Box
                  sx={{
                    "@media (max-width: 520px)": {
                      marginBottom: "10px"
                    }
                  }}
                >
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={ph => setPhone(ph)}
                    placeholder={"Your phone number"}
                  />
                </Box>
                <div>
                  <ButtonInput>Text me the link</ButtonInput>
                </div>
              </Box>
              <Box
                sx={{
                  "@media (max-width: 520px)": {
                    display: "flex",
                    justifyContent: "center"
                  }
                }}
              >
                <ButtonCustom>Invest from 5$</ButtonCustom>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <img src="/SplashScreen 1.png" alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
