

function comprobar () {

    event.preventDefault();

    let puntos = 0;

    let q1 = document.galaxyForm.p1.value;
    let q2 = document.galaxyForm.p2.value;
    let q3 = document.galaxyForm.p3.value;
    let q4 = document.galaxyForm.p4.value;
    let q5 = document.galaxyForm.p5.value;
    let resultadoA = document.getElementById("resultado-aprobado");
    let resultadoS = document.getElementById("resultado-suspendido");

    let test = document.querySelectorAll('label')
    



/*-----ESTA ES LA PRIMERA PREGUNTA----------*/

    if (q1 == "corvus") {
        
        test[0].style.boxShadow= "green 0px 0px 10px 20px"
        test[0].style.opacity="1";  
        test[0].style.backgroundImage= "url('style/nebulosa.jpg')"
        puntos++
    }

    if (q1 == "altius") {
        
        test[1].style.boxShadow= "red 0px 0px 10px 20px"
        test[1].style.opacity="1"; 
        test[1].style.backgroundImage= "url('style/nebulosa.jpg')"
            
        };

    if (q1 == "kandor") {
        
        test[2].style.boxShadow= "red 0px 0px 10px 20px"
        test[2].style.opacity="1"; 
        test[2].style.backgroundImage= "url('style/nebulosa.jpg')"
            
        };

    if (q1 == "rao") {
        
        test[3].style.boxShadow= "red 0px 0px 10px 20px"
        test[3].style.opacity="1"; 
        test[3].style.backgroundImage= "url('style/nebulosa.jpg')"
                
        };


/*-----ESTA ES LA SEGUNDA PREGUNTA-----------*/

    if (q2 == "arcadia") {
        
        test[4].style.boxShadow= "red 0px 0px 10px 20px" 
        test[4].style.opacity="1";  
        test[4].style.backgroundImage= "url('style/nebulosa.jpg')"     
       

        };

    if (q2 == "nautilus") {
        
        test[5].style.boxShadow= "red 0px 0px 10px 20px"
        test[5].style.opacity="1"; 
        test[5].style.backgroundImage= "url('style/nebulosa.jpg')"
                
        };
    
    if (q2 == "leviatan") {
            
        test[6].style.boxShadow= "red 0px 0px 10px 20px"
        test[6].style.opacity="1"; 
        test[6].style.backgroundImage= "url('style/nebulosa.jpg')"
                
        };
    
    if (q2 == "nostromo") {
            
        test[7].style.boxShadow= "green 0px 0px 10px 20px"
        test[7].style.opacity="1";  
        test[7].style.backgroundImage= "url('style/nebulosa.jpg')"
        puntos++
                    
        };



/*-----ESTA ES LA TERCERA PREGUNTA-----------*/

    if (q3 == "eywa") {
        
        test[8].style.boxShadow= "red 0px 0px 10px 20px" 
        test[8].style.opacity="1"; 
        test[8].style.backgroundImage= "url('style/nebulosa.jpg')"      
      

        };

    if (q3 == "pandora") {
        
        test[9].style.boxShadow= "green 0px 0px 10px 20px"
        test[9].style.opacity="1";  
        test[9].style.backgroundImage= "url('style/nebulosa.jpg')"
        puntos++
                
        };
    
    if (q3 == "centauri") {
            
        test[10].style.boxShadow= "red 0px 0px 10px 20px"
        test[10].style.opacity="1"; 
        test[10].style.backgroundImage= "url('style/nebulosa.jpg')"
                
        };
    
    if (q3 == "aleluya") {
            
        test[11].style.boxShadow= "red 0px 0px 10px 20px"
        test[11].style.opacity="1"; 
        test[11].style.backgroundImage= "url('style/nebulosa.jpg')"
        
                   
        };



/*-----ESTA ES LA CUARTA PREGUNTA-----------*/

if (q4 == "tauro") {
        
    test[12].style.boxShadow= "green 0px 0px 10px 20px";      
    test[12].style.opacity="1";  
    puntos++
    test[12].style.backgroundImage= "url('style/nebulosa.jpg')"

    };

if (q4 == "piscis") {
    
    test[13].style.boxShadow= "red 0px 0px 10px 20px"
    test[13].style.opacity="1"; 
    test[13].style.backgroundImage= "url('style/nebulosa.jpg')"
            
    };

if (q4 == "escorpio") {
        
    test[14].style.boxShadow= "red 0px 0px 10px 20px"
    test[14].style.opacity="1"; 
    test[14].style.backgroundImage= "url('style/nebulosa.jpg')"
            
    };

if (q4 == "acuario") {
        
    test[15].style.boxShadow= "red 0px 0px 10px 20px"
    test[15].style.opacity="1"; 
    test[15].style.backgroundImage= "url('style/nebulosa.jpg')"
    
                
    };


/*-----ESTA ES LA QUINTA PREGUNTA-----------*/

if (q5 == "reed") {
        
    test[16].style.boxShadow= "red 0px 0px 10px 20px"
    test[16].style.opacity="1";   
    test[16].style.backgroundImage= "url('style/nebulosa.jpg')"     
    

    };

if (q5 == "norrin") {
    
    test[17].style.boxShadow= "red 0px 0px 10px 20px"
    test[17].style.opacity="1"; 
    test[17].style.backgroundImage= "url('style/nebulosa.jpg')"
            
    };

if (q5 == "parker") {
        
    test[18].style.boxShadow= "red 0px 0px 10px 20px"
    test[18].style.opacity="1"; 
    test[18].style.backgroundImage= "url('style/nebulosa.jpg')"
            
    };

if (q5 == "quill") {
        
    test[19].style.boxShadow= "green 0px 0px 10px 20px"
    test[19].style.opacity="1";  
    test[19].style.backgroundImage= "url('style/nebulosa.jpg')"
    puntos++
    
                
    };    



    if (puntos <= 3) {
        resultadoS.innerHTML = '<div><h3> Has obtenido <span>' + puntos +' sobre 5. La Tierra ha sido absorvida por un agujero negro.</span></h3></div>';
    }else {
        resultadoA.innerHTML = '<div><h3>Muy buena puntuación con <span>' + puntos +' puntos sobre 5. ¡Has salvado la Tierra!</span></h3></div>';
    }
    }





    //CONTADOR.... FALLIDO! 

    let time = 2;
    let quizTimeInMinutes = time * 60 * 60;
    quizTime = quizTimeInMinutes / 60;
    
    let counting = document.getElementById("count-down");
    
    function startCountdown() {
        let quizTimer = setInterval(function() {
            if (quizTimer <= 0) {
                clearInterval(quizTimer);
               // showScores();
    
            }else {
                quizTimer--;
                let sec = Math.floor(quizTime % 60);
                let min = Math.floor(quizTime / 60)% 60; 
                counting.innerHTML = `TIME: ${min} : ${sec}`
            }
        } , 1000)
    }
    
    startCountdown(); 



//const handleClick = (e) => {

    //e.preventDefault()
//Al elemento que pulso le pongo una clase
   //e.target.classList.toggle('selected')
    //Al resto de elemento de la pregunta se la quito si la tienen
    
//}

//document.querySelector('form').addEventListener('submit', comprobar);
//[...document.querySelectorAll('input')].map(input => input.addEventListener('click', handleClick))

