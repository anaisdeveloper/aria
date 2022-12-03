let  $ = function(ele){
	return document.querySelector(ele);
}
let $all = function(e) {
	return document.querySelectorAll(e);
}

document.addEventListener('DOMContentLoaded', function(){

	var btn = $("#send"),

		 	modal = $("#myModal"),
		 	span = $all(".close")[0];;





	btn.addEventListener("click", function(){
		var name = $("#fname").value,
			hello = $("#hello"),
			lienCv = $("#lienCv");
		modal.style.display = "block";
		hello.innerHTML = "Hello  " + name;

	lienCv.addEventListener("click", function(){
		window.open('https://cvbadria.netlify.app/');
	});
		// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("#fname").value = " ";
  $("#email").value = " ";
  $("#message").value = " ";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

	})


	
})


	