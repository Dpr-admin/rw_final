import React, { ReactNode, ReactElement } from 'react';
import { Box, Container, Typography } from '@mui/material';

interface HeroHeadlineProps {
  children: ReactNode;
}

const HeroHeadline: React.FC<HeroHeadlineProps> = ({ children }) => {
  return (
    <Box
      sx={{
        height: {xs:'65vh',md:'100vh'}, // Full screen height
        display: 'flex',
        alignItems: 'center', // Vertical center
        justifyContent: 'center', // Horizontal center
        // px: 4,
        // backgroundColor: '#121212',
        textAlign: { xs: 'center', md: 'center' },
        mt:4
      }}
    >
        <Container maxWidth='lg'>

            <Typography
                variant="h3"
                component="h1"
                sx={{
                fontWeight: 700,
                fontSize: { xs: '32px', md: '52px' },
                lineHeight: 1.3,
                color: '#fff',
                textAlign: 'center', // Ensure text is centered
                }}
            >
                {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return null;

                const el = child as ReactElement<any>;
                const styleProps =
                    el.props['data-outline']
                    ? {
                        WebkitTextStroke: '1px black',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        }
                    : el.props['data-highlight']
                    ? {
                        fontWeight: 800,
                        textDecoration: 'underline',
                        color:'primary.main'
                        }
                    : {};

                return (
                    <>
                    <Box
                        component="span"
                        sx={{
                        display: 'inline',
                        ...styleProps,
                        }}
                    >
                        {el.props.children}
                    </Box>
                    {index < React.Children.count(children) - 1 && ' '}
                    </>
                );
                })}
            </Typography>
        </Container>
    </Box>
  );
};

export default HeroHeadline;
