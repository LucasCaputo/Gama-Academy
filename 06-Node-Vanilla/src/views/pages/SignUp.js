import baseURL from "../../service/baseURL.js"

// document.postRegisterNewUser = async () => {
//   const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
//   }
  
  
  
//   try {
    
//     const RegisterData = {
//       name: document.getElementById("name").value,
//       mail: document.getElementById("mail").value,
//       password: document.getElementById("password").value,
//     }

//     console.log(RegisterData);

    
//     const response = await fetch(baseURL, {
//         method: 'post',
//         body: JSON.stringify(RegisterData)
//       })
      
//       const json = await response.json();

//       console.log(json);
//     return json
//   } catch (err) {
//     console.log("Erro");
//   }
// }

document.isCpfValid = () => {

  let res = document.cpfValidation()

  let containerCpf = document.getElementsByClassName("cpf")

  console.log(res);
}

document.cpfValidation = ()=> {
  var inputCPF = document.getElementById('cpf').value;
  var soma = 0;
  var resto;

  if(inputCPF == '00000000000') return false
  for(let i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(9, 10))) return false

  soma = 0;
  for(let i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
  resto = (soma * 10) % 11;

  if((resto == 10) || (resto == 11)) resto = 0;
  if(resto != parseInt(inputCPF.substring(10, 11))) return false
  return true

}

let SignUp = {
    render: async () => {      
      let view = `<div class="container">
                    <div class="row mt-5 mb-5">
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
                      <div class="col-md-6 m-auto">
                        <div class="card">
                          <h2 class="mt-5 mb-4 text-center">
                            Preencha seus Dados
                          </h2>
                          <form class="p-4">

                            
                            <div class="form-group">
                            <label for="name">Nome</label>
                            <input id="name" type="text" class="form-control" />
                            </div>
                            
                            <div class="form-group mt-4 cpf">
                              <label for="name">CPF</label>
                              <input id="cpf" onchange="isCpfValid()" type="text" maxlength="11" class="form-control" />
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
                            <label for="senha">Senha</label>
                            <input id="repassword" type="password" class="form-control mb-4" />
                          </div>
          
                            <button class="btn btn-primary" id="submit_new_register">
                              Fazer Cadastro
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>`;
  
      return view;
    },
    after_render: async () => {
      document.getElementById('submit_new_register').addEventListener('click', () => {

          let valueName = document.getElementById("name").value,
           valueMail = document.getElementById("mail").value,
           valueCPF = document.getElementById("cpf").value.replace(/[\d]/g,""),
           valuePassword =document.getElementById("password").value,
           valueRePassword =document.getElementById("repassword").value

           var re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gi;

           valueCPF = str.replace(re, valueCPF);

   
          if(valuePassword.length > 6) {
            console.log("mais que 6 caracteres");

            if(valueRePassword == valuePassword){
  
              axios.post(`${baseURL}usuarios`, {
                cpf: valueCPF,
                login: valueMail,
                nome: valueName,
                senha: valuePassword
              })
              .then(res => {
                
                console.log(res);
                if( res.status === 200){
                    window.location.replace('#/login')
                }

                // localStorage.setItem("@token", res.data.token)

                // sessionStorage.setItem("@token", res.data.token)

                // Cookies.set("@token", res.data.token, { expires: 1})
              })


            }


          }else{
            alert("confira sua senha")
          }

         
        })

      }
  };
  
  export default SignUp;  