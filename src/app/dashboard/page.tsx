// "use client";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { NextPage } from "next";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow/TransactionBottomRow";

const DashboardPage: NextPage = () => {
  // const { data: session } = useSession();

  return (
    <Box>
      <Grid container gap={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>

      <TransactionBottomRow />
    </Box>
  );
};

export default DashboardPage;
