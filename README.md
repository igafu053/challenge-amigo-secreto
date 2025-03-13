<h1 align="center">CHALLENGE DEL AMIGO SECRETO</h1>

<p>En este desafío, se desarrolló una aplicación que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el <strong>"amigo secreto"</strong>. El usuario agregará nombres mediante un campo de texto y el botón <strong>"Añadir"</strong>. Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, el botón <strong>"Sortear Amigo"</strong> seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en la pantalla.</p>

<h2>Funcionalidades</h2>

<h3>1. Agregar nombres</h3>
<ul>
  <li>Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista al hacer clic en el botón <strong>"Añadir"</strong>.</li>
  <li>Los nombres ingresados se validan para asegurar que solo contengan letras (mayúsculas, minúsculas, acentos, la letra "ñ") y espacios. No se permiten números ni caracteres especiales.</li>
  <li>Se estableció un límite máximo de <strong>5 amigos</strong> para participar en el sorteo. Si se intenta agregar un sexto nombre, se mostrará una alerta indicando que se ha alcanzado el límite.</li>
</ul>

<h3>2. Validación de entrada</h3>
<ul>
  <li>Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.</li>
  <li>Si el nombre ingresado contiene caracteres no permitidos (números o caracteres especiales), se mostrará una alerta y se limpiará el campo de texto para que el usuario pueda intentar nuevamente.</li>
</ul>

<h3>3. Visualización de la lista</h3>
<ul>
  <li>Los nombres ingresados aparecerán en una lista debajo del campo de entrada, permitiendo al usuario ver todos los participantes antes de realizar el sorteo.</li>
</ul>

<h3>4. Sorteo aleatorio</h3>
<ul>
  <li>Al hacer clic en el botón <strong>"Sortear Amigo"</strong>, se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página como el <strong>"amigo secreto"</strong>.</li>
  <li>Para realizar el sorteo, es necesario que haya al menos <strong>2 nombres</strong> en la lista. Si no se cumple esta condición, se mostrará una alerta indicando que se necesitan más participantes.</li>
</ul>

<h3>5. Resetear el sorteo</h3>
<ul>
  <li>Se agregó un botón adicional <strong>"Resetear Sorteo"</strong> que permite limpiar la lista de nombres y el resultado del sorteo, dejando el sitio listo para un nuevo proceso de selección sin necesidad de refrescar la página.</li>
</ul>

<h2>Tecnologías utilizadas</h2>

<ul>
  <li><strong>HTML5</strong>: Para la estructura y contenido de la página.</li>
  <li><strong>CSS3</strong>: Para el diseño y estilos, incluyendo la creación de un diseño responsive que se adapta a diferentes dispositivos (móviles, tablets y desktop).</li>
  <li><strong>JavaScript</strong>: Para la lógica de la aplicación, incluyendo la validación de entradas, la gestión de la lista de nombres y la realización del sorteo.</li>
  <li><strong>Google Fonts</strong>: Se utilizaron fuentes de Google Fonts para mejorar la tipografía del sitio.</li>
</ul>

<h2>Puntos fuertes y actualizaciones</h2>

<ul>
  <li><strong>Límite de participantes</strong>: Se estableció un límite máximo de <strong>5 amigos</strong> para participar en el sorteo, lo que permite mantener el proceso ágil y sencillo.</li>
  <li><strong>Validación de nombres</strong>: Se implementó una validación estricta que solo permite el ingreso de letras (mayúsculas, minúsculas, acentos, la letra "ñ") y espacios, evitando el uso de números o caracteres especiales.</li>
  <li><strong>Botón de reset</strong>: Se agregó un botón <strong>"Resetear Sorteo"</strong> que permite limpiar la lista y el resultado del sorteo, facilitando la realización de múltiples sorteos sin necesidad de recargar la página.</li>
  <li><strong>Diseño responsive</strong>: El sitio está diseñado para ser completamente responsive, adaptándose a diferentes tamaños de pantalla, desde móviles hasta desktop.</li>
</ul>

<h2>Cómo usar la aplicación</h2>

<ol>
  <li>Ingresa el nombre de un amigo en el campo de texto y haz clic en <strong>"Añadir"</strong> para agregarlo a la lista.</li>
  <li>Repite el proceso hasta tener al menos 2 nombres en la lista (con un máximo de 5).</li>
  <li>Haz clic en <strong>"Sortear Amigo"</strong> para seleccionar aleatoriamente un nombre de la lista.</li>
  <li>Si deseas realizar otro sorteo, haz clic en <strong>"Resetear Sorteo"</strong> para limpiar la lista y el resultado.</li>
</ol>

---

<p><strong>Desarrollado por Ingrid Gaete F.</strong></p>

 
