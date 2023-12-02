"use client";

import { logoutUser } from "@/auth-actions/logoutUser";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import React from "react";

const LogoutButton = () => {
  const handleLogoutUser = async () => {
    await logoutUser();
  };
  return (
    <button
      onClick={handleLogoutUser}
      className="mt-auto flex flex-row gap-3 items-center p-2 rounded text-shark-900 hover:bg-flush-orange-400 hover:text-white"
    >
      <ArrowLeftOnRectangleIcon width={24} />
      Log Out
    </button>
  );
};

export default LogoutButton;
