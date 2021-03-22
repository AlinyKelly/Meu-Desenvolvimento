function enviar(){
    var angulo = parseInt(document.getElementById("numero").value);
    var novoangulo = 0;
    var voltasneg = 0;
    var voltaspos = 0;
    var resto = 0;
     
     if(angulo < 0){ // verifica se o angulo é negativo
        if(angulo > -360){ //verifica se o angulo é maior que -360
            novoangulo = (-360 - angulo) * -1;
            document.getElementById("resultado").innerHTML = "O ângulo positivo congruente ao " + angulo + "º é " + novoangulo + "º.<br>";         
        } else if(angulo < -360){ // verifica se o angulo é menor, quantas voltas ele deu no circulo e qual o angulo.
            voltasneg = (angulo / 360) * -1;
            resto = (angulo%360) * -1;
            novoangulo = 360 - resto;
            document.getElementById("resultado").innerHTML = "O ângulo " + angulo + "º deu " + Math.trunc(voltasneg) + " volta(s) completa(s) no círculo e corresponde ao ângulo positivo congruente " + novoangulo + "º.<br>";
        } else {
            novoangulo = (-360) - angulo; // verifica se o angulo inserido é zero
            document.getElementById("resultado").innerHTML = "O ângulo " + angulo + "º corresponde a  " + novoangulo + "º.<br>";
        }
     }else{ // para angulo positivo
        if(angulo > 360){
            voltaspos = angulo/360;
            novoangulo = angulo%360;
            document.getElementById("resultado").innerHTML = "O ângulo " + angulo + "º deu " + Math.trunc(voltaspos) + " volta(s) completa(s) no círculo e corresponde ao ângulo " + novoangulo + "º.<br>";
        }else{
            novoangulo = angulo;
        }
     }
    // testar o quadrante
    if(novoangulo >= 0 && novoangulo <= 90){
        document.getElementById("resultadoquadrante").innerHTML = "O ângulo encontra-se no Primeiro Quadrante.<br>";
    }else if (novoangulo > 90 && novoangulo <= 180){
        document.getElementById("resultadoquadrante").innerHTML = "O ângulo encontra-se no Segundo Quadrante.<br>";
    }else if(novoangulo > 180 && novoangulo <= 270){
        document.getElementById("resultadoquadrante").innerHTML = "O ângulo encontra-se no Terceiro Quadrante.<br>";
    }else if(novoangulo > 270 && novoangulo <= 360){
        document.getElementById("resultadoquadrante").innerHTML = "O ângulo encontra-se no Quarto Quadrante.<br>";
    }

}