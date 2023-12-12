document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("searchInput").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			performSearch();
		}
	});

	function performSearch() {
		var searchInput = document.getElementById("searchInput").value;
		var news = '';
		switch (searchInput.toLowerCase()) {
			case 'acceuil':
				news = 'index';
				break;
			case 'a propos':
				news = 'a_propos';
				break;
			case 'service':
			case 'services':
				news = 'service';
				break;
			default:
				alert("Les possibilités de redirection sont limitées.");
				return;
		}
		window.location.href = "https://login-sommaire.ironn.repl.co/" + news + ".html";
	}
});
