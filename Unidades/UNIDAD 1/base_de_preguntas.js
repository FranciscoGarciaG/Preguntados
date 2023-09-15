function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      imagen: "https://i.ibb.co/9cjvmw1/mona-lisa.jpg",
      pregunta: "¿Quién pintó la mona lisa?",
      respuesta: "Leonardo da Vinci",
      distractores: ["Picasso", "Miguel Ángel", "Monet"],
    },
    {
      pregunta: "Pintor de  \"El jardín de las delicias\"",
      respuesta: "El Bosco",
      distractores: ["Velásquez","Picasso","Dalí"],
      imagen: "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
    },
    {
      pregunta: "significado de  \"El jardín de las delicias\"",
      respuesta: "Mundo Terrenal",
      distractores: ["Es Mejor Morir", "Dios Es El Camino", "Adán Y Eva"],
      imagen: "https://i.ibb.co/SDjX7PM/jardin-de-las-delicias.jpg",
    },
    {
      pregunta: `Ciudad fetiche del escritor Paul Auster`,
      respuesta: `Nueva York`,
      distractores: ["París","Ámsterdam","Bogotá"],
      imagen: "https://i.ibb.co/zfM2Vyd/paul-auster.jpg",
    },
    {
      pregunta: "Escritor de \"El viejo y el mar\"",
      respuesta: `Ernest Hemingway`,
      distractores: ["Julio Verne","Gabriel García Márquez","Ernesto Sábato"],
      imagen: "https://i.ibb.co/WHd1NnL/el-viejo-y-el-mar.jpg",
    },
    {
      pregunta: `Vivía en el 221B de Backer Street.`,
      respuesta: `Sherlock Holmes`,
      distractores: ["Katniss Everdeen","Hermione Jean Granger","Harry James Potter"],
      imagen: "https://i.ibb.co/SPqsRyx/221b.jpg",
    },
    {
      pregunta: `Género al que pertenece la novela \"La historia del ojo\" de George Bataille`,
      respuesta: `Erótico`,
      distractores: ["Drama","Terror","Suspenso"],
      imagen: "https://i.ibb.co/dgfv8zK/el-ojo.gif",
    },
    {
      pregunta: `Es una figura clave del dadaísmo y el surrealismo.`,
      respuesta: `Max Ernst`,
      distractores: ["Pablo Picasso","Vincent Van Gogh","Claude Monet"],
      imagen: "https://i.ibb.co/dLw3jng/Dada-min-e1533749290497.jpg"
    },
    {
      pregunta: `profesión que tenía Hércules Poirot en las novelas de Agatha Christie.`,
      respuesta: `Detective`,
      distractores: ["Abogado","Escritor","Vocero"],
    },
    {
      pregunta: `Autor de \"Moby Dick\"`,
      respuesta: `Herman Melville`,
      distractores: ["Ernesto Sábato","Ernest Hemingway","Julio Verne"],
      imagen: "https://i.ibb.co/gVQXD5q/mobi.jpg",
    },
    {
      pregunta: `¿Cuál sería un objetivo a largo plazo?`,
      respuesta: `Aumento de conocimiento de marca y generar clientes de calidad`,
      distractores: [`Aumento de conocimiento de marca e inversión en promocionales`, `Capacitar al personal de la empresa`, `Incluir marketing de influencers en la campaña`],
    },
    {
      pregunta: `"protagonista de \"El código Da Vinci\" de Dan Brown"`,
      respuesta: `Robert Langdom`,
      distractores: ["Sherlock Holmes","Katniss Everdeen","Hermione Jean Granger"],
    }
  ];