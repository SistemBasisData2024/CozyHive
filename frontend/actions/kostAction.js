import axios from "axios";

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const addKost = async (kostData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/kost/addkost`,
            kostData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const editKost = async (id, kostData) => {
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/profile/mykost/editkost/${id}`,
            kostData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const fetchAllKosts = async () => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/getAllKost`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const addReview = async (reviewData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/addReview`,
            reviewData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const addBooking = async (bookingData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/addBooking`,
            bookingData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const fetchAllReviews = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/getAllReviews`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const fetchAllBookings = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/getAllBookings`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const filterKost = async (formData) => {
    console.log(formData);
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/getAllKost`, formData
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};