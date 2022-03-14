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
  - [Pokedex](#pokedex)
  - [Conecta 4](#conecta-4)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)
  - [Estructura del directorio](#estructura-del-directorio)
  - [Comandos npm del repositorio](#comandos-npm-del-repositorio)

***

## Introduccion

La sección de introducción a TypeScript de la asignatura comienza con la práctica número 3, donde se hace una evaluación del uso del tipo de datos estáticos y de las funciones en este lenguaje. En este documento se pretende plasmar el proceso de desarrollo y aportar justificaciones en cuanto a las decisiones de diseño realizadas en el código.

## Objetivos

El objetivo de esta práctica es familiarizar en la medida de lo posible el uso de TypeScript en el uso de sus tipos de datos en programas sencillos.

Para cuando se termine la práctica se espera que el alumno tenga:

- Los 10 ejercicios de programación propuestos
- Un entorno que admita documentación mediante TypeDoc
- Un banco de tests donde aplicar BDD a los ejercicios propuestos.

## Actividades previas

## Pokedex

## Conecta 4

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

- npm start  `inicia la ejecución del código de manera ininterrumpida`
- npm test  `ejecuta los test unitarios`
- npm run test:watch `inicia la ejecución de los test unitarios de manera ininterrumpida`
- npm run build `ejecuta los test y traduce el código TypeScript a JavaScript`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
