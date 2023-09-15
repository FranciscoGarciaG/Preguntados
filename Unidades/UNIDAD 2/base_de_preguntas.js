function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "Músculos que se encargan de los movimientos involuntarios.",
      respuesta: "Lisos",
      distractores: ["Estriados","Cardíacos","Esqueléticos"],
    },
    {
      pregunta: "Enfermedad que ataca al hígado.",
      respuesta: "Hepatitis",
      distractores: ["Renitis","Bulimia","Onicomicosis"],
    },
    {
      pregunta: `Función principal del intestino grueso`,
      respuesta: `Absorción De Agua`,
      distractores: ["Producción De Insulina","Producción De Glucógeno","Producción Del Jugo Pancreático"],
      imagen: "https://i.ibb.co/pJ8q4JB/image.jpg"
    },
    {
      pregunta: `Cambio de estado ocurre en la sublimación`,
      respuesta: `Solido A Gaseoso`,
      distractores: ["Gaseoso A Solido","Solido A Liquido","Liquido A Gaseoso"],
      imagen: "https://i.ibb.co/6v4nGBq/Materia.jpg"
    },
    {
      pregunta: `Cambio de sólido a gaseoso`,
      respuesta: `Sublimación`,
      distractores: ["Cohesión","Evaporación","Condensación"],
      imagen: "https://i.ibb.co/6v4nGBq/Materia.jpg"
    },
    {
      pregunta: `Órgano del cuerpo humano produce la bilis`,
      respuesta: `Hígado`,
      distractores: ["Páncreas","Estomago","Riñón"],
      imagen: "https://i.ibb.co/31Fhj8j/000.jpg"
    },
    {
      pregunta: `¿Dónde vive el delfín rosado?`,
      respuesta: `En Brasil`,
      distractores: ["En Oceanía","Solo En Aguas Cálidas","Solo En Aguas Muy Frías"],
      imagen: "https://i.ibb.co/RTffJbX/d.jpg"
    },
    {
      pregunta: `¿En qué lugar del cuerpo se produce la insulina?`,
      respuesta: `Páncreas`,
      distractores: ["Hígado","Intestino","Riñón"],
      imagen: "https://i.ibb.co/31Fhj8j/000.jpg"
    },
    {
      pregunta: `¿Cómo se llama a los electrones que se encuentran en la última capa del átomo?`,
      respuesta: `Electrones De Valencia`,
      distractores: ["Electrones","Iones","Isotopos"],
      imagen: "https://i.ibb.co/6v4nGBq/Materia.jpg"
    },
    {
      pregunta: `Los elefantes…`,
      respuesta: `Barritan`,
      distractores: ["Gritan","Gruñen","Brujen"],
      imagen: "https://i.ibb.co/rZcFJrW/1036712.jpg"
    },
    {
      pregunta: `¿Qué son las enzimas?`,
      respuesta: `Proteínas`,
      distractores: ["Hadas","Glúcidos","Células"],
    },
    {
      pregunta: `¿De qué color es la sangre de los peces?`,
      respuesta: `Rojo`,
      distractores: ["Verde Oscuro","Marrón Oscuro","Azul"],
      imagen: "https://i.ibb.co/Jyvx3Gb/540dc6daf152es296230-p-1.jpg"
    }
  ];