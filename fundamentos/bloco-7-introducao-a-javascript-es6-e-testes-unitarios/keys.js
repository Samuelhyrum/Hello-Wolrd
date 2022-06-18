// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

//   const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
//   };


const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);



const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);




const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

// let newKey = 'lastName';
// // const lastName = 'Ferreira';
customer['newKey'] = 'lastName';
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
console.log(customer);



let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}


// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

// for (const i in coolestTvShow){
//     console.log(i);
// }




const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
  console.log(Object.keys(coolestTvShow));
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]




  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);