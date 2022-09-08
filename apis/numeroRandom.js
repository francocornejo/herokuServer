process.on('message', (cant) => {
    const numeros = {};
    console.log("aaaaaaaaaaaaaaaaaa", cant)
    for (let i = 0; i < cant; i++) {
      const randomNum = Math.floor(Math.random() * (1001 -1) + 1)
      if(!numeros[randomNum]){
        numeros[randomNum] = 1
      } else {
        numeros[randomNum] = numeros[randomNum] +1;
      }
    }
    process.send(numeros);
    process.exit();
  });
    process.send('ready');