"use client";

import { useAppDispatch } from "@/redux/hooks";
import { authSetLoading, setUser } from "@/redux/slice/authSlice";
import { TChildren } from "@/types/global";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const AuthProviders = ({ children }: TChildren) => {
  const { data: session, status } = useSession();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "loading") {
      dispatch(authSetLoading(true));
    } else {
      dispatch(authSetLoading(false));

      if (session?.user) {
        dispatch(
          setUser({
            id: session.user.id,
            name: session.user.name || null,
            email: session.user.email || null,
            image: session.user.image || null,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    }
  }, [session, status, dispatch]);

  return <>{children}</>;
};

export default AuthProviders;
