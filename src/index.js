// index.js
import "./styles.css";
import { loadPage } from "./loadPage.js";

// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', () => {
  loadPage();
});