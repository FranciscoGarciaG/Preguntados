function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "¿En qué año Newton Descubrió el calculo?",
      respuesta: "1665",
      distractores: ["1637","1728","1696"],
    },
    {
      pregunta: "¿Qué descubrio Kepler en 1609?",
      respuesta: "Las leyes del movimiento planetario",
      distractores: ["La geometria analitica","La integral de Kepler","El volumen del cilindro"],
    },
    {
      pregunta: `Este es el antiguo billete de 10 francos suizos ¿De quién es el retrato?`,
      respuesta: `Euler`,
      distractores: ["Bacón","Rieman","Fibonacci"],
    },
    {
      pregunta: `Area del triangulo`,
      respuesta: `½bh`,
      distractores: ["2πr","πr²","bh"],
    },
    {
      pregunta: `Circunferencia de un circulo`,
      respuesta: `2πr`,
      distractores: ["½bh","bh","½ab(senΘ)"],
    },
    {
      pregunta: `¿Qué es el radio?`,
      respuesta: `es un segmento que une el centro con un punto de la circunferencia perimetral.`,
      distractores: ["es un segmento que une dos puntos de la circunferencia sin pasar por su centro.","línea que hace parte y sobresale del círculo .","Es la recta que toca al círculo en un solo punto; es perpendicular al radio cuyo extremo es el punto de tangencia."],
    },
    {
      pregunta: `¿Que es π, (número pi)?`,
      respuesta: `Es el cociente entre la longitud de la circunferencia y el diámetro`,
      distractores: ["Es la relacion entre el diametro y el radio","El producto del Area con el perimetro","La raiz del radio"],
    },
    {
      pregunta: `¿Cuál es la afirmacion verdadera?`,
      respuesta: `Todo paralelogramo tiene cuatro vértices y cuatro lados`,
      distractores: ["Dos lados opuestos de un paralelogramo no son paralelos","La suma de los ángulos interiores de todo paralelogramo es siempre igual a 180°.","Todos los paralelogramos son concavos."],
    },
    {
      pregunta: `Calcula a estos cuatro nueves (9×9+9)/9`,
      respuesta: `10`,
      distractores: ["9","8","7"],
    },
    {
      pregunta: `a cuanto equivale ½ de hora en minutos`,
      respuesta: `30`,
      distractores: ["15","45","60"],
    },
    {
      pregunta: `Fraccion equivalente a 4/3`,
      respuesta: `12/9`,
      distractores: ["15/21","2/3","16/6"],
    },
    {
      pregunta: `La hipotenusa es igual a la raiz de la suma de los catetos al cuadrado`,
      respuesta: `Teorema de pitagoras`,
      distractores: ["Teorema de Tales","Teorema de los triangulos","Teorema del triangulin"],
    }
  ];