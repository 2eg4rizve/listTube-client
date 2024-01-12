/* eslint-disable no-unused-vars */
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { MdAttachment } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import usePic from "../../hooks/usePic";
import useCPerson from "../../hooks/useCPerson";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const HomePage = () => {

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);

    //console.log({ user })

    // eslint-disable-next-line no-unused-vars
    const [pic, isLoading] = usePic();
    const [CPerson, CLoading,refetch] = useCPerson();

    // eslint-disable-next-line no-unused-vars
    const [upId, setUpId] = useState("");
    const [cnt, setCnt] = useState("");



    if (isLoading || CLoading) {
        <p>Loading...........</p>
    }

    const handleUpdate = (item) => {
      
      
        console.log("item : ",item);
        // console.log("cnt : ", cnt);
        // console.log("id : ", id);

        let x= item.cnt;
        x++;

        



        const updateData = {
            Cname: item.Cname,
            cnt: x,
            CImage: item.CImage,
        };
        console.log(updateData);

        fetch(`http://localhost:5000/cPerson/${item._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                  icon: "success",
                  title: "Wow...",
                  text: "Add successfully",
                  confirmButtonText: "cool",
                });
              }
            
          });


    }






    return (
        <div>



            <div className="overflow-x-auto w-[1250px] h-[500px] p-4 border mt-[50px] mb-[100px]">

                <div className="mt-[50px] flex gap-10 mb-[50px]">

                    {/* 1 */}


                    <div>
                        <div className="overflow-y-auto  h-[400px]  p-10 border w-[450px]">

                            {
                                <div>

                                    {
                                        CPerson.map((item) => <div key={item._id}>
                                            <div className=" mt-[10px] border-red-300 border-2 h-[180px] p-[5px] ">

                                                <div className="flex justify-between gap-3">

                                                    <div className="flex gap-2">
                                                        <div className="mask mask-squircle w-6 h-6">
                                                            <img src={item.CImage} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                        <p> {item?.Cname}</p>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        <div className="mask mask-squircle w-6 h-6">
                                                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                        <p> {user?.displayName}</p>

                                                    </div>



                                                </div>

                                                <p className="font-bold">total : {item.cnt}</p>



                                                {/* <form onSubmit={handleUpdate}>



                                                    <button onClick={() => setCnt(item.cnt + 1)} type="submit">Submit</button>


                                                </form> */}


                                                <button
                                                    onClick={() =>handleUpdate(item)}
                                                    className="btn btn-sm"
                                                >
                                                   <MdAttachment className="ml-4"></MdAttachment>
                                                </button>







                                            </div>
                                        </div>)

                                    }





                                </div>




                            }
                        </div>


                    </div>




















                </div>

            </div>









        </div>
    );
};

export default HomePage;