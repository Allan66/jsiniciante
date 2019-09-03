function verificar() {
 var data = new Date();
 var ano = data.getFullYear();
 var fano = document.getElementById('txtano');
 var res = document.querySelector('div#res');
 if(fano.value.length ==0 || (fano.value) > ano){
     window.alert('ERRO Verifique os dados novamente')
 }else{
     var fsex = document.getElementsByName('radsex');
     var idade = ano - Number(fano.value);
     var genero = ''
     var img = document.createElement('img');
     img.setAttribute('id', 'foto')
     if (fsex[0].checked){
         genero = 'Homem'
         if (idade >=0 && idade < 15){
             //Criança
             img.setAttribute('src','criancah.png')
         }else if (idade < 21){
             //jovem
             img.setAttribute('src','jovemh.png')
         }else if (idade < 60 ){
             // adulto
             img.setAttribute('src', 'adultoh.png')
         }else  {
             //idoso
             img.setAttribute ('src','velho.png')
         }
     }else if (fsex[1].checked){
         genero = 'Mulher'
         if (idade >=0 && idade < 15){
            //Criança
            img.setAttribute('src', 'criancam.png')
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovemm.png');
        }else if (idade < 60 ){
            // adulto
            img.setAttribute('src', 'adultam.png')
        }else  {
            //idoso
            img.setAttribute('src', 'velham.png');
        }
     }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
     res.appendChild(img)
 }

}