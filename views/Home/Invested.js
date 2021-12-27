import React, {useState} from "react";
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
    cursor: "pointer",
    margin: `0px 20px`
});
const ButtonYear = styled(Button)({
    fontFamily: `Montserrat, sans-serif`
});

const IconWrap = styled("div")({
    marginBottom: "20px"
});

const Invested = () => {
    const [sliderAmount, setAmount] = React.useState(1);

    const sliderValueHandler = value => {
        setAmount(value);
        return value;
    };

    const [activeYear, setActiveYear] = React.useState(1);
    const [activeBrand, setActiveBrand] = useState(activeYear === 1 ? data[0] : data[0]);

    const brandButtonClickHandler = item => {
        setActiveYear(1);

        console.log(item.id);
        console.log(activeYear === 1 ? item.firstYearPercentage : item.secondYearPercentage)

        setActiveBrand(item);
    };

    const yearButtonClickHandler = item => {
        setActiveYear(item.id);
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
                    What if you were<br/> <span>invested in</span>
                </Title>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {data.map((item, index) => {
                        return (
                            <IconWrap key={index} onClick={() => brandButtonClickHandler(item)}>
                                <Icon
                                    src={item.image}
                                    alt=""
                                    className={`${item.id === activeBrand.id
                                        ? "active-logo"
                                        : "n-active-logo"}`}
                                />
                            </IconWrap>
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "80px",
                        "@media (max-width: 520px)": {
                            flexDirection: "column",
                            margin: "60px 0px"
                        }
                    }}
                >
                    {yearButton.map((item, index) => {
                        return (
                            <Box key={index}>
                                <ButtonYear
                                    sx={{
                                        background: `${item.id === activeYear
                                            ? 'linear-gradient(90.05deg, #0db033 -30.69%, #28b078 118.83%)'
                                            : ""}`,
                                        borderRadius: '7px',
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        fontSize: '13px',
                                        lineHeight: '150.9%',
                                        textAlign: 'center',
                                        letterSpacing: '0.05em',
                                        color: `${item.id === activeYear ? '#fbfaf5' : '#0db033'}`,
                                        padding: '14px 40px',
                                        border: '2px solid #0db033',
                                        cursor: 'pointer',
                                        margin: '0px 10px',
                                    }}
                                    onClick={() => yearButtonClickHandler(item)}
                                    className={`${item.id === activeYear
                                        ? "active-year"
                                        : "no-active-year"}`}
                                >
                                    {item.title}
                                </ButtonYear>
                            </Box>
                        );
                    })}
                </Box>
                <Box
                    sx={{
                        maxWidth: "800px",
                        margin: "auto"
                    }}
                >
                    <Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <SliderText>If you invested</SliderText>
                            <SliderText>
                                ${sliderAmount}
                            </SliderText>
                        </Box>
                        <Slider
                            defaultValue={1}
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            min={1}
                            sx={{
                                color: "rgba(13, 176, 51, 0.73)"
                            }}
                            getAriaValueText={sliderValueHandler}
                        />
                        <SliderDescription>You would have</SliderDescription>
                        <SliderAmount>
                            ${activeYear === 1 ? Math.round(sliderAmount + (sliderAmount / 100) * activeBrand.firstYearPercentage) : Math.round(sliderAmount + (sliderAmount / 100) * activeBrand.secondYearPercentage)}
                        </SliderAmount>
                        <SliderAmountPercent>{activeYear === 1 ? activeBrand.firstYearPercentage : activeBrand.secondYearPercentage}%</SliderAmountPercent>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Invested;

const data = [
    {
        id: 1,
        image: "/nflx.png",
        price: 1,
        firstYearPercentage: 14.7,
        secondYearPercentage: 29.44,
    },
    {
        id: 2,
        image: "/msft.png",
        price: 1,
        firstYearPercentage: 61.7,
        secondYearPercentage: 93.44,
    },
    {
        id: 3,
        image: "/aapl.png",
        price: 2,
        firstYearPercentage: 83.7,
        secondYearPercentage: 48.44,
    },
    {
        id: 4,
        image: "/googl.png",
        price: 2,
        firstYearPercentage: 25.7,
        secondYearPercentage: 76.44,
    },
    {
        id: 5,
        image: "/nke.png",
        price: 2,
        firstYearPercentage: 64.7,
        secondYearPercentage: 94.44,
    },
    {
        id: 6,
        image: "/fb.png",
        price: 1,
        firstYearPercentage: 55.7,
        secondYearPercentage: 64.44,
    },
    {
        id: 7,
        image: "/spot.png",
        price: 2,
        firstYearPercentage: 45.7,
        secondYearPercentage: 22.44,
    }
];

const yearButton = [
    {
        id: 1,
        title: "1 YEAR"
    },
    {
        id: 2,
        title: "2 YEAR"
    }
];
