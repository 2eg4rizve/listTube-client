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
    const [CPerson, CLoading] = useCPerson();

    const [upId,setUpId] = useState("");



    if (isLoading || CLoading) {
        <p>Loading...........</p>
    }

    //console.log("pic  : ",pic.length())

    //console.log(pic);

   // console.log("CPerson : ", CPerson);


    const onSubmit = async (data) => {

       

        console.log("upId : ",upId);

        console.log(data)

        // image upload to imgbb and then get an url

        const imageFile = { image: data.image[0] }

        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
                image: res.data.data.display_url
            }

            console.log("my data : ", menuItem)

            const menuRes = await axios.post('http://localhost:5000/pic', menuItem);

            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                //reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Add Photo Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log('with image url', res.data);
    };



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

                                               

                                                {
                                                    <div className="h-[10px] flex justify-end ">
                                                        <div>
                                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                                {/* image */}
                                                                <div className="form-control w-full my-[10px] btn-sm">
                                                                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                                                </div>

                                                                <button className="btn btn-sm ">
                                                                    Add Item <MdAttachment className="ml-4"></MdAttachment>
                                                                </button>

                                                            </form>
                                                        </div>
                                                    </div>

                                                }



                                            </div>
                                        </div>)

                                    }





                                </div>




                            }
                        </div>


                    </div>






                    {/* 2 */}

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

                                               

                                                {
                                                    <div className="h-[10px] flex justify-end ">
                                                        <div>
                                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                                {/* image */}
                                                                <div className="form-control w-full my-[10px] btn-sm">
                                                                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                                                </div>

                                                                <button className="btn btn-sm ">
                                                                    Add Item <MdAttachment className="ml-4"></MdAttachment>
                                                                </button>

                                                            </form>
                                                        </div>
                                                    </div>

                                                }



                                            </div>
                                        </div>)

                                    }





                                </div>




                            }
                        </div>


                    </div>


                    {/* 3 */}

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

                                               

                                                {
                                                    <div className="h-[10px] flex justify-end ">
                                                        <div>
                                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                                {/* image */}
                                                                <div className="form-control w-full my-[10px] btn-sm">
                                                                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                                                                </div>

                                                                <button className="btn btn-sm ">
                                                                    Add Item <MdAttachment className="ml-4"></MdAttachment>
                                                                </button>

                                                            </form>
                                                        </div>
                                                    </div>

                                                }



                                            </div>
                                        </div>)

                                    }





                                </div>




                            }
                        </div>


                    </div>

                 

                    {/* 4 */}

                  
                  





                </div>

            </div>









        </div>
    );
};

export default HomePage;