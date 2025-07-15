import axios from 'axios';
import { APIURL } from './URL';

const BaseUrl = APIURL();

export const post = async (data) => {
    try {
      const res = await axios.post(`${BaseUrl}/user/login`, data);
      if (res.data.status) {
        console.log("Response Login", res)
        return res.data;
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed.");
    }
};

export const getBusiness = async (BusinessId) => {
    try {
        const response = await axios.get(`${BaseUrl}/plan/subscription/${BusinessId}`, {
            // headers: {
            //     Authorization: `Bearer ${authTokenExist}`
            // }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user list:", error.message || error);
        throw error;
    }
};

