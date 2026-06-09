export const blogsData = [
  {
    id: 1,
    title: "La IA NO te va a quitar el trabajo de programador. Lo que sí te lo va a quitar es esto",
    description: "El otro día perdí una mañana entera por culpa de 67 líneas que había generado con una IA sin leerlas. ¿Nos va a quitar el trabajo la inteligencia artificial o nos estamos haciendo la pregunta equivocada?",
    cover_image: "/grok.jpg", // Recuerda cambiar esto por la ruta de una imagen tuya en public/
    published_at: "2026-05-18T13:47:03Z",
    public_reactions_count: 42,
    comments_count: 5,
    url: "/blog/1",
content: `
      <p>El otro día perdí una mañana entera por culpa de 67 líneas que había generado con una IA sin leerlas. Funcionaban en mi ordenador, con datos inventados. En producción, o sea, cuando ya lo usan los clientes, con datos de verdad, respondían con un resultado que era casi correcto pero no al 100%, que es lo peor que le puede pasar a un desarrollador.</p>
      <br />
      <p>Cuento esto porque cada pocas semanas vuelve el mismo titular, el de "Una IA que trabaja por ti", y siempre que alguien lo ve me hacen la misma pregunta: si la máquina escribe el código, ¿te va a quitar el trabajo?</p>
      <br />
      <p>La pregunta no me parece ninguna tontería; me la he hecho yo varias veces, pues trabajo de esto. Así que te voy a contar qué pasa de verdad cuando tienes una de estas herramientas abierta en la pestaña de al lado. Que en verdad no se parece tanto a lo que se lee por ahí.</p>
      <br />

      <h2 class="text-2xl font-bold text-[#16f2b3] mt-6 mb-4">Lo que de verdad cuesta no es escribir</h2>
      <p>Existe la idea de que programar es teclear sin parar, como en las películas, con tres monitores y música electrónica de fondo.</p>

      <figure class="my-8">
        <img src="/hacker.jpg" alt="Así imagina la ficción a un programador" class="w-full rounded-lg shadow-lg border border-indigo-900/50" />
        <figcaption class="text-center text-sm text-gray-400 mt-2 italic">Así imagina la ficción a un programador.</figcaption>
      </figure>

      <p>Lo difícil viene antes de la primera línea. Entender qué problema hay que resolver de verdad (que casi nunca es el que te dicen que es: te piden una cosa y resulta que necesitaban otra). Decidir cómo debería funcionar algo cuando todo va bien y cuando no. Intuir por dónde se va a romper, porque se rompe siempre, la única pregunta es dónde. Y encajar esa pieza con las otras cuarenta que ya funcionan y que nadie se atreve a tocar.</p>
      <br />
      <p>Hay una historia famosa sobre esto: en los archivos de Team Fortress 2 hay una imagen de un coco que no se usa en ninguna parte, y durante años circuló que, si la borrabas, el juego dejaba de arrancar. Acabó siendo más leyenda que otra cosa, pero se hizo viral precisamente porque cualquier programador se la creyó sin pestañear. Y eso lo dice todo: todos hemos tocado código así.</p>

      <figure class="my-8">
        <img src="/coco.jpg" alt="El coco de Team Fortress 2" class="w-full rounded-lg shadow-lg border border-indigo-900/50" />
        <figcaption class="text-center text-sm text-gray-400 mt-2 italic">El coco de Team Fortress 2: la leyenda de la imagen que, supuestamente, sostenía el juego entero. Por algo nadie toca lo que ya funciona.</figcaption>
      </figure>

      <p>Por algo nadie toca lo que ya funciona. Realmente esta parte nadie la tiene en cuenta y es la que se lleva la mayor parte del esfuerzo. Aparte, lo que falta te ocupa muchísimo más tiempo del que cualquiera reconoce: comprobar que funciona, dejarlo escrito para que lo entienda otro (ese "otro" sueles ser tú mismo dentro de medio año, insultando a quien escribió esta bazofia) y pelearte con errores que en teoría no deberían existir.</p>
      <br />

      <h2 class="text-2xl font-bold text-[#16f2b3] mt-6 mb-4">¿Para qué sirve la IA, entonces?</h2>
      <p>Un artículo reciente de Gallardo, Machuca y Semblantes habla justo de esto: qué papel tienen IAs como ChatGPT a la hora de programar. La conclusión es que ni lo hacen todo ni lo hacen siempre bien.</p>
      <br />
      <p>Las IAs son como una receta de cocina: antes de cocinar debes leerla bien, comprar todos los ingredientes, medir las cantidades correctas... Pasos necesarios, pero lentos y aburridos. Buena parte de programar se parece a eso, y ahí la IA sí te quita peso de encima: te da un borrador para que no tengas que empezar de cero, te hace las tareas repetitivas y, cuando llevas un rato largo mirando algo sin saber qué debes hacer, a veces te da el empujón que te faltaba.</p>
      <br />
      <p>Pero ojo: no te da la solución, te dice por dónde empezar. Es el becario que te deja las cosas preparadas encima de la mesa. Es útil, pero el trabajo y la responsabilidad de corregir sus errores los sigo teniendo que hacer yo.</p>
      <br />

      <h2 class="text-2xl font-bold text-[#16f2b3] mt-6 mb-4">La letra pequeña que nadie pone en el titular</h2>
      <p>Estas herramientas fallan. El código que parece perfecto y no lo es es lo peor de todo, porque te confías: como cuando Google Maps te lleva hasta una calle cortada y encima te dice que has llegado.</p>
      <br />
      <p>Hay otra cosa de la que se habla poco: para pedirles ayuda tienes que enseñarles en qué estás trabajando. Y eso, según dónde trabajes y qué estés tocando, no siempre es buena idea. Por ejemplo, un empleado de un banco no puede subir a una IA los datos de sus clientes. Hay cosas que no dices en voz alta en mitad de la calle, y un chat con una IA se parece a la calle más de lo que parece.</p>
      <br />
      <p>Finalmente queda uno de los problemas más grandes, el que no se nota hasta pasado un tiempo. Si estás aprendiendo y dejas que la máquina piense por ti, no aprendes a programar: aprendes a pedir. El día que la herramienta se equivoque, porque se equivoca, necesitas haber entrenado tu intuición, el saber por encima qué parte es la que causará problemas. Y eso es justo lo que sí te lo puede quitar: no la IA en sí, sino acostumbrarte tanto a ella que dejes de saber hacerlo sin ella. Eso es lo que casi nadie te está contando.</p>
      <br />

      <h2 class="text-2xl font-bold text-[#16f2b3] mt-6 mb-4">¿Pero nos quita el trabajo o no?</h2>
      <p>No. Pero quedarme en el "No" sin explicar el porqué no tiene sentido, me explico. La IA no sustituye al programador, pero está cambiando qué es lo importante del trabajo. Menos rato en lo mecánico y más en lo que pide criterio: saber qué pedirle y notar cuándo lo que devuelve no es correcto por mucho que lo parezca.</p>
      <br />
      <p>Eso no lo hace la herramienta por ti. Por mucho que mejore, sigue necesitando a alguien delante que entienda lo que está mirando.</p>
      <br />

      <h2 class="text-2xl font-bold text-[#16f2b3] mt-6 mb-4">La pregunta que sí importa</h2>
      <p>A lo mejor la pregunta nunca fue "¿nos van a quitar el trabajo?". Sino esta: ¿vamos a aprender a usar esto bien, o nos vamos a acostumbrar tanto a que piense por nosotros que se nos olvide cómo se hacía sin ella, tal y como ocurre en Wall-E?</p>

      <figure class="my-8">
        <img src="/walle.jpg" alt="Humanos de Wall-E" class="w-full rounded-lg shadow-lg border border-indigo-900/50" />
        <figcaption class="text-center text-sm text-gray-400 mt-2 italic">Los humanos de Wall-E: lo que pasa cuando dejas que la máquina lo haga todo por ti durante demasiado tiempo.</figcaption>
      </figure>

      <p>Lo primero te hace mejor en lo tuyo. Pero lo segundo hace que nos volvamos dependientes. Y esa, y no la de los titulares, es la parte que de verdad me preocupa.</p>
      <br />
      <hr class="border-indigo-900 my-6" />
      <p class="text-sm text-gray-400 italic">
        Adaptación divulgativa basada en el artículo de Gallardo, Machuca y Semblantes (2023): "ChatGPT API: Brief overview and integration in Software Development", publicado en International Journal of Engineering Insights, 1(1), 27-31. Puedes leer el original en https://doi.org/10.61961/injei_v111.7. El texto original cuenta con una licencia Creative Commons Attribution 4.0 (CC BY 4.0). Esta versión es una interpretación con fines didácticos y presenta modificaciones estructurales respecto al texto fuente.
      </p>
`
  }
];