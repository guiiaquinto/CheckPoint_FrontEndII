function load (){

const submit = document.querySelector('.btnEnviar')
submit.addEventListener('click', dados)

}



function dados() {

  const filmeValue = document.getElementById('filme').value;
  const descricaoValue = document.getElementById('descricao').value;
  const urlValue = document.getElementById('url').value;


  const valores = [
    {
      nomefilme: filmeValue,
      descrição: descricaoValue,
      urlimg: urlValue
    },


  ];



  for (let item of valores) {
    let cards = `<div class="item">
 <img src="${item.urlimg}">
 <h2>${item.nomefilme}</h2>
 <p>
 ${item.descrição}
 </p>
 </div>`
 let novoCard = document.createElement('div');
 
 let grupoFelinos = document.getElementById("cards");
 
 novoCard.innerHTML = cards;
 
 grupoFelinos.appendChild(novoCard);
 }




  // document.querySelector('#sumit').innerHTML = filmeValue;
  // document.querySelector('#sumit').innerHTML = descricaoValue;
}




