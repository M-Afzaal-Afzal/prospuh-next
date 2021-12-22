import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {addNumberDocument} from "../../firebase/clientApp";
import {toast} from "react-hot-toast";

const Title = styled("h1")({
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `32px`,
    lineHeight: `117.4%`,
    letterSpacing: `0.05em`,
    color: `#fbfaf5`,
    marginBottom: `18px`,
    "@media (max-width: 768px)": {
        fontSize: `22px`,
        lineHeight: `30px`,
    }
});
const Paragraph = styled("p")({
    fontFamily: `Montserrat, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `14px`,
    lineHeight: `152.9%`,
    color: `#d7d7d7`
});
const ButtonInput = styled("span")({
    cursor: 'pointer',
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
    textAlign:"center",
    "@media (max-width: 520px)": {
        borderRadius: "4px"
    }
});

const AppImage = styled("img")({});

const DownloadApp = () => {
  const [phone, setPhone] = useState();

    const addNumberToDatabase = async () => {
        try {
            if (phone) {
                console.log(phone)
                await addNumberDocument(phone);
                console.log('phone added successfully')
                toast.success('Phone Number added Successfully');
                setPhone(undefined);
            } else {
                toast.error('Please Add Phone Number');
                setPhone(undefined);
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }

    }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          padding: "40px 80px 90px",
          position: "relative",
          background: "#02691A",
          borderRadius: "12px",
          "@media (max-width: 768px)": {
            padding: "40px 20px 140px"
          }
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Box>
                <Title>Download the app and start investing now</Title>
                <Paragraph>
                  Remember , when you invest your capital is at risk
                </Paragraph>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
                "@media (max-width: 1200px)": {
                  justifyContent: "center"
                },
                "@media (max-width: 600px)": {
                  flexDirection: "column"
                }
              }}
            >
              <Box
                sx={{
                  marginRight:"30px",
                  "@media (max-width: 768px)": {
                    marginBottom: "10px",
                    marginRight:"0px",
                  }
                }}
              >
                <AppImage src="/appstore.png" alt="" />
              </Box>
              <Box>
                <AppImage src="/googleplay.png" alt="" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "20px",
                "@media (max-width: 1200px)": {
                  justifyContent: "center"
                },
                "@media (max-width: 768px)": {
                  flexDirection: "column"
                }
              }}
            >
              <Box
                sx={{
                  "@media (max-width: 768px)": {
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
              <div >
                <ButtonInput onClick={addNumberToDatabase}>Text me the link</ButtonInput>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DownloadApp;
