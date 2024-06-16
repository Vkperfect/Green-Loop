import React, { useState } from "react";
import axios from "axios";
require("@lottiefiles/lottie-player");

const Sell = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("number", number);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("city", city);

      const response = await axios.post("http://localhost:4000/sellItem", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      setName("")
      setNumber("")
      setImage(null)
      setDescription("")

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="flex w-11/12 mx-auto gap-24">
      <div className="w-[40%]">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="/trash.json"
        ></lottie-player>
      </div>
      <div className="w-[50%]  mt-2 mb-2">
        <p className="text-4xl font-bold my-4 text-center text-[#33cc33]">Scrap Collection Form</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="mr-6 font-bold text-[#33cc33] text-xl">
            Name:
          </label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name..."
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="number" className="mr-6 font-bold text-[#33cc33] text-xl">
            Mobile Number:
          </label>
          <br />
          <input
            type="tel"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="Enter your mobile number..."
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="city" className="mr-6 font-bold text-[#33cc33] text-xl">
            City:
          </label>
          <br />
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            placeholder="Enter your city..."
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="image" className="mr-6 font-bold text-[#33cc33] text-xl">
            Image:
          </label>
          <br></br>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br />
          <br />

          <label htmlFor="description" className="mr-6 font-bold text-[#33cc33] text-xl">
            Description:
          </label>
          <br></br>
          <input
            type="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Recyclable Plastic, Papers, Glass "
            className="w-11/12 border rounded-md px-2 py-2 mt-2"
          />
          <br></br>
          <button
            type="submit"
            className="border px-4 py-2 rounded-md mt-4 bg-[#33cc33] text-white float float-right mr-14"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
