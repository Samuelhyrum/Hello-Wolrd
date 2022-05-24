function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Task 1 

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.querySelector('#days')

 for(let i =0; i<dezDaysList.length;i+=1){
    let item = dezDaysList[i];

     let novo = document.createElement('li');
     novo.innerText = item;
     novo.className = "day";
     days.appendChild(novo);
 }
 let novo = document.querySelectorAll(".day");
 novo[25, 26 ,32].className = "day holiday";
 novo[5].className = "day friday";
 novo[12].className = "day friday";
 novo[19].className = "day friday";
 novo[26].className = "day friday holiday";

//Task 2
