import React from "react";
import {styled} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
const Title = styled("h1")({
  fontFamily: `Roboto Slab, serif`,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "129.4%",
  textAlign: "center",
  letterSpacing: "0.05em",
  color: "#303030",
  marginBottom: "100px",
  "& > span": {
    fontWeight: "800"
  }
});
const SliderText = styled("h1")({
  fontFamily: `Montserrat, sans-serif`,
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "150.9%",
  letterSpacing: "0.05em",
  color: "#666666",
  marginBottom: "15px"
});
const SliderDescription = styled("p")({
  fontFamily: `Montserrat, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `17px`,
  lineHeight: `150.9%`,
  letterSpacing: ` 0.05em`,
  color: "#666666",
  marginTop: "20px"
});
const SliderAmount = styled("p")({
  fontFamily: `Montserrat, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `49px`,
  lineHeight: `150.9%`,
  letterSpacing: `0.05em`,
  color: `#666666`
});
const SliderAmountPercent = styled("p")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `23px`,
  lineHeight: `150.9%`,
  letterSpacing: `0.05em`,
  color: ` #44BA5E`
});
const Icon = styled("img")({
  width: `77px`,
  height: `77px`,
  objectF: `cover`,
  margin: `0px 20px`
});
const ButtonOneYear = styled(Button)({
  fontFamily: `Montserrat, sans-serif`,
  background: `linear-gradient(90.05deg, #0db033 -30.69%, #28b078 118.83%)`,
  borderRadius: `7px`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `13px`,
  lineHeight: `150.9%`,
  textAlign: `center`,
  letterSpacing: `0.05em`,
  color: `#fbfaf5`,
  padding: `14px 40px`,
  border: `2px solid #0db033`,
  cursor: `pointer`,
  "@media (max-width: 520px)": {
    width: "100%",
    marginBottom:"20px"
  }
});
const ButtonTwoYear = styled(Button)({
  fontFamily: `Montserrat, sans-serif`,
  border: `2px solid #0db033`,
  boxSizing: `border-box`,
  borderRadius: `7px`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `13px`,
  lineHeight: `150.9%`,
  textAlign: `center`,
  letterSpacing: `0.05em`,
  color: `#0db033`,
  padding: `14px 40px`,
  marginLeft: `20px`,
  cursor: `pointer`,
  "@media (max-width: 520px)": {
    width: "100%",
    marginBottom:"20px",
    marginLeft: `0px`,
  }
});
const IconWrap = styled("div")({
  marginBottom: "20px"
});

const Invested = () => {
  const [sliderAmount, setAmount] = React.useState(0);
  const valuetext = value => {
    return setAmount(value);
  };
  return (
    <Box
      sx={{
        padding: "100px 4px",
        position: "relative"
      }}
    >
      <Container maxWidth="xl">
        <Title>
          What if you were<br /> <span>invested in</span>
        </Title>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <IconWrap>
            <Icon src="/fontisto_netflix.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/bi_microsoft.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/ant-design_apple-filled.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/flat-color-icons_google.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/akar-icons_facebook-fill.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/simple-icons_nike.png" alt="" />
          </IconWrap>
          <IconWrap>
            <Icon src="/akar-icons_spotify-fill.png" alt="" />
          </IconWrap>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "80px",
            "@media (max-width: 520px)": {
              flexDirection:"column",
              margin: "60px 0px",
            }
          }}
        >
          <Box>
            <ButtonOneYear>1 year</ButtonOneYear>
          </Box>
          <Box>
            <ButtonTwoYear>2 year</ButtonTwoYear>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "800px",
            margin: "auto"
          }}
        >
          <Box>
            <SliderText>If you invested</SliderText>
            <Slider
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              sx={{
                color: "rgba(13, 176, 51, 0.73)"
              }}
              getAriaValueText={valuetext}
            />
            <SliderDescription>You would have</SliderDescription>
            <SliderAmount>
              ${sliderAmount}
            </SliderAmount>
            <SliderAmountPercent>10.00%</SliderAmountPercent>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Invested;
