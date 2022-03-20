# PRACTICA 5 - Objetos, clases e interfaces

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Autor**: [Eric Dürr Sierra](alu0101027005@ull.edu.es) - **Última modificación**: 07/03/2022

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

El método *print()* itera por la lista de pokemons para imprimir, por medio de la lectura de un texto, la imagen del pokemon. Si no se encuentra la imagen del pokemon porque no existe o no se encuentra en la base de datos se muestra un signo de interrogación, tras esta imagen se muestran las estadísticas relevantes del Pokemon.

Hacer uso de esta base de datos se ha tomado como una opción más amigable al usuario para poder identificar rápidamente los Pokemon que se encuentran en su Pokedex.

El método *addPokemon(Pokemon)* recibe el pokemon a insertar. Antes de insertarlo comprueba que no se encuentre ya registrado y devuelve true si se completa con éxito la operación.

El método *removePokemon(String)* recibe el nombre de un pokemon a eliminar de la Pokedex. Antes de insertarlo comprueba que se encuentre ya registrado y devuelve true si se completa con éxito la operación.

## Clase Combate

Esta clase también hace uso de la clase Pokemon para instanciar sus luchadores, tanto el A como el B. Por otro lado implementa las interfaces PokemonPrint y PokemonActions ya que imprimirá el estado actual del combate con los datos relevantes y la imagen del pokemon y será necesario definir las acciones que van a efectuar los Pokemon durante el combate.

El método *attack()* se ha diseñado para que el Pokemon que sea atacado es el pasado por parámetro y así se construya un programa más legible "__atacar -> pokemon__". La selección de atacante y atacado se hace mediante operadores ternarios dentro del método y comparándo los luchadores con el objeto pasado por parámetro, de este modo se puede usar indistintamente este método. Tras la selección se establece el nuevo valor de Puntos de Vida (HP) con la fórmula aplicada en las anteriores prácticas. En esta fórmula interviene el método *effectiveness()* también extraído de la práctica 3

El método *start()* pone a combatir a los pokemon del objeto hasta que uno alcanza los puntos de vida negativos o nulos. Se muestra tras cada ataque la ronda y el estado de los pokemon. Se devuelve el pokemon ganador como resultado del método. Esto último se fundamenta en el uso de la función para extraer directamente el ganador y poder emplearlo en un programa de combates.

## Clase Jugador de Conecta cuatro

## Clase Juego de Conecta cuatro

## Conclusiones

(usar eql y no eq con los arrays por la instancia)

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
