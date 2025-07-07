"use client";

import LoginBtn from "@/components/login/LoginBtn";
import { useAppSelector } from "@/redux/hooks";
import { TChildren } from "@/types/global";
import React from "react";

const ProtectedRoutes = ({ children }: TChildren) => {
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginBtn />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
