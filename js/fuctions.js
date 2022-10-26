
function operaciones(){
    var A = 0;
    var B = 0;
    var suma ;
    var resta ;
    var multiplicacion;
    var division;
    A = parseInt(prompt("Ingrese el primer valor"));
    B = parseInt(prompt("Ingrese el segundo valor"));
    suma = A + B ;
    resta = A - B ;
    multiplicacion = A * B ;
    division = A / B ;
    alert("Los resultados de las operacion suma son: " + suma);
    alert("Los resultados de las operacion resta son: " + resta);
    alert("Los resultados de las operacion multiplicacion son: " + multiplicacion);
    alert("Los resultados de las operacion divison son : " + division);
}

function edad() {
var edad = 0;
var año = 2022;
var validacion;
edad = parseInt(prompt("Ingrese su edad"));
validacion = año - edad;
alert("Su año de nacimiento es " + validacion  );
}

function conversion(){
 var P = 0;
 var C = 2.54;
 var R = 0;
 var R2 = 0;
 var K = 0.0000254;
  
 P = parseInt(prompt("INGRESE LAS PULGADAS"));
 R = P * C;
 R2 = P * K;

 alert("La conversion de pulgadas a centimetros es : " + R  );
 alert("La conversion de pulgadas a kilometros" + R2 );

} 

function area(){
    var A;
    var B; 
    var rest;

    A = parseInt(prompt("Ingrese la Altura"));
    B = parseInt(prompt("Ingrese la Base"));
    rest = (A * B)/2;

    alert("El Area del triangulo es : " + rest);

}


function cuadrado(){
    var num;
    var ope;

    num = parseInt(prompt("Ingrese el numero"));
    ope = num*num;

    alert("El cuadrado del numero es : " + ope);
}

function inversion(){
        var inver;
        var ano;
        var gana;
        inver = parseInt(prompt("ingrese el valor a invertir"));
        ano = parseInt(prompt("ingrese los años"));
        gana = inver * 0.008
        ano = ano * 12
        total1 = ano * gana
        total2 = total1 + inver
    
        alert("el valor de sus ganancias es de: " + total1 );
        alert ("el total de su inversion y sus ganacias son de: " + total2 );
    }



function promedio(){
    alert("Ingrese sus 7 calificaciones");
var Na;
var Nb;
var Nc;
var Nd;
var Nf;
var Ng;
var Nh;
var suma;
var promedio;
Na = parseInt(prompt("Ingrese el primer nota"));
Nb = parseInt(prompt("Ingrese el segunda nota"));
Nc = parseInt(prompt("Ingrese el tercera nota"));
Nd = parseInt(prompt("Ingrese el cuarta nota"));
Nf = parseInt(prompt("Ingrese el quinta nota"));
Ng = parseInt(prompt("Ingrese el sexta nota"));
Nh = parseInt(prompt("Ingrese el septima nota"));
suma = (Na+Nb+Nc+Nd+Nf+Ng+Nh);
promedio = suma/7;
 if (promedio<3 ) {
    alert("REPROBO, su nota es:" + promedio);}
else {
    alert("APROBO, su nota es: " + promedio);}
}


function fruteria(){
var descuento;
var kilo_Com;
var precio;
var subtotal;
var total;
kilo_Com= parseInt(prompt("Cuantos kilos de Manzana desea comprar"));
precio = parseInt(prompt("Precio del kilo de Manzana  "));
subtotal = kilo_Com*precio;
if (kilo_Com >2 && kilo_Com <= 5){
   descuento=subtotal*0.1;
}else{
    if(kilo_Com>5 && kilo_Com <= 10){
        descuento=subtotal*0.15;
}else{
    if (kilo_Com >=10 ){
        descuento=subtotal*0.2;
     }
    }
  }
  total = subtotal- descuento;
alert ("Valor del descuento" +descuento);
alert ("Valor del subtotal" +subtotal);
alert ("Valor del total" +total);

 }

function obreros(){
    var horas;
    var horas_extras;
    var pago;
    horas = parseInt(prompt("Escriba las horas trabajadas "));

    if (horas > 40 ){
        horas_extras = horas - 40;
        pago = (40 * 10.000) + (horas_extras * 20.000);
    }else {
        pago = horas * 10.000;
    }

    alert ("El pago semanal por estas horas: " + horas );
    alert ("Su total  es  : $ " +pago);
}


function nume(){
    var num = 0;
    var total =0;
    num = parseInt(prompt("Ingrese el numero "))
    while (num >= 1 ) {
       num = num/10
       total= total + 1
    }
    alert ("El numero tiene los siguintes digitos " + total);
    
   }

   