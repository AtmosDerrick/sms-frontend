import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCross } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function StudentDetails() {
  const student = {
    firstName: "John",
    lastName: "Doe",
    age: 12,
    class: "Primary 1",
    gender: "Male",
    admissionId: "123456",
    dateOfAdmission: "2024-03-05",
    dateOfBirth: "2010-01-01",
    position: 5,
    state: "None",
    gurdian: "Mr. Owusu",
    gurdianContact: "059 413 2077",
    gurdianlocation: "Weija - Accra",
  };

  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto ">
      <div>
        <Navbar />
        <div
          className="w-8 mt-4 h-8 rounded-full bg-primary flex justify-center items-center ml-12 hover:cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl font-semibold text-white "
          />
        </div>
      </div>
      <div className="mt-8 flex justify-between px-12">
        <div className="w-full flex justify-start gap-4">
          <div className="w-32 h-32 rounded-xl bg-gray-300">
            <img
              src="https://www.uwindsor.ca/supportuwindsor/sites/uwindsor.ca.supportuwindsor/files/styles/full/public/impact_story_image_new.jpg?itok=r8ng6XEP"
              alt="student profile Image"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div className="w-full flex justify-end gap-8">
          <div>
            <button className="bg-blue-500 py-1 px-4 rounded-md text-white shadow-lg">
              Performance
            </button>
          </div>
          <div>
            <button className="bg-green-500 py-1 px-4 rounded-md text-white shadow-lg">
              Edit
            </button>
          </div>

          <div>
            <button className="bg-red-500 py-1 px-4 rounded-md text-white shadow-lg">
              Out
            </button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-12 mt-12 px-12">
        <div className=" w-full h-full">
          <div>
            <h5 className="text-gray-600 ">First Name</h5>
            <h4 className="text-base font-semibold">{student.firstName}</h4>
          </div>

          <div className="mt-12">
            <h5 className="text-gray-600 ">Last Name</h5>
            <h4 className="text-base font-semibold">{student.lastName}</h4>
          </div>

          <div className="mt-12">
            <h5 className="text-gray-600 ">Date of Birth</h5>
            <h4 className="text-base font-semibold">{student.dateOfBirth}</h4>
          </div>

          <div className="mt-12">
            <h5 className="text-gray-600 ">Age</h5>
            <h4 className="text-base font-semibold">{student.age}</h4>
          </div>
        </div>

        <div className=" w-full h-full">
          <div>
            <h5 className="text-gray-600 ">Admission Id</h5>
            <h4 className="text-base font-semibold">{student.admissionId}</h4>
          </div>

          <div className="mt-12">
            <h5 className="text-gray-600 ">Class</h5>
            <h4 className="text-base font-semibold">{student.class}</h4>
          </div>

          <div>
            <h5 className="text-gray-600 mt-12 ">Date of Admission</h5>
            <h4 className="text-base font-semibold">
              {student.dateOfAdmission}
            </h4>
          </div>

          <div>
            <h5 className="text-gray-600 mt-12 ">Class Position</h5>
            <h4 className="text-base font-semibold">{student.position}</h4>
          </div>
        </div>
        <div className=" w-full h-full">
          <div>
            <h5 className="text-gray-600  ">Parent / Gurdian</h5>
            <h4 className="text-base font-semibold">{student.gurdian}</h4>
          </div>

          <div>
            <h5 className="text-gray-600 mt-12">Gurdian Contact</h5>
            <h4 className="text-base font-semibold">
              {student.gurdianContact}
            </h4>
          </div>

          <div>
            <h5 className="text-gray-600 mt-12">Gurdian Location</h5>
            <h4 className="text-base font-semibold">
              {student.gurdianlocation}
            </h4>
          </div>
          <div>
            <h5 className="text-gray-600 mt-12">State</h5>
            <h4 className="text-base font-semibold">{student.state}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
