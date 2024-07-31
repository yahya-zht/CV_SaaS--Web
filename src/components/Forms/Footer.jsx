"use client";
import { COLORS } from "@/constants/theme";
import React, { useState } from "react";

export default function Footer() {
  const [descriptionFooter, setDescriptionFooter] = useState("");
  return (
    <div className="">
      <div>
        <label htmlFor="description" className="ps-1 text-sm text-gray-500">
          Content
        </label>
        <textarea
          id="description"
          placeholder="Description"
          className="rounded-md w-full p-2 mt-1"
          rows="4"
          cols="50"
          style={{ backgroundColor: COLORS.bg }}
          value={descriptionFooter}
          onChange={(e) => setDescriptionFooter(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}