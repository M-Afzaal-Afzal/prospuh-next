import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";


const Title = styled('h1')({
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `55px`,
  lineHeight: `129.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  "& > span": {
    fontWeight: "800"
  },
  "@media (max-width: 520px)": {
    fontSize: "36px",
    lineHeight: `48px`
  }
});
const TinyText = styled('h1')({
  fontStyle: `normal`,
  fontWeight: `900`,
  fontSize: `30px`,
  lineHeight: `129.4%`,
  color: `rgba(15, 101, 13, 0.6)`,
  letterSpacing: `0.05em`,
});
const Paragraph = styled('p')({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `19px`,
  lineHeight: `189.4%`,
  color: `#666666`,
  fontFamily: `Montserrat, sans-serif`,
});
const Vision = () => {
  return (
    <div>
      <Box
        sx={{
          padding: "100px 10px",
          position: "relative",
          "@media (max-width: 520px)": {
            padding: "100px 10px 40px",
          }
        }}
      >
        <img src="/visionbg.png" alt="" className="invision-bg" />
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item  xs={12} md={6}>
              <div className="vision">
                <TinyText>Our Vision</TinyText>
                <Title>
                  Create <span>Endless Opportunities</span> For Yourself
                </Title>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <Paragraph>
                  Prospuh gives a boost to your wealth. Once you invest , you
                  will harvest in future because we value you. We will let you
                  to earn more and be financial free. We are making it simple
                  for beginners and experienced investors.Enjoy thrilling
                  investment bonuses through Prospuh
                </Paragraph>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Vision;
