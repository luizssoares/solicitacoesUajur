/***********FONTE DO FORMULÁRIO******************/

function styleFormatDisable() {
    let arrayInput = document.getElementsByTagName("input");
    let arraySpan = document.getElementsByTagName("span");
    let arraySelect = document.getElementsByTagName("select");
    let arrayP = document.getElementsByTagName("p");
    let arrayTextA = document.getElementsByTagName("textarea");
    let arrayli = document.getElementsByTagName("li");
    let arrayA = document.getElementsByTagName("a");
    //let arrayStrong     = document.getElementsByTagName("strong");
    let arrayTotal = [arrayInput, arraySpan, arraySelect, arrayP, arrayTextA, arrayli, arrayA/*, arrayStrong*/];
    for (i = 0; i < arrayTotal.length; i++) {
        let arrayGo = arrayTotal[i];
        for (y = 0; y < arrayGo.length; y++) {
            if (arrayGo[y].getAttribute("class") != "fluigicon fluigicon-zoom-in" && arrayGo[y].getAttribute("class") != "input-group-addon"
                && arrayGo[y].getAttribute("class") != "select2-selection__choice__remove" && arrayGo[y].getAttribute("class") != "Obrigatorio") {
                //console.log(arrayGo[y].getAttribute("class"))
                arrayGo[y].style.color = "black";
            }
        }
    }
}
function controllerTime() { setTimeout(styleFormatDisable, 200); }
window.addEventListener("load", controllerTime);

/***************MUDA AS CORES DOS ELEMENTOS***************/
function colors() {
    const Shead = `border-color: #722F37; background-color: #722F37 ; color: #fff;`
    const Sborder = 'border-color: #722F37;'


    var S1 = document.querySelectorAll(".fluig-style-guide .panel-default")
    var S2 = document.querySelectorAll(".fluig-style-guide .panel-default>.panel-heading")

    //.fluig-style-guide .panel-info>.panel-heading

    for (var i = 0; i < S1.length; i++) {
        S1[i].style.cssText = Sborder
    }

    for (var i = 0; i < S2.length; i++) {
        S2[i].style.cssText = Shead
    }

}
window.addEventListener("load", colors);

/***********MOSTRAR TELA DE RESOLUÇÃO E ESCONDER BOTÃO******************/
function validate() {
    var Now = window.parent.ECM.workflowView.sequence
    var visualizacao = window.parent.ECM.workflowView.stateDescription

    if (visualizacao != "Detalhes da Solicitação") {
        // console.log("n ta em visualização")

        if (Now == 0 || Now == 4 || Now == 36 || Now == 47) { // MODO EDIÇÃO
            document.getElementById('Resolucao').style.display = 'none'
            document.querySelectorAll(".fluig-style-guide .btn-info")[0].style.cssText = 'color: #fff ; background-color: #722F37 ;'
            somarValores()
        }
        else if (Now == 5 || Now == 55 || Now == 107  || Now == 181 ) { // MODO APROVAÇÃO
            document.getElementById('Resolucao').style.display = 'none'
            document.getElementById('addRateio').style.display = 'none';
            var deletar = document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')
            // console.log(deletar.length)
            for (var i = 0; i < deletar.length; i++) {
                // console.log("teste")
                document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')[i].style.display = 'none'
            }
            somarValores()
            document.getElementById("valorTotal").value = moeda.formatar(document.getElementById("valorTotal").value)
        }
        else if (Now == 13 || Now == 14 || Now == 15 || Now == 16 || Now == 51 || Now == 54) {
            var tp = document.getElementById('_tp_solicitacao').innerHTML
            if (tp == 'Portaria') {
                document.getElementById('divassunto').style.display = 'none'
            }
            document.getElementById('addRateio').style.display = 'none';
            var deletar = document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')
            // console.log(deletar.length)
            for (var i = 0; i < deletar.length; i++) {
                // console.log("teste")
                document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')[i].style.display = 'none'
            }
            somarValores()
            document.getElementById("valorTotal").value = moeda.formatar(document.getElementById("valorTotal").value)

        }
    }

    else {
        // console.log("ta em visualização")

        document.getElementById('Resolucao').style.display = 'none'
        document.getElementById('addRateio').style.display = 'none';
        var deletar = document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')
        // console.log(deletar.length)
        for (var i = 0; i < deletar.length; i++) {
            // console.log("teste")
            document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')[i].style.display = 'none'
        }

    }

    if (Now == 18) {
        document.getElementById('Avaliar').style.display = 'block'
        document.getElementById('Resolucao').style.display = 'block'
        document.getElementById('addRateio').style.display = 'none';
        var deletar = document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')
        // console.log(deletar.length)
        for (var i = 0; i < deletar.length; i++) {
            // console.log("teste")
            document.getElementsByClassName('fluigicon fluigicon-trash fluigicon-md delRateio')[i].style.display = 'none'
        }
        document.getElementById("valorTotal").value = moeda.formatar(document.getElementById("valorTotal").value) 

    } else { document.getElementById('Avaliar').style.display = 'none' }

    if (Now == 34) {
        document.getElementById('Resolucao').style.display = 'block'
    }
}
window.addEventListener("load", validate);

