import { useQuery } from "@tanstack/react-query";
// import { request } from "../utils/axios-utils";
import axios from "axios";




const fetchUsers = async () => {
    try {

        // return request({ url: "/users", method: 'get' });
        return await axios.get('https://jsonplaceholder.typicode.com/users')
    } catch {
        throw console.error('error');

    }
}

export function useFetchUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })
}