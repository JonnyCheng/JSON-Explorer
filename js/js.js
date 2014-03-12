    var data = {
	    "products": [
	        {	
	            "name": "Awesome Book",
	            "price": 9.99,
	            "description": "An Awesome book which is full of awesome!" 
	        },
	        {
	            "name": "Cool Board Game",
	            "price": 34.99,
	            "description": "A snazzy and amazing entertainment experience for 2-67 players." 
	        },
	        {
	            "name": "Large Cheese Pizza",
	            "price": 24.99,
	            "description": "Sometimes you just want cheese pizza.  Pair with \"AWESOME\" brand beer for maximum enjoyment" 
	        }
	    ]
	};

	var div = document.querySelector(".list"),  
	    show = document.querySelector(".show"),
            n = null,
	    divList = div.getElementsByTagName('div');
	function crEl(){
		for (var i = 0; i < data.products.length; i++) {
			var tmp = document.createElement("div");
			tmp.innerHTML = data.products[i].name;
			div.appendChild(tmp);
		};
		var el = div.getElementsByTagName("div");
		for(var j=0,k=el.length; j<k; j++){
			el[j].index = j;
			el[j].onclick = function(){
				n = this.index + 1;
				for(var q=0 ;q<k ;q++){
					el[q].className = "";
				}
				this.className = "current";
				show.innerHTML = "<h1>" + data.products[n-1].name + "</h1>";	
				show.innerHTML +="<h2>" +"$"+ data.products[n-1].price + "</h2>";
				show.innerHTML +="<h2>" + data.products[n-1].description + "</h2>";	
			}
		}

	}
		
	crEl();
	var listE=document.getElementById('list');
	    textE=document.getElementById('textE'),
	    btnE=document.getElementById('btn'),
	    btnE1=document.getElementById('btn1'),
	    showE=document.getElementById('show');

	btnE.onclick = function(){
		listE.style.display="none";
		textE.style.display="block";
		btnE.style.display="none";
		btnE1.style.display="block";
		showE.style.display="none";
	}
	btnE1.onclick =function(){
        var val = JSON.parse(textE.value);     
  		data.products.push(JSON.parse(textE.value));
  		console.log(data.products);
  		textE.style.display="none";
  		btnE1.style.display="none";
  		showE.style.display="block";
  		listE.style.display="block";
  		btnE.style.display="block";
  		div.innerHTML = "";
  		crEl();
  	} 
