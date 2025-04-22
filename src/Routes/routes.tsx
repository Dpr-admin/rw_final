import { createBrowserRouter } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound/NotFound";
import Layout from "../LayoutTwo/Layout";
// import About from "../Pages/About";
// import Services from "../Pages/Services";
// import ServicesDetails from "../Pages/Services/ServicesDetails";
// import Portfolio from "../Pages/Portfolio";
// import PortfolioDetails from "../Pages/Portfolio/PortfolioDetails";
// import AllPortfolioDetails from "../Pages/Portfolio/PortfolioDetails/AllPortfolioDetails";
// import Blog from "../Pages/Blog";
// import AllBlogDetails from "../Pages/Blog/BlogDetails/AllBlogDetails";
// import Contactus from "../Pages/Contactus";
// import MentoringServices from "../Pages/Services/ServicesDetails/MentoringService";
// import SalesServices from "../Pages/Services/ServicesDetails/SalesServices";
// import Branding from "../Pages/Services/ServicesDetails/Branding";
// import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import {Dashboard, About,Services ,ServicesDetails,Portfolio,AllPortfolioDetails,Blog,
  AllBlogDetails,Contactus,MentoringServices,SalesServices,Branding,
  Projects,

} from '../Pages/Exports';




const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Dashboard />, 
  //   errorElement: <NotFound />, 
  // },

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/aboutus",
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
        path:"/services/mentoring",
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
        path: "/blog",
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
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/projectdetails",
        element: <ProjectDetails/>,
      },

    ]
  }
]);




export default router;
