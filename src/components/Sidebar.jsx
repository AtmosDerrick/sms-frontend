import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChevronCircleLeft,
  faChevronCircleRight,
  faClipboardUser,
  faFileInvoiceDollar,
  faGauge,
  faGear,
  faLeftLong,
  faSheetPlastic,
  faUser,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar(page) {
  const [openWide, setOpenWide] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    console.log(page.page, "page");
  }, [isActive]);
  const classes = {
    container: "flex justify-start gap-x-[1px] mb-10 hover:opacity-60",
    activeMenu:
      "flex justify-start gap-x-[1px] mb-10  bg-white py-2 px-4 rounded-lg",
    iconsContainer: "w-1/6",
    icons: "text-lg text-white",
    activeIcon: "text-primary",
    text: "text-base text-white",
    activeText: "text-primary",
  };

  return (
    <div
      className={
        !openWide
          ? "w-1/4 rounded-md bg-gradient-to-b from-primary to-blue-500 h-screen transition-all duration-500"
          : "w-1/7 rounded-md bg-gradient-to-b from-primary to-blue-500 h-screen transition-all duration-500 px-8"
      }>
      <div className={"w-4/5 mx-auto"}>
        <div className="pt-10 flex justify-between items-center">
          <h2
            className={
              !openWide
                ? "text-lg font-bold text-white"
                : "text-sm font-bold text-white hidden"
            }>
            New Generation Int.
          </h2>
          <button
            onClick={() => {
              setOpenWide(!openWide);
            }}>
            <FontAwesomeIcon
              icon={openWide ? faChevronCircleRight : faChevronCircleLeft}
              className="text-xl text-white"
            />
          </button>
        </div>
        <div className="mt-24">
          <Link
            to="/dashboard"
            className={
              page.page === "dashboard" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faGauge}
                className={
                  page.page === "dashboard" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "dashboard"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              DashBoard
            </div>
          </Link>
          <Link
            to="/student"
            className={
              page.page === "students" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faUserGraduate}
                className={
                  page.page === "students" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              className={
                page.page === "students"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Students
            </div>
          </Link>

          <Link
            to="/teachers"
            className={
              page.page === "teachers" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className={
                  page.page === "teachers" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              to="/teachers"
              className={
                page.page === "teachers"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Teachers
            </div>
          </Link>

          <Link
            to="/parent"
            className={
              page.page === "parents" ? classes.activeMenu : classes.container
            }>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faUser}
                className={
                  page.page === "parents" ? classes.activeIcon : classes.icons
                }
              />
            </div>
            <div
              to="/parent"
              className={
                page.page === "parents"
                  ? !openWide
                    ? "text-base text-primary"
                    : " hidden"
                  : !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Parents
            </div>
          </Link>

          <Link to="/dashboard" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faSheetPlastic}
                className={classes.icons}
              />
            </div>
            <div
              to="/link"
              className={
                !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Exams
            </div>
          </Link>

          <Link to="/account" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                className={classes.icons}
              />
            </div>
            <div
              to="/account"
              className={
                !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Account
            </div>
          </Link>

          <Link to="/dashboard" className={classes.container}>
            <div className={classes.iconsContainer}>
              <FontAwesomeIcon icon={faGear} className={classes.icons} />
            </div>
            <div
              to="/link"
              className={
                !openWide
                  ? "text-base text-white"
                  : "text-base text-white hidden"
              }>
              Setting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
