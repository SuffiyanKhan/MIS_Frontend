import axios from "axios"

const addNewTakeoverStoreDevices = async (payload) => {
    try {
        const response = await axios.post("http://localhost:5001/api/StoreTakeOverForm/add-takeover-devices", payload);
        return response;
    } catch (error) {
        throw error
    }
};

const addNewTakeoverStoreDataServices = async (payload) => {
    try {
        const response = await axios.post("http://localhost:5001/api/StoreTakeOverForm/add-takeover-form-data", payload);
        return response;
    } catch (error) {
        throw error;
    }
}

export {
    addNewTakeoverStoreDevices,
    addNewTakeoverStoreDataServices
}