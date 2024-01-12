import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCPerson = () => {
    const {data: CPerson = [] ,isLoading : CLoading} = useQuery({

        queryKey:['CPerson'],
        queryFn: async() => {

            const result = await axios.get('http://localhost:5000/cPerson') // query patabo
            return result.data;

        }

    })

  

    return [CPerson,CLoading];
};

export default useCPerson;