import React, { useEffect, useState } from "react";
import SideBar from "../components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import { faAdd, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";

function Student() {
  const [search, setSearch] = useState("");
  const [classroom, setClassRoom] = useState("");
  const [studentss, setStudentss] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const studentsPerPage = 8;
  const pagesVisited = pageNumber * studentsPerPage;

  const students = [
    {
      firstName: "John",
      lastName: "Doe",
      className: "Primary 1",
      image:
        "https://i.pinimg.com/236x/6e/58/47/6e584718e75889b879160d69fea23dd6.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD123456789",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      className: "Primary 2",
      image:
        "https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD987654321",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      className: "J.H.S 1",
      image:
        "https://i.pinimg.com/564x/09/c6/74/09c674a83a7c5e968916d5f444dcc628.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD567891234",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      className: "Primary 3",
      image:
        "https://i.pinimg.com/236x/00/9f/5f/009f5fa7d48a83a4b295a5f9b55b4d0b.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD543216789",
    },
    {
      firstName: "Emily",
      lastName: "Williams",
      className: "Primary 4",
      image: "emily_williams.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD789654321",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      className: "Primary 5",
      image: "michael_brown.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD876543210",
    },
    {
      firstName: "Sarah",
      lastName: "Jones",
      className: "Primary 6",
      image: "sarah_jones.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD654321098",
    },
    {
      firstName: "David",
      lastName: "Garcia",
      className: "J.H.S 2",
      image: "david_garcia.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD234567890",
    },
    {
      firstName: "Emma",
      lastName: "Martinez",
      className: "J.H.S 3",
      image: "emma_martinez.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD345678901",
    },
    {
      firstName: "Daniel",
      lastName: "Rodriguez",
      className: "Primary 1",
      image: "daniel_rodriguez.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD456789012",
    },
    {
      firstName: "Olivia",
      lastName: "Hernandez",
      className: "Primary 2",
      image: "olivia_hernandez.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD567890123",
    },
    {
      firstName: "Alexander",
      lastName: "Lopez",
      className: "J.H.S 1",
      image: "alexander_lopez.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD678901234",
    },
    {
      firstName: "Isabella",
      lastName: "Gonzalez",
      className: "Primary 3",
      image: "isabella_gonzalez.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD789012345",
    },
    {
      firstName: "William",
      lastName: "Perez",
      className: "Primary 4",
      image: "william_perez.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD890123456",
    },
    {
      firstName: "Sophia",
      lastName: "Torres",
      className: "Primary 5",
      image: "sophia_torres.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD901234567",
    },
    {
      firstName: "James",
      lastName: "Ramirez",
      className: "Primary 6",
      image: "james_ramirez.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD012345678",
    },
    {
      firstName: "Mia",
      lastName: "Flores",
      className: "J.H.S 2",
      image: "mia_flores.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD123456789",
    },
    {
      firstName: "Benjamin",
      lastName: "Gutierrez",
      className: "J.H.S 3",
      image: "benjamin_gutierrez.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD234567890",
    },
    {
      firstName: "Ethan",
      lastName: "Ruiz",
      className: "Primary 1",
      image: "ethan_ruiz.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD345678901",
    },
    {
      firstName: "Evelyn",
      lastName: "Ortiz",
      className: "Primary 2",
      image: "evelyn_ortiz.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD456789012",
    },
    {
      firstName: "Elijah",
      lastName: "Castillo",
      className: "primary 2",
    },
    {
      firstName: "John",
      lastName: "Doe",
      className: "Primary 1",
      image: "john_doe.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD123456789",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      className: "Primary 2",
      image: "jane_doe.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD987654321",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      className: "J.H.S 1",
      image: "alice_smith.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD567891234",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      className: "Primary 3",
      image: "bob_johnson.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD543216789",
    },
    {
      firstName: "Emily",
      lastName: "Williams",
      className: "Primary 4",
      image: "emily_williams.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD789654321",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      className: "Primary 5",
      image: "michael_brown.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD987654321",
    },
    {
      firstName: "Jessica",
      lastName: "Davis",
      className: "Primary 6",
      image: "jessica_davis.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD654321987",
    },
    {
      firstName: "David",
      lastName: "Garcia",
      className: "J.H.S 1",
      image: "david_garcia.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD321654987",
    },
    {
      firstName: "Sarah",
      lastName: "Martinez",
      className: "J.H.S 2",
      image: "sarah_martinez.jpg",
      gender: "Female",
      role: "Student",
      admissionId: "AD987321654",
    },
    {
      firstName: "Robert",
      lastName: "Jackson",
      className: "J.H.S 3",
      image: "robert_jackson.jpg",
      gender: "Male",
      role: "Student",
      admissionId: "AD654987321",
    },
  ];

  useEffect(() => {
    setStudentss(students);
  }, []);

  const filterStudent = (e) => {
    const selectedClassroom = e.target.value;
    if (selectedClassroom != "") {
      setClassRoom(selectedClassroom);
      const classroomFilter = students.filter((student) => {
        return student.className === selectedClassroom;
      });
      setStudentss(classroomFilter);
    } else {
      setStudentss(students);
    }
  };

  const pageCount = Math.ceil(studentss.length / studentsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="w-full flex justify-start">
      <SideBar page="students" />
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

          <div className="text-lg font-semibold">Students Record</div>
          <div className="flex justify-start items-center gap-6">
            <div className="w-full">
              <button className="px-6 bg-primary text-white py-[4px] rounded-3xl">
                <FontAwesomeIcon
                  icon={faAdd}
                  className="text-lg text-white pr-[2px]"
                />
                Add Student
              </button>
            </div>
            <div className="w-full">
              <select
                className="px-6 py-[4px] border-[2px] border-primary text-primary rounded-3xl"
                value={classroom}
                onChange={filterStudent}>
                <option value="">Select Class</option>

                <option value="krech">KRECH</option>
                <optgroup label="Primary">
                  <option value="Primary 1">Primary 1</option>
                  <option value="Primary 2">Primary 2</option>
                  <option value="Primary 3">Primary 3</option>
                  <option value="Primary 4">Primary 4</option>
                  <option value="Primary 5">Primary 5</option>
                  <option value="Primary 6">Primary 6</option>
                </optgroup>
                <optgroup label="J.H.S">
                  <option value="J.H.S 1">J.H.S 1</option>
                  <option value="J.H.S 2">J.H.S 2</option>
                  <option value="J.H.S 3">J.H.S 3</option>
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
                  First Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admission ID
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
                      {student.firstName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.className}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.admissionId}
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

export default Student;
