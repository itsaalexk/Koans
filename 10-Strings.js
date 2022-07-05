
describe('10-Strings.js', () => {
  // Bueno, aunque ya sabemos de booleanos, integers, floats, variables, etc...
  // No tenemos una manera de comunicarnos, las Strings (Cadenas de texto),
  // nos pueden ayudar. Las strings es un tipo de valor con uno o más caracteres
  // que se encuentran entre comillas. Puede que no te acuerdes, pero
  // fue el primer tipo que conocistes en estas koans. ¿Lo recuerdas?
  // expect('¡Arreglame, please!').toBe('Arreglado') en 1-Tests.js y
  // si te fijas las has estado viendo todo el rato tanto en los tests, como
  // en los describes. Aunque solo las conoces con comillas simples, se pueden
  // usar comillas dobles, ya veremos si hay diferencias.
  // Pero ahora, a por lo básico.
  it('como cualquier otro tipo de valor, se puede asignar', () => {

    let string = 'Soy una String'

    expect(string).toBe("Soy una String")
  })
  // Fácil!!!
  it('como cualquier otro tipo de valor, se pueden compara', () => {

    let string = 'Un valor'

    expect(string === 'Un valor').toBe(true)
    expect(string === 'UN VALOR').toBe(false)
    expect(string === 'Un valoR').toBe(false)
    expect(string === 'Un valoR').toBe(false)
  })
  // Aprender nuevos tipos, empieza a ser fácil ^^
  it('¿Qué caracteres pueden contener?', () => {
    // Pues cualquier cosa, números, letras, símbolos, emojis, etc...
    // Asignar a la variable "asignameUnValor" el valor que le hace falta
    // para pasar el expect.
    let asignameUnValor="1234567890";
    expect(asignameUnValor).toBe('1234567890')
    asignameUnValor='!"·$%&/()';
    expect(asignameUnValor).toBe('!"·$%&/()')
    asignameUnValor="😀";
    expect(asignameUnValor).toBe('😀')
  })

  it('se pueden sumar', () => {
    // Lo que se acaba de escuchar ¿fue un cerebro explotando?
    // ¿Cómo que sumar textos?
    // ¡QUE NO SON TEXTOS!, son strings ;P
    expect('1' + '1' + '1' + '1').toBe('1111')
    // Cuidado con el espacio en blanco después de la palabra "estamos"
    expect('Nos estamos ' + 'sumando').toBe("Nos estamos sumando")
  })

  it('¿Se podrán sumar integers y strings?', () => {
    // Vamos a probarlo ^^
    expect('Que pasa si sumamos ' + 1 + ' a esta string').toBe("Que pasa si sumamos 1 a esta string")
  })
  // WOW! Estamos "on fire" (de moderno a carca, "on fire" === "nos estamos saliendo")
  it('¿Y si le sumamos una variable?', () => {

    let valorVariable = 3 * 8
    let unaString = 'pues una string'
    expect(unaString + valorVariable + unaString).toBe("pues una string24pues una string")
    // Ahora lo vamos a dejar mas guay
    expect(unaString + ' ' + valorVariable + ' ' + unaString).toBe("pues una string 24 pues una string")
  })

  it('se pueden convertir todo a mayúsculas', () => {
    // Aún no tienes que entender muy bien como funciona, pero por ahora
    // que sepas que existe y te suene.
    // Las strings tienen un método que te devuelve una string en mayúsculas.
    let stringEnMinusculas = 'todo mi contenido está en minúsculas'
    let stringEnMayusculas = stringEnMinusculas.toUpperCase()

    expect(stringEnMayusculas).toBe("TODO MI CONTENIDO ESTÁ EN MINÚSCULAS")
    // ¿Que crees que pasará si ya tiene alguna mayúscula?
    let stringConDeTodo = 'Un PoCo de TODO 1 * ¿'

    stringEnMayusculas = stringConDeTodo.toUpperCase()

    expect(stringEnMayusculas).toBe("UN POCO DE TODO 1 * ¿")
    // Como puedes ver, solo transforma a mayúsculas las letras en minúscula.
  })

  it('se pueden convertir a minúsculas', () => {
    let stringConDeTodo = 'Un PoCo de TODO 1 * ¿'

    let stringEnMinusculas = stringConDeTodo.toLowerCase()

    expect(stringEnMinusculas).toBe("un poco de todo 1 * ¿")
  })

  it('la String de comillas dobles', () => {

    let stringConComillasSimples = 'Una string'
    let stringConComillasDobles = "Una string"
    // ¿Crees que una serán iguales? ^^
    expect("Una string").toBe(stringConComillasDobles)
    // Entonces si una es igual que otra, ¿qué diferencia existe?
    stringConComillasSimples = 'Aquí puedes usar "comillas dobles"'
    stringConComillasDobles = "Aquí puedes usar 'comillas simples'"
    // ¿Seguiran siendo iguales?
    expect(stringConComillasSimples === stringConComillasDobles).toBe(false)
    // ¿Se pueden usar comillas dobles dentro de una string con comillas dobles?
    // Si, pero tienes que escapar las comillas.
    // ¿Escapar? Si, es una forma de que los caracteres se interpreten de una
    // forma especial (Se escapa un carácter usando "\" antes del caracter).
    stringConComillasDobles = "Así se pueden escapar las \"comillas dobles\""
    // ¿Serán lo mismo?
    expect(stringConComillasDobles).toBe('Así se pueden escapar las "comillas dobles"')

    stringConComillasSimples = 'Así se pueden escapar las \'comillas simples\''
    // Empizas a preguntarte
    expect(stringConComillasSimples).toBe("Así se pueden escapar las 'comillas simples'")
    // Bueno, ya te he reventado con el tema de las comillas. Ya sabes que son iguales.
    // Solo cambia lo que hay que escapar dentro de una u otra.
    // Y ahora me preguntaras: - ¿Y por que siempre usas comillas simples?
    // Y yo te responderé: - Por una manía, ya que en otros lenguajes, son muy diferentes
    // y estoy acostumbrado a eso.
    // Pero si fuera inglés usaría casi siempre las comillas dobles, porque ellos
    // gastan mucho las comillas simples cuando escriben (Ej: don't)
  })

  skip('DIY', () => {
    // Vamos a juntar todo lo que sabemos un poco (para que no se olvide :)
    // Crea una función que le pasemos dos cadenas de text y devuelva
    // true si son iguales y false si no lo son. Fácil, ¿no?
    // Escribe aquí tu código

    function sonIguales(string11 , string22){

      if (string11 === string22){
        return true;
      } else{
        return false;
      }

  
    }


    expect(sonIguales('unaString', 'unaString')).toBe(true)
    expect(sonIguales('unaString', 'otraString')).toBe(false)
    // Ahora crea una función que le pasemos dos strings y nos devuelva
    // una string que sea la suma de las dos pasadas y todo en minúsculas.
    // Escribe aquí tu código
  

  

    expect(sumaEnMinusclas('unastring', 'unastring')).toBe('unastringunastring')
    expect(sumaEnMinusclas('unastring', 'otrastring')).toBe('unastringotrastring')
    expect(sumaEnMinusclas('unaString', 'oTrastRing')).toBe('unastringotrastring')
    expect(sumaEnMinusclas(1, 'oTrastRing')).toBe('1otrastring')
  })
  // Esto empieza a ponerse serio. !BIEN HECHO!
  it('BONUS TRACK: Templates', () => {
    // Los "Template strings" o "Template literals" son un tipo de string
    // diferente a los que hemos visto hasta ahora y le dedicaremos un fichero
    // de tests a ellas. Ahora solo las introduciremos. Una de las grandes
    // diferencias a primera vista es que usa comillas invertidas (backticks)
    let unTemplate = `soy un template`
    // ¿Se podrá comparar con los otros strings?
    expect(unTemplate === 'soy un template').toBe(true)
    expect(unTemplate === "soy un template").toBe(true)
    // Estas pensando: - ¡La string definitiva!, tiene libres todas las comillas.
    unTemplate = `string con
salto de linea`
    // No todo es lo que parece, te acuerdas cuando sumamos strings con números ^^
    expect(unTemplate === 'string con salto de linea').toBe(false)
    expect(unTemplate === 'string con\nsalto de linea').toBe(true)
    // Puede que tenga algunas diferencias, por eso un fichero de tests aparte.

    // Otra cosa importante es que tu puedes interpolar valores dentro del template
    // con ${valor} (Mira la siguiente línea, es más fácil de entender)
    let templateConUnValor = `Tengo un ${1} como valor interpolado`

    expect(templateConUnValor === 'Tengo un 1 como valor interpolado').toBe(true)
    expect(templateConUnValor === 'Tengo un ' + 1 + ' como valor interpolado').toBe(true)
    // Si le podemos interpolar valores, le podemos interpolar variables
    let unValor = 10
    let templateConUnaVariable = `La multiplicación de ${unValor} por ${unValor} es ${unValor * unValor}`
    expect(templateConUnaVariable === 'La multiplicación de 10 por 10 es 100').toBe(true)
    // Aquí se le ve más utilidad ^^
    // Aunque lo de la interpolación se puede hacer sumando variables a una string, por ahora
    // solo lo hemos visto para que te suene.
  })
  // Bueno, ahora ya podemos hacer que nuestros programas devuelvan mensajes,
  // Aunque no lo parezca es importante ^^
})
