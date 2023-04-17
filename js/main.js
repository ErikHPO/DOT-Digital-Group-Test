    $('.dropdown').on('click', function(){
        $(this).toggleClass('active');
     
    });
    // $(window).on("load", function (){
    //     let circle = $("object.icon-interactivecircle").contents().find("g#Elipse_5747")
    //     console.log(circle.position());
    //     $(".interactive-button").offset(circle.position().left, circle.position().top);
    // })

    $('.interactive-button.red').on('click', function(){
        $('.interactive-button').removeClass('active');   
        $('.circle-content').css('background-color', '#FF3737').html('<div>texto com fundo <br><b> Vermelho!</b></div>');
        $(this).toggleClass('active'); 
    })
    $('.interactive-button.yellow').on('click', function(){
        $('.interactive-button').removeClass('active');   
        $('.circle-content').css('background-color', '#FFCC33').html('<div>texto com fundo <br><b> Amarelo!</b></div>');
        $(this).toggleClass('active');    
    })
    $('.interactive-button.gray').on('click', function(){
        $('.interactive-button').removeClass('active');   
        $('.circle-content').css('background-color', '#707070').html('<div>texto com fundo <br><b> Cinza!</b></div>');
        $(this).toggleClass('active');    
    })
    
