import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registeration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("address", data.address);
    formdata.append("gender", data.gender);
    formdata.append("image", data.image);
    axios
      .post("/create", formdata)
      .then((res) => {
        navigate("/employee");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center pt-4">
      <h2>የኮተቤ አድቬንቲስት ቤተክርስትያን የአባልነት መመዝገቢያ ቅጽ </h2>
      <form className="w-full max-w-lg px-5" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="sm:col-span-3 my-2 mr-2">
            <label
              htmlFor="inputName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ስም
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="inputName"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="sm:col-span-3 my-2">
            <label
              htmlFor="inputName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              የአባት ስም
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="inputName"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
        </div>
        <div className="sm:col-span-3 my-2">
          <label
            htmlFor="inputGender"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ጾታ
          </label>
          <input
            type="radio"
            className="text-sm font-medium leading-6"
            id="inputGender"
            name="gender"
            value="Male"
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          ወንድ
          <input
            type="radio"
            className="text-sm font-medium leading-6 mb-5"
            id="inputGender"
            name="gender"
            value="Female"
            onChange={(e) => setData({ ...data, gender: e.target.value })}
          />
          ሴት
        </div>
        <div className="sm:col-span-3 my-2">
          <label
            htmlFor="inputEmail4"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ኢሜል አድራሻ
          </label>
          <input
            type="email"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="sm:col-span-3 my-2">
          <label
            htmlFor="inputPassword4"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="inputPassword4"
            placeholder="Enter Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="sm:col-span-3 my-2">
          <label
            htmlFor="inputAddress"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Address
          </label>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            id="inputAddress"
            placeholder="1234 Main St"
            autoComplete="off"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className="col-span-full my-2">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="inputGroupFile01"
          >
            Select Image
          </label>
          <input
            type="file"
            className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
            id="inputGroupFile01"
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className="my-2 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registeration;
