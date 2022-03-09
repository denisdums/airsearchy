import config from "../config/api.config";

const postRepository = {
    async getSearchResultsBySearch(search) {
        try {
            const response = await fetch(`${config.apiEndpoint}${search}`);
            return await response.json();
        } catch (err) {
            console.error("error : ", err)
        }
    }
}

export default postRepository