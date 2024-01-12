import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useCPerson = () => {
    const {data: CPerson = [] ,isLoading : CLoading,refetch} = useQuery({

        queryKey:['CPerson'],
        queryFn: async() => {

            const result = await axios.get('https://listtube-server.vercel.app/cPerson') // query patabo
            return result.data;

        }

    })

  

    return [CPerson,CLoading,refetch];
};

export default useCPerson;