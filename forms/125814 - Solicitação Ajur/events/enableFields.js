function enableFields(form){ 
    var Now_state = parseInt(getValue("WKNumState"));

    if(Now_state == 0 || Now_state == 4|| Now_state == 36 || Now_state == 47){
        fields = ['cmb_NomeSolicitante','dt_DataSolicit','txt_NumProc']
        disableFieldsFromList(form,fields);
    }
	
    if(Now_state == 5 || Now_state == 55 || Now_state == 181 ){
        disableAllFields(form);
		fields = ['cm_star-empty','cm_star-1','cm_star-2','cm_star-3','cm_star-4','cm_star-4','cm_star-5','comentario']
		enableFieldsFromList(form,fields)
    }
	if(Now_state == 13 || Now_state == 14 || Now_state == 15 || Now_state == 16||Now_state==51||Now_state==55||Now_state==54|| Now_state == 186){
        disableAllFields(form);
		fields = ['novaSolicitacao','resolucaoAJUR','cm_star-empty','cm_star-1','cm_star-2','cm_star-3','cm_star-4','cm_star-4','cm_star-5','comentario']
		enableFieldsFromList(form,fields)
	}
	if(Now_state == 18){
        disableAllFields(form);
		fields = ['cm_star-empty','cm_star-1','cm_star-2','cm_star-3','cm_star-4','cm_star-4','cm_star-5','comentario', 'novaSolicitacao']
		enableFieldsFromList(form,fields)
	}
}


function disableAllFields(form) {
	var fields =    form.getCardData();
	var iterare =   fields.keySet().iterator();
	while (iterare.hasNext()) {
		var key =   iterare.next();
		form.setEnabled(key, false, false);
	}
}

function enableFieldsFromList(form, fields) {
	for (var i = 0; i < fields.length; i++) {
		form.setEnabled(fields[i], true);
	}
}

function disableFieldsFromList(form,fields){
	for(var i = 0; i<fields.length; i++){
		form.setEnabled(fields[i], false);
	}
}