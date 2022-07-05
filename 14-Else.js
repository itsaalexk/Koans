
describe('14-Else.js', () => {
  // El else es la continuación del if, un if con else se
  // leería de la siguiente manera:
  // SI se cumple una condición ejecuta el código del
  // bloque del IF y SI NO ejecuta el código del bloque del
  // ELSE.
  // Vamos a la práctica.
  it('se escribe de la siguiente manera', () => {
    let unValor = 'valor original'

    if(false) {
      unValor = 'ejecuta el bloque del if'
    } else {
      unValor = 'ejecuta el bloque del else'
    }

    expect(unValor).toBe("ejecuta el bloque del else")
    // Parece que ha sido muy fácil...
  })
  // Así que a practicar ^^
  it('la práctica hace al maestro', () => {
    // Pero vamos a meter valores y así aprendemos, que evalúa como
    // verdadero y que evalúa a falso.
    let unValor = 'cualquier valor'

    if(1) {
      unValor = '¿Evaluará como verdadero el número 1?'
    } else {
      unValor = 'o no'
    }

    expect(unValor).toBe('¿Evaluará como verdadero el número 1?')

    if(0) {
      unValor = '¿Evaluará como verdadero el número 0?'
    } else {
      unValor = 'o como falso'
    }

    expect(unValor).toBe('o como falso')

    if(-1) {
      unValor = '¿Evaluará como verdadero el número -1?'
    } else {
      unValor = 'o como falso'
    }

    expect(unValor).toBe('¿Evaluará como verdadero el número -1?')
    // Todos los números menos el 0 evalúan como verdadero. ^^

    if('una string') {
      unValor = '¿Evaluará como verdadero una string?'
    } else {
      unValor = 'o como falso'
    }

    expect(unValor).toBe('¿Evaluará como verdadero una string?')

    if('') {
      unValor = '¿Evaluará como verdadero una string vacia?'
    } else {
      unValor = 'o como falso'
    }

    expect(unValor).toBe("o como falso")
    // Javascript, javascript... lo pone difícil xD
  })

  it('DIY', () => {
    // Usando if else, crea una función que le pasemos un
    // número y nos diga si es positivo o negativo.
    // Escribe tu función aquí abajo:

    function esPositivoONegativo(number){
        if (number === 0){
          return ("ni positivo/ni negativo")
        } else if (number < 0){
          return ("es negativo")
        } else{
          return ("es positivo")
        }
    }


    expect(esPositivoONegativo(1)).toBe('es positivo')
    expect(esPositivoONegativo(-1)).toBe('es negativo')
    expect(esPositivoONegativo(6709)).toBe('es positivo')
    expect(esPositivoONegativo(-342)).toBe('es negativo')
    // Bonus track ^^ resuélvelo como puedas...
    expect(esPositivoONegativo(0)).toBe('ni positivo/ni negativo')
  })
  // ¿A por otra kata?
})
