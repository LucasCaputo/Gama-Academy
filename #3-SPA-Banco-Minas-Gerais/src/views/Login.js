import baseURL from "../service/baseURL.js";
import IsAuthenticated from "../service/isAuth.js";

import logo from "../assets/logo.svg";

let login = {
  render: async () => {
    let IsAuth = await IsAuthenticated(
      localStorage.getItem("@token"),
      "#/dashboard"
    );
    let view = `  
  
  <div id="Login" class="row">
    <div class="col-md-6 login--img">
      <div class="login--img-logo p-4">
        <img src=".${logo}" alt="Logo" />
      </div>
    </div>
    <div class="col-md-6 m-auto">
      <div class="card p-4 m-4">
        <h2 class="mt-5 m-4 p-4 mb-0">Fazer Login</h2>
        <div class="p-5">
          <div class="form-group">
            <label for="InputEmail">Usuário:</label>
            <input type="text" id="user" class="form-control mb-4" />
          </div>

          <div class="form-group">
            <label for="inputPassword">Senha:</label>
            <input type="password" id="password" class="form-control mb-4" />
          </div>
          <div class="form-group form-check mb-4">
            <input id="checkbox" type="checkbox" class="form-check-input" />
            <label class="form-check-label" for="check"
              >Me mantenha conectado</label
            >
          </div>
          <div class="d-flex justify-content-between">
            <a class="btn btn-outline-success" href="#/singup"
              >Crie sua conta aqui</a
            >
            <button
              id="submit_login"
              class="btn btn-success"
              >Entrar</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>`;

    return view;
  },
  after_render: async () => {
    document.getElementById("container").classList.add("overflow");
    document.getElementById("submit_login").addEventListener("click", () => {
      let usuario = document.getElementById("user").value,
        senha = document.getElementById("password").value;

      axios
        .post(`${baseURL}login`, {
          usuario,
          senha,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.location.replace("#/dashboard");
            localStorage.setItem("@token", res.data.token);
            localStorage.setItem("userDataAccount", JSON.stringify(res.data));
          } else if (res.status == 400) {
            alert(res.error);
          }
        })
        .catch((err) => {
          alert(err.response.data.error);
          window.location.replace("#/singup");
        });
    });
  },
};

export default login;
