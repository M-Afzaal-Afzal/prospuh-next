import React, {useRef, useState, useEffect} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import {StepIcon} from "@mui/material";
const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `55px`,
  lineHeight: ` 129.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  marginBottom: "40px",
  "@media (max-width: 768px)": {
    fontSize: "40px",
    lineHeight: `48px`
  },
  "& > span": {
    fontWeight: `800`
  }
});
const TinyText = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `900`,
  fontSize: `23px`,
  lineHeight: `144.4%`,
  letterSpacing: `0.05em`,
  color: `rgba(15, 101, 13, 0.6);`,
  marginTop: "60px"
});

const StepLabelText = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `900`,
  fontSize: `23px`,
  lineHeight: `144.4%`,
  letterSpacing: `0.05em`,
  color: ` #0F650D`
});
const StepDescription = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `14px`,
  lineHeight: `152.9%`,
  color: `#666666`,
  marginBottom: "30px"
});
const ButtonCustom = styled(Button)({
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
  cursor: `pointer`
});

const BackButton = styled(Button)({
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
  cursor: `pointer`
});
const SLiderImage = styled('img')({
  width: "100%",
});
const steps = [
  {
    label: "Create an account",
    description: `Create new account to stay connected with us and open your investment here`
  },
  {
    label: "Create an account",
    description: `Create new account to stay connected with us and open your investment here`
  },
  {
    label: "Create an account",
    description: `Create new account to stay connected with us and open your investment here`
  }
];

const HowItWorks = () => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    next();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    previous();
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box
      sx={{
        padding: "20px 4px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TinyText>How it works</TinyText>
            <Title>
              Become an investor
              <span> in three simple steps</span>
            </Title>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) =>
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={StepIcon}
                    optional={
                      index === 2
                        ? <Typography variant="caption">Last step</Typography>
                        : null
                    }
                  >
                    <StepLabelText>
                      {step.label}
                    </StepLabelText>
                  </StepLabel>
                  <StepContent>
                    <StepDescription>
                      {step.description}
                    </StepDescription>
                    <Box sx={{mb: 2}}>
                      <div>
                        <ButtonCustom
                          variant="contained"
                          onClick={handleNext}
                          sx={{mt: 1, mr: 1}}
                        >
                          {index === steps.length - 1 ? "Finish" : "Next"}
                        </ButtonCustom>
                        <BackButton
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{mt: 1, mr: 1}}
                        >
                          Back
                        </BackButton>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              )}
            </Stepper>
            {activeStep === steps.length &&
              <Paper square elevation={0} sx={{p: 3}}>
                <BackButton onClick={handleReset} sx={{mt: 1, mr: 1}}>
                  Reset
                </BackButton>
              </Paper>}
          </Grid>
          <Grid item  xs={12} md={6}>
            <Slider ref={c => (slider.current = c)}>
              <Box>
                <SLiderImage src="/Group 57.png" alt="" />
              </Box>
              <Box>
                <SLiderImage src="/Group 57.png" alt="" />
              </Box>
              <Box>
                <SLiderImage src="/Group 57.png" alt="" />
              </Box>
              <Box>
                <SLiderImage src="/Group 57.png" alt="" />
              </Box>
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
