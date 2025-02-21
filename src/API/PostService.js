import axios from "axios";

export default class PostService{
    static async pushLogin(login, password){
        const url = "http://localhost:8080/auth/login";
        const data = {
            login: login,
            password: password
        };

        try {
            const response = await axios.post(url, data);
            console.log("Response:", response.data);
            return response;
        } catch (error) {
            console.error("Error:", error);
        }
    }
}