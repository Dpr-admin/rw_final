// components/BlogContentFromJson.tsx
import React from 'react';
import { Box, Typography, Avatar, Chip, Divider, Stack, List, ListItem, ListItemText, ListItemIcon, Grid, Container } from '@mui/material';
import { blogContent } from './blogContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useParams } from 'react-router-dom';
import SmoothWaveText from '../../../Components/SmoothWaveText';
import ImageReveal from '../../../Components/ImageReveal';
import { NONAME } from 'dns';

const BlogContentFromJson = () => {
    const { id } = useParams();
    const content = id
        ? blogContent.find((blog) => blog.id === id.toLowerCase().replace(/%20/g, '-'))
        : null; // Find the blog by slugified ID only if 'id' is defined

    if (!content) {
        return <Typography variant="h6">Blog not found</Typography>;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box
                sx={{
                    textAlign: 'center',
                    color: '#fff',
                    py: {xs:0,md:6},
                    mt: {xs:14,md:12},
                }}
            >
                <Container maxWidth='xl'>

                    {/* Date */}
                    <Typography variant="body2" color="#000" gutterBottom fontWeight={500}>
                        {content.date}
                    </Typography>

                    <Grid container>

                        <Grid item xs={12} md={10} sx={{ mx: 'auto', mt: 1, textAlign: 'center' }}>
                            <SmoothWaveText
                                variant="h3"
                                sx={{ mx: 'auto', mt: 1, fontWeight: 700 }}
                            >
                                {content.title}
                            </SmoothWaveText>
                        </Grid>
                    </Grid>

                    {/* Author Info */}
                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        mt={4}
                    >
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Avatar
                                alt={content.author.name}
                                src={content.author.avatar}
                                sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                                <Typography variant='h6' fontWeight={600}>{content.author.name}</Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>

                <ImageReveal
                    src={content.featuredImage}
                    alt="Best Real Estate Mentor in Hyderabad"
                    width="100%"
                    height="auto"
                    threshold={0.8}
                    scaleDuration={3}
                    sx={{ my: {xs:2,md:4} }}
                />
            </Box>
            <Container maxWidth='xl'>

                <Grid container>
                    <Grid item xs={12} md={9} style={{ position: 'sticky', top: 0 }}>
                        <Box sx={{ px: { xs: 2, md: 6 }, py: 4, color: '#fff' }}>
                            {content.paragraph1.map((item, index) => (
                                <Box key={index} mb={3}>
                                    <Typography variant="h6" color="#000" sx={{ textAlign: 'start' }}>
                                        {item.title}
                                    </Typography>
                                    {item.description.map((desc, idx) => (
                                        <Typography key={idx} variant="body2" color="#000" sx={{ textAlign: 'start', mb: 1 }}>
                                            {desc}
                                        </Typography>
                                    ))}
                                </Box>
                            ))}


                            <Box>
                                {content.details.map((detail, index) => (
                                    <Box key={index}>
                                        {/* Title Description */}
                                        <Typography variant="h6" color="#000" gutterBottom textAlign='start'>
                                            {detail.title}
                                        </Typography>
                                        {/* Title Description */}
                                        <Typography variant="body2" color="#000" gutterBottom textAlign='start'>
                                            {detail.titleDescription}
                                        </Typography>

                                        {/* List Points */}
                                        <Box component="ul" sx={{ textAlign: 'start', color: '#000', mt: 2, listStyleType: 'disc', pl: 2 }}>
                                            {detail.listPoints.map((point, idx) => (
                                                <Typography
                                                    key={idx}
                                                    component="li"
                                                    variant="body2"
                                                    color="#000"
                                                    sx={{ listStyleType: 'disc', '&::marker': { color: 'primary.main' } }}
                                                >
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <Box>
                                {content.details2.map((detail2, index) => (
                                    <Box key={index}>
                                        {/* Title Description */}
                                        <Typography variant="h6" color="#000" gutterBottom textAlign='start'>
                                            {detail2.title}
                                        </Typography>
                                        {/* Title Description */}
                                        <Typography variant="body2" color="#000" gutterBottom textAlign='start'>
                                            {detail2.titleDescription}
                                        </Typography>

                                        {/* List Points */}
                                        <Box component="ul" sx={{ textAlign: 'start', color: '#000', mt: 2, listStyleType: 'disc', pl: 2 }}>
                                            {detail2.listPoints.map((point, idx) => (
                                                <Typography
                                                    key={idx}
                                                    component="li"
                                                    variant="body2"
                                                    color="#000"
                                                    sx={{ listStyleType: 'disc', '&::marker': { color: 'primary.main' },mb:4 }}
                                                >
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                            <ImageReveal
                                src={content.imageBlock}
                                alt="Best Real Estate Mentor in Hyderabad"
                                width="100%"
                                height="auto"
                                threshold={0.8}
                                scaleDuration={3}
                                sx={{ borderRadius: '40px', }}
                            />

                            {content.paragraph2.map((item, index) => (
                                <Box key={index} mb={3} mt={3}>
                                    <Typography variant="h6" color="#000" sx={{ textAlign: 'start' }}>
                                        {item.title}
                                    </Typography>
                                    {item.description.map((desc, idx) => (
                                        <Typography key={idx} variant="body2" color="#000" sx={{ textAlign: 'start', mb: 1 }}>
                                            {desc}
                                        </Typography>
                                    ))}
                                </Box>
                            ))}


                            <Box>
                                {content.details3.map((detail3, index) => (
                                    <Box key={index}>
                                        {/* Title Description */}
                                        <Typography variant="h6" color="#000" gutterBottom textAlign='start'>
                                            {detail3.title}
                                        </Typography>
                                        {/* Title Description */}
                                        <Typography variant="body2" color="#000" gutterBottom textAlign='start'>
                                            {detail3.titleDescription}
                                        </Typography>

                                        {/* List Points */}
                                        <Box component="ul" sx={{ textAlign: 'start', color: '#000', mt: 2, listStyleType: 'disc', pl: 2 }}>
                                            {detail3.listPoints.map((point, idx) => (
                                                <Typography
                                                    key={idx}
                                                    component="li"
                                                    variant="body2"
                                                    color="#000"
                                                    sx={{ listStyleType: 'disc', '&::marker': { color: 'primary.main' } }}
                                                >
                                                    {point}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Typography variant="h6" fontWeight={700} mt={4} mb={2} sx={{ textAlign: 'start' }}>
                                {content.subheading1}
                            </Typography>

                            {content.paragraph3.map((item, index) => (
                                <Box key={index} mb={3}>
                                    <Typography variant="h6" color="#000" sx={{ textAlign: 'start' }}>
                                        {item.title}
                                    </Typography>
                                    {item.description.map((desc, idx) => (
                                        <Typography key={idx} variant="body2" color="#000" sx={{ textAlign: 'start', mb: 1 }}>
                                            {desc}
                                        </Typography>
                                    ))}
                                </Box>
                            ))}



                            <Typography variant="h6" fontWeight={700} mt={4} mb={2} sx={{ textAlign: 'start' }}>
                                {content.subheading2}
                            </Typography>

                            <Typography variant="body2" color="#000" sx={{ textAlign: 'start' }}>
                                {content.paragraph4}
                            </Typography>
                            <Box
                                sx={{
                                    backgroundColor: '#0f63a5',
                                    borderLeft: '4px solid #000',
                                    px: 3,
                                    pt: 4,
                                    pb: 2,
                                    borderRadius: 2,
                                    my: 4,
                                    position: 'relative',
                                }}
                            >
                                <Typography variant="subtitle2" color="#fff" textAlign='start' sx={{ mb: 2 }}>
                                    {content.conclusion.conclusiontitle}
                                </Typography>
                                <Typography variant="body1" fontWeight={500} mb={1} sx={{ color: '#fff', textAlign: 'start' }}>
                                    {content.conclusion.conclusionText}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}
                        sx={{
                            position: 'sticky',
                            top: 10,
                            alignSelf: 'flex-start',
                            textAlign: 'left',
                            display:{xs:'none',md:'block'}
                        }}>
                        <Box
                            sx={{
                                px: 2,
                                py: 3,
                                backgroundColor: '#0f63a5',
                                color: '#fff',
                                borderRadius: 2,
                                border: '1px solid #000',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                            }}
                        >
                            {/* Categories */}
                            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff',mb:3,textAlign:'center' }}>
                                Categories
                            </Typography>
                            <List dense>
                                {content.categories.map((cat, idx) => (
                                    <ListItem
                                        key={idx}
                                        disablePadding
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            color: 'white',
                                            py: 0.5,
                                        }}
                                    >
                                        <ListItemText
                                            primary={cat}
                                            primaryTypographyProps={{ style: { color: 'white' } }}
                                        />
                                        <ListItemIcon sx={{ minWidth: 'auto', color: '#fff' }}>
                                            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                                        </ListItemIcon>
                                    </ListItem>
                                ))}
                            </List>

                            <Divider sx={{ my: 3, borderColor: '#fff' }} />

                            {/* Recent Posts */}
                            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' ,mb:3,textAlign:'center'}}>
                                Recent Post
                            </Typography>
                            <Stack spacing={2}>
                                {content.recentPosts.map((post, idx) => {
                                    const matchedBlog = blogContent.find(blog => blog.title === post.title); // get the blog object to extract the `id`

                                    if (!matchedBlog) return null;

                                    return (
                                        <Link
                                            to={`/blog/${matchedBlog.id}`}
                                            key={idx}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Box sx={{ display: 'flex', gap: 2 }}>
                                                <Avatar
                                                    src={post.image}
                                                    alt={post.title}
                                                    variant="rounded"
                                                    sx={{ width: 60, height: 60 }}
                                                />
                                                <Box>
                                                    <Stack direction="row" alignItems="center" spacing={1}>
                                                        <AccessTimeIcon sx={{ fontSize: 14, color: '#fff' }} />
                                                        <Typography variant="caption" color="grey.400">
                                                            {post.date}
                                                        </Typography>
                                                    </Stack>
                                                    <Typography
                                                        variant="body2"
                                                        fontWeight={600}
                                                        color="#f9fafb"
                                                        sx={{ mt: 0.5 ,textAlign:'start'}}
                                                    >
                                                        {post.title}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Link>
                                    );
                                })}
                            </Stack>

                            <Divider sx={{ my: 3, borderColor: '#fff' }} />

                            {/* Tags */}
                            <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' ,mb:3,textAlign:'center'}}>
                                Tags
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {content.tags.map((tag, idx) => (
                                    <Chip
                                        key={idx}
                                        label={tag}
                                        variant="outlined"
                                        sx={{
                                            borderColor: '#fff',
                                            width:'100%',
                                            color: '#fff',
                                            fontSize: 14,
                                            px: 1,
                                            borderRadius: 1,
                                            '&:hover': {
                                                backgroundColor: '#fff',
                                                color:'primary.main'
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
            <Box>

            </Box>
        </Box>

    );
};

export default BlogContentFromJson;
