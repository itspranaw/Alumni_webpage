let signup = document.getElementById('signup');
signup.onclick = function (){
  alert('done');
}
var email_check = function(){
   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
   let email = document.getElementById('ff-email')
   if((email.value).match(pattern)) {
    email.style.borderColor = "green";
  }else{
    email.style.borderColor = "red";
  }
  if (email == '') {
    email.style.borderColor = "red";
  }
}
var check = function() {
  let pswrd=document.getElementById('ff-password');
      let cnpswrd=document.getElementById('ff-conf-password');
  if (document.getElementById('ff-password').value ==
      document.getElementById('ff-conf-password').value){
      cnpswrd.style.borderColor = "green";
      pswrd.style.borderColor = "green";
  }
  else{
    cnpswrd.style.borderColor = "red";
      pswrd.style.borderColor = "red";
  }
}