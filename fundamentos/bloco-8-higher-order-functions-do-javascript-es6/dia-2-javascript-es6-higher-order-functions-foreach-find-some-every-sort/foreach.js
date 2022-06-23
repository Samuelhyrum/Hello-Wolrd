const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

  emailListInData.forEach((mail, posicao,array) => {
    showEmailList(mail);
    console.log(`Seu email posição é de: ${posicao}`);
    console.log(`Numero total de emails ${array.length}`);
})