import axios from "axios"

const getAllStoresDataServices=async()=>{
    try {
        const response = await axios('http://localhost:5001/Stores/Store');
        return response;
    } catch (error) {
        throw error;
    }
};

export {
    getAllStoresDataServices
};