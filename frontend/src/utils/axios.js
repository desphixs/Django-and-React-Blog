// Import the Axios library to make HTTP requests. Axios is a popular JavaScript library for this purpose.
import axios from 'axios';

// Create an instance of Axios and store it in the 'apiInstance' variable. This instance will have specific configuration options.
const apiInstance = axios.create({
    // Set the base URL for this instance. All requests made using this instance will have this URL as their starting point.
    baseURL: 'http://127.0.0.1:8000/api/v1/',

    // Set a timeout for requests made using this instance. If a request takes longer than 5 seconds to complete, it will be canceled.
    timeout: 50000, // timeout after 5 seconds

    // Define headers that will be included in every request made using this instance. This is common for specifying the content type and accepted response type.
    headers: {
        'Content-Type': 'application/json', // The request will be sending data in JSON format.
        Accept: 'application/json', // The request expects a response in JSON format.
    },
});

// Export the 'apiInstance' so that it can be used in other parts of the codebase. Other modules can import and use this Axios instance for making API requests.
export default apiInstance;
