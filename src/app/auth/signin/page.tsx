"use client"
import { useSession } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import Login from "@/components/Login/Login";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Login />
    </div>
  );
};

export default SignIn;