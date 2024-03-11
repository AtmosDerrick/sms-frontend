import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import { faAdd, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

function Teachers() {
  const [search, setSearch] = useState("");
  const [classroom, setClassRoom] = useState("");
  const [studentss, setStudentss] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const studentsPerPage = 8;
  const pagesVisited = pageNumber * studentsPerPage;

  const staffs = [
    {
      name: "John Doe",
      role: "Teaching Staff",
      age: 35,
      yearOfEmployment: 2010,
      subjects: ["Mathematics", "Physics"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Jane Smith",
      role: "Teaching Staff",
      age: 40,
      yearOfEmployment: 2005,
      subjects: ["English", "History"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Alice Johnson",
      role: "Non-Teaching Staff",
      age: 45,
      yearOfEmployment: 2000,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Bob Brown",
      role: "Senior Staff",
      age: 50,
      yearOfEmployment: 1995,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Eve White",
      role: "Kitchen Staff",
      age: 55,
      yearOfEmployment: 1990,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    // Add more staff members here...
    {
      name: "Mark Davis",
      role: "Teaching Staff",
      age: 38,
      yearOfEmployment: 2008,
      subjects: ["Biology", "Chemistry"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Laura Wilson",
      role: "Teaching Staff",
      age: 42,
      yearOfEmployment: 2003,
      subjects: ["Geography", "Social Studies"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Charles Taylor",
      role: "Non-Teaching Staff",
      age: 47,
      yearOfEmployment: 1998,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Sarah Moore",
      role: "Senior Staff",
      age: 52,
      yearOfEmployment: 1993,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Peter Harris",
      role: "Kitchen Staff",
      age: 57,
      yearOfEmployment: 1988,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    // Add more staff members here...
    {
      name: "Michael Clark",
      role: "Teaching Staff",
      age: 39,
      yearOfEmployment: 2007,
      subjects: ["Computer Science", "Information Technology"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Susan Walker",
      role: "Teaching Staff",
      age: 41,
      yearOfEmployment: 2004,
      subjects: ["Art", "Music"],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "James Miller",
      role: "Non-Teaching Staff",
      age: 48,
      yearOfEmployment: 1997,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Emily Turner",
      role: "Senior Staff",
      age: 51,
      yearOfEmployment: 1992,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    {
      name: "Robert Scott",
      role: "Kitchen Staff",
      age: 58,
      yearOfEmployment: 1987,
      subjects: [],
      contact: "0243121354",
      email: "wen@gmail.com",
    },
    // Add more staff members here...
  ];
  useEffect(() => {
    setStudentss(staffs);
  }, []);

  const filterStudent = (e) => {
    const selectedClassroom = e.target.value;
    if (selectedClassroom != "") {
      setClassRoom(selectedClassroom);
      const classroomFilter = staffs.filter((student) => {
        return student.role === selectedClassroom;
      });
      setStudentss(classroomFilter);
      console.log(studentss);
    } else {
      setStudentss(staffs);
    }
  };

  const pageCount = Math.ceil(studentss.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="w-full flex justify-start">
      <SideBar page="teachers" />
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
          <div className="text-lg font-semibold">Teachers Record</div>

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
                  role
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year of Employment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {studentss
                .slice(pagesVisited, pagesVisited + studentsPerPage)
                .map((student, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white " : "bg-gray-100 "}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.yearOfEmployment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.subjects.map((item) => (
                        <div>
                          {item}
                          {
                            // console.log(item)
                          }
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.contact}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.email}
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

export default Teachers;
