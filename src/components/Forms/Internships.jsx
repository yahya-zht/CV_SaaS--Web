"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
export default function Internships() {
  const [id, setIdEmployment] = useState();
  const [listInternships, setListInternships] = useState([]);
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [cityInternships, setCityInternships] = useState("");
  const [startMonthEmployment, setStartMonthEmployment] = useState("");
  const [startYearEmployment, setStartYearEmployment] = useState("");
  const [endMonthEmployment, setEndMonthEmployment] = useState("");
  const [endYearEmployment, setEndYearEmployment] = useState("");
  const [descriptionEmployment, setDescriptionEmployment] = useState("");
  const [formInternships, setFormInternships] = useState(true);
  const [errorInternships, setErrorInternships] = useState("");
  const handleForm = () => {
    setErrorInternships("");
    setFormInternships(true);
  };
  const handleDelete = (Id) => {
    setListInternships((prev) => prev.filter((e) => e.id !== Id));
    listInternships.length == 1 && setFormInternships(true);
  };
  const deleteForm = () => {
    setIdEmployment("");
    setPosition("");
    setEmployer("");
    setCityInternships("");
    setStartMonthEmployment("");
    setStartYearEmployment("");
    setEndMonthEmployment("");
    setEndYearEmployment("");
    setDescriptionEmployment("");
  };
  const handleAdd = () => {
    if (!position) {
      setErrorInternships("Position is required.");
      return;
    }
    setListInternships([
      ...listInternships,
      {
        id:
          listInternships.length == 0
            ? 1
            : listInternships[listInternships.length - 1].id + 1,
        position,
        employer,
        cityInternships,
        startMonthEmployment,
        startYearEmployment,
        endMonthEmployment,
        endYearEmployment,
        descriptionEmployment,
      },
    ]);
    console.log(
      "listInternships.length ",
      listInternships.length == 0
        ? 1
        : listInternships[listInternships.length - 1].id
    );
    setIdEmployment("");
    setPosition("");
    setEmployer("");
    setCityInternships("");
    setStartMonthEmployment("");
    setStartYearEmployment("");
    setEndMonthEmployment("");
    setEndYearEmployment("");
    setDescriptionEmployment("");
    setFormInternships(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 35 }, (_, i) => 2024 - i);

  return (
    <div className="">
      {formInternships && (
        <div className="p-2 border-2 border-gray-300 rounded-lg">
          <div className="my-2">
            <label htmlFor="position" className="ps-1 text-sm text-gray-500">
              Position
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            {errorInternships && (
              <div>
                <div className="text-red-500 text-sm">{errorInternships}</div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label htmlFor="school" className="ps-1 text-sm text-gray-500">
                Employer
              </label>
              <input
                type="text"
                id="school"
                placeholder="Employer"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
              />
            </div>
            <div className="">
              <label
                htmlFor="cityInternships"
                className="ps-1 text-sm text-gray-500"
              >
                City
              </label>
              <input
                type="text"
                id="cityInternships"
                placeholder="City"
                className="rounded-md w-full p-2 mt-1"
                style={{ backgroundColor: COLORS.bg }}
                value={cityInternships}
                onChange={(e) => setCityInternships(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="">
              <label
                htmlFor="startMonthEmployment"
                className="ps-1 text-sm text-gray-500"
              >
                Start date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="startMonthEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startMonthEmployment}
                  onChange={(e) => setStartMonthEmployment(e.target.value)}
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  id="startYearEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={startYearEmployment}
                  onChange={(e) => setStartYearEmployment(e.target.value)}
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="endMonthEmployment"
                className="ps-1 text-sm text-gray-500"
              >
                End date
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  id="endMonthEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endMonthEmployment}
                  onChange={(e) => setEndMonthEmployment(e.target.value)}
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  id="endYearEmployment"
                  className="rounded-md w-full p-2 mt-1"
                  style={{ backgroundColor: COLORS.bg }}
                  value={endYearEmployment}
                  onChange={(e) => setEndYearEmployment(e.target.value)}
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="descriptionEmployment"
              className="ps-1 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="descriptionEmployment"
              placeholder="Description"
              className="rounded-md w-full p-2 mt-1"
              style={{ backgroundColor: COLORS.bg }}
              value={descriptionEmployment}
              onChange={(e) => setDescriptionEmployment(e.target.value)}
            ></textarea>
            <div className="flex flex-row"></div>
          </div>
          <div className="flex flex-row justify-end">
            <button
              className="p-1 text-red-600 hover:text-red-500 me-2"
              onClick={deleteForm}
            >
              <DeleteForeverIcon />
            </button>
            <button
              onClick={handleAdd}
              className="p-1 pe-2 text-white bg-blue-950 hover:border-blue-950 bottom-2 border-2 rounded-lg hover:bg-white hover:text-blue-950"
            >
              <DoneIcon /> Done
            </button>
          </div>
        </div>
      )}

      {listInternships.length > 0 && (
        <div className="">
          {listInternships.map((item, i) => (
            <div
              key={i}
              className="p-2 border-2 border-gray-500 rounded-lg my-1 flex flex-row justify-between items-center"
            >
              <div>
                <p>{item.position}</p>
                <p className="flex flex-row text-gray-500">
                  <span>{item.employer}</span>,{" "}
                  <span>{item.cityInternships}</span>
                </p>
              </div>
              <div>
                <button
                  className="p-1 text-red-600 hover:text-red-500 me-2"
                  onClick={() => handleDelete(item.id)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </div>
          ))}
          <div className="">
            <button
              className="p-1 mt-2 text-blue-950 bg-white border-blue-950 bottom-2 border-2 rounded-lg hover:bg-blue-950 hover:text-white"
              onClick={handleForm}
            >
              <AddIcon /> Add Employment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}