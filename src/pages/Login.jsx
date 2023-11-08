/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [user, setUser] = useState({
    image: "",
    name: "your name",
  });
  const schema = yup.object().shape({
    files: yup.mixed().test("required", "Please select file", (value) => {
      return value && value.length;
    }),
    name: yup.string().required(),
  });
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result.toString());
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    if (data.files.length > 0) {
      const image = await convertToBase64(data.files[0]);
      setUser({
        image: image,
        name: data.name,
      });
      localStorage.setItem("user", JSON.stringify({ image, name: data.name }));
    }
    navigate("/form");
  };

  return (
    <div className="flex h-full bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[588px] sm:w-[350px] flex flex-col items-center justify-center m-auto  h-[688px] bg-white rounded-[25px]"
      >
        <h1 className="text-5xl font-semibold capitalize mb-11">get started</h1>
        <p className="mb-[10px]">add a photo</p>
        <label className="mb-[53px]" htmlFor="img-upload">
          <div
            className="bg-[#E6EBFF]
             flex items-center justify-center w-[122px] h-[122px]
          cursor-pointer rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.3"
              height="40.35"
              viewBox="0 0 44.3 40.35"
            >
              <path
                id="add_a_photo_FILL0_wght400_GRAD0_opsz48"
                d="M38.65,15.3V11h-4.3V8h4.3V3.65h3V8H46v3H41.65v4.3ZM4.7,44a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,1.7,41V15.35a2.906,2.906,0,0,1,.9-2.075,2.841,2.841,0,0,1,2.1-.925h7.35L15.7,8h14v3H17.1l-3.65,4.35H4.7V41h34V20h3V41a2.841,2.841,0,0,1-.925,2.1A2.906,2.906,0,0,1,38.7,44Zm17-7.3a8.37,8.37,0,0,0,8.5-8.55,8.137,8.137,0,0,0-2.45-6.025A8.263,8.263,0,0,0,21.7,19.7a8.287,8.287,0,0,0-8.5,8.45,8.324,8.324,0,0,0,2.425,6.1A8.2,8.2,0,0,0,21.7,36.7Zm0-3a5.305,5.305,0,0,1-3.95-1.575A5.435,5.435,0,0,1,16.2,28.15a5.288,5.288,0,0,1,1.55-3.9A5.35,5.35,0,0,1,21.7,22.7a5.372,5.372,0,0,1,3.925,1.55,5.244,5.244,0,0,1,1.575,3.9,5.388,5.388,0,0,1-1.575,3.975A5.327,5.327,0,0,1,21.7,33.7ZM21.7,28.2Z"
                transform="translate(-1.7 -3.65)"
              />
            </svg>
          </div>
        </label>
        <input
          type="file"
          {...register("files")}
          id="img-upload"
          className="hidden"
        />

        <label htmlFor="name" className="mb-4">
          fill in your name
        </label>
        <input
          id="name"
          required
          {...register("name")}
          className="mb-[76px] md:w-[487px]  md:p-[22px] bg-[#E6EBFF] sm:w-[300px] sm:p-4"
          placeholder="your name"
          type="text"
        />
        {errors.files && <span>{errors.files.message}</span>}
        <input
          type="submit"
          value={"Sign in"}
          className="capitalize 
           text-white font-normal text-2xl rounded-[50px]
             bg-[#4980C0]
            w-[395px] h-[74px]"
        />
      </form>
    </div>
  );
}

export default Login;
