import Dash from "./views/Dash.js";
import Login from "./views/Login.js";
import SignUp from "./views/SignUp.js";
import Error404 from "./views/Error404.js";

import Utils from "./service/Utils.js";

let routes = {
  "/": Login,
  "/singup": SignUp,
  "/login": Login,
  "/dashboard": Dash,
};

const router = async () => {
  const content = null || document.getElementById("container");

  let request = Utils.parseRequestURL();

  let parseURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.ver ? "/" + request.verb : "");

  let page = routes[parseURL] ? routes[parseURL] : Error404;

  content.innerHTML = await page.render();

  await page.after_render();
};

window.addEventListener("hashchange", router);

window.addEventListener("load", router);
