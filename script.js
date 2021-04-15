function formValidation() {

   let name = document.querySelector(".username");
   let password = document.querySelector(".password");
   let conPass = document.querySelector(".conPass");
   let mobileNumber = document.querySelector(".mobileNumber");
   let email = document.querySelector(".email");



   if (name.value == "") {
      document.querySelector("#name").innerHTML = "blank is not allow!! <br>";
      return false;
   }
   if (!isNaN(name.value)) {
      document.querySelector("#name").innerHTML = "write letter only .. no numbers <br>";
      return false;
   }
   if ((name.value.length < 2) || (name.value.length > 20)) {
      document.querySelector("#name").innerHTML = "write your name in 2 - 20 letter <br>";
      return false;
   }




   if (password.value == "") {
      document.querySelector("#pass").innerHTML = "blank is not allow!! <br>";
      return false;
   }
   if ((password.value.length < 6) || (password.value.length > 15)) {
      document.querySelector("#pass").innerHTML = "pass sould be 6-15 character <br>";
      return false;
   }




   if (conPass.value == "") {
      document.querySelector("#conPass").innerHTML = "blank is not allow!! <br>";
      return false;
   }
   if (conPass.value !== password.value) {
      document.querySelector("#conPass").innerHTML = "password and confirm password not match!! <br>";
      return false;
   }



   if (mobileNumber.value == "") {
      document.querySelector("#phone").innerHTML = "blank is not allow!! <br>";
      return false;
   }
   if (mobileNumber.value.length !== 11) {
      document.querySelector("#phone").innerHTML = " submit full mobile no !! <br>";
      return false;
   }



   if (email.value == "") {
      document.querySelector("#mail").innerHTML = "blank is not allow!! <br>";
      return false;
   }

   if (email.value.indexOf("@") <= 0) {
      document.querySelector("#mail").innerHTML = " invalid  '@' position !! <br>";
      return false;
   }

   // " . " er position ta thik ase kin dekhar jonne ... length er pison theke 3/4 biyog korle jeno  . er position ta pawa jay seta dekha //

   if ((email.value.chartAt(emails.value.length - 4) != ".") && (email.value.chartAt(emails.value.length - 3) != ".")) {
      document.querySelector("#mail").innerHTML = " invalid  '.' position !! <br>";
      return false;
   }





   // ata fun er jonne//
}

