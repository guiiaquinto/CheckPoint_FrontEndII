const submitt = document.getElementById('form')
const filmeName = document.getElementById('filme')
const descricao = document.getElementById('descricao')
const url = document.getElementById('url')

submitt.addEventListener('submit', e => {
    e.preventDefault();
    validacao()
})

const erro = (item, merro) => {
    const inputM = item.parentElement
    const erroMsg = inputM.querySelector('.error')
    
    erroMsg.innerText = merro
    inputM.classList.add('erro')
    inputM.classList.remove('ok')
}

const ok = item => {
    const inputM = item.parentElement
    const erroMsg = inputM.querySelector('.error')
    erroMsg.innerText = ''
    inputM.classList.add('ok')
    inputM.classList.remove('erro')
}

const validacao = () =>{
 
    const filmeValue = filmeName.value.trim()
    const descricaoValue = descricao.value.trim()
    const urlValue = url.value.trim()

    const valores = [
        {
          nomefilme: filmeValue,
          descrição: descricaoValue,
          urlimg: urlValue
        },
    
    
      ]
        let i = 0
    
      if (filmeValue === '' || filmeValue == 'null' || filmeValue.length < 4) {
        erro(filmeName,'Campo vazio ou com menos de 4 caracteres');
        i++
      } else
      {
        ok(filmeName)
        
        }
    
      if (descricaoValue === '' || descricaoValue == 'null' || descricaoValue.length < 4) {
        erro(descricao, 'Campo vazio ou com menos de 4 caracteres');
        i++
      }else{
        ok(descricao)
        }
    
      if (urlValue === '' || urlValue == 'null' || urlValue.length < 4) {
        erro(url, 'Campo vazio ou com menos de 4 caracteres');
        i++
      }else
      {ok(url)}
      console.log(i)

      if (i==0){
        


 
            
    for (let card of valores) {
        let cards = `<div class="item">
        <img src="${card.urlimg}">
        <h2 class='title'>${card.nomefilme}</h2>
        <div class ='descc'><p>${card.descrição}
        </p> </div>
      
        </div>`
        let novoCard = document.createElement('div');
  
        let cardfilme = document.getElementById("cards");
  
        novoCard.innerHTML = cards;
  
        cardfilme.appendChild(novoCard);

      }
    }
}

