import axios from "axios";

export class BaseApiService {
    baseAxios = axios.create({
        baseURL: "https://assignment-api.piton.com.tr/api/v1/",
    });

}
