let Nav = {
  render: () => {
    let view = `<header
                  class="align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
                >
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container m-auto" width="100%">
                      <a class="navbar-brand" href="#">
                        <img
                          src="assets/logo.svg"
                          class="img-fluid"
                          width="200px"
                          alt=""
                        />
                      </a>
                      <div class="collapse navbar-collapse mx-8" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-4 text-center">
                          <li class="nav-item">
                            <a class="nav-link" href="#/">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#/singup">Cadastro</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#/login">Login</a>
                          </li>
                          ${window.location.hash != '/#dashboard' ? 
                            `<li class="nav-item">
                                <a class="nav-link" id="logout-button" href="#/login">Logout</a>
                            </li>`
                          : ' '}
                        </ul>
                      </div>
                    </div>
                  </nav>
                </header>`;
    return view;
  },
  after_render: () => {
// 
    document
      .getElementById("logout-button")
      .addEventListener("click", () => {
        if (window.location.hash == "#/dashboard") localStorage.clear();
      });
  },
};

export default Nav;
