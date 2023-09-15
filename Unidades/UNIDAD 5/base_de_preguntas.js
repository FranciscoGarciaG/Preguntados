function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿En qué año tuvo lugar el ataque a Pearl Harbor?",
      respuesta: "1941",
      distractores: ["1939","1940","1942"],
    },
    {
      pregunta: "¿Quién es la mascota de SEGA?",
      respuesta: "Sonic",
      distractores: ["Mario","Pac Man","Crash"],
    },
    {
      pregunta: `¿A qué dirigente latinoamericano mandó callar Juan Carlos de Borbón?`,
      respuesta: `Hugo Chávez`,
      distractores: ["Evo Morales","Fidel Castro","Rafael Correa"],
    },
    {
      pregunta: `¿Qué otro nombre recibió el período de la Gran Hambruna China?`,
      respuesta: `Todas Son Correctas`,
      distractores: ["Tres Años De Desastres Naturales","Tres Años De Dificultades Económicas","Tres Años Amargos"],
    },
    {
      pregunta: `¿Cuál es la ciudad más antigua de América Latina?`,
      respuesta: `Caral`,
      distractores: ["Valparaíso","Arequipa","La Paz"],
    },
    {
      pregunta: `¿Con qué emperador estuvo casada Cleopatra?`,
      respuesta: `Todas Son Correctas`,
      distractores: ["Ptolomeo XIV","Julio César","Marco Antonio"],
    },
    {
      pregunta: `El Renacimiento marcó el inicio de la Edad…`,
      respuesta: `Moderna`,
      distractores: ["Antigüedad Clásica","Contemporánea","Media"],
    },
    {
      pregunta: `¿Qué país fue dirigido por Stalin?`,
      respuesta: `Unión Soviética`,
      distractores: ["Cuba","Alemania","Polonia"],
    },
    {
      pregunta: `¿Qué se celebra el 8 de Marzo?`,
      respuesta: `El Día De La Mujer`,
      distractores: ["El Día Del Trabajo","El Día Del Medio Ambiente","El Día Del Niño"],
    },
    {
      pregunta: `¿Dónde surgió la filosofía?`,
      respuesta: `Grecia`,
      distractores: ["España","Egipto","Japón"],
    },
    {
      pregunta: `¿Quién fue galardonado con el premio Nobel de la Paz en 2007?`,
      respuesta: `Albert Gore`,
      distractores: ["Albert Einstein","Albert Schweitzer","Albert Van Bommel"],
    },
    {
      pregunta: "¿Cómo se llama la capital del antiguo imperio azteca?",
      respuesta: `Tenochtitlan`,
      distractores: ["Quetzalcoatl","Culhuacan","Texcoco"],
    }
  ];