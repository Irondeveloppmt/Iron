document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("signin").addEventListener("click", function() {
		performSearch();
	});
	document.getElementById("forgot").addEventListener("click", function() {
		window.location.href = "https://sommaire.ironn.repl.co";
	});
	document.getElementById("non").addEventListener("click", function() {
		event.preventDefault();
		alert('Page en création.')
	});
	function performSearch() {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		if (email === "mathisfrances11@gmail.com" && password === "mmdp.2726") {
			window.location.href = "https://sommaire.ironn.repl.co";
		} else {
			alert("Fuck You Bitch !");
		}
	}
});