/***********TROCA E LIMPEZA DE PAINEL******************/
function tp_serviço() {
    //document.getElementById('apoio_servico').style.display = 'none';
    //document.getElementById('apoio_evento').style.display = 'none';

    if (document.getElementById('tp_solicitacao').value == null) {
        tp = document.getElementById("tp_solicitacao").innerText
    } else {
        tp = document.getElementById('tp_solicitacao').value
    }


    secFunc(tp)
    document.getElementById('tp_solicitacao').addEventListener('change', function () {
        var tipo1 = this.value
        secFunc(tipo1);
        // console.log("LSJGLDFGHDÇGJDLGJDGÇD CHAMANDO LIMPAR");
        limpar();
        tp_portaria();
    });

    document.getElementById('meioContratacao').addEventListener('change', function () {
        if (document.getElementById("meioContratacao").value == "INEXIGIBILIDADE" || document.getElementById("meioContratacao").value == "LICITAÇÃO") {
            document.getElementById('num_direx_').style.display = 'block';
        }
        else {
            document.getElementById('num_direx_').style.display = 'none';
        }
    });

    document.getElementById('substituto').style.display = 'none'
    document.getElementById('selcsubstituto').addEventListener('change', function () {
        // console.log('MUDOU')
        var subs = this.value
        verificSubs(subs)
    })


}
window.addEventListener('load', tp_serviço)

/***********ESCONDE-ESCONDE DE PAINEL******************/

function verificSubs(subs) {
    // console.log('valor: '+subs)
    if (subs == 'nao' || subs == '') {
        document.getElementById('substituto').style.display = 'none'
    } else if ((subs == 'sim')) {
        document.getElementById('substituto').style.display = 'block'
    }
}

function secFunc(tipo) {
    if (tipo == 'Aditivo de Contrato') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Aditivo').style.display = 'block'
        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'block';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
        somarValores()
    }
    else if (tipo == 'Portaria') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'none';
        document.getElementById('tipo_portaria').style.display = 'block';

        document.getElementById('Portaria').style.display = 'block'
        document.getElementById('Aditivo').style.display = 'none'
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'block';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
    }
    else if (tipo == 'Atestado de Capacidade Técnica') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Capacidade').style.display = 'block'
        document.getElementById('Aditivo').style.display = 'none'
        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'block';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
    }
    else if (tipo == 'Resolução') {
        document.getElementById('num_direx').style.display = 'block';
        document.getElementById('dh_direxResolucao').style.display = 'block';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('Aditivo').style.display = 'none'
        document.getElementById('Portaria').style.display = 'none'
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'block';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
    }
    else if (tipo == 'Parecer Jurídico') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('Aditivo').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'block';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
    }
    else if (tipo == 'Outros') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('Aditivo').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'block';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
    }
    else if (tipo == 'Apostilamento') {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('tipo_portaria').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'block';
        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('Aditivo').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('td').style.display = 'none';
        document.getElementById('cardApost').style.display = 'block';

    }
    else {
        document.getElementById('num_direx').style.display = 'none';
        document.getElementById('dh_direxResolucao').style.display = 'none';

        document.getElementById('divassunto').style.display = 'block';
        document.getElementById('tipo_portaria').style.display = 'none';

        document.getElementById('Portaria').style.display = 'none';
        document.getElementById('Capacidade').style.display = 'none';
        document.getElementById('Aditivo').style.display = 'none';
        document.getElementById('apostilamento').style.display = 'none';

        document.getElementById('ad').style.display = 'none';
        document.getElementById('pt').style.display = 'none';
        document.getElementById('rs').style.display = 'none';
        document.getElementById('act').style.display = 'none';
        document.getElementById('pj').style.display = 'none';
        document.getElementById('ot').style.display = 'none';
        document.getElementById('cardApost').style.display = 'none';
        document.getElementById('td').style.display = 'block';
    }
}


function getRow() {
    var table = document.getElementById('dadosrateio')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('i')
    // console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        return slc[slc.length - 1].id.split('___')[1]
    }
}

/***********LIMPEZA DE PAINEL******************/

function limpar() {
    //console.log("LSJGLDFGHDÇGJDLGJDGÇD LIMPANDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    fields = ["num_contrato", "nu_contrato", "num_direx", "txt_projeto", "txt_acao", "txt_codacao", "txt_valorUtil", "txt_recursos", "motivo", "dh_inicio", "dh_fim", "cmb_Substituto", "telefone", "email", "endereco", 'matriculaGerente', 'matriculaSubstituto']
    for (var i = 0; i < fields.length; i++) {
        // console.log(fields[i])
        document.getElementById(fields[i]).value = "";
    }

    document.getElementById('money').value = 'nao'
    //document.getElementById('vmoney').style.display = 'none'
    document.getElementById('tipo_portaria').value = '0'

    var a = document.getElementById("dadosrateio").rows.length
    if (a > 2) {
        var id = getRow()
        // console.log(id)
        for (var i = 1; i <= id; i++) {
            fnCustomDelete(document.getElementById('deleta_rateio___' + i))
        };
    }

    if ((document.getElementById("txt_Favorecido").value != '') && (document.getElementById("txt_CNPJ_CPF").value != '')) {
        for (var i = 1; i <= 2; i++) {
            if (i == 1) {
                var spn1 = document.getElementById('z1').children[0].children[2]
            }
            if (i == 2) {
                var spn1 = document.getElementById('z2').children[0].children[2]
            }
            var ul1 = spn1.children[0].getElementsByTagName("ul")[0]
            ul1.removeChild(ul1.childNodes[0])
            var li1 = ul1.childNodes[0]
            var ipt = li1.children[0];
            ipt.placeholder = "Escolha o Favorecido"
            ipt.style = "width: 372.409px;"
            document.getElementById('txt_CNPJ_CPF').value = ""
            document.getElementById('txt_CNPJ_CPF').innerHTML = ""
            document.getElementById('txt_Favorecido').value = ""
            document.getElementById('txt_Favorecido').innerHTML = ""
        }
    }

    const list = document.getElementById("motivo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

}

// function checkPortaria(remunerar){
//     var now = window.parent.ECM.workflowView.sequence;
//     if(now == 51){
//         var valor = document.getElementById("_money").innerHTML
//         // if(valor == 'Não'){
//         //     // console.log("fdgfjhgfdfsfddhghfhjhgjghjghjhgjghjhgjh43343434")
//         //     //document.getElementById('vmoney').style.display = 'none'
//         // }else{
//         //     // console.log("fdgfjhgfdfsfddhghfhjhgjghjghjhgjghjhgjh43343434")
//         //     //document.getElementById('vmoney').style.display = 'block'
//         // }
//     }
//     // else{
//     //     if(remunerar == 'sim'){
//     //         // console.log("teste sim")
//     //         //document.getElementById('vmoney').style.display = 'block'
//     //     }else if(remunerar == 'nao'){
//     //         // console.log("teste nao")
//     //         //document.getElementById('vmoney').style.display = 'none'
//     //     }
//     // }

// }
// window.addEventListener('load',checkPortaria);

function verificaPortaria() {
    var mat = document.getElementById('cmb_NomeSolicitante').value
    var matsup = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var matasc = DatasetFactory.getDataset("colleague", null, null, null);

    // console.log("Portaria CHECK")
    for (var i = 0; i < matsup.values.length; i++) {
        if (mat == matsup.values[i]['Matricula']) {
            document.getElementById("porta").style.display = 'block'
            // console.log("Portaria SIM")
            break

        }
        else if (mat == '10002193') {
            document.getElementById("resol").style.display = 'block'
            // console.log("Resolução SIM/NAO")
            break
        }
        else {
            document.getElementById("porta").style.display = 'none'
            // console.log("Portaria NAO")
        }
    }

}
window.addEventListener('load', verificaPortaria)

function verificaResolucao() {
    var mat = document.getElementById('cmb_NomeSolicitante').value
    var matasc = DatasetFactory.getDataset("colleague", null, null, null);
    // console.log("Resolução CHECK")
    for (var i = 0; i < matasc.values.length; i++) {
        if (mat == matasc.values[i]['colleaguePK.colleagueId']) {
            if (matasc.values[i]['groupId'] == 'DIRAF' || matasc.values[i]['groupId'] == 'DITEC' || matasc.values[i]['groupId'] == 'SUPER') {
                document.getElementById("resol").style.display = 'block'
                document.getElementById("porta").style.display = 'block'
                // console.log("Resolução SIM")
                break
            }
            else if (mat == '10002193') {
                document.getElementById("resol").style.display = 'block'
                // console.log("Resolução SIM/NAO")
                break
            }
            else {
                document.getElementById("resol").style.display = 'none'
                // console.log("Resolução NAO")
            }
        }
    }

}
window.addEventListener('load', verificaResolucao)        