// import { Product } from "../../pages/ProductsFindOne/productsData";
import { http } from "../http";

interface LeadData {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
}


// Email form API
export const contactForm = (data: LeadData) => {
  return http.post("/leads", data);
};







