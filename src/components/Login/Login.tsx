"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { redirect } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" mb={1}>
        Not signed in
      </Typography>
      <Typography mb={7}>Please sign in to your account</Typography>
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </Box>
  );
};

export default Login;
