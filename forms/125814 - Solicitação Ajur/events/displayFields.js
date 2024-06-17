function displayFields(form,customHTML){
    var Now_State = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    switch(Now_State){
        case 0:
        	form.setValue("cmb_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicit",data.format(new Date()));    
        break;

        case 4:
            form.setValue("dt_DataSolicit",data.format(new Date()));    
        break;

        default:
            form.setValue("txt_NumProc",NumProcesso);
        break;
        /*case 5:
            form.setValue("txt_NumProc",NumProcesso);
        break;

        case 51:
            form.setValue("txt_NumProc",NumProcesso);
        break;

        case 54:
            form.setValue("txt_NumProc",NumProcesso);
        break;

        case 55:
            form.setValue("txt_NumProc",NumProcesso);
        break;
        */
    }
 }