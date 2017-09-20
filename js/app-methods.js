
//----------------------------------------------------------APP METHODS------------------------------------------------------------//

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
