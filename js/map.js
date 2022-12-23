MapaBrasil(document.getElementById('mapa'), {
    onClick: function (data) {
        MapaBrasil(document.getElementById('mapa'), {
            unidade: data.codIbge,
            regiao: 'municipio',
            onClick: function (data) {
                console.log(data)
            }
        });
    }
});