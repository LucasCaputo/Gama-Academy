import IsAuthenticated from "../service/isAuth.js";
import baseURL from "../service/baseURL.js";
import DayName from "../service/dayName.js";
import MonName from "../service/monName";
import ConvertData from "../service/data.js";
import logo from "../assets/logo.svg";

const RequestDataAccount = async () => {
  let dataUser = JSON.parse(localStorage.getItem("userDataAccount"));

  let {
    token,
    usuario: { login },
  } = dataUser;

  console.log(dataUser);

  let headersDefault = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  let response = await axios.get(
    `${baseURL}lancamentos/planos-conta?login=${login}`,
    headersDefault
  );
  let allData = response.data;
  console.log(allData);
  return allData;
};

const RequestDataDashboard = async () => {
  let dataUser = JSON.parse(localStorage.getItem("userDataAccount"));

  let {
    token,
    usuario: { login },
  } = dataUser;

  let headersDefault = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  let response = await axios.get(
    `${baseURL}dashboard?fim=2021-01-31&inicio=2021-01-01&login=${login}`,
    headersDefault
  );
  let allData = response.data;
  console.log(allData);
  localStorage.setItem("DashBoardData", allData);
  return allData;
};

const ModalCredit = `<a
                        data-toggle="modal"
                        data-target="#modal_aside_right"
                        class="nav-link p-2"
                        type="button"
                      >
                        Transferência
                      </a>
                      <div
                        id="modal_aside_right"
                        class="modal fixed-right fade"
                        tabindex="-1"
                        role="dialog"
                      >
                      <div class="modal-dialog modal-dialog-aside" role="document">
                        <div
                          class="d-flex align-items-center justify-content-center dashboard-modal modal-content"
                        >
                          <div class="modal-body">
                            <div class="modal-header">
                              <h5 class="modal-title text-muted">Realize uma Transferência</h5>
                              <button
                                type="button"
                                class="close text-muted"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <form>
                              <div class="form-group p-0 m-0">
                                <label for="desc">Descrição:</label>
                                <input type="text" id="desc" class="form-control mb-4" />
                              </div>
                              <div class="d-flex">
                                <div class="form-group p-0 m-0">
                                  <label for="Inputcpf">Número da CC:</label>
                                  <input class="form-control mb-4" type="number" id="conta" />
                                </div>

                                <div class="form-group p-0 m-0">
                                  <label for="destino">Destino:</label>
                                  <input type="text" id="destino" class="form-control mb-4" />
                                </div>

                                <div class="form-group p-0 m-0">
                                  <label for="Inputuser">Login Destino:</label>
                                  <input type="text" id="logindestino" class="form-control mb-4" />
                                </div>
                              </div>
                              <div class="d-flex">
                                <div class="form-group p-0 m-0">
                                  <label for="data">Data:</label>
                                  <input type="date" id="data" class="form-control mb-4" />
                                </div>
                                <div class="form-group p-0 m-0">
                                  <label for="value-transfer">Valor:</label>
                                  <input
                                    type="text"
                                    id="value-transfer"
                                    class="form-control mb-4"
                                  />
                                </div>
                              </div>

                              <div class="d-flex justify-content-end">
                                <button id="pay-credit" class="btn btn-success">Cadastrar</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      </div>`;

const ModalDebit = `
<a data-toggle="modal" data-target="#modal_aside_left" class="nav-link p-2" type="button">  Pagamentos  </a>
<div id="modal_aside_left" class="modal fixed-left fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-aside" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pagamentos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-primary">Realizar transação</button>
      </div>
    </div>
  </div>
</div>
`;

