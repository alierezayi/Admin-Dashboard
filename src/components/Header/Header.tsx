"use client";
import * as React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  useMediaQuery,
  Box,
  AppBar,
  useTheme,
  Divider,
} from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import logo from "../../../public/Business-Finance-logo-design-premium-vector-PNG.png";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

function Header() {
  const { data: session } = useSession();
  const theme = useTheme();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery("(min-width: 768px)");

  return (
    <AppBar position="sticky" sx={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={50} height={50} alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={session ? "/dashboard" : "/"}
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataSoft
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: 2,
            }}
          >
            {session?.user?.name}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
