const currentHour = 10;
let message;

if(currentHour>=22){
  message = console.log("Não deveríamos comer nada, é hora de dormir");
}
 else if(currentHour>=18 && currentHour<=22){
message=console.log("Rango da noite, vamos jantar :D" );
}
 else if( currentHour>=14 && currentHour<=18){
    message=console.log("Vamos fazer um bolo pro café da tarde?");
}
 else if(currentHour>=11 && currentHour<=14){
     message=console.log("Hora do almoço!!!");
}
else{
    message=console.log("Hmmm, cheiro de café recém passado");
}

const weekDay="sabado"

if(weekDay==="segunda-feira" || weekDay==="terça-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if(weekDay==="quarta-feira" ||weekDay==="quinta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if(weekDay==="quinta-feira" || weekDay==="sexta-feira"){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else{
    console.log("FINALMENTE, descanso merecido UwU");
}
