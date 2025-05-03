import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Container, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SmoothWaveText from '../../Components/SmoothWaveText';
import ImageReveal from '../../Components/ImageReveal';
import EastIcon from '@mui/icons-material/East';
import Marquee from 'react-fast-marquee';
import axios from 'axios';
import { blogContent } from '../Blog/BlogDetails/blogContent';

interface Blog {
  id: string;
  title: string;
  date: string;
  image: string;
  source: 'static' | 'api';
  slug: string;
}

const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const mapStaticBlogs = (): Blog[] =>
  blogContent.map(({ id, title, date, blogtitleImage }) => ({
    id,
    title,
    date,
    image: blogtitleImage,
    source: 'static',
    slug: slugify(title),
  }));

const marqueeWords = Array(10).fill('BLOGS');

const BlogSection = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const blogsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get<{ blogs: any[] }>(
          'https://blog.dprprop.com/clients/6814779c33c366561f26aec9/blogs'
        );

        const apiBlogs: Blog[] = (res.data.blogs || []).map((b) => ({
          id: b._id,
          title: b.title,
          date: new Date(b.createdAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          image: `https://dprstorage.b-cdn.net${b.imageurl}`,
          source: 'api',
          slug: slugify(b.title),
        }));

        const combinedBlogs = [...apiBlogs, ...mapStaticBlogs()];
        setAllBlogs(combinedBlogs);
      } catch (err) {
        console.error('Error fetching API blogs:', err);
        setAllBlogs(mapStaticBlogs());
      }
    };

    fetchAPI();
  }, []);

  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const currentBlogs = allBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

  return (
    <Box sx={{ color: '#000', pt: 6 }}>
      {/* Header & Marquee */}
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
                onClick={() => navigate('/blogs')}
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
                  fontSize: { xs: '40px', md: '90px' },
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

      {/* Blog List */}
      <Container maxWidth="xl" >
        <Box sx={{ px: 5, pt: 5 }}>

          {currentBlogs.map((post, index) => {
            const isEven = index % 2 === 0;
            return (
              <Box
                key={post.id}
                onClick={() =>
                  navigate(post.source === 'static' ? `/blog/${post.id}` : `/blogs/${post.slug}`)
                }
                sx={{
                  cursor: 'pointer',
                  borderTop: index !== 0 ? '1px solid #777777' : 'none',
                  borderBottom: index === currentBlogs.length - 1 ? '1px solid #777777' : 'none',
                }}
              >
                <Grid
                  container
                  spacing={3}
                  alignItems="center"
                  py={3}
                  sx={{ flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' } }}
                >
                  <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }} sx={{ textAlign: 'start' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      ● {post.date}
                    </Typography>
                    <SmoothWaveText
                      variant="h1"
                      style={{ fontSize: '24px', fontWeight: 700 }}
                      sx={{ my: 2 }}
                    >
                      {post.title}
                    </SmoothWaveText>
                    <Typography
                      variant="h6"
                      sx={{ color: 'primary.main', fontWeight: 700, display: 'flex', alignItems: 'center' }}
                    >
                      Read the story <EastIcon sx={{ fontSize: '1rem', ml: 1 }} />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                    <ImageReveal
                      src={post.image}
                      alt={post.title}
                      width="100%"
                      height="auto"
                      threshold={0.8}
                      scaleDuration={3}
                    />
                  </Grid>
                </Grid>
              </Box>
            );
          })}

          {/* MUI Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              shape="rounded"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
