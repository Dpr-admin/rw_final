import React from 'react'

const LinkedinBlogs = () => {
  return (
    <div>
      
    </div>
  )
}

export default LinkedinBlogs







// import React, { useEffect, useState } from 'react';
// import { Box, Container, Grid, Typography } from '@mui/material';
// import EastIcon from '@mui/icons-material/East';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ImageReveal from '../../../Components/ImageReveal';
// import SmoothWaveText from '../../../Components/SmoothWaveText';

// // Generate slug from title
// const slugify = (text: string) =>
//     text
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with dash
//         .replace(/(^-|-$)+/g, '');   // remove leading/trailing dashes


        
// const BlogList: React.FC = () => {
//     const [blogs, setBlogs] = useState<any[]>([]);
//     const navigate = useNavigate();
//     const clientId = '6814779c33c366561f26aec9';

//     useEffect(() => {
//         axios
//             .get(`https://blog.dprprop.com/clients/${clientId}/blogs`)
//             .then((res) => setBlogs(res.data.blogs || []))
//             .catch((err) => console.error('Error fetching blogs:', err));
//     }, []);

//     return (
//         <Container maxWidth='xl'>

//             <Box style={{ padding: '2rem' }}>
//                 {blogs.map((post, index) => {
//                     const isEven = index % 2 === 0;
//                     const slug = slugify(post.title);

//                     return (
//                         <Box
//                             key={post._id}
//                             onClick={() => navigate(`/blogs/${slug}`)}
//                             sx={{
//                                 cursor: 'none',
//                                 borderTop: index !== 0 ? '1px solid #777777' : 'none',
//                                 borderBottom: index === post.length - 1 ? '1px solid #777777' : 'none',
//                                 // py: 3,
//                             }}
//                         >
//                             <Grid
//                                 container
//                                 spacing={3}
//                                 alignItems="center"
//                                 py={3}
//                                 sx={{
//                                     flexDirection: {
//                                         xs: 'column',
//                                         md: isEven ? 'row' : 'row-reverse',
//                                     },
//                                 }}
//                             >
//                                 <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }} sx={{ textAlign: 'start', }}>
//                                     <Typography variant="h6" sx={{ color: 'primary.main' }}>
//                                         ● {new Date(post.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
//                                     </Typography>
//                                     <SmoothWaveText variant='h5' sx={{ fontsize: "20px", my: 2, fontWeight: 700 }}>
//                                         {post.title}
//                                     </SmoothWaveText>
//                                     <Typography
//                                         className='cursor-hover-target'
//                                         variant='h6'
//                                         sx={{
//                                             color: 'primary.main',
//                                             fontWeight: 700,
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'start',
//                                         }}
//                                     >
//                                         <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 700 }}>
//                                             Read the story
//                                         </Typography>
//                                         <EastIcon sx={{ fontSize: '1rem', ml: 1, fontWeight: 700 }} />
//                                     </Typography>
//                                 </Grid>
//                                 <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
//                                     <ImageReveal
//                                         src={`https://dprstorage.b-cdn.net${post.imageurl}`}
//                                         alt={post.title}
//                                         width="100%"
//                                         height="auto"
//                                         threshold={0.8}
//                                         scaleDuration={3}
//                                     />
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     );
//                 })}
//             </Box>
//         </Container>
//     );
// };

// export default BlogList;
