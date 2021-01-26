let Home = {
  render: async () => {
    let view = `<div class="container">
    <div class="row mt-5 mb-5">
    
      <div class="col-md-6 m-auto">
        <div class="card">
          <h2 class="mt-4 mb-4 text-center">
            Detalhes da aplicação:
          </h2>
          <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Aplicação rodando servidor Node</h5>
              <small>22 Jan 2021</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Tratamentos de Rotas com Vanilla</h5>
              <small class="text-muted">23 Jan 2021</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Requisições API com fetch</h5>
              <small class="text-muted"> 23 Jan 2021</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>


        </div>
      </div>
      <div class="col-md-6">
        <div class="fluid text-center py-4">
          <h2>Vamos testar lógica de login?</h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1596736146509-b468e77527fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80"
          class="img-fluid m-auto"
          width="100%"
          alt="Imagem resposiva"
        />
      </div>
    </div>
  </div>`;

    return view;
  },
  after_render: async () => {},
};

export default Home;
