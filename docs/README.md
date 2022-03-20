# PRACTICA 5 - Objetos, clases e interfaces

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Autor**: [Eric Dürr Sierra](alu0101027005@ull.edu.es) - **Última modificación**: 20/03/2022

***

## [Enlace a la documentacion generada con TypeDoc](http://dsi-p05-code-docs.surge.sh)

## Indice

- [PRACTICA 5 - Objetos, clases e interfaces](#practica-5---objetos-clases-e-interfaces)
  - [Enlace a la documentacion generada con TypeDoc](#enlace-a-la-documentacion-generada-con-typedoc)
  - [Indice](#indice)
  - [Introduccion](#introduccion)
  - [Objetivos](#objetivos)
  - [Actividades previas](#actividades-previas)
  - [Clase Pokemon](#clase-pokemon)
  - [Clase Pokedex](#clase-pokedex)
  - [Clase Combate](#clase-combate)
  - [Clase Jugador de Conecta cuatro](#clase-jugador-de-conecta-cuatro)
  - [Clase Juego de Conecta cuatro](#clase-juego-de-conecta-cuatro)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)
  - [Estructura del directorio](#estructura-del-directorio)
  - [Comandos npm del repositorio](#comandos-npm-del-repositorio)

***

## Introduccion

En este informe se recogen las decisiones de  diseño de las clases para los ejercicios 1 y 2 además de un pequeño apartado de tareas previas y unas conclusiones tras el desarrollo de ambos ejercicios.

## Objetivos

El objetivo de esta práctica se centra en el correcto uso de los elementos de TypeScript para la programación orientada a objetos intentando hacer uso de los principios SOLID por medio de las clases e interfaces.

Para cuando se termine la práctica se espera que el alumno tenga:

- El ejercicio 1 y todas las clases implicadas
- El ejercicio 2 y todas las clases implicadas
- Los test de ambos ejercicios
- La cobertura de código por medio de NYC
- Un programa que ejecute el juego de **conecta cuatro**
- La documentación generada con TypeDoc.

## Actividades previas

Para las actividades previas, a demás de seleccionar la tarea y generar el repositorio en el Github Classroom, se ha configurado el entorno para revisar la cobertura de código.

Para aplicar esto solo hay que aplicar dos acciones:

1. instalar el paquete de npm de nyc (`npm i --save-dev nyc`)
2. modificar la ejecución de los test desde el fichero package.json para revisar la cobertura de código (notroduciendo el comando `nyc` antes de `mocha`)

## Clase Pokemon

Esta clase permite tener almacenados todos los datos relativos a un pokemon especificados en el guión de la práctica. Se usa principalmente para representar un Pokemon en las clases Combate y Pokedex y así recurrir a esta abstracción más fácilmente.

No hay nada esencialmente reseñable en la lógica que constotuye esta clase, se usa como una estructura de datos.

## Clase Pokedex

En la clase Pokedex se implementan la interfaz *PokemonPrint* ya que esta tendrá su propia forma de mostrar los pokemon que en ella se registran. Por otro lado hace uso de la clase Pokemon para almacenar en un array instancias de esta clase, por defecto la Pokedex se inicializa vacía.

Se introduce el método de estado *isEmpty()* ya que es importante revisarlo antes de extraer un Pokemon o a la hora de operar con un objeto de esta clase.

El método *print()* itera por la lista de pokemons para imprimir, por medio de la lectura de un fichero de texto, la imagen del pokemon. Si no se encuentra la imagen del pokemon porque no existe o no se encuentra en la base de datos se muestra un signo de interrogación, tras esta imagen se muestran las estadísticas relevantes del Pokemon.

Hacer uso de esta base de datos se ha tomado como una opción más amigable al usuario para poder identificar rápidamente los Pokemon que se encuentran en su Pokedex.

El método *addPokemon(Pokemon)* recibe el pokemon a insertar. Antes de insertarlo comprueba que no se encuentre ya registrado y devuelve true si se completa con éxito la operación.

El método *removePokemon(String)* recibe el nombre de un pokemon a eliminar de la Pokedex. Antes de insertarlo comprueba que se encuentre ya registrado y devuelve true si se completa con éxito la operación.

## Clase Combate

Esta clase también hace uso de la clase Pokemon para instanciar sus luchadores, tanto el A como el B. Por otro lado implementa las interfaces PokemonPrint y PokemonActions ya que imprimirá el estado actual del combate con los datos relevantes y la imagen del pokemon y será necesario definir las acciones que van a efectuar los Pokemon durante el combate.

El método *attack()* se ha diseñado para que el Pokemon que sea atacado es el pasado por parámetro y así se construya un programa más legible "__atacar -> pokemon__". La selección de atacante y atacado se hace mediante operadores ternarios dentro del método y comparándo los luchadores con el objeto pasado por parámetro, de este modo se puede usar indistintamente este método. Tras la selección se establece el nuevo valor de Puntos de Vida (HP) con la fórmula aplicada en las anteriores prácticas. En esta fórmula interviene el método *effectiveness()* también extraído de la práctica 3

El método *start()* pone a combatir a los pokemon del objeto hasta que uno alcanza los puntos de vida negativos o nulos. Se muestra tras cada ataque la ronda y el estado de los pokemon. Se devuelve el pokemon ganador como resultado del método. Esto último se fundamenta en el uso de la función para extraer directamente el ganador y poder emplearlo en un programa de combates.

## Clase Jugador de Conecta cuatro

Para separar la lógica de comprobar las victorias y conservar las posiciones en el juego de conecta 4 se crea la clase jugador que, como en la vida real, es el que es consciente de si ha ganado o no y de dónde están sus fichas.

Esta clase permite conocer el nombre del jugador, si se identifica por un color propio y la lista de tokens que ha jugado, es decir, todas las posiciones en las que ha colocado una ficha en el tablero.

Para para insertar una ficha se llama al método *makeMove()* que registra una nueva posición de una ficha si no es que ya existe, en cuyo caso devuelve **false**. Se asume que la los valores de la posición de una ficha dependen del tablero ya wue el jugador no define estas propiedades.

La mayor parte de la lógica de este ejercicio se concentra en el método de estado *isWinner()* que implementa la interfaz **GamesStatus**. Para comenzar se descartan todas las jugadas anteriores a la cuarta ficha evaluando la longitud del array de Tokens, ya que es absurdo evaluar si es un ganador antes de entonces.

Se separan las condiciones de victoria en:

- columnas
- filas
- diagonales ascendentes
- diagonales descendentes

La evaluación de las filas se aplica recorriendo el array de tokens ordenado en base a la coordenada ***i***, para cada elemento se comprueba que los siguientes 4  tokens tienen el mismo valor en ***i*** y que sus valores en ***j*** son los 4 valores consecutivos directamente superiores. Si ambas condiciones se cumplen el jugador gana.

```TS
.sort((a, b) => a.i - b.i)
.forEach((el, pos) => {
  if (pos < this.tokens.length - 3) {
    if (((el.i) === this.tokens[pos + 1].i
      && (el.i) === this.tokens[pos + 2].i
      && (el.i) === this.tokens[pos + 3].i)
      && ((Math.abs((el.j) - this.tokens[pos + 1].j) === 1)
      && (Math.abs((el.j + 1) - this.tokens[pos + 2].j) === 1)
      && (Math.abs((el.j + 2) - this.tokens[pos + 3].j) === 1))) {
      status = true;
    }
  }
});
```

Las columnas se evaluan de forma análoga, en este caso se mantienen las ***j*** y se evalua que las ***i*** sean consecutivas. En tal caso el jugador gana.

```TS
.sort((a, b) => a.j - b.j)
.forEach((el, pos) => {
  if (pos < this.tokens.length - 3) {
    if (((el.j) === this.tokens[pos + 1].j
      && (el.j) === this.tokens[pos + 2].j
      && (el.j) === this.tokens[pos + 3].j)
      && ((Math.abs((el.i) - this.tokens[pos + 1].i) === 1)
      && (Math.abs((el.i + 1) - this.tokens[pos + 2].i) === 1)
      && (Math.abs((el.i + 2) - this.tokens[pos + 3].i) === 1))) {
      status = true;
    }
  }
});
```

Para evaluar las diagonales ascendentes se filtran de entre los tokens aquellos que no pueden consituir una diagonal en este tablero, es decir las secciones que constituyen las esquinas superior isquierda e inferior derecha en las que no vcabe una diagonl ascendente de cuatro fichas. tras este filtrado se recorre todo el listado de tokens y se localizan las posibles diagonales ascendentes de cuatro fichas por medio de un contador. En caso de encontrar cuatro entre uno de los elementos de la lista filtrada el jugador gana.

```TS
.forEach((el) => {
  let counter: number = 0;
  this.tokens.forEach((token) => {
    if ((token.i === (el.i)) && (token.j === (el.j))) {
      counter += 1;
    }
    if ((token.i === (el.i - 1)) && (token.j === (el.j + 1))) {
      counter += 1;
    }
    if ((token.i === (el.i - 2)) && (token.j === (el.j + 2))) {
      counter += 1;
    }
    if ((token.i === (el.i - 3)) && (token.j === (el.j + 3))) {
      counter += 1;
    }
  });
  if (counter === 4) { status = true; }
});
```

Las diagonales descendentes aplican el mismo proceso pero filtrando las esquinas superior derecha e inferior izquierda.

El uso del filtrado simplifica en gran medida los condicionales que se evaluan en las diagonales y estructura un código más sencillo y legible que es concordante con el estilo de desarrollo funcional de TypeScript. En el caso de no usarlos habría que hacer dos bucles iterativos para cada grupo de diagonales que filtren las casillas en las que puede haber una diagonal de cuatro fichas y extiende mucho más el método.

## Clase Juego de Conecta cuatro

La clase juego se ha planteado para ocupar la lógica de comprobar que existen dos jugadores (de la clase antes explicada), saber qué posiciones del tablero ya han sido ocupadas (por medio de un simple array de booleanos) y dar comienzo y proceder con el juego.

Para saber tras cada jugada cómo se encuentra el tablero se hace uso del método *print()* implementado desde la inclusión de la interfaz PrintableGame, este dibuja por consola una cuadŕicula de 6x7 que se rellenan con las fichas de los jugadores cuando en estas hay una casilla ocupada, para ello se recorren todas las casillas del juego y si una coincide con una posición guardada por un jugador se imprime su ficha.

En cada turno un jugador es capaz de seleccionar una columna en la que introducir una ficha, para ello se crea el método *insertToken()* lo que se hace en primera instancia es resolver si la columna está llena, un condicional revisa que no quedan posiciones en valor 'true' y devuelve 'false' como resultado de la inserción, en cualquier otro caso revisa la columna en la que se inserta la ficha de forma inversa y en la primera posición cuyo valor es 'true' (lo que implica que se puede insertar) marca ese hueco como completado y añade un movimiento al jugador que inserta la ficha en la posición registrada dentro del tablero.

```TS
insertToken(col: number, player: ConnectFourPlayer): boolean {
  if (this.getColumn(col - 1).filter((el) => el).length === 0) { return false; }
  let moved: boolean = false;
  this.getColumn(col - 1)
    .reverse()
    .forEach((el, row) => {
      if ((el === true) && (moved === false)) {
        moved = true;
        this.slots[5 - row][col - 1] = false;
        player.makeMove({ i: 5 - row, j: col - 1 });
      }
    });
  return true;
}
```

Este último método se simplifica mucho gracias al método *getColumn()* que directamente abstrae una columna del array de arrays de booleanos que compone el tablero de juego. Este método devuelve un array que es compuesto recorriendo el tablero e insertando los valores cuya posición ***j*** coincide con el parámetro de la columna. Lo que permite reducir en gran medida la lógica del resto de métodos a la hora de evaluar las acciones y las condiciones del juego.

```TS
getColumn(col: number): boolean[] {
  const column: boolean[] = [];
  for (let i: number = 0; i < 6; i += 1) {
    for (let j: number = 0; j < 7; j += 1) {
      if (j === col) {
        column.push(this.slots[i][j]);
      }
    }
  }
  return column;
}
```

Esta clase implementa también la interfaz GameAction definiendo el método *runGame()*, el cual es el que contiene la lójica de ejecución del juego. Dentro de este se registra la columna elegida por los jugadores (primero el A y luego el B) por medio del teclado haciendo uso de la librería 'readline-sync'. Gracias a un bucle que termina cuando se cumple que la ficha es insertada se puede controlar que se introduce en una columna existente y que tiene huecos vacíos, por medio del valor devuelto por el métoro *insertToken()* que falla cuando la columna está llena. Tal y como se exige en el guión, cuando una ficha no se introduce se vuelve a solicitar al mismo jugador que la inserte correctamente. El bucle principal termina cuando uno de los jugadores gana o cuando se produce un empate porque todos los jugadores han gastado todas sus fichas.

```TS
···
while (!ok) {
  column = rl.question(`It's ${this.playerA.getName()}'s turn, insert a column: `);
  if ((+column > 0) && (+column <= 7)) {
    if (this.insertToken(+column, this.playerA)) {
      this.print();
      ok = true;
      if (this.isTie() || this.playerA.isWinner()) {
        break;
      }
    } else {
      console.log(`Column ${+column} is full, please choose another one ...`);
    }
  } else {
    console.log(`Column ${+column} is out of boundries, please choose another one ...`);
  }
}
···
```

Este método se diseña como un menú iterativo clásico ya que es la mecánica más acorde a las normas del juego donde las fichas se introducen de manera secuencial alternando los jugadores.

## Conclusiones

La importancia de crear interfaces que puedan ser utilizadas por distintas clases queda demostrada con ambos ejercicios y su funcionalidad se destaca a la hora de:

1. Poder definir una lógica distinta dependiendo de la clase que lo implementa
2. modularizar y segmentar mejor el código

La inserción de datos por medio de la terminal puede complicarse mucho usando la librería nativa readline ya que esta puede presentar asincronía. La solución ha sido sustiruirla por 'readline-sync' que provee una solución más manejable y que puede emplearse dentro de bucles while y for.

## Referencias

[Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/)

[SOLID principle using TypeScript - Samuele Resca](https://samueleresca.net/solid-principles-using-typescript/)

[Principios SOLID - Apuntes de la asignatura](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)

## Estructura del directorio

```txt
P03/
├───.github         |- Carpeta para las configuraciones de github
│   └───workflows/  |- Carpeta con los workflows a ejecutar en las Github Actions
├───dist/           |- Carpeta contenedora del código JavaScript traducido (autogenerada)
├───doc/            |- Carpeta para la documentación generada por TypeDoc
│   ├───assets/
│   └───modules/
├───node_modules/   |- Carpeta contenedora de los paquetes usados en la práctica (autogenerada)
├───docs/           |- Carpeta para el informe de prácticas
│   └───img/        |- Imágenes del informe de prácticas (divididas por secciones)
│       └───tdd/
├───src/            |- Carpeta contenedora del código fuente en TypeScript
└───test/           |- Carpeta contenedora de los test unitarios
```

## Comandos npm del repositorio

- npm connect-4  `inicia la ejecución del juego entre las personas indicadas en el programa`
- npm test  `ejecuta los test unitarios`
- npm run test:watch `inicia la ejecución de los test unitarios de manera ininterrumpida`
- npm run build `ejecuta los test y traduce el código TypeScript a JavaScript`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
