(function ($) {
	"use strict";
    // preloader
    $("#preloader").delay(500).fadeOut("slow");
	
	let sidebar = document.querySelector(".sidebar");
	let closeBtn = document.querySelector("#btn");
	let searchBtn = document.querySelector(".bx-search");
	
	closeBtn.addEventListener("click", ()=>{
	  sidebar.classList.toggle("open");
	  menuBtnChange();//calling the function(optional)
	});
	
	searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
	  sidebar.classList.toggle("open");
	  menuBtnChange(); //calling the function(optional)
	});
	
	// following are the code to change sidebar button(optional)
	function menuBtnChange() {
	 if(sidebar.classList.contains("open")){
	   closeBtn.classList.replace("bx-menu", "bx-menu");//replacing the iocns class
	 }else {
	   closeBtn.classList.replace("bx-menu","bx-menu");//replacing the iocns class
	 }
	}
	
	// scrollUp
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa-solid fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

})(jQuery);