import axios from "axios"

const getAllMarketsDataServices = async () => {
    try {
        const response = await axios('http://localhost:5001/Stores/Market');
        return response;
    } catch (error) {
        throw error;
    }
};

export {
    getAllMarketsDataServices
};