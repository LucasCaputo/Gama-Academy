import baseURL from "../service/baseURL";

import logo from "../assets/logo.svg";

let SignUp = {
  render: async () => {
    let view = ` <div id="Login" class="row">
    <div class="col-md-6 m-auto">
      <div class="card p-4 m-4">
        <h2 class="mt-5 p-3 mb-0">Fazer Cadastro</h2>
        <form class="p-2">
          <div class="form-group p-2">
            <label for="InputName">Nome:</label>
            <input type="text" id="name" class="form-control mb-4" />
          </div>
          <div class="d-flex">
            <div class="form-group p-2">
              <label for="Inputcpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                maxlength="11"
                class="form-control mb-4"
              />
            </div>

            <div class="form-group p-2">
              <label for="Inputuser">Usuário:</label>
              <input type="text" id="user" class="form-control mb-4" />
            </div>
          </div>
          <div class="d-flex">
            <div class="form-group p-2">
              <label for="inputPassword">Senha:</label>
              <input
                type="password"
                id="password"
                class="form-control mb-4"
              />
            </div>
            <div class="form-group p-2">
              <label for="inputRePassword">Repetir senha:</label>
              <input
                type="password"
                id="repassword"
                class="form-control mb-4"
              />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <button id="submit_new_register" class="btn btn-success">
              Cadastrar
            </button>
            <a class="btn btn-outline-success" href="#/login"
              >Já tem conta? Faça login</a
            >
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-6 login--img">
      <div class="login--img-logo p-4">
        <img src=".${logo}" alt="Logo" />
      </div>
    </div>
  </div>`;

    return view;
  },
  after_render: async () => {
    document
      .getElementById("submit_new_register")
      .addEventListener("click", () => {
        let nome = document.getElementById("name").value,
          login = document.getElementById("user").value,
          cpf = document.getElementById("cpf").value,
          senha = document.getElementById("password").value,
          repassword = document.getElementById("repassword").value;

        if (senha.length > 6) {
          console.log("mais que 6 caracteres");

          if (repassword == senha) {
            axios
              .post(`${baseURL}usuarios`, {
                cpf,
                login,
                nome,
                senha,
              })
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  window.location.replace("#/login");
                }
              });
          }
        } else {
          alert("confira sua senha");
        }
      });
  },
};

export default SignUp;
