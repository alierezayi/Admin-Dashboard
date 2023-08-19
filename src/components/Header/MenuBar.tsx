"use client"
import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useSession } from "next-auth/react";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

{
  /* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile" sx={{ p: 4 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: 38, height: 38 }}
                  alt={session?.user?.name as string}
                  src={session?.user?.image as string}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", borderRadius: "20px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Avatar
                sx={{ margin: "10px auto", width: 60, height: 60 }}
                alt={session?.user?.name as string}
                src={session?.user?.image as string}
              />
              <Typography
                sx={{
                  margin: "0 30px 10px 30px",
                  textAlign: "center",
                }}
              >
                {session?.user?.name}
              </Typography>
              <Typography
                sx={{
                  margin: "0 30px 10px 30px",
                }}
              >
                {session?.user?.email}
              </Typography>

              <Divider />

              <MenuItem
                sx={{
                  padding: "2px 19px",
                  mt: 1,
                }}
              >
                <DarkModeSwitch />
              </MenuItem>

              <MenuItem>
                <Link
                  href="/dashboard/profile"
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <PersonRoundedIcon />
                  <Typography textAlign="center" ml={1}>
                    Manage your Account
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => signOut()}
                sx={{
                  display: "flex",
                }}
              >
                <LogoutRoundedIcon color="error" />
                <Typography
                  textAlign="center"
                  ml={1}
                  color={theme.palette.error.main}
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box> */
}

export default function MenuBar() {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };
  const { data: session } = useSession();
  const theme = useTheme();

  return (
    <Dropdown>
      <TriggerButton>
        <IconButton sx={{ p: 0 }}>
          <Avatar
            sx={{ width: 38, height: 38 }}
            alt={session?.user?.name as string}
            src={session?.user?.image as string}
          />
        </IconButton>
      </TriggerButton>

      <Menu slots={{ listbox: StyledListbox }}>
        <Avatar
          sx={{ margin: "10px auto", width: 60, height: 60 }}
          alt={session?.user?.name as string}
          src={session?.user?.image as string}
        />
        <Typography
          sx={{
            margin: "0 30px 10px 30px",
            textAlign: "center",
          }}
        >
          {session?.user?.name}
        </Typography>
        <Typography
          sx={{
            margin: "0 30px 10px 30px",
          }}
        >
          {session?.user?.email}
        </Typography>

        <Divider />
        <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
          <DarkModeSwitch />
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick("My account")}>
          <Link
            href="/dashboard/profile"
            style={{
              color: theme.palette.text.primary,
              textDecoration: "none",
              display: "flex",
            }}
          >
            <PersonRoundedIcon />
            <Typography textAlign="center" ml={1}>
              Manage your Account
            </Typography>
          </Link>{" "}
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <LogoutRoundedIcon color="error" />
            <Typography
              textAlign="center"
              ml={1}
              color={theme.palette.error.main}
            >
              Logout
            </Typography>{" "}
          </Box>
        </StyledMenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 15px 20px;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  z-index: 1;
  `
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  border-radius: 50%;
  background: transparent;
  border: none;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
