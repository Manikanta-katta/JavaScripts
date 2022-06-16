function registration() {

    var name = document.getElementById("t1").value;
    var email = document.getElementById("t2").value;
    var uname = document.getElementById("t3").value;
    var pwd = document.getElementById("t4").value;
    var cpwd = document.getElementById("t5").value;
    var rd1 = document.getElementById("t6").value;
    var rd2 = document.getElementById("t7").value;
    var address = document.getElementById("t8").value;

    //email id expression code
    var pwd_expression = /^(?=.*?[a-z])(?=.*?[0-9])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name == '') {
        alert('Please enter your name');
    }
    else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    }

    else if (email == '') {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
    }
    else if (rd1.checked == false && rd2.checked == false) {

        alert('gender as been not selected ');

    }

    else if (uname == '') {
        alert('Please enter the user name.');
    }
    else if (!letters.test(uname)) {
        alert('User name field required only alphabet characters');
    }
    else if (pwd == '') {
        alert('Please enter Password');
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
    }
    else if (document.getElementById("t5").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("t5").value.length > 12) {
        alert('Password max length is 12');
    }
    else if (address == '') {
        alert('Please enter address');
    }

    else {
        alert('Thank You for Login & You are Redirecting to Our  Website');
       

    }
    console.log("Name :" + name);
    console.log("E-mailid :" + email);
    console.log("Username :" + uname);
    console.log("Password :" + pwd);
    console.log("confirmPassword :" + cpwd);
    console.log("Address :" + address);

}
function clearFunc() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
}

