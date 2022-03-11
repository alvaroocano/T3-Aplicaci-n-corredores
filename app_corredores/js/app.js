	
	function validar(){
		var nombre=document.getElementsByTagName("input")[0].value;
		var long=nombre.length;
		if(long<=4){
		document.getElementsByTagName("input")[0].style.backgroundColor="red";
		}else{
			document.getElementsByTagName("input")[0].style.backgroundColor="green";
		}
	}

	function validare(){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementsByTagName("input")[1].value))
 	{
 		document.getElementsByTagName("input")[1].style.backgroundColor="green";
    	return (true)
    	
  	}
    	document.getElementsByTagName("input")[1].style.backgroundColor="red";
    	return (false)
	}

		function dijosi(){
			let imp=document.createElement("input");
			let p=document.createElement("p");
			imp.type="number";
			imp.id="km";
			p.id="pa";
			p.innerHTML="¿Cuánta distancia aprox has corrido?"
			document.getElementsByTagName("div")[0].appendChild(p);
			document.getElementsByTagName("div")[0].appendChild(imp);
		}

		function dijono(){
		let kms=document.getElementById("km");
		let par=document.getElementById("pa");
		document.getElementsByTagName("div")[0].removeChild(kms);
		document.getElementsByTagName("div")[0].removeChild(par);
		}


		function datos(){
		let t=document.getElementsByTagName("input")[0].value;
		let e=document.getElementsByTagName("input")[1].value;
		dijosi();
		let kms=document.getElementById("km");
		let pa=document.getElementById("pa");
			
		if(kms.value==0){
		alert("Te llamas "+t+", con email "+e);}
		else {
		alert("Te llamas "+t+", con email "+e+" y has corrido carreras de "+kms.value+" km");}
		dijono();
		}





