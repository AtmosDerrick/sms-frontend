import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterStudents() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    class: "",
    gender: "",
    role: "",
    dob: "",
    location: "",
    profileImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="w-3/4 mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-start gap-x-8 ">
        <div
          className="w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl font-semibold text-white "
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Student Registration Form</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className="block font-medium text-gray-700">
            Profile Image
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="class" className="block font-medium text-gray-700">
            Class
          </label>
          <select
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md">
            <option value="">Select Class</option>
            <option value="krech">Kindergarten</option>
            <option value="primary1">Primary 1</option>
            <option value="primary2">Primary 2</option>
            <option value="primary3">Primary 3</option>
            <option value="primary4">Primary 4</option>
            <option value="primary5">Primary 5</option>
            <option value="primary6">Primary 6</option>
            <option value="jhs1">JHS 1</option>
            <option value="jhs2">JHS 2</option>
            <option value="jhs3">JHS 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-1/4 bg-primary text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterStudents;
