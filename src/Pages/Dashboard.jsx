import {
  faEdit,
  faExclamation,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Piechart from "../components/Piechart";
import LineChat from "../components/LineChat";
import ProgressBar from "../components/ProgressBar";
import BarChat from "../components/BarChat";
import Modal from "react-modal";
import NoticeForm from "../components/Addnotice";
function Dashboard() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const page = "dashobard";

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    // Perform actions based on selected option
    switch (e.target.value) {
      case "thisWeek":
        // Do something for this week
        break;
      case "lastWeek":
        // Do something for last week
        break;
      case "lastMonth":
        // Do something for last month
        break;
      default:
        break;
    }
  };

  const notices = [
    {
      id: 1,
      time: "10:00 AM",
      date: "2022-03-01",
      notice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      time: "11:00 AM",
      date: "2022-03-02",
      notice:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="w-full flex justify-between gap-16 my-4 px-4 transition-all duration-500">
        <div className="w-full h-[250px] border-t-8 bg-white border-t-red-600 rounded-lg shadow-sm overflow-hidden">
          {
            <div className="mx-2 flex justify-between pt-2">
              <div>
                <h3 className="font-mediumbold text-gray-700">
                  School Population
                </h3>
                <h4 className="text-lg font-bold">7000</h4>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-700 flex justify-center items-center">
                <FontAwesomeIcon icon={faExclamation} className="text-white" />
              </div>
            </div>
          }
          <div className="">
            <Piechart />
          </div>
        </div>
        <div className="w-full h-[250px] border-t-8 bg-white border-t-blue-600 rounded-lg shadow-sm">
          {
            <div className="mx-2 flex justify-between pt-2">
              <div>
                <h3 className="font-mediumbold text-gray-700">
                  Students Attendance
                </h3>
                <h4 className="text-lg font-bold">5000</h4>
              </div>
              <div className="w-6 h-6 rounded-full bg-gray-700 flex justify-center items-center">
                <FontAwesomeIcon icon={faExclamation} className="text-white" />
              </div>
            </div>
          }
          <div className="mt-[-20px]">
            <LineChat />
          </div>
        </div>
        <div className="w-full h-[250px] border-t-8 bg-white border-t-green-600 rounded-lg shadow-sm ">
          <div className="mx-2 flex justify-between pt-2">
            <div>
              <h3 className="font-mediumbold text-gray-700">
                Teacher's Attendance
              </h3>
              <h4 className="text-lg font-bold">60%</h4>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-700 flex justify-center items-center">
              <FontAwesomeIcon icon={faExclamation} className="text-white" />
            </div>
          </div>
          <div className="mt-[80px] border-b-2">
            <ProgressBar />
          </div>
          <div className="flex justify-between mx-8 pt-2 text-gray-600">
            <div>Present</div>
            <div>Absent</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-4 mt-4 gap-x-4 ">
        <div className="w-2/4 h-[50vh] bg-white shadow-xl border-primary border-2 rounded-2xl">
          <div className="flex justify-between mx-2 items-center">
            <div className="p-2 font-semibold">School Performance</div>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="border-0 text-xs mt-2">
              <option value="">Select Time Period</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>
          <BarChat />
        </div>
        <div className="w-2/4 h-[50vh]  border-2 border-gray-300 bg-white rounded-2xl overflow-visible">
          <div className="p-4">
            <div className="flex justify-between">
              <h1 className=" text-white font-semibold">Notice Board</h1>

              <button
                onClick={openModal}
                className="w-8 h-8 border-2 border-primary rounded-full bg-white flex justify-center items-center ">
                <FontAwesomeIcon icon={faPlus} className="text-primary" />
              </button>
            </div>
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="mb-2 border-b-[1px] py-2 bg-gray-100 mt-2 rounded-md p-2 shadow-md hover:shadow-xl transition-transform transform-gpu ">
                <div className="flex justify-start gap-4 items-center border-b-[1px] border-blue-100">
                  <h4 className="text-red-600 text-sm">{notice.date}</h4>{" "}
                  <h4 className="text-xs text-gray-800">{notice.time}</h4>
                </div>
                <p className="text-gray-900 py-2 text-xs italic border-b-[1px] border-blue-100">
                  {notice.notice}
                </p>

                <div className="flex justify-start gap-8 mt-2 items-center">
                  <button className="hover:opacity-45">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="text-lg text-red-500"
                    />
                  </button>
                  <button className="hover:opacity-45">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-lg text-blue-600"
                    />
                  </button>
                </div>
              </div>
            ))}

            <div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                {<NoticeForm />}
                <button onClick={closeModal}>close</button>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
