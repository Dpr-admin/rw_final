import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Container, Typography, IconButton, Stack, Link, Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageReveal from '../../../Components/ImageReveal';
import SmoothWaveText from '../../../Components/SmoothWaveText';
import { Helmet } from 'react-helmet-async';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const LinkedinBlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<any>(null);

  const profile = {
    name: 'Rajiv WILLIAMS',
    title: 'Uber Luxury Real Estate Sales Mentor',
    description:
      'TGRERA Licensed Realtor • Brand Strategy Expert & Advisor to Real Estate Organizations • Luxury Sales Mastery Trainer',
    avatarUrl:
      'https://dprstorage.b-cdn.net/RW/linkedin.jpeg',
    linkedInUrl: 'https://www.linkedin.com/in/rajivwilliams/',

  };

  useEffect(() => {
    axios
      .get('https://blog.dprprop.com/clients/6814779c33c366561f26aec9/blogs')
      .then((res) => {
        const found = res.data.blogs.find(
          (b: any) => slugify(b.title) === slug
        );
        setBlog(found);
      });
  }, [slug]);

  if (!blog) return <p>Loading blog...</p>;

  const appUrl = `${window.location.origin}/blogs/${slug}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(appUrl)}&text=${encodeURIComponent(blog.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(appUrl)}&title=${encodeURIComponent(blog.title)}`,
  };

  return (
    <Container maxWidth="xl" sx={{ mb: 8 }}>
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription || blog.description} />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.description} />
        <meta
          property="og:image"
          content={`https://dprstorage.b-cdn.net${blog.imageurl || blog.bannerImage}`}
        />
        <meta property="og:url" content={appUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box sx={{ mb: 5, px: { xs: 0, md: 8 }, mt: { xs: '130px', md: '20px' } }}>
        <ImageReveal
          src={`https://dprstorage.b-cdn.net${blog.imageurl}`}
          alt="Blog"
          width="100%"
          height="auto"
          threshold={0.8}
          scaleDuration={3}
          sx={{ mb: 5 }}
        />

        {blog.sections?.map((section: any) => {
          const Tag = section.type as keyof HTMLElementTagNameMap;
          return (
            <Box key={section._id} sx={{ marginBottom: "20px", textAlign: "start" }}>
              {React.createElement(
                Tag,
                { style: { marginBottom: "5px", color: "#000" } },
                <SmoothWaveText variant={section.type as any} sx={{ fontWeight: 700, color: "#000", mb: 2 }}>
                  {section.title}
                </SmoothWaveText>
              )}
              {section.description
                .replace(/\n/g, "\n")
                .split("\n")
                .map((line: string, idx: number) => (
                  <Typography key={idx} variant="body2" sx={{ color: "black", mb: 1 }}>
                    {line}
                  </Typography>
                ))}
            </Box>
          );
        })}

        {/* Social Share Icons */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: 'start', color: 'primary.main' }}>
            Share this story:
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{
                backgroundColor: '#e9f0f7',
                borderRadius: '10px',
                p: 1,
                '&:hover': {
                  backgroundColor: '#dbe8f2',
                },
              }}
            >
              <FacebookIcon color="primary" sx={{ fontSize: '30px' }} />
            </IconButton>

            <IconButton
              component="a"
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              sx={{
                backgroundColor: '#e9f0f7',
                borderRadius: '10px',
                p: 1,
                '&:hover': {
                  backgroundColor: '#dbe8f2',
                },
              }}
            >
              <TwitterIcon color="primary" sx={{ fontSize: '30px' }} />
            </IconButton>

            <IconButton
              component="a"
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                backgroundColor: '#e9f0f7',
                borderRadius: '10px',
                p: 1,
                '&:hover': {
                  backgroundColor: '#dbe8f2',
                },
              }}
            >
              <LinkedInIcon color="primary" sx={{ fontSize: '30px' }} />
            </IconButton>
          </Stack>
        </Box>
        <Link
          href={profile.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: "none",

          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              maxWidth: 1000,
              backgroundColor: '#fff',
              boxShadow: 1,
              mt: 5
            }}
          >
            <Box display="flex" alignItems="start" gap={2}
              sx={{
                flexDirection: { xs: 'column', sm: 'row' }, // ✅ Stack content vertically on mobile
                width: '100%',
              }}
            >
              <Avatar src={profile.avatarUrl} alt={profile.name} sx={{ width: 100, height: 100 }} />
              <Box>
                <Typography fontWeight="bold" sx={{ textAlign: 'start' }}>
                  {profile.name} - {profile.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'start', mt: 1 }}>
                  {profile.description}
                </Typography>
              </Box>
              {/* ✅ Replace LinkedInIcon with image */}
              <Box
                component="img"
                src="https://dprstorage.b-cdn.net/RW/LinkedIn-Logo.wine.png"
                alt="LinkedIn"
                sx={{ width: 160, height: 100 }}
              />
            </Box>
          </Box>

        </Link>

      </Box>
    </Container>
  );
};

export default LinkedinBlogDetails;
