
	document.addEventListener("DOMContentLoaded", function(){
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
        	element.addEventListener('click', function (e) {
        		e.stopPropagation();
        	});
        })
    }); 

	function optiontocheck(that) {
		if (that.value == "Nintendo") {
			document.getElementById("NS").style.display = "block";
			document.getElementById("NWU").style.display = "block";
			document.getElementById("NW").style.display = "block";
			document.getElementById("GC").style.display = "block";
			document.getElementById("N3DS").style.display = "block";
			document.getElementById("NDS").style.display = "block";
			document.getElementById("NES").style.display = "block";
			document.getElementById("SNES").style.display = "block";
			document.getElementById("N64").style.display = "block";
			document.getElementById("GBC").style.display = "block";
			document.getElementById("GBA").style.display = "block";
		} else{
			document.getElementById("NS").style.display = "none";
			document.getElementById("NWU").style.display = "none";
			document.getElementById("NW").style.display = "none";
			document.getElementById("GC").style.display = "none";
			document.getElementById("N3DS").style.display = "none";
			document.getElementById("NDS").style.display = "none";
			document.getElementById("NES").style.display = "none";
			document.getElementById("SNES").style.display = "none";
			document.getElementById("N64").style.display = "none";
			document.getElementById("GBC").style.display = "none";
			document.getElementById("GBA").style.display = "none";
		}

		if(that.value == "Playstation"){
			document.getElementById("PS5").style.display = "block";
			document.getElementById("PS4").style.display = "block";
			document.getElementById("PS3").style.display = "block";
			document.getElementById("PS2").style.display = "block";
			document.getElementById("PS1").style.display = "block";
			document.getElementById("PSP").style.display = "block";
			document.getElementById("PSVITA").style.display = "block";
		}else{
			document.getElementById("PS5").style.display = "none";
			document.getElementById("PS4").style.display = "none";
			document.getElementById("PS3").style.display = "none";
			document.getElementById("PS2").style.display = "none";
			document.getElementById("PS1").style.display = "none";
			document.getElementById("PSP").style.display = "none";
			document.getElementById("PSVITA").style.display = "none";
		}

		if(that.value == "Xbox"){
			document.getElementById("XO").style.display = "block";
			document.getElementById("X360").style.display = "block";
			document.getElementById("X").style.display = "block";
		}else{
			document.getElementById("XO").style.display = "none";
			document.getElementById("X360").style.display = "none";
			document.getElementById("X").style.display = "none";
		}
	}
	// DOMContentLoaded  end
