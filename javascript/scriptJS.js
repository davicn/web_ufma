   $ = require('./jquery-3.4.1')

   function loginA() {

       var username = document.getElementById('uname').value;
       username = username.toLowerCase();
       var password = document.getElementById('psw').value;
       password = password.toLowerCase();


       if (username == "admin" && password == "admin") {
           window.location.replace("./admin.html");
       } else if (username == "outro" && password == "outrosenha") { window.location.href = "./admin.html"; } else if (username == "outro" && password == "outrasenha") { window.location.href = "./admin.html"; } else { alert("Senha ou Usuário inválido."); }

   }