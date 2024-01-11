import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { FaUtensils } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import usePic from "../../hooks/usePic";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const HomePage = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } =useContext(AuthContext);

    const [pic,isLoading] =usePic();

    if(isLoading){
        <p>Loading...........</p>
    }

    //console.log("pic  : ",pic.length())

    console.log(pic);
   

    const onSubmit = async (data) => {

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
                name: user.email,
                image: res.data.data.display_url
            }
            console.log("my data : ", menuItem)
            const menuRes = await axios.post('http://localhost:5000/pic', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
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

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* image */}
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>

                </form>
            </div>

            <div>
                
            </div>







        </div>
    );
};

export default HomePage;