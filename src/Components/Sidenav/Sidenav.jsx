import { MenuItem, MenuList } from "@mui/material";
import React from "react";
import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import "./sidenav.css";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";

export default function Sidenav() {
  return (
    <div className={styles.sidenav}>
      <NavLink to="/" className={styles.logoDiv}>
        <div className={styles.logo}>
          <CallMergeIcon />
        </div>
        <h3>Dashboard</h3>
      </NavLink>

      <NavLink
        to="overview"
        className={({ isActive }) => (isActive ? styles.navisActive + " " + styles.navLink : styles.navnotActive + " " + styles.navLink)}
      >
        <PieChartIcon />
        Overview
      </NavLink>
      <NavLink
        to="tickets"
        className={({ isActive }) => (isActive ? styles.navisActive + " " + styles.navLink : styles.navnotActive + " " + styles.navLink)}
      >
        <LocalActivityIcon />
        Tickets
      </NavLink>
    </div>
  );
}
