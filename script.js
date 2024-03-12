<!--areglos--!>

const ensalada=["lechuga","tomate","zanahoria"]

console.log(ensalada);

ensalada.push("pepino");

console.log(ensalada);

const primerelemento=ensalada[3];
console.log(primerelemento);
console.log(ensalada.length);

<!-- interar usaremos for of-->

let nombresdelaensalada ="";

for(const verdura of ensalada){
    nombresdelaensalada = nombresdelaensalada + verdura + " ";
    console.log(verdura);
}

console.log(nombresdelaensalada);

// iterar por indices

for(let i=0;i<ensalada.length;i++){

  const verdura=ensalada[i];
  console.log(verdura);
    
}

// poner css en js traer parrafo

const parrafo=document.querySelector("#parrafo");
console.log(parrafo);
parrafo.innerHTML = "<strong>" + nombresdelaensalada + "</strong>";

parrafo.classList.add("parrafo--verde");
parrafo.classList.add("parrafo--grande");







