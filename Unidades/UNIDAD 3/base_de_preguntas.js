function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿Cuál es la fórmula química del agua?",
      respuesta: "H2O",
      distractores: ["HO","HO2","H3O"],
      imagen: "https://i.ibb.co/g6kcqTK/thumbs-b-c-0970f11a6d81d650d9c47ea21f10a751.jpg",
    },
    {
      pregunta: "¿Cuál es el símbolo de Bromo?",
      respuesta: "Br",
      distractores: ["No Es Un Elemento, Es Un Compuesto","B","BH"],
    },
    {
      pregunta: `¿Qué compuesto químico es el componente activo de los pimientos picantes?`,
      respuesta: `Capsaicina`,
      distractores: ["Celobiosa","Galactosa","Glucosa"],
    },
    {
      pregunta: `¿Cuál es el símbolo del Sodio?`,
      respuesta: "Na",
      distractores: ["Mn","Li","Au"],
    },
    {
      pregunta: `¿Cuál es el nombre común del ácido ascórbico?`,
      respuesta: `Vitamina C`,
      distractores: ["Ácido Cítrico","Vitamina B6","Vitamina B12"],
    },
    {
      pregunta: `¿Qué sustancias se liberan en una combustión completa?`,
      respuesta: `Dióxido De Carbono Y Agua`,
      distractores: ["Monóxido De Carbono Y Agua","Carbono, Oxígeno Y Agua","Solamente Agua"],
    },
    {
      pregunta: `¿Cómo llamamos a una lesión térmica o química de los tejidos?`,
      respuesta: `Quemadura`,
      distractores: ["Inflamación","Úlcera","Hernia"],
    },
    {
      pregunta: `¿Cuál es el símbolo químico del fósforo?`,
      respuesta: `P`,
      distractores: ["F","Fo","Ps"],
    },
    {
      pregunta: `¿Qué tiene más concentración de sal?`,
      respuesta: `La Orina`,
      distractores: ["La Sangre","El Sudo","Las Lágrimas"],
    },
    {
      pregunta: `¿Cómo conocemos comúnmente al compuesto químico H2O2?`,
      respuesta: `Agua Oxigenada`,
      distractores: ["Agua Fuerte","Agua Pesada","Aguarrás"],
    },
    {
      pregunta: `¿Cuál es la fórmula del dióxido de carbono?`,
      respuesta: `CO2`,
      distractores: ["H2O","CO","HCO"],
    },
    {
      pregunta: `¿Cuál es el símbolo químico del hierro?`,
      respuesta: `Fe`,
      distractores: ["Hi","Fi","Hu"],
    }
  ];