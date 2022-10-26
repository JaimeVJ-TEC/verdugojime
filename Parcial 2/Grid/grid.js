new gridjs.Grid({
    columns: ['ID','Nombre','Edad'],
    server: {
        url:'http://localhost:8082/personas',
        then: data => data.map(persona => 
            [persona.ID,persona.Nombre + ' ' + persona.Apellido, persona.Edad]),
    }
}).render(document.getElementById("tabla"));