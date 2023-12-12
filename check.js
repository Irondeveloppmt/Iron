var password = document.getElementById("password");
var checking_pass = document.getElementById("checking_pass");

checking_pass.onclick = togglePassword;

function togglePassword() {
		if (checking_pass.checked) {
				password.type = "text";
		} else {
				password.type = "password";
		}
}
