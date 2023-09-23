let email = document.getElementById('lf-email');
let button = document.getElementById('signin');
let paswrd = document.getElementById('lf-password');


var email_check = function(){
   let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if((email.value).match(pattern)) {
    email.style.borderColor = "green";
  }else{
    email.style.borderColor = "red";
  }

  if (email == '') {
    email.style.borderColor = "red";
  }
};

button.onclick = function(){
  if(email.value != '' && paswrd.value !=''){
  alert('Your logge in');
  }else{
    alert("please check the Email or password")
  }
}
