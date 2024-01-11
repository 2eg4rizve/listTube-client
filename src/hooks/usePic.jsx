import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const usePic = () => {


    const {data: pic = [] ,isLoading} = useQuery({

        queryKey:['pic'],
        queryFn: async() => {

            const result = await axios.get('http://localhost:5000/pic') // query patabo
            return result.data;

        }

    })

  

    return [pic,isLoading];
};

export default usePic;