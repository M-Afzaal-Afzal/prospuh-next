import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DownloadApp from "../views/Home/DownloadApp";
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import {FaTwitter,FaLinkedinIn,FaInstagram,FaFacebook} from 'react-icons/fa';

const Title = styled('h1')({
  fontFamily: `Montserrat, sans-serif`,
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "16px",
  lineHeight: "151.4%",
  color: "#fbfaf5",
  marginBottom: "30px",

});
const LinkWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  "& > a": {
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `800`,
    fontSize: `16px`,
    lineHeight: `151.4%`,
    color: `rgba(251, 250, 245, 0.6)`,
    marginBottom: `20px`
  }
});
const MailText = styled('h3')({
  fontFamily: `Montserrat, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `16px`,
  lineHeight: `151.4%`,
  color: `#fbfaf5`,
  textAlign: `center`,
});
const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: "100px"
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/footerbg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "250px 10px 100px",
          top: '-300px',
          "@media (max-width: 768px)": {
            padding: "100px 10px 100px",
         }
        }}
      >
        <Container maxWidth="xl" style={{position: "relative"}}>
          <Box sx={{
           position: 'absolute',
           top: '-300px',
           "@media (max-width: 520px)": {
            position: 'relative',
            top: '0px',
            marginBottom:"100px"
          }
          }}>
            <DownloadApp />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <LinkWrap>
                <Title>Prospuh</Title>
                <a href="#">Home</a>
                <a href="#">Careers</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
              </LinkWrap>
            </Grid>
            <Grid item xs={12} md={3}>
              <LinkWrap>
                <Title>Help</Title>
                <a href="#">General</a>
                <a href="#">Account</a>
                <a href="#">Investing</a>
                <a href="#">Learn</a>
              </LinkWrap>
            </Grid>
            <Grid item xs={12} md={3}>
              <LinkWrap>
                <Title>Legal</Title>
                <a href="#">Privacy policy</a>
                <a href="#">Terms of use</a>
                <a href="#">Cookie policy</a>
                <a href="#">Complaints</a>
                <a href="#">Conflicts policy</a>
                <a href="#">Reward Scheme Terms</a>
              </LinkWrap>
            </Grid>
            <Grid item xs={12} md={3}>
              <LinkWrap>
                <Title>Get in touch</Title>
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "13px",
                    padding: "40px 5px"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "14px"
                    }}
                  >
                    <img src="/meail.png" alt="" />
                  </Box>
                  <MailText>xyzz@gmail.com</MailText>
                </Box>
              </LinkWrap>
            </Grid>
          </Grid>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gridGap: '2rem',
            justifyContent: 'space-between',
            mt: '3rem',
          }}>

            <Box sx={{gridColumn: '1/-1'}}>

              <Stack spacing={4} direction={'row'}>
                <Box sx={{
                  color: '#fff',
                  cursor: 'pointer',
                }}>
                <FaTwitter size={25}/>
                </Box>
                <Box sx={{
                  color: '#fff',
                  cursor: 'pointer',
                }}>
                <FaLinkedinIn size={25}/>
                </Box>
                <Box sx={{
                  color: '#fff',
                  cursor: 'pointer',
                }}>
                  <FaInstagram size={25}/>
                </Box>
                <Box sx={{
                  color: '#fff',
                  cursor: 'pointer',
                }}>
                  <FaFacebook size={25}/>
                </Box>
              </Stack>

            </Box>

            <Box sx={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '22px',
              letterSpacing: 0,
              textAlign: 'left',
              color:'#FBFAF5B2',
            }}>
              Registered under the Securities Industry Act, 2011 with the Securities Comission of The Bahams Registration No. The value of investments can go up as well as down and you may receive back less than your original investment.
            </Box>

            <Box sx={{
              fontFamily: 'Montserrat',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '22px',
              letterSpacing: 0,
              textAlign: 'left',
              color:'#FBFAF5B2',
            }}>
              Copyright ©️ 2021 Prospuh, All rights reserved. The Apple logo is a trademark of Apple Inc. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
            </Box>


            <Box/>

          </Box>

        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
