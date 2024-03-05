import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import {
  faAdd,
  faEnvelope,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

function Parents() {
  const [search, setSearch] = useState("");
  const [classroom, setClassRoom] = useState("");
  const [studentss, setStudentss] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const studentsPerPage = 6;
  const pagesVisited = pageNumber * studentsPerPage;

  const parent = [
    {
      id: 1,
      name: "Parent 1",
      students: ["Alice", "Bob", "Charlie"],
      phoneNumber: "123-456-7890",
      email: "parent1@example.com",
      location: "Location 1",
    },
    {
      id: 2,
      name: "Parent 2",
      students: ["David", "Eve"],
      phoneNumber: "234-567-8901",
      email: "parent2@example.com",
      location: "Location 2",
    },
    // Add 10 more parent objects
    {
      id: 3,
      name: "Parent 3",
      students: ["Frank", "Grace"],
      phoneNumber: "345-678-9012",
      email: "parent3@example.com",
      location: "Location 3",
    },
    {
      id: 4,
      name: "Parent 4",
      students: ["Henry", "Ivy"],
      phoneNumber: "456-789-0123",
      email: "parent4@example.com",
      location: "Location 4",
    },
    {
      id: 5,
      name: "Parent 5",
      students: ["Jack", "Karen"],
      phoneNumber: "567-890-1234",
      email: "parent5@example.com",
      location: "Location 5",
    },
    {
      id: 6,
      name: "Parent 6",
      students: ["Liam", "Mia"],
      phoneNumber: "678-901-2345",
      email: "parent6@example.com",
      location: "Location 6",
    },
    {
      id: 7,
      name: "Parent 7",
      students: ["Noah", "Olivia"],
      phoneNumber: "789-012-3456",
      email: "parent7@example.com",
      location: "Location 7",
    },
    {
      id: 8,
      name: "Parent 8",
      students: ["Peter", "Quinn"],
      phoneNumber: "890-123-4567",
      email: "parent8@example.com",
      location: "Location 8",
    },
    {
      id: 9,
      name: "Parent 9",
      students: ["Rachel", "Sam"],
      phoneNumber: "901-234-5678",
      email: "parent9@example.com",
      location: "Location 9",
    },
    {
      id: 10,
      name: "Parent 10",
      students: ["Tom", "Uma"],
      phoneNumber: "012-345-6789",
      email: "parent10@example.com",
      location: "Location 10",
    },
    {
      id: 11,
      name: "Parent 11",
      students: ["Victor", "Wendy"],
      phoneNumber: "123-456-7890",
      email: "parent11@example.com",
      location: "Location 11",
    },
  ];

  useEffect(() => {
    setStudentss(parent);
  }, []);

  const filterStudent = (e) => {
    const selectedClassroom = e.target.value;
    if (selectedClassroom != "") {
      setClassRoom(selectedClassroom);
      const classroomFilter = parent.filter((student) => {
        return student.role === selectedClassroom;
      });
      setStudentss(classroomFilter);
      console.log(studentss);
    } else {
      setStudentss(parent);
    }
  };

  const pageCount = Math.ceil(studentss.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="w-full flex justify-start">
      <SideBar page="parents" />
      <div className="w-full ">
        <Navbar />
        <div className="flex justify-between items-center m-4 border-b-[1px] border-gray-900 pb-4">
          <div className="flex justify-start gap-2 items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-lg text-gray-600"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-[2px] border-blue-500 rounded-2xl h-8 p-2 bg-white shadow-md"
            />
          </div>
          <div className="text-lg font-semibold">Parents Record</div>

          <div className="flex justify-start items-center gap-6">
            <div className="w-full">
              <button className="px-6 bg-primary text-white py-[4px] rounded-3xl">
                <FontAwesomeIcon
                  icon={faAdd}
                  className="text-lg text-white pr-[2px]"
                />
                Add Teacher
              </button>
            </div>
            <div className="w-full">
              <select
                className="px-6 py-[4px] border-[2px] border-primary text-primary rounded-3xl"
                value={classroom}
                onChange={filterStudent}>
                <optgroup label="Primary">
                  <option value="">Select Department</option>
                  <option value="senior staff">Staffs</option>

                  <option value="Non-Teaching Staff">
                    Non Teaching Staffs
                  </option>
                  <option value="Teaching Staff">Teaching Staffs</option>
                  <option value="Kitchen Staff">Kitchen Staff</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div>
          {
            //   <ul className="grid grid-cols-4 gap-x-12 mx-4 mt-4">
            //   {
            //     students.map((student, index) => (
            //     <li className="border-2 py-2 rounded-2xl flex justify-start bg-white shadow-md border-primary hover:cursor-pointer">
            //       <div className="w-full flex justify-center">
            //         <img
            //           src={student.image}
            //           alt={student.firstName}
            //           className="w-24 h-24 rounded-md "
            //         />
            //       </div>
            //       <div key={index} className="w-full bg-white rounded-lg ">
            //         <div>
            //           <p className="text-lg font-semibold">
            //             {student.firstName} {student.lastName}
            //           </p>
            //           <p className="text-base italic text-gray-600">
            //             {student.admissionId}
            //           </p>
            //           <p> {student.className}</p>
            //           <p> {student.gender}</p>
            //         </div>
            //       </div>
            //     </li>
            //     ))
            //   }
            // </ul>
          }

          <table className="min-w-full divide-y divide-gray-200 odd:bg-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone No.
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {studentss
                .slice(pagesVisited, pagesVisited + studentsPerPage)
                .map((student, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.students.map((item) => (
                        <div>{item}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.contact}
                    </td>
                    <td className="flex justify-start items-center h-24 gap-x-8  ">
                      <div>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-primary text-xl"
                        />
                      </div>

                      <div>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-primary text-xl"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <ReactPaginate
              previousLabel={"Prev."}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "pagination flex justify-end items-center gap-8 mt-4 mx-4"
              }
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={
                "pagination__link--active p-2 rounded-full bg-primary text-white"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parents;
