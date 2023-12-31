"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useTheme } from "@mui/material";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  const theme = useTheme();

  return (
    <>
      <div
        style={{
          height: "900px",
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <h1>Data</h1>
        <p>
          The bestest of data available here at your finger tips in table form.
          This could be a whole section of data that is available for users to
          deep dive further into the numbers/stats.
        </p>
        <DataGrid
          sx={{ background: theme.palette.success.contrastText }}
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;
