// App.tsx
import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './Routes/routes';
import { theme } from './Theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Preloader from './Components/Preloader';
import CustomCursor from './Components/CustomCursor';
import Preloader2 from './Components/Preloader2';
// import { CustomCursor } from './Components/CustomCursor'; // Use named import

// Create a new instance of QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box className="App">

          {/* <CustomCursor />
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}

{isLoading ? (
            // Display Preloader if still loading
            // <Preloader2
            //   videoSrc="https://dprstorage.b-cdn.net/RW/whitepreloder.mp4"
            //   onEnd={() => setIsLoading(false)} // Set loading to false when the Preloader finishes
            // />
            <Preloader2
            desktopVideoSrc="https://dprstorage.b-cdn.net/RW/whitepreloder.mp4"
            mobileVideoSrc="https://dprstorage.b-cdn.net/RW/mobilepreloder.mp4"
            onEnd={() => setIsLoading(false)}
          />
          ) : (
            <>
              {/* RouterProvider is loaded once the Preloader finishes */}
              <RouterProvider router={router} />
              <CustomCursor />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              
            </>
          )}

        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;







