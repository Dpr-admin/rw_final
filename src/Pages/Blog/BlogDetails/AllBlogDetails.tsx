// components/BlogContentFromJson.tsx
import React from 'react';
import { Box, Typography, Avatar, Chip, Divider, Stack, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import { blogContent } from './blogContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useParams } from 'react-router-dom';
import SmoothWaveText from '../../../Components/SmoothWaveText';

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
            // alignItems: 'flex-start',
                // height: '100vh', 
                display: 'flex',
                flexDirection: 'column',
                
        }}>
            <Box
                sx={{
                    textAlign: 'center',
                    color: '#fff',
                    py: 6,
                    mt: 12,
                }}
            >

                {/* Date */}
                <Typography variant="body2" color="#000" gutterBottom>
                    {content.date}
                </Typography>

                {/* Main Title */}
                <SmoothWaveText
                    variant="h3"
                    
                    sx={{ maxWidth: '700px', mx: 'auto', mt: 1 ,fontWeight:700}}
                >
                    {content.title}
                </SmoothWaveText>

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
                            <Typography variant="caption" color="grey.400">
                                Written by
                            </Typography>
                            <Typography fontWeight={600}>{content.author.name}</Typography>
                        </Box>
                    </Stack>
                </Stack>

                {/* Featured Image */}
                <Box
                    component="img"
                    src={content.featuredImage}
                    alt="Design Discussion"
                    sx={{
                        width: '100%',
                        my: 4,
                    }}
                />
            </Box>
            <Grid container>
                <Grid item xs={12} md={9} style={{ position: 'sticky', top: 0 }}>
                    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, color: '#fff' }}>
                        <Typography variant="body2" color="#000" mb={3} sx={{textAlign:'start'}}>
                            {content.paragraph1}
                        </Typography>

                        <Box
                            sx={{
                                backgroundColor: '#0f63a5',
                                borderLeft: '4px solid #000',
                                px: 3,
                                pt: 10,
                                pb: 2,
                                borderRadius: 2,
                                my: 4,
                                position: 'relative',
                            }}
                        >
                            <Box
                                component="img"
                                src={content.quoteBlock.quoteImage}
                                alt="Quote"
                                sx={{
                                    borderRadius: '16px',
                                    my: 4,
                                    position: 'absolute',
                                    top: -10,
                                    left: 20,
                                }}
                            />

                            <Typography variant="body1" fontWeight={500} mb={1} sx={{ color: '#fff',textAlign:'start' }}>
                                {content.quoteBlock.quoteText}
                            </Typography>
                            <Typography variant="subtitle2" color="#fff" textAlign='start'>
                                {content.quoteBlock.author}
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="#000" mb={3} sx={{textAlign:'start'}}>
                            {content.paragraph2}
                        </Typography>

                        <Typography variant="h6" fontWeight={700} mt={4} mb={2} sx={{textAlign:'start'}}>
                            {content.subheading1}
                        </Typography>

                        <Typography variant="body2" color="#000" mb={3} sx={{textAlign:'start'}}>
                            {content.paragraph3}
                        </Typography>

                        <Box
                            component="img"
                            src={content.imageBlock}
                            alt="Design Discussion"
                            sx={{
                                width: '100%',
                                borderRadius: '16px',
                                my: 4,
                            }}
                        />

                        <Typography variant="h6" fontWeight={700} mt={4} mb={2} sx={{textAlign:'start'}}>
                            {content.subheading2}
                        </Typography>

                        <Typography variant="body2" color="#000" sx={{textAlign:'start'}}>
                            {content.paragraph4}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}
                sx={{
                        position: 'sticky',
                        top: 10, 
                        alignSelf: 'flex-start',
                        // mt: isSmallScreen ? 3 : 0,
                        textAlign: 'left',
                        // height: 'fit-content', 
                       
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
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>
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
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>
                            Recent Post
                        </Typography>
                        <Stack spacing={2}>
                            {content.recentPosts.map((post, idx) => (
                                <Box key={idx} sx={{ display: 'flex', gap: 2 }}>
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
                                            sx={{ mt: 0.5 }}
                                        >
                                            {post.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Stack>

                        <Divider sx={{ my: 3, borderColor: '#fff' }} />

                        {/* Tags */}
                        <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#fff' }}>
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
                                        color: '#fff',
                                        fontSize: 12,
                                        px: 1,
                                        borderRadius: 1,
                                        '&:hover': {
                                            backgroundColor: '#1e1e1e',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>

    );
};

export default BlogContentFromJson;
