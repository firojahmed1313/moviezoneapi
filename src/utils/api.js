import axios from "axios";

export const httpGet = async (url) => {
    try {
        let res = await axios.get(url);
        return res;
    } catch (err) {
        return console.warn(err);
    }
};

export const httpPost = async (url, payload = {}) => {
    try {
        return await axios.post(url, payload);
    } catch (err) {
        return console.log(err);
    }
};

export const httpPut = async (url, payload = {}) => {
    try {
        return await axios.put(url, payload);
    } catch (err) {
        return console.log(err);
    }
};

export const httpDelete = async (url) => {
    try {
        return await axios.delete(url);
    } catch (err) {
        return console.log(err);
    }
};

/*
async function fetchData() {
  try {
    const response = await axios.get('API_URL');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Call the fetchData function
fetchData()
*/
