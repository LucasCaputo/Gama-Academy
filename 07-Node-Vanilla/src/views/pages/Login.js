import baseURL from "../../service/baseURL.js";
import IsAuthenticated from "../../service/isAuth.js";

let login = {
  render: async () => {
    let IsAuth = await IsAuthenticated(
      localStorage.getItem("@token"),
      "#/dashboard"
    );
    let view = `<div class="container">
                    <div class="row mt-5 mb-5">
                      <div class="col-md-6 m-auto">
                        <div class="fluid text-center pt-5">
                          <h2>Formulário de login</h2>
                          <p>PÁGINA LOGIN</p>
                        </div>
                        <img
                          src="assets/bootstrap-icons.png"
                          class="img-fluid m-auto"
                          width="100%"
                          alt="Imagem resposiva"
                        />
                      </div>
                      <div class="col-md-6 m-auto">
                        <div class="card">
                          <h2 class="mt-5 mb-4 text-center">
                            Informe aqui seu usuário e senha
                          </h2>
                          <form class="p-5">
                            <div class="form-group">
                              <label for="exampleInputEmail1">Seu email</label>
                              <input id="mail" type="email" class="form-control" />
                              <small class="form-text text-muted"
                                >Adicione aqui seu email.</small
                              >
                            </div>
                            <div class="form-group">
                              <label for="senha" class="mt-4">senha</label>
                              <input id="password" type="password" class="form-control mb-4" />
                            </div>
                            <div class="form-group form-check mb-4">
                              <input type="checkbox" class="form-check-input" />
                              <label class="form-check-label" for="manter"
                                >Me mantenha conectado</label
                              >
                            </div>
                            
                            <button class="btn btn-primary" id="submit_login">
                            Fazer Login
                          </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>`;

    return view;
  },
  after_render: async () => {
    document.getElementById("submit_login").addEventListener("click", () => {
      let valueMail = document.getElementById("mail").value,
        valuePassword = document.getElementById("password").value;

      console.log(valueMail, valuePassword);

      axios
        .post(`${baseURL}login`, {
          usuario: valueMail,
          senha: valuePassword,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            window.location.replace("#/dashboard");
            localStorage.setItem("@token", res.data.token);
            localStorage.setItem('userDataAccount', JSON.stringify(res.data))
          }
        });
    });
  },
};

export default login;
