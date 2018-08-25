 

function mostraPosicao() {
    var options = {
       enableHighAccuracy: true,
       maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
 
    function onSuccess(position) {
        document.getElementById("lat").innerText = position.coords.latitude ;
        document.getElementById("log").innerText = position.coords.longitude ;

    };
 
    function onError(error) {
       alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
 }

 function limpaPosicao() {
    document.getElementById("lat").innerText = "" ;
    document.getElementById("log").innerText = "" ;
 }

app.initialize();