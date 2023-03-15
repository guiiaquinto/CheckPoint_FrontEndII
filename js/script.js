function load() {

  const submit = document.querySelector('.btnEnviar')
  submit.addEventListener('click', dados)

}



function dados(e) {

  const filmeValue = document.getElementById('filme').value;
  const descricaoValue = document.getElementById('descricao').value;
  const urlValue = document.getElementById('url').value;
  const erro = document.querySelector('#merro');

  const valores = [
    {
      nomefilme: filmeValue,
      descrição: descricaoValue,
      urlimg: urlValue
    },


  ];

  function validação (){

  let mensagens = [];

  if (filmeValue === '' || filmeValue == 'null' || filmeValue.length < 4) {
    erro(filmeValue,'O campos não podem estar vazios ou comter menos de 4 caracteres');
  } else{validação(filmeValue)}

  if (descricaoValue === '' || descricaoValue == 'null' || descricaoValue.length < 4) {
    erro(descricaoValue, 'O campos não podem estar vazios ou comter menos de 4 caracteres');
  }else{validação(descricaoValue)}

  if (urlValue === '' || urlValue == 'null' || urlValue.length < 4) {
    erro(urlValue, 'O campos não podem estar vazios ou comter menos de 4 caracteres');
  }else{validação(urlValue)}


  if (mensagens.length > 0) {
    e.preventDefault();
   alert(mensagens.join(', '));
  }
  else {

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

  }
  }





  // document.querySelector('#sumit').innerHTML = filmeValue;
  // document.querySelector('#sumit').innerHTML = descricaoValue;
}




