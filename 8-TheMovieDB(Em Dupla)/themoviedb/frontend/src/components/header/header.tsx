"use client";
import Link from "next/link";
import "./header.css";
import SearchBar from "../searchbar/searchbar";
import { CgProfile } from "react-icons/cg";
import Profile from "../menu/menu";
import { useState } from "react";
import { Limelight } from "next/font/google";

const limelight = Limelight({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleProfileVisibility = () => {
    setProfileVisible(!isProfileVisible);
  };

  return (
    <div className="header">
      <div className={limelight.className}>
        <Link href="/"  class="text-2xl font-extrabold">
          Everyflick
        </Link>
      </div>

      <div className="lateral">
        <SearchBar />

        <CgProfile
          className={
            isProfileVisible ? "profile-icon iconActive" : "profile-icon"
          }
          onClick={toggleProfileVisibility}
        />

        <Profile
          isVisible={isProfileVisible}
          onClose={toggleProfileVisibility}
        />
      </div>
    </div>
  );
}
