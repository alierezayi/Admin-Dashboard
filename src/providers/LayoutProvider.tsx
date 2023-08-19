"use client";
import { useSession } from "next-auth/react";
import SideMenu from "@/components/SideMenu/SideMenu";
import Header from "@/components/Header/Header";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/Footer/Footer";

const LayoutProvider = (props: any) => {
  const { data: session, status } = useSession();

  const { children } = props;

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Header />

      {status === "loading" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h4">Loading . . .</Typography>
        </Box>
      ) : (
        <>
          {session && <SideMenu />}
          <Box sx={{ padding: session ? "25px 24px 0 80px" : 0, mb: 10 }}>
            {children}
          </Box>
          <Footer />
        </>
      )}
    </main>
  );
};

export default LayoutProvider;
