import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Services } from '../../assets';


const CounterSection: React.FC = () => {
    return (
        <Box
            className="zoom-counter"
            sx={{
                padding: '220px 0 60px',
                background:"#0f63a5"
            }}
        >
            <Container>
                <Box
                    className="zoom-counter__inner"
                    sx={{
                       
                    }}
                >
                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={6} md={5} >
                            {/* Card */}
                            <Box
                                className="zoom-counter__card"
                                sx={{
                                    padding: '54px 59px 60px 66px',
                                    backgroundImage: `url(${Services.counterbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: '50%',
                                    textTransform: 'uppercase',
                                    marginBottom: '80px',
                                    // width: '34.3%',
                                    // minWidth: '34.3%',
                                    //   height:'500px',
                                    position: 'relative',
                                    marginRight: '14.4%',
                                    '&::before': {
                                        content: "''",
                                        position: 'absolute',
                                        zIndex: 1,
                                        top: '30px',
                                        right: '30px',
                                        bottom: '30px',
                                        left: '30px',
                                        background: '#fff',
                                    },
                                }}
                            >
                                {/* <Box
                                    className="zoom-counter__card-title"
                                    sx={{
                                        color: '#000',
                                        fontSize: '30px',
                                        fontFamily: `'Teko', Helvetica, sans-serif`,
                                        lineHeight: 1,
                                        marginBottom: '76px',
                                        position: 'relative',
                                        zIndex: 2,
                                        textAlign: 'right',
                                    }}
                                >
                                    <p>since</p>
                                    <p>1991</p>
                                </Box> */}

                                <Box
                                    className="zoom-counter__card-value"
                                    sx={{
                                        background: 'inherit',
                                        fontSize: '250px',
                                        lineHeight: 1,
                                        fontFamily: `'Teko', Helvetica, sans-serif`,
                                        marginLeft: '-2px',
                                        color: '#fff',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        position: 'relative',
                                        zIndex: 2,
                                        fontWeight: 600,
                                        marginBottom: '4px',
                                    }}
                                >
                                    15
                                </Box>

                                <Box
                                    className="zoom-counter__card-description"
                                    sx={{
                                        color: '#000',
                                        fontSize: '24px',
                                        lineHeight: 1.25,
                                        fontWeight: 600,
                                        position: 'relative',
                                        zIndex: 2,
                                    }}
                                >
                                    years<br />experience
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} >
                            {/* Info Section */}
                            <Box className="zoom-counter__info" sx={{ flexGrow: 1,textAlign:'left' }}>
                                <Box
                                    className="zoom-counter__subtitle"
                                    sx={{
                                        fontSize: 16,
                                        lineHeight: 1.125,
                                        textTransform: 'uppercase',
                                        fontWeight: 600,
                                        background: '#fff',
                                        display: 'inline-block',
                                        verticalAlign: 'top',
                                        color: 'primary.main',
                                        padding: '6px 6px 1px',
                                        marginBottom: '26px',
                                    }}
                                >
                                    Lorem ipsum dolor 
                                </Box>

                                <Typography
                                variant='h2'
                                    color='white'
                                    sx={{
                                        fontSize: '72px',
                                        lineHeight: 0.86,
                                        marginBottom: '50px',
                                    }}
                                >
                                    Be The Architect and<br />The Mason
                                </Typography>

                               
                                  <Typography variant='body2' color='white' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates porro, debitis quaerat exercitationem tempore iure optio incidunt excepturi adipisci officia rem nam ad veniam. Hic molestiae quisquam veniam cupiditate?
                                  </Typography>
                                  <Typography variant='body2' color='white' mt={2}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates porro, debitis quaerat exercitationem tempore iure optio incidunt excepturi adipisci officia rem nam ad veniam. Hic molestiae quisquam veniam cupiditate?
                                  </Typography>
                              
                                {/* <Link
                                    href="#"
                                    className="zoom-counter__read-more zoom-counter__read-more_inverted"
                                    sx={{
                                        color: 'currentColor',
                                        fontFamily: `'Teko', Helvetica, sans-serif`,
                                        fontSize: '24px',
                                        textTransform: 'uppercase',
                                        lineHeight: 1.4,
                                        textDecoration: 'none',
                                        position: 'relative',
                                        display: 'inline-block',
                                        verticalAlign: 'top',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: '0.3s ease',
                                        '&:after': {
                                            content: "''",
                                            position: 'absolute',
                                            bottom: '2px',
                                            left: 0,
                                            width: '100%',
                                            height: '2px',
                                            background: 'currentColor',
                                            transition: 'opacity 0.3s',
                                            opacity: 1,
                                        },
                                        '&:hover': {
                                            color: '#f24a00',
                                            '&:after': {
                                                opacity: 0,
                                            },
                                        },
                                    }}
                                >
                                    more about us
                                </Link> */}
                            </Box>
                        </Grid>
                    </Grid>



                </Box>
            </Container>
        </Box>
    );
};

export default CounterSection;
