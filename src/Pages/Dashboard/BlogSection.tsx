// BlogSection.jsx
import React from 'react';
import { Box, Grid, Typography, Link, Divider, Container } from '@mui/material';
import { Homeimages } from '../../assets';
import EastIcon from '@mui/icons-material/East';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { blogContent } from '../Blog/BlogDetails/blogContent';
import SmoothWaveText from '../../Components/SmoothWaveText';
import TextFillScroll from '../../Components/TextFillScroll';
import ImageReveal from '../../Components/ImageReveal';

// Replace the hardcoded blogPosts array with data from blogContent
const blogPosts = blogContent.map(({ id, date, title, blogtitleImage }) => ({
    id,
    date,
    title,
    image: blogtitleImage,
}));

const marqueeWords = [
    "News", "News", "News", "News", "News",
    "News", "News", "News", "News", "News",
];

const BlogSection = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ color: '#000', py: 6 }}>

            <Box >
                <Box sx={{ py: 4, overflow: 'hidden' }}>
                    <Container maxWidth="lg"
                        sx={{
                            borderTop: '1px solid #777777',

                        }}>

                        {/* Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                my: 4,
                                pt: 2

                            }}
                        >
                            <SmoothWaveText
                                variant="subtitle2"
                                sx={{
                                    color: 'primary.main',
                                    fontFamily: 'GilroyBold, sans-serif',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                }}
                            >
                                     // News blogs
                            </SmoothWaveText>

                            <SmoothWaveText
                                className='cursor-hover-target'
                                variant="subtitle2"
                                onClick={() => navigate('/blog')}
                                sx={{
                                    color: 'primary.main',
                                    fontFamily: 'GilroyBold, sans-serif',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#000',
                                    },
                                }}
                            >
                                (( All Posts ))
                            </SmoothWaveText>
                        </Box>
                    </Container>

                    {/* Marquee */}
                    <Marquee gradient={false} speed={80} style={{ overflow: 'hidden', }}>
                        {marqueeWords.map((word, index) => (
                            <Typography
                                className='cursor-hover-target'
                                key={index}
                                variant='h2'
                                component="span"
                                sx={{
                                    fontSize: { xs: '40px', md: '100px' },
                                    fontFamily: 'GilroyBold, sans-serif',
                                    color: index % 2 === 0 ? '#0f63a5' : 'transparent',
                                    WebkitTextStroke: index % 2 === 0 ? '0px' : '1px #0f63a5',
                                    textTransform: 'uppercase',
                                    mx: 3,
                                    whiteSpace: 'nowrap',
                                    fontWeight: 700
                                }}
                            >
                                {word}
                            </Typography>
                        ))}
                    </Marquee>
                </Box>
                <Container maxWidth="lg">
                    <Box
                        sx={{ borderTop: '1px solid #777777', }}>

                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg">
                <Box sx={{ color: '#fff', px: 5 }}>
                    {blogPosts.map((post, index) => (
                        <Box
                            key={index}
                            onClick={() => navigate(`/blog/${post.id}`)}
                            style={{ cursor: 'pointer' }}
                            sx={{
                                borderTop: index !== 0 ? '1px solid #777777' : 'none',
                                borderBottom: index === blogPosts.length - 1 ? '1px solid #777777' : 'none',
                            }}
                        >
                            <Grid container spacing={3} alignItems="center" py={3}>
                                <Grid item xs={12} md={7} sx={{ textAlign: 'start' }}>
                                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                                        ● {post.date}
                                    </Typography>
                                    {/* <Typography  className='cursor-hover-target' variant="h3" sx={{ mt: 1, mb: 2 }}>
                                        {post.title}
                                    </Typography> */}
                                    <TextFillScroll textColor="#777777" fillColor="#000" sx={{ fontsize: "20px" }}>
                                        {post.title}
                                    </TextFillScroll>
                                    <Typography
                                        className='cursor-hover-target'
                                        variant='h6'
                                        sx={{
                                            color: 'primary.main',
                                            fontWeight: 700,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                        }}
                                    >
                                        <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 700, }}>Read the story</Typography>
                                        <EastIcon sx={{ fontSize: '1rem', ml: 1, fontWeight: 700, }} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    {/* <Box
                                        component="img"
                                        src={post.image}
                                        alt={post.title}
                                        sx={{
                                            width: '100%',
                                            height: '250px',
                                            borderRadius: 1,
                                            objectFit: 'cover',
                                        }}
                                    /> */}
                                    <ImageReveal
                                        src={post.image}
                                        alt={post.title}
                                        width="100%"
                                        height="250px"
                                        threshold={0.8}
                                        scaleDuration={3}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    ))}

                    {/* <ImageReveal
        src="https://images.unsplash.com/photo-1580215935060-a5adc57c5157?auto=format&fit=crop&w=634&q=80"
        alt="Mountain"
        width="100%"
        height="300px"
        threshold={0.8}
        scaleDuration={3}
      /> */}
                </Box>
            </Container>
        </Box>
    );
};

export default BlogSection;
