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
  console.log(valores);


}