let Dash = {
  render: async () => {
    let ComponentsData = await RequestDataAccount();
    let DashBoardData = await RequestDataDashboard();
    const { contaBanco, contaCredito } = DashBoardData;
    let ContaBancoLancamentos = contaBanco.lancamentos;
    let ContaCreditoLancamentos = contaCredito.lancamentos;
    let userData = JSON.parse(localStorage.getItem("userDataAccount"));
    let entradas = ContaBancoLancamentos.reduce((total, lancamento) => total + lancamento.valor, 0); 
    const dateNow = new Date();
    const {
      usuario: { nome },
      conta,
      token,
    } = userData;
    let fullName = nome.split(" ");
    let IsAuth = await IsAuthenticated(!token, "login");
    let view = `<div id="Dashboard">
                  <div
                    class="alert alert-warning alert-dismissible fade show alert-welcome"
                    role="alert"
                  >
                    <button
                      id="myButtonAlert"
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    Olá ${
                      userData.usuario.nome
                    } que bom que você está de volta! Hoje é ${
      DayName[dateNow.getDay()]
    } dia ${dateNow.getDate()} de ${
      MonName[dateNow.getMonth()]
    } de ${dateNow.getFullYear()}
                  </div>
                </div>
          
                <nav class="navbar navbar-expand-lg nav nav-pills dashboard--header">
                  <div class="d-flex p-2 w-100 justify-content-around">
                    <a class="navbar-brand p-2 d-none d-sm-block" href="#"
                      ><img src=".${logo}" alt="Logo"
                    /></a>
                
                    <div class="flex-row navbar-nav align-items-end">
                      <a class="nav-link p-2 active" aria-current="page">Extrato</a>
                      <a class="nav-link p-2"> ${ModalCredit} </a>
                      <a class="nav-link p-2">${ModalDebit}</a>
                    </div>
                  </div>
                
                  <div class="dashboard--preferences">
                      <a
                        id="refresh"
                        class="navbar-brand p-2"
                        data-bs-placement="bottom"
                        title="Recarregar página"
                      ><i class="bi bi-arrow-repeat"></i
                      ></a>
                      <a
                        id="destroy_session"
                        class="navbar-brand p-2"
                        data-bs-placement="bottom"
                        title="Sair do Sistema"
                        ><i class="bi bi-power"></i
                      ></a>
                      
                      </div>
                </nav>
                
                  <section class="d-flex justify-content-around dashboard--primary-cards">
                  <div class="card w-25">
                    <<div class="card-body">
                    <div class="d-flex flex-row justify-content-between">
                      <p class="align-self-center m-0 fs-6 m-2">Entradas</p>
                      <i class="bi bi-arrow-up-circle"></i>
                    </div>
          
                    <div>
                      <p class="fs-4 m-0 p-0">${Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                          }).format(entradas)}</p>
                    </div>
                  </div>
                  </div>
                
                  <div class="card w-25">
                    <div class="card-body">
                      <div class="d-flex flex-row justify-content-between">
                        <p class="align-self-center m-0 fs-6 m-2">Saídas</p>
                        <i class="bi bi-arrow-down-circle"></i>
                      </div>
                
                      <div>
                        <p class="fs-4 m-0 p-0">R$ 5.273,25</p>
                      </div>
                    </div>
                  </div>
                
                  <div class="card bg-success w-25">
                    <div class="card-body bg-success">
                      <div class="d-flex flex-row justify-content-between">
                        <p class="align-self-center m-0 fs-6 m-2">Total - Conta Corrrente : ${
                          contaCredito.id
                        }</p>
                      </div>
                      <div>
                        <p class="fs-4 m-0 p-0">
                          ${Intl.NumberFormat("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          }).format(contaCredito.saldo)}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                
                <div class="p-4 mt-4">
                <h1> Conta Crédito </h1>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="c-base">Descrição</th>
                        <th scope="col" class="c-base">Valor</th>
                        <th scope="col" class="c-base">Categoria</th>
                        <th scope="col" class="c-base">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${
                        ContaCreditoLancamentos
                          ? ContaCreditoLancamentos.map(
                              (lanc) => `
                      <tr>
                        <th scope="row" class="c-primary">${lanc.descricao}</th>
                        <td> ${Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(lanc.valor)}</td>
                        <td class="ml-4">${
                          lanc.tipo == "R"
                            ? '<i class="bi bi-arrow-up-circle">'
                            : '<i class="bi bi-arrow-down-circle">'
                        }</i></td>
                        <td>${ConvertData(lanc.data)}</td>
                      </tr>`
                            ).join("")
                          : ""
                      }
                    </tbody>
                  </table>
                  <h1> Conta Banco </h1>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="c-base">Descrição</th>
                        <th scope="col" class="c-base">Valor</th>
                        <th scope="col" class="c-base">Categoria</th>
                        <th scope="col" class="c-base">Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${
                        ContaBancoLancamentos
                          ? ContaBancoLancamentos.map(
                              (lanc) => `
                      <tr>
                        <th scope="row" class="c-primary">${lanc.descricao}</th>
                        <td> ${Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(lanc.valor)}</td>
                        <td class="ml-4">${
                          lanc.tipo == "R"
                            ? '<i class="bi bi-arrow-up-circle">'
                            : '<i class="bi bi-arrow-down-circle">'
                        }</i></td>
                        <td>${ConvertData(lanc.data)}</td>
                      </tr>`
                            ).join("")
                          : ""
                      }
                    </tbody>
                  </table>
                </div>
                `;
    return view;
  },
  after_render: async () => {
    let userData = JSON.parse(localStorage.getItem("userDataAccount"));
    const {
      usuario: { nome },
      conta,
      token,
    } = userData;

    document
      .getElementById("destroy_session")
      .addEventListener("click", function () {
        localStorage.clear();
        window.location.replace("#/login");
      });

    document.getElementById("refresh").addEventListener("click", function () {
      window.location.reload();
    });

    document
      .getElementById("pay-credit")
      .addEventListener("click", function () {
        let conta = document.getElementById("conta").value,
          contaDestino = document.getElementById("destino").value,
          data = document.getElementById("data").value,
          descricao = document.getElementById("desc").value,
          login = document.getElementById("logindestino").value,
          // planoConta = document.getElementById("plan").value,
          valor = document.getElementById("value-transfer").value;

        let postData = {
          conta,
          contaDestino,
          data,
          descricao,
          login,
          planoConta: 1,
          valor,
        };

        axios
          .post(baseURL + "lancamentos", postData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Oops, algo deu errado");
          });
      });
  },
};

export default Dash;
