import axios from "axios";

class userApi 
{
    static editUser(id)
    {
        // console.log(id)
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
}

export default userApi;