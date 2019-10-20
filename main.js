var modal = document.getElementById('simpleModal'); //Modal element
var modalBtn=document.getElementById('modalBtn');
var closebtn=document.getElementsByClassName('closebtn')[0];

modalBtn.addEventListener('click',openModal);

function openModal() {
    modal.style.display = 'block';
    
  }

  closebtn.addEventListener('click',closeModal);

  function closeModal() {
    modal.style.display = 'none';
    
    
  }

  //outside click
  window.addEventListener('click', outsideClick);

  function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}




//modal for sign up
var SignModal = document.getElementById('signModal'); //Modal element
var signBtn=document.getElementById('signBtn');
var closebtn2=document.getElementsByClassName('closebtn2')[0];

signBtn.addEventListener('click',openSign);

function openSign() {
    SignModal.style.display = 'block';
    
  }

  closebtn2.addEventListener('click',closeSign);

  function closeSign() {
    SignModal.style.display = 'none';
    
    
  }

  //outside click
  window.addEventListener('click', outsideSign);

  function outsideSign(f) {
    if (f.target == SignModal) {
      SignModal.style.display = 'none';
    }
}



//Form Validation
function validateform(){
  var name=document.login.name.value;
  var password=document.login.password.value;
  console.log(name);
  if (name==null || name==""){
  alert("Name can't be blank");
  return false;
  }
  else if(password==null||password==""){
    alert("Invalid Password");
    return false;
  }
  else if(password.length<8){
  alert("Password must be at least 8 characters long.");
  return false;
  }
  }
  function validate(){
    var num=document.login1.num.value;
    var name=document.login1.name.value;
    var password=document.login1.password.value;
    var email=document.login1.email.value;
    var date=document.login1.date.value
    var x=document.login1.email.value;
  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
    if(name==null || name=="" || num==null || num==""|| email==null || email=="" || password==null || password==""||date==null || date=="")
    {
      alert("Fields cant be blank");
      return false;
    }
    else if(password.length<8){
    alert("Password must be at least 8 characters long.");
    return false;
    }
  else if (isNaN(num)){
    alert("Enter Numeric value for mobile number");
    return false;
  }
  else if(num.length!=10)
  {
    alert("Mobile number requires 10 digits");
    return false;
  }
  else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    alert("Please enter a valid e-mail address");
    return false;
    }
  }
