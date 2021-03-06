import IsAuthenticated from "../../service/isAuth.js";
import baseURL from "../../service/baseURL.js";

let RequestDataAccount = async () => {
  let dataUser = JSON.parse(localStorage.getItem("userDataAccount"));

  let {
    token,
    usuario: { login },
  } = dataUser;

  let headersDefault = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  };

  const response = await axios.get(
    `${baseURL}lancamentos/planos-conta?login=${login}`,
    headersDefault
  );

  const allData = response.data;

  return allData;
};

let Dash = {
  render: async () => {
    let ComponentsData = await RequestDataAccount();
    let userData = JSON.parse(localStorage.getItem("userDataAccount"));
    const { usuario, conta } = userData;
    console.log(ComponentsData);

    let IsAuth = await IsAuthenticated(
      !localStorage.getItem("@token"),
      "#/login"
    );



    let view = `
    <div class="container">
    <section class="row mt-5 mb-5">
        <div class="row">
        </div>
        <h3>Olá ${usuario.nome}</h3>
        <h5>${conta.saldo.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</h5>

      </section>

      <section class="p-4">

      <div class="form-group mt-4 cpf">
        <label for="cpf">CPF</label>
        <input id="cpf" type="text" maxlength="11" class="form-control" />
      </div>

      <div class="form-group mt-4">
        <label for="description">Email</label>
        <input id="description" type="text" class="form-control" />
      </div>

      <div class="form-group mt-4">
        <label for="valor">Valor</label>
        <input id="value" type="number" class="form-control mb-4" />
      </div>
      <button class="btn btn-primary" id="submit_transfer">
        Fazer Transferência
      </button>
    </section>
    
      <section class="container row mb-5">
        <div class="col-md-4 m-auto">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Lindas Bolsas</h5>
              <p class="card-text">
                Veja as diferentes bolsas que temos em estoque, várias marcas de
                bolsas
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
    
        <div class="col-md-4 m-auto">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Cosméticos Importados</h5>
              <p class="card-text">
                Trazemos os melhores produtos de todo mundo para sua casa,
                diferentes produtos.
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
    
        <div class="col-md-4 m-auto">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Lindos móveis de cozinha</h5>
              <p class="card-text">
                Veja o armário que mais combina com sua cozinha! temos várias
                cores
              </p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div>
          </div>
        </div>
      </section>
    
      <section class="container row mb-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@exemplo.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Descrição</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
    
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Senha</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="staticEmail" />
          </div>
        </div>
    
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Confirmar Senha</label
          >
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
    
        <div class="mb-3 row">
          <label for="exampleDataList" class="form-label">Preferência</label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Pesquise..."
          />
          <datalist id="datalistOptions">
            <option value="Mais Baratos"></option>
            <option value="Frete Grátis"></option>
            <option value="Melhor Avaliação"></option>
            <option value="Mais Vendidos"></option>
            <option value="Lançamentos"></option>
          </datalist>
        </div>
    
        <a class="btn btn-primary" href="./dashboard.html"> Enviar </a>
      </section>
    
      <section class="container row mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Pedido</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Uma compra de vários itens de maquiagem</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Compra de artigos para o banheiro</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Compra de Roupas Femininas</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p>Lucas Caputo</p>
    
      <div
        id="toaster"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header">
          <strong class="me-auto">Login Realizado</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Olá bem vindo!!!</div>
      </div>
    </footer>`;
    // <script>
    //   $(document).ready(() => {
    //     $(".toast").toast("show");
    //   });
    // </script>

    return view;
  },
  after_render: async () => {
    //   document
    //     .getElementById("submit_transfer")
    //     .addEventListener("click", () => {});
  },
};

export default Dash;
