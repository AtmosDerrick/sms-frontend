import React, { useState } from "react";

const NoticeForm = ({ addNotice }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !notice) {
      alert("Please fill in all fields");
      return;
    }
    addNotice({ date, time, notice });
    setDate("");
    setTime("");
    setNotice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 w-[30vw] h-[40vh] rounded-2xl">
      <h3 className="text-xl font-semibold text-center mb-4">
        Add Notice to Notice Board
      </h3>
      {
        // <div className="w-full flex justify-between">
        // <label htmlFor="date" className="block">
        //   Date:
        //   <input
        //     type="date"
        //     id="date"
        //     value={date}
        //     onChange={(e) => setDate(e.target.value)}
        //     className="border-gray-300 border rounded-md p-1 ml-2"
        //   />
        // </label>
        // <label htmlFor="time" className="block mt-2">
        //   Time:
        //   <input
        //     type="time"
        //     id="time"
        //     value={time}
        //     onChange={(e) => setTime(e.target.value)}
        //     className="border-gray-300 border rounded-md p-1 ml-2"
        //   />
        // </label>
        // </div>
      }
      <label htmlFor="notice" className="block mt-2">
        Notice:
        <textarea
          id="notice"
          value={notice}
          onChange={(e) => setNotice(e.target.value)}
          className="border-gray-300 border rounded-md p-1 ml-2 w-full h-[200px]"
        />
      </label>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
          Add Notice
        </button>
      </div>
    </form>
  );
};

export default NoticeForm;
