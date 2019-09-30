$(function() {
    $('#bVermelho').hover(function(){
        $('#Vermelho').css("color", "red");
       


    });
    $('#bAzul').click(function(){
        $('#Azul').css("color","blue");

        $('#mensagem')
        .text("Cor alterada com sucesso")
        .css({color:'red, ', border:'1px solid red'})
        .css('border','1px solid red')
        .fadeOut(3000)

        $('#bAzul').addClass('green');
        $('#bAzul').removeClass('green')

    });
    $('#bVermelho').mouseout(function(){
        $('#Vermelho').css("color", "black");
    });
});