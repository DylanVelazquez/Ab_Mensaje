function secreto(n){
    let pa = 0;
    let pu = 0;
    let reverse = "";
    let mensaje = "";
    let nuevo = "";
    for(let i = 0;i<=n.length;i++){
        if(n.charAt(i) == "("){
            pa = i+1;
        }
        if(n.charAt(i) == ")"){
            pu = i-1;
        }
    }
    for(let i = pa;i<=pu;i++){
        mensaje += n[i];
    }
    reverse = mensaje.split('').reverse().join("");
    nuevo = n.split('');
    let papu = 0;
    for(let i = pa;i<=pu;i++){
        nuevo[i] = reverse[papu];
		papu++;
    }
    nuevo[pa-1] = "";
	nuevo[pu+1] = "";
	nuevo = nuevo.join('');
	console.log(nuevo)
	return nuevo;
}
let entra;
let sale;

entra = prompt("Ingrese un mensaje","");

sale = secreto(entra);

document.write(sale);