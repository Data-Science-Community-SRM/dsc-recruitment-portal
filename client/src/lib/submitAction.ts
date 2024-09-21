"use server";
import axios from "axios";

export async function register(
  domain: string,
  formData: {
    firstName: string;
    lastName: string;
    registrationNumber: string;
    srmEmail: string;
    personalEmail: string;
    phoneNumber: string;
    department: string;
    year: number;
    github?: string;
    subDomain?: string;
  }
) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + `/api/${domain}`,
      formData
    );
    return await response.data;
  } catch (error: any) {
    console.error(
      "Registration failed:",
      error?.response?.data?.message?.error_description || error.response.data.error.issues[0].message
    );
    // console.error(error.response.data.error.issues[0].path);
    return error.response.data;
  }
}
