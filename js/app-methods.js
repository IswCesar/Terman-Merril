
//----------------------------------------------------------POSTULANT METHODS------------------------------------------------------------//
function consultarSerie()
{
	var body = {'action':'cSerie1'};
    $.ajax({
         url: 'http://127.0.0.1/terman-merril/webServiceTerman/',
         type: 'POST',
         data: JSON.stringify(body),
         contentType: 'application/json',
         dataType: 'json',
         async: false,
         success: function (data) {
             var content = document.getElementById("serie");
             content.innerHTML = "SERIE 1";
             var instrucciones = document.getElementById("inst");
             var ejemplo = document.getElementById("ejemp");
             var a;
             var b;
		     $.each(data, function(i, item) {
                a = data[i].instrucciones;
                b = data[i].ejemplo;
		    });
            instrucciones.innerHTML = a;
            ejemplo.innerHTML = b;
            
         },
         error: function () {
             alert('Error in Operation');
         }
     });
}

function getQuestions(id_no_serie, id_no_pregunta, arr_ids_answers) {
    var srie = document.getElementById(id_no_serie).value;
    var quest = document.getElementById(id_no_pregunta).value;
    var body = {'action':'get_question', 'serie':srie, 'question':quest};
    $.ajax({
         url: 'http://localhost/webServiceTerman/',
         type: 'POST',
         data: JSON.stringify(body),
         contentType: 'application/json',
         dataType: 'json',
         async: false,
         success: function (data) {
            var stringData2 = JSON.stringify(data);
            var algo = JSON.parse(stringData2);
            var serie = data[0].serie;
            var question = algo[0].pregunta;
            
            var values_answers = [];
            for id in arr_ids_answers{
                values_answers.appendText(document.getElementById(id).value);
            }  
        },
        error: function () {
            alert('Error in Operation');
        }
    });
}


var arr = new Array();
var z = 0;
function consultarPreguntas() 
{
    localStorage.pregunta = 0;
    var content = document.getElementById("contentAnswer");
    content.innerHTML = "";
    var z = 0;
    var body = {'action':'cPreguntasSerie1'};
    $.ajax({
         url: 'http://127.0.0.1/terman-merril/webServiceTerman/',
         type: 'POST',
         data: JSON.stringify(body),
         contentType: 'application/json',
         dataType: 'json',
         async: false,
         success: function (data) {
             var a;
             var b;
             var c;
             var d;
		     $.each(data, function(i, item) {
                a = data[i].id_pregunta;
                b = data[i].noPregunta;
                c = data[i].pregunta;
                d = data[i].noSerie;
                arr[i] = new Array(a,b,c,d); 
                 
		    });
         },
         error: function () {
             alert('Error in Operation');
         }
     });
    
    ponerOpciones();
}

function ponerOpciones()
{
    var content = document.getElementById("contentAnswer");
    var pregunta = arr[localStorage.pregunta][2];
    z = z + 1;
    localStorage.pregunta = z;
    content.innerHTML = "<h4>"+ pregunta +"</h4>";
    /*
    content.innerHTML = '<input type="radio" name="respuesta" value ='+ arr[localStorage.pregunta][2] +'/>';
    content.innerHTML = '<input type="radio" name="respuesta" value ='+ arr[localStorage.pregunta][2] +'/>';
    content.innerHTML = '<input type="radio" name="respuesta" value ='+ arr[localStorage.pregunta][2] +'/>';*/
}

function ponerRadio()
{
    
}