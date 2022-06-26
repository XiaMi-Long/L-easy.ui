/*
 * @Descripttion:
 * @version:
 * @Author: wwy
 * @Date: 2022-06-23 17:48:42
 * @LastEditors: wwy
 * @LastEditTime: 2022-06-26 14:23:16
 */
import "../style/index.scss";

const dark = document.getElementById("dark");
console.log(dark);
dark.addEventListener("click", function () {
  if (window.document.documentElement.getAttribute("data-theme") === "dark") {
    window.document.documentElement.setAttribute("data-theme", "light");
  } else {
    window.document.documentElement.setAttribute("data-theme", "dark");
  }
});
