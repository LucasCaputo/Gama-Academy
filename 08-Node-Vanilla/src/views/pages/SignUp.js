import baseURL from "../../service/baseURL.js";

let SignUp = {
  render: async () => {
    let view = `<div class="container">
                  <div class="row mt-5 mb-5">
                    <div class="col-md-6 m-auto">
                      <div class="card">
                        <h2 class="mt-5 mb-4 text-center">Preencha seus Dados</h2>
                        <div class="p-4">
                          <div class="form-group">
                            <label for="name">Nome</label>
                            <input id="name" type="text" class="form-control" />
                          </div>
                
                          <div class="form-group mt-4 cpf">
                            <label for="name">CPF</label>
                            <input id="cpf" type="text" maxlength="11" class="form-control" />
                          </div>
                
                          <div class="form-group mt-4">
                            <label for="email">Email</label>
                            <input id="mail" type="email" class="form-control" />
                          </div>
                
                          <div class="form-group mt-4">
                            <label for="senha">Senha</label>
                            <input id="password" type="password" class="form-control mb-4" />
                          </div>
                
                          <div class="form-group mt-4">
                            <label for="repassword">Repetir Senha</label>
                            <input id="repassword" type="password" class="form-control mb-4" />
                          </div>
                
                          <button class="btn btn-primary" id="submit_new_register">
                            Fazer Cadastro
                          </button>
                        </div>
                      </div>
                    </div>
                
                    <div class="col-md-6 m-auto">
                      <div class="fluid text-center pt-5">
                        <h2>Formulário de login</h2>
                        <p>PÁGINA SIGNUP</p>
                      </div>
                      <img
                        src="assets/bootstrap-icons.png"
                        class="img-fluid m-auto"
                        width="100%"
                        alt="Imagem resposiva"
                      />
                    </div>
                  </div>
                </div>`;

    return view;
  },
  after_render: async () => {
    document
      .getElementById("submit_new_register")
      .addEventListener("click", () => {
        let valueName = document.getElementById("name").value,
          valueMail = document.getElementById("mail").value,
          valueCPF = document.getElementById("cpf").value,
          valuePassword = document.getElementById("password").value,
          valueRePassword = document.getElementById("repassword").value;

        if (valuePassword.length > 6) {
          console.log("mais que 6 caracteres");

          if (valueRePassword == valuePassword) {
            axios
              .post(`${baseURL}usuarios`, {
                cpf: valueCPF,
                login: valueMail,
                nome: valueName,
                senha: valuePassword,
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
