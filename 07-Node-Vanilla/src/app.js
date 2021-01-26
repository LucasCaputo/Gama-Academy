import Nav from "./views/components/nav.js";
import Footer from "./views/components/footer.js";

import Home from "./views/pages/Home.js";
import Dash from "./views/pages/Dash.js";
import Login from "./views/pages/Login.js";
import SignUp from "./views/pages/SignUp.js";
import Error404 from "./views/pages/Error404.js";


import Utils  from "./service/Utils.js";

let routes = {
  "/": Home,
  "/singup": SignUp,
  "/login": Login,
  "/dashboard": Dash
};


const router = async () => {

  const header = null || document.getElementById("header");
  const content = null || document.getElementById("container");
  const footer = null || document.getElementById("footer");

  header.innerHTML = await Nav.render()
  await Nav.after_render()

  footer.innerHTML = await Footer.render()
  await Footer.after_render()

  let request = Utils.parseRequestURL()

  let parseURL = (request.resource ? '/' + request.resource: '/') + (request.ver ? '/' + request.verb : '')

  let page = routes[parseURL] ? routes[parseURL] : Error404

  content.innerHTML = await page.render()

  await page.after_render()

}

window.addEventListener('hashchange', router)

window.addEventListener('load', router)

