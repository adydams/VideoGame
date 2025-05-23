import axios from "axios"

export default axios.create(
{
    baseURL:"https://api.rawg.io/api/games?", 
    params: {
        key: '3bb96d76b6684410a1e06b76092b17ee'
    }
}
)