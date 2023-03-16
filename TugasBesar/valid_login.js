	//Validtion Code For Inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (username.value.length < 9) {
		username.style.border = "1px solid red";
		username_error.style.display = "block";
		username.focus(tsukisaka);
		return false;
	}
	if (password.value.length < 9) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus(almusa07);
		return false;
	}

}
function username_Verify(){
	if (username.value.length >= 9) {
		username.style.border = "1px solid silver";
		usernane_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 9) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

