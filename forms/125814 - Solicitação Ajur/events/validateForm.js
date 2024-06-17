function validateForm(form) {
    var Now_state = parseInt(getValue("WKNumState"));
    var Next_State = parseInt(getValue("WKNextState"));
    var msg = '';



    if (Now_state == 0 || Now_state == 4) {
        dateInsert()
        //validatesolicitacao()
    }
    if (Now_state == 5) {
        dateInsert()
    }

    if (Now_state == 0 || Now_state == 4 || Now_state == 36 || Now_state == 47) {

        
        if (form.getValue("tp_solicitacao") == "0") {
            msg += "Error : Informe o Tipo de Solicitação!\n"
        }

        if (form.getValue("detalhes") == "") {
            //msg += "Error : Informe a Justificativa da Soliciatação!\n"
        }

        if (form.getValue("tp_solicitacao") == "Aditivo de Contrato") {
            if (form.getValue("assunto") == "") {
                msg += "Error : Informe o Assunto da Solicitação!\n"
            }
            if (form.getValue("num_contrato") == "") {
                msg += "Error : Campo 'Numéro do Contrato' não preenchido!\n"
            }
            if (form.getValue("meioContratacao") == "INEXIGIBILIDADE" || form.getValue("meioContratacao") == "LICITAÇÃO") {
                if (form.getValue("num_direx") == "") {
                    msg += "Error : Campo 'Numéro do Resolução Direx' não preenchido!\n"
                }
            }
        }

        if (form.getValue("tp_solicitacao") == "Portaria") {
            if (form.getValue("tipo_portaria") == "") {
                msg += "Error : Campo 'Tipo de Portaria' não preenchido!\n"
            }
            if (form.getValue("motivo") == "" || form.getValue("motivo") == null) {
                msg += "Error : Campo 'Motivo' não preenchido!\n"
            }
            if (form.getValue("dh_inicio") == "") {
                msg += "Error : Campo 'Inicio' não preenchido!\n"
            }
            if (form.getValue("dh_fim") == "") {
                msg += "Error : Campo 'Término' não preenchido!\n"
            }
            if (form.getValue("money") == "sim") {
                if (form.getValue("valor") == "") {
                    msg += "Error : Campo 'Valor' não preenchido!\n"
                }
            }
            if (form.getValue("selcsubstituto") == "") {
                msg += "Error : Informe se terá substituto ou não!\n"
            }
            if (form.getValue("selcsubstituto") == "sim") {
                if (form.getValue("cmb_Gerente") == "Selecione") {
                    msg += "Error : Campo 'Gerente/Diretor' não preenchido!\n"
                }
                if (form.getValue("cmb_Substituto") == "") {
                    msg += "Error : Campo 'Substituto' não preenchido!\n"
                }
            }
        }

        if (form.getValue("tp_solicitacao") == "Atestado de Capacidade Técnica") {
            if (form.getValue("assunto") == "") {
                msg += "Error : Informe o Assunto da Solicitação!\n"
            }
            if (form.getValue("nu_contrato_") == "") {
                msg += "Error : Campo 'Número do Contrato' não preenchido!\n"
            }
            if (form.getValue("telefone") == "") {
                msg += "Error : Campo 'Telefone' não preenchido!\n"
            }
            if (form.getValue("email") == "") {
                msg += "Error : Campo 'E-mail' não preenchido!\n"
            }
            if (form.getValue("endereco") == "") {
                msg += "Error : Campo 'Endereço' não preenchido!\n"
            }
            if (form.getValue("txt_Favorecido") == "") {
                msg += "Error : Campo 'Razão Social' não preenchido!\n"
            }
            if (form.getValue("txt_CNPJ_CPF") == "") {
                msg += "Error : Campo 'CNPJ' não preenchido!\n"
            }
        }

        if (form.getValue("tp_solicitacao") == "Parecer Jurídico" || form.getValue("tp_solicitacao") == "Outros") {
            if (form.getValue("assunto") == "") {
                msg += "Error : Informe o Assunto da Solicitação!\n"
            }
        }
        if (form.getValue("tp_solicitacao") == "Resolução") {
            if (form.getValue("assunto") == "") {
                msg += "Error : Informe o Assunto da Solicitação!\n"
            }
        }
    }

    if (Now_state == 13 || Now_state == 14 || Now_state == 15 || Now_state == 16 || Now_state == 51 || Now_state == 54) {
        if (Next_State == 18) {
            if (form.getValue("resolucaoAJUR") == "") {
                msg += "Error : Campo 'Resolução' não preenchido!\n"
            }
        }
    }

    if (msg != "") {
        throw msg;
    }

    function dateInsert() {
        var dt = new Date()
        Hrs = dt.getHours()
        // var dt1     = form.getValue('dt_vencimento')
        var Ano = dt.getFullYear();
        var mes = dt.getMonth() + 1
        if (mes < 9) { Mes = '0' + mes } else { Mes = mes }
        var dia = dt.getDate() + 1
        var dia2 = dt.getDate()
        if (dia <= 9) { Dia = '0' + dia } else { Dia = dia }
        if (dia2 <= 9) { Dia2 = '0' + dia2 } else { Dia2 = dia2 }

        // var dataFinal = [Ano + "-" + Mes + "-" + Dia];
        var dataFinal2 = [Ano + "-" + Mes + "-" + Dia2];
        var ref = [Ano + "-" + '12' + "-" + '13'];

        if (ref <= dataFinal2) { msg += "<b>Não é possivél enviar uma Solicitação na data atual</b>\n"}
        //if(Hrs > 17 || Hrs < 08){ errorMsg += 'Não é possível solicitar <b>fora do horário de expediente.</b>'+endofline; }
        //errorMsg += "<b>ZZZZZZ</b>"+ dt1 +'  '+ dataFinal+'   '+dataFinal2+'  '+ref +endofline;         
        // if(form.getValue('slc_FormaPagamento') == '1'){
        //     if(dataFinal  >= dt1 ){ 
        //     errorMsg += "<b>É necessário enviar o Pedido, para a UCOF, com no mínimo 5 dias de antecedência referente a Data de Vencimento</b>"+endofline; 
        //     }     
        // }
    }

    function validatesolicitacao() {
        // var urlInd = "https://mywebhm.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
        var urlInd = "https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID="
        var urlSec = "&app_ecm_workflowview_taskUserId="
        var x = 0
        var arrayNumSol = []
        var matricula = getValue("WKUser");
        //errorMsg += matricula + endofline;
        var c = DatasetFactory.createConstraint("cmb_NomeSolicitante", matricula, matricula, ConstraintType.MUST);
        var constraint = new Array(c);
        //var dataset = DatasetFactory.getDataset("BolTaxi2", null, constraint, null);
        var dataset = DatasetFactory.getDataset("DSSolicitacaoAjur", null, constraint, null);
        for (i = 0; i < dataset.rowsCount; i++) {
            var Nsol = dataset.getValue(i, "txt_NumProc");
            //errorMsg += "*"+dataset.rowsCount + endofline;
            if (Nsol != null || Nsol != "") {
                var c3 = DatasetFactory.createConstraint("processInstanceId", Nsol, Nsol, ConstraintType.MUST);
                var constraints = new Array(c3);
                var ddataset = DatasetFactory.getDataset("processTask", null, constraints, null);
                //msg += "."+ddataset.rowsCount;
                for (j = 0; j < ddataset.rowsCount; j++) {
                    //errorMsg += "."+x+matricula + endofline;
                    var status = ddataset.getValue(j, "status");
                    var colleague = ddataset.getValue(j, "processTaskPK.colleagueId");
                    if (status == 0 && colleague == matricula) {
                        //msg += ddataset.getValue(j, "processTaskPK.processInstanceId")
                        arrayNumSol.push(ddataset.getValue(j, "processTaskPK.processInstanceId"))
                        //errorMsg += matricula+ '  '+a + endofline;
                        x++
                    }
                }
            }

        }
        if (x != 0) {//errorMsg += "<h2 style=\"color:black\">As seguintes solicitações:</h2>" + endofline;
            var arraySec = [1]
            for (i = 0; i < arrayNumSol.length; i++) {
                x = 0
                for (j = 0; j < arraySec.length; j++) {
                    if (arrayNumSol[i] == arraySec[j]) {
                        x++
                        //arraySec.push(arrayNumSol[i])
                    }
                }
                if (x == 0) {
                    if (arraySec[0] == 1) {
                        arraySec[0] = arrayNumSol[i]
                    } else {
                        arraySec.push(arrayNumSol[i])
                    }
                }
            }
            //msg = 'Tamanho solicitação: '+arraySec.length;
            if (arraySec.length >= 2) {
                msg = '';
                msg += "<h2 style=\"color:black\">Existe duas ou mais solicitações de serviço da UAJUR em sua responsabilidade que não estão finalizadas. As seguintes solicitações:</h2>\n";

                for (k = 0; k < arraySec.length; k++) {
                    //errorMsg += "<h2 style=\"color:black\">"+arrayNumSol[i]+"</h2>" + endofline;
                    msg += "<h2>" + "<a href=\"" + urlInd + arraySec[k] + urlSec + matricula + "\"" + "class=\"cad-link\"" + "target=\"_blank\"" + "style=\"color:blue\">" + "<i class=\"flaticon flaticon-link icon-md\"></i>" +
                        arrayNumSol[k] + "</a>" + "</h2>\n";
                }

            }
            //<a href="LISTA DE INSCRITOS NA ETAPA DE PRÉ-SELEÇÃO - MESTRADO FGV.pdf" class="cad-link" target="_blank" style="color:blue"><i class="flaticon flaticon-link icon-sm"></i>Click aqui para baixar</a>
        } //https://myweb.am.sebrae.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=24878&app_ecm_workflowview_taskUserId=00000514
    }
}

