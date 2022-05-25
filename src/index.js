import React from 'react';
import reactDom from 'react-dom';

// renderizar una aplicación es como cargar o actualizar el Dom
// 1: Le pasamos el componente o elemento a renderizar
// 2: Le pasamos el contenedor en donde se va a renderizar
// Devuelve una referencia al componente renderizado o null si el componente no tiene estado
reactDom.render(<App />, document.getElementById('app'));


