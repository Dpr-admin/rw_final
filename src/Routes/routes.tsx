import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Layout from "../LayoutTwo/Layout";
// import {Dashboard, About,Services ,ServicesDetails,Portfolio,AllPortfolioDetails,Blog,
//   AllBlogDetails,Contactus,MentoringServices,SalesServices,Branding,Faqs

// } from '../Pages/Exports';
import LinkedinBlogDetails from "../Pages/Blog/BlogDetails/LinkedinBlogDetails";
import Dashboard from "../Pages/Dashboard";
import About from "../Pages/About";
import Services from "../Pages/Services";
import MentoringServices from "../Pages/Services/ServicesDetails/MentoringService";
import SalesServices from "../Pages/Services/ServicesDetails/SalesServices";
import Branding from "../Pages/Services/ServicesDetails/Branding";
import Portfolio from "../Pages/Portfolio";
import AllPortfolioDetails from "../Pages/Portfolio/PortfolioDetails/AllPortfolioDetails";
import Blog from "../Pages/Blog";
import AllBlogDetails from "../Pages/Blog/BlogDetails/AllBlogDetails";
import Contactus from "../Pages/Contactus";
import Faqs from "../Pages/Faqs";
import ProjectDetails from "../Pages/Services/ServicesDetails/SalesServices/ProjectDetails";







const router = createBrowserRouter([


  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      // {
      //   path:"/services/:id",
      //   element:<ServicesDetails/>

      // },
      {
        path:"/services/real-estate-mentor",
        element:<MentoringServices/>

      },
      {
        path:"/services/sales",
        element:<SalesServices/>

      },
      {
        path:"/services/branding",
        element:<Branding/>

      },

      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/portfolio/:id",
        element: <AllPortfolioDetails/>,
      },
      {
        path: "/blogs",
        element: <Blog/>,
      },
      {
        path: "/blog/:id",
        element: <AllBlogDetails/>,
      },
      {
        path: "/contactus",
        element: <Contactus/>,
      },
      {
        path: "/faqs",
        element: <Faqs/>,
      },
      {
        path: "/blogs/:slug",
        element: <LinkedinBlogDetails/>,
      },
      
      

    ]
  },
  {
    path: "*", // Catch-all route for 404 Not Found
    element: <NotFound />,
  },
  {
        path: "/megalio",
        element: <ProjectDetails/>,
      },
]);




export default router;
