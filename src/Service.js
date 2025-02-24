import React from "react";
import axios from "axios";

const PostRequestButton = () => {
    const handlePostRequest = async () => {
        const url = "http://lms-core:8080/auth/login";
        const data = {
            login: "admin@gmail.com",
            password: "Admin123!"
        };

        try {
            const response = await axios.get(url, {
                withCredentials: true, // Include credentials (if needed)
            });
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <button onClick={handlePostRequest}>Send POST Request</button>;
};

export default PostRequestButton;
