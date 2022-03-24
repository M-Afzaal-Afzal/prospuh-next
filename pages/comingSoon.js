import React from 'react';
import {Box, Button, Container} from "@mui/material";
import Layout from "../components/Layout";
import Image from 'next/image';
import Typography from "@mui/material/Typography";
import Counter from "../components/Counter";
import {useForm} from 'react-hook-form';

const ComingSoon = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = ({name, email}) => {
        console.log(name, email, "Name and Email")
    };

    console.log("Error", errors);

    return (
        <Box>
            <Box sx={{
                background: '#0E0D0C',
                position: 'relative',
            }}>

                {/*     Dots Start  */}
                <Box sx={{
                    width: '25px',
                    height: '25px',
                    background: '#FFE14B',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '15%',
                    left: '20%',

                }}/>
                <Box sx={{
                    width: '12px',
                    height: '12px',
                    background: '#FFE14B',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '28%',
                    left: '15%',

                }}/>

                <Box sx={{
                    width: '23px',
                    height: '23px',
                    background: '#FFE14B',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '58%',
                    left: '14%',

                }}/>

                <Box sx={{
                    width: '12px',
                    height: '12px',
                    background: '#FFE14B',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '78%',
                    left: '24%',

                }}/>

                {/*     Dots End    */}

                <Container maxWidth={'lg'}>
                    <Box sx={{
                        display: 'grid', gridTemplateColumns: {xs: '1fr', md: "repeat(10,1fr)"},
                    }}>
                        <Box sx={{
                            gridColumn: {xs: 'unset', md: '1/6'},
                            gridRow: {xs: "unset", md: '1/-1'},
                            color: "#fff",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& span': {
                                width: '100% !important',
                            }
                        }}>
                            <Image width={926.42} height={1417} alt={'two mobiles'} src={'/mobilesPng.png'}/>
                        </Box>

                        <Box sx={{
                            gridColumn: {xs: "unset", md: '6/-1'},
                            gridRow: {xs: "unset", md: '1/-1'},
                            color: "#fff",
                            pb: "4rem",
                            pt: '10rem',
                            mt: {
                                xs: '-16rem', md: "unset",
                            }
                        }}>
                            <Box sx={{
                                mx: 'auto', maxWidth: '490px',
                            }}>

                                <Typography sx={{
                                    fontSize: "50px", textAlign: 'center',
                                }} variant={'h2'}>
                                    The Future Is Near
                                </Typography>

                                <Typography sx={{
                                    fontSize: "18px", textAlign: 'center',
                                }} variant={'body1'}>
                                    We are currently working on this page.Enter your email to stay updated
                                </Typography>
                            </Box>

                            {/*     Counter     */}

                            <Box sx={{
                                mt: '4rem'
                            }}>
                                <Counter/>
                            </Box>

                            <Box sx={{
                                display: 'grid',
                                gridGap: '1rem', py: '2rem',
                                gridTemplateColumns: "1fr 1fr",
                                alignItems: 'flex-start',
                            }}>
                                <Box>

                                    <Box
                                        placeholder={'Name'}
                                        as={'input'}
                                        {...register("name", {required: "You must have to specify your name"})}
                                        sx={{
                                            border: '2px solid #BAB4B4',
                                            width: "100%",
                                            background: 'transparent',
                                            color: '#fff',
                                            p: '1rem', borderRadius: '7px', "&:focus": {
                                                outline: "none",
                                            }
                                        }}
                                        type="text"
                                    />
                                    {
                                        errors.name && (
                                            <Box sx={{
                                                mt: "8px",
                                                fontSize: '12px',
                                                color: "red",
                                            }}>{errors?.name.message}</Box>
                                        )
                                    }
                                </Box>

                                <Box>

                                    <Box
                                        placeholder={'Email'}
                                        as={'input'}
                                        {...register("email", {
                                            required: "You must have to specify your email",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid Email",
                                            }
                                        })}
                                        sx={{
                                            width: "100%",
                                            border: '2px solid #BAB4B4',
                                            background: 'transparent',
                                            color: '#fff',
                                            p: '1rem', borderRadius: '7px', "&:focus": {
                                                outline: "none",
                                            }
                                        }} type="text"
                                    />

                                    {
                                        errors.email && (
                                            <Box sx={{
                                                mt: "8px",
                                                fontSize: '12px',
                                                color: "red",
                                            }}>{errors?.email?.message}</Box>
                                        )
                                    }

                                </Box>

                            </Box>

                            {/*    Join button*/}
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: "#EAEAEA",
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}>
                                <Button onClick={handleSubmit(onSubmit)} color={'secondary'} variant={'contained'} sx={{
                                    py: "1rem", px: '2.5rem',
                                    mx: "auto",
                                    textTransform: 'capitalize',
                                    background: 'linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)',
                                }}>
                                    Join The Waitlist
                                </Button>
                            </Box>

                            <Box sx={{
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gridTemplateColumns: {
                                    xs: '1fr',sm:'auto auto'},
                                marginTop: '2rem',
                                gridGap: '1rem',
                            }}>
                                <Button onClick={handleSubmit(onSubmit)} variant={'contained'} sx={{
                                    py: "1rem", px: '1rem',
                                    mx: "auto",
                                    textTransform: 'capitalize',
                                    background: '#EAEAEA',
                                    color: '#040404',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gridGap: '8px',
                                    "&:hover": {
                                        background: "#f1f1f1",
                                    }

                                }}
                                >
                                    <Image src={'/aapl.png'} width={39} height={39} alt={'apple'}/>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        marginTop: '-10px',
                                    }}>
                                        <Box sx={{
                                            fontSize: "13px",
                                        }}>
                                            Download on the
                                        </Box>
                                        <Box sx={{
                                            fontSize: '22px',
                                            lineHeight: '20px',
                                            fontWeight: 'bold',
                                        }}>
                                            App Store
                                        </Box>
                                    </Box>
                                </Button>
                                <Button onClick={handleSubmit(onSubmit)} variant={'contained'} sx={{
                                    py: "1rem", px: '1rem',
                                    mx: "auto",
                                    textTransform: 'capitalize',
                                    background: '#EAEAEA',
                                    color: '#040404',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gridGap: '8px',
                                    "&:hover": {
                                        background: "#f1f1f1",
                                    }

                                }}
                                >
                                    <Image src={'/aapl.png'} width={39} height={39} alt={'apple'}/>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        marginTop: '-10px',
                                    }}>
                                        <Box sx={{
                                            fontSize: "13px",
                                        }}>
                                            Get it on
                                        </Box>
                                        <Box sx={{
                                            fontSize: '22px',
                                            lineHeight: '20px',
                                            fontWeight: 'bold',
                                        }}>
                                            Google Play
                                        </Box>
                                    </Box>
                                </Button>
                            </Box>

                        </Box>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default ComingSoon;