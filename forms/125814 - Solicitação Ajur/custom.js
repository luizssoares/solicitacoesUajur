/***********ESCOLHA DO SUPERIOR******************/

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;
    // console.log(mat)

    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            var und = ds_mat.values[i]['groupId'];

            // console.log(ds_mat.values[i]['groupId'])

            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    // console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    // console.log(document.getElementById("cmb_GerenteSolicitante").value)
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
                    }

                    dir = ds_und.values[j]["MatSuperior"]
                    console.log("diretoria: " + dir)
                    if (dir == "00000428") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC'
                    } else if (dir == "80000318") {
                        document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
                    } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF' }

                }
            }
        }
    }

}
window.addEventListener("load", unidade);

// VERIFICAR EDITOR
function validateEdit(){
    var getDetalhes = document.getElementById("detalhes").tagName
    var edit
    if(getDetalhes == "SPAN"){
        edit = FLUIGC.richeditor('detalhes');
        edit.setData(document.getElementById("detalhes").textContent)
    }
}
window.addEventListener("load", validateEdit);

/***********SELECT DINÂMICO******************/

function tp_portaria() {
    document.getElementById('dirpdir').style.display = "none";
    document.getElementById('gercol').style.display = "none";
    document.getElementById('movein').style.display = "none";

    var MoveIn = ["Transferência por iniciativa do empregado",
        "Transferência por iniciativa do SEBRAE",
        "Transferência Temporária de Localidade",
        "Transferência Definitiva de Localidade",
        "Transferir Jovem Aprendiz de Unidade",
        "Remanejar Colaborador(A)",
        "Licença Maternidade",
        "Designar Colaborador(A) para Função de Acessor(A)",
        "Designar Colaborador(A) para Função de Gerente",
        "Comissão/Comitê",
        "Outros"]

    var GerCol = ["Viagem Institucional",
        "Férias",
        "Outros"]

    var DirpDir = ["Viagem Institucional",
        "Férias",
        "Outros"]

    var outro = ["Transferência por iniciativa do empregado",
        "Transferência por iniciativa do SEBRAE",
        "Transferência Temporária de Localidade",
        "Transferência Definitiva de Localidade",
        "Transferir Jovem Aprendiz de Unidade",
        "Remanejar Colaborador(A)",
        "Licença Maternidade",
        "Designar Colaborador(A) para Função de Assessor(A)",
        "Designar Colaborador(A) para Função de Gerente",
        "Comissão/Comitê",
        "Viagem Institucional",
        "Férias",
        "Outros"
    ]


    // console.log(document.getElementById("tipo_potaria").value)

    const list = document.getElementById("motivo");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    // console.log(document.getElementById("tipo_potaria").value)

    if (document.getElementById("tipo_potaria").value == "MOVIMENTAÇÃO INTERNA") {
        // console.log(MoveIn)
        for (var i = 0; i < MoveIn.length; i++) {
            const node = document.createElement("option");
            const att = document.createAttribute('value');
            att.value = MoveIn[i]
            node.setAttributeNode(att)
            node.innerText = MoveIn[i]

            document.getElementById("motivo").appendChild(node);
        }
        document.getElementById('movein').style.display = "block"

    } else if (document.getElementById("tipo_potaria").value == "SUBSTITUIÇÃO DE GERÊNCIA POR COLABORADOR(A)") {
        // console.log(GerCol)
        for (var i = 0; i < GerCol.length; i++) {
            const node = document.createElement("option");
            const att = document.createAttribute('value');
            att.value = GerCol[i]
            node.setAttributeNode(att)
            node.innerText = GerCol[i]

            document.getElementById("motivo").appendChild(node);
        }
        document.getElementById('gercol').style.display = "block"

    } else if (document.getElementById("tipo_potaria").value == "DIRETOR(A) RESPONDENDO POR OUTRA DIRETORIA") {
        // console.log(DirpDir)
        for (var i = 0; i < DirpDir.length; i++) {
            const node = document.createElement("option");
            const att = document.createAttribute('value');
            att.value = DirpDir[i]
            node.setAttributeNode(att)
            node.innerText = DirpDir[i]

            document.getElementById("motivo").appendChild(node);
        }
        document.getElementById('dirpdir').style.display = "block"
    } else if (document.getElementById("tipo_potaria").value == "OUTROS") {
        // console.log(outro)
        for (var i = 0; i < outro.length; i++) {
            const node = document.createElement("option");
            const att = document.createAttribute('value');
            att.value = outro[i]
            node.setAttributeNode(att)
            node.innerText = outro[i]

            document.getElementById("motivo").appendChild(node);
        }
    } else if (document.getElementById("tipo_potaria").value == 0) {
        const node = document.createElement("option");
        const att = document.createAttribute('value');
        att.value = "0"
        node.setAttributeNode(att)
        node.innerText = "Selecione o 'Tipo de Portaria'"

        document.getElementById("motivo").appendChild(node);
    }
}
window.addEventListener("load", tp_portaria);

/***********PEGA FAVORECIDO E CNPJ******************/

function init() {
    document.getElementById("txt_Favorecido").onchange = function () { inputAuto(this) };

    document.getElementById("txt_CNPJ_CPF").onchange = function () { inputAuto(this) }
}

function MrTime() { setTimeout(init, 6000); }
function inputAuto(elem) {
    var f = elem.value
    var selectIndex = elem.selectedIndex
    var nome = 0;
    var idx = 0;
    var nomeidx = 0;
    var n = 0;
    if (elem.id == "txt_Favorecido") {
        nome = "NOME"
        idx = 3;
        nomeidx = "txt_CNPJ_CPF"
        n = "z2";
    }
    else if (elem.id == "txt_CNPJ_CPF") {
        nome = "CGCCFO";
        idx = 1;
        nomeidx = "txt_Favorecido";
        n = "z1";
    }

    if (selectIndex != -1) {
        var c = DatasetFactory.createConstraint(nome, f, f, ConstraintType.MUST);
        var constraint = new Array(c);
        var dataset = DatasetFactory.getDataset("dsc_Favorecido", null, constraint, null);
        var Obj = dataset.values[0];
        var indexZ = Obj[dataset.columns[idx]];
        document.getElementById(nomeidx).innerHTML = "<option value=\"" + Obj[dataset.columns[idx]] + "\">" +
            Obj[dataset.columns[idx]] + "<\/option>"
        document.getElementById(nomeidx).value = Obj[dataset.columns[idx]]
        //teste(indexZ, idx)
    } else {
        var spn1 = document.getElementById(n).children[0].children[2]
        var ul1 = spn1.children[0].getElementsByTagName("ul")[0]
        ul1.removeChild(ul1.childNodes[0])
        var li1 = ul1.childNodes[0]
        var ipt = li1.children[0];
        ipt.placeholder = "Escolha o Favorecido"
        ipt.style = "width: 372.409px;"
        document.getElementById(nomeidx).value = ""
    }
}
window.addEventListener("load", MrTime)

/* PADRONIZAÇÃO DO NÚMERO DE TELEFONE */
function mascaraTelefone(event) {
    let tecla = event.key;
    let telefone = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(tecla)) {
        telefone = telefone + tecla;
        let tamanho = telefone.length;

        if (tamanho >= 12) {
            return false;
        }

        if (tamanho > 10) {
            telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) {
            telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) {
            telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete"].includes(tecla)) {
        return false;
    }
}

/***********FOMATAÇÃO DE NUMERO STRING******************/

function formatarMoeda(elem) {
    var id = elem.id
    var valor = moeda.desformatar(elem.value)
    var valorDif = moeda.formatar(valor)
    document.getElementById(id).value = valorDif
}

var moeda = {
    desformatar: function (num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function (num) {
        x = 0;
        if (num < 0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num * 100 + 0.5) % 100);
        num = Math.floor((num * 100 + 0.5) / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function (num) {
        return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }
}

function validateValor() {
    tabela = document.getElementById("dadosrateio");
    itens = tabela.getElementsByTagName("input");
    valor = document.getElementById("txt_valor")
    valorTotal = 0;
    for (i = 0; i < itens.length; i++) {
        if (itens[i].id.indexOf("txt_valorUtil___") != -1) {
            iTvalor = itens[i].value
            valorTotal += moeda.desformatar(iTvalor)
        }
    }
    if (valorTotal != moeda.desformatar(valor)) {
        // console.log(valorTotal)
        // console.log(moeda.desformatar(valor))
    }
}

function formataCasasDecimais(valor) {
    valor = "" + valor;

    if (valor.lastIndexOf(".") == -1) {
        valor = valor + ".00";
    }
    else {
        var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
        if (casasDecimais.length > 2)
            casasDecimais = casasDecimais.substring(0, 2);
        else {
            while (casasDecimais.length < 2) {
                casasDecimais = casasDecimais + "0";
            }
        }
        valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
    }

    return valor;
}


function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))

        var saldo = document.getElementById("txt_saldo___" + indice).value

        // console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        // console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + indice).value = saldo

    }
}

function buscaSaldo(projeto, acao, id) {

    // console.log("projeto VALUE: " + projeto);
    // console.log("acao VALUE: " + acao);

    var campo = acao;

    if (campo.value != "") {
        //var id = projeto.name.replace("txt_codprojeto___", "");
        // console.log("cc id " + id);
        var cc1 = new Array(projeto.value + "." + acao.value);
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);

        console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
        console.log(datasetsaldo);
        if (datasetsaldo.values.length > 0) {
            var record = datasetsaldo.values[0];
            saldo = eval("record[\"SALDO\"]");
        }
        else {
            saldo = 0
        }

        if (saldo == 0 || saldo == "0,00") {
            document.getElementById("txt_saldo___" + id).value = saldo;
            document.getElementById("txt_saldo___" + id).style = "background-color:#ea8989";
        }
        else if (saldo != 0 || saldo != "0,00") {
            document.getElementById("txt_saldo___" + id).value = saldo;
            document.getElementById("txt_saldo___" + id).style = "background-color:#86dc9c";
        }

    }
}

/***********ADICIONA E DELETA RATEIO******************/

function addRateioz() {
    wdkAddChild("dadosrateio");
    var linha = getRowDot()
    // console.log("nova linha:" + linha)
    slcProjeto(linha)
    slcAcao(linha)
    slcUnidade(linha)
    // insertINP()
    //     insertINPun()
}

function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
    somarValores()
}


function somarValores() {
    var linhas = getRowDot()
    var soma = 0
    for (var i = 1; i <= linhas; i++) {
        if (document.getElementById("txt_valorUtil___" + i) != null) {
            var valorUtil = moeda.desformatar(document.getElementById("txt_valorUtil___" + i).value)
            soma += valorUtil
            document.getElementById("valorTotal").value = soma;
        }

    }
}