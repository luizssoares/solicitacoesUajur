function idxInp(elem){
    var dataset1 = DatasetFactory.getDataset("dsc_TT", null, null, null);
    inp_indx = elem.id.split('___')[1]
    console.log(inp_indx)
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    var selc = {
        CODIGO: '',
        NOME: 'Selecione'
    }
    arr.push(selc)
    for(i = 0; i < dataset1.values.length; i++){
        var cd = dataset1.values[i].CODIGO
       //console.log(cd)
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 12){
            console.log(arr)
            arr.push(dataset1.values[i])
        }    
    }
    divAll = document.getElementById('acaov___'+inp_indx)
    console.log(divAll)
    console.log(divAll.childNodes)
    if(divAll.children.length > 0){
        console.log(divAll.childNodes.length)
        var n = divAll.childNodes.length
        for(j = 0; j < n; j++){
            console.log(divAll.childNodes[0])
            divAll.removeChild(divAll.lastElementChild);
        }
    }
    slcArr(arr, inp_indx)
    insertINPun()
    document.getElementById('txt_codprojeto___'+inp_indx).value = inp_vlue
}

function insertINP(){
    inp = document.getElementsByTagName('select')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codprojeto1___') != -1){
            inp[i].onchange = function (){ idxInp(this) }
        }
    }
}

function slcArr(arr, ind){
    if(document.getElementById('acaov___'+ind)){
        var divaAll = document.getElementById('acaov___'+ind)
        var idA = 'txt_codacao1___'+ind
    }else{ 
        var divaAll = document.getElementById('acaov')
        var idA = 'txt_codacao1'
    }
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = idA
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = idA
    vselect.setAttributeNode(att)
    if(obju.state != 4 && obju.state != 5 && obju.state != 36 && obju.state != 47){    
        var aa = showDados1()
        console.log(aa)
    }else{
        if(arr.length){
            for(j = 0; j < arr.length; j++){
                var voption = document.createElement('option')
                att = document.createAttribute('value')
                att.value = arr[j].CODIGO
                voption.setAttributeNode(att)
                voption.innerText = arr[j].NOME
                vselect.appendChild(voption)
            }      
        }
    }

    divaAll.appendChild(vselect)
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc11(divv){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Ação'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('select')
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'txt_codacao1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codacao1'
    vselect.setAttributeNode(att)

    divaAll.appendChild(vselect)
    console.log(divaAll)
    return vselect
}
function showDados1(){
    var objX = {
        arrFindivs: [],
        arrFininps: []
    } 
    if(obju.state != 4){
        var rws = document.getElementById('dadosrateio').tBodies[0].rows
       console.log(rws)
        var arrInps = ['txt_codacao___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
        var arrdivs = ['acaov']//'projetov', 'acaov', 'unidadev'
       
        for(i = 1; i < rws.length; i++){
            var inputs = rws[i].getElementsByTagName('input') 
            console.log(inputs)
            for(j = 0; j < inputs.length; j++){
                for(y = 0; y <arrInps.length; y++){
       
                    if(inputs[j].id.indexOf(arrInps[y]) != -1){
                        objX.arrFininps.push(inputs[j])
                        var dvAk = inputs[j].parentElement.children
                        console.log(objX.arrFininps)
                        for(k = 0; k < arrdivs.length; k++){
                            for(z = 0; z < dvAk.length; z++){
                                //console.log(dvAk[z])
                                if(dvAk[z].id.indexOf(arrdivs[k]) != -1){
                                    var indx = inputs[j].id.split('___')[1]
                                    dvAk[z].id = dvAk[z].id+indx
                                    objX.arrFindivs.push(dvAk[z])
                                    console.log(objX.arrFindivs)
                                }
                            }
                        }
                    }
                }
            }
        }
    
    console.log(objX)
    for(k = 0; k < objX.arrFininps.length; k++){
        var inpuTT = objX.arrFininps[k].id
        var inpa = getINP1(inpuTT)
        //for(y = 0; y < objX.arrFindivs.length; y++){
            var slc = inp_slc11(objX.arrFindivs[k].id)
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = inpa[0]
            voption.setAttributeNode(att)
            voption.innerText = inpa[1]
            slc.appendChild(voption)

            att = document.createAttribute('disabled')
            att.value = true
            slc.setAttributeNode(att)  
        //}
    }
    /*var inpuTT = objX.arrFininps[0].id
    var inpa = getINP(inpuTT)

    var slc = inp_slc1(objX.arrFindivs[0].id)
         
    var voption = document.createElement('option')
    att = document.createAttribute('value')
    att.value = inpa[0]
    voption.setAttributeNode(att)
    voption.innerText = inpa[1]
    slc.appendChild(voption)

    att = document.createAttribute('disabled')
    att.value = true
    slc.setAttributeNode(att)    
*/}
    return objX
}
function getINP1(inp){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById(inp)
        var dataset1 =  DatasetFactory.getDataset("dsc_TT", null, null, null);
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset1.values.length; i++){
                var cod = dataset1.values[i].CODIGO
                var codInp = inpNow.value
                if(cod.indexOf(codInp) != -1 && cod.length == 12){
                    inpGet[0] = cod
                    inpGet[1] = dataset1.values[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
function init3(){
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    //console.log(inP)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_acao___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        var inpNow1 = inP[i].id.indexOf('txt_acao___')
        if(inP[i].id.indexOf('txt_acao___') != -1){
            //console.log(inP[i].innerHTML)
            if(inpNow1.innerHTML != '' && inpNow1.innerHTML != undefined){
                inP[i].parentElement.style.display = 'block'
                rr++
                console.log(rr)
            }
        }   
    }
    console.log('sdsdfsfsdfsdf: '+rr)   
    if(rr == 0){
        slcArr()
    }
    /*
    var a = document.getElementById('txt_projeto___1')
    if(a == undefined || a == null){
        slcArr()
        
    }else{
        var inP = document.getElementsByTagName('span')       
        for(i = 0; i < inP.length; i++){
            if(inP[i].id.indexOf('txt_acao___') != -1){
               inP[i].parentElement.style.display = 'block'
            }   
        }
    }
   console.log(a)
   */
}
window.addEventListener('load', init3)


//window.addEventListener('load', slcArr)














































function panelInput(arr, ind){
    var divaAll = document.getElementById('txt_codacao___'+ind).parentElement
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'c'

    var vspan = document.createElement('span')
    att = document.createAttribute('class')
    att.value = 'Obrigatorio'
    vspan.setAttributeNode(att)

    var vstrong = document.createElement('strong')
    vstrong.innerText = '*'
    
    vlabel.appendChild(vspan)
    vspan.appendChild(vstrong)

    divaAll.appendChild(vlabel)
    /*****************select******************** */
    var vselect = document.createElement('input')
    att = document.createAttribute('list')
    att.value = 'browsers'
    vselect.setAttributeNode(att)
    att = document.createAttribute('class')
    att.value = 'form-control'
    vselect.setAttributeNode(att)
    att = document.createAttribute('name')
    att.value = 'txt_codacao1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codacao1'
    vselect.setAttributeNode(att)

    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsers'
    vdatalist.setAttributeNode(att)

    console.log("3")
    /*var arrayOption =   //slc_dts()
                        [
                            'Selecione - ',
                            'Demanda de Serviço/Produto - Espaço Fisico',
                            'Demanda de Serviço/Produto - Recursos Humanos',
                            'Demanda de Serviço/Produto - Artigo de Decoração',
                            'Demanda de Serviço/Produto - Estrutura Física',
                            'Demanda de Serviço/Produto - Equipamento de Iluminação',   
                            'Demanda de Serviço/Produto - Equipamento de Sonorização',  
                            'Demanda de Serviço/Produto - Equipamento de Informática',
                            'Demanda de Serviço/Produto - Equipamento Áudio Visuais',
                            'Demanda de Serviço/Produto - Alimentação',
                            'Demanda de Serviço/Produto - Bebida',
                            'Serviço de Comunicação - TV',
                            'Serviço de Comunicação - Rádio',
                            'Serviço de Comunicação - Jornal',
                            //'Serviço de Comunicação - Revista',
                            'Serviço de Comunicação - Portal',
                            'Serviço de Comunicação - Google',
                            'Serviço de Comunicação - Redes Sociais',
                            //'Serviço de Comunicação - Instagram',
                            //'Serviço de Comunicação - Facebook',
                            'Serviço de Comunicação - Outdoor',
                            //'Serviço de Comunicação - Busdoor',
                            'Serviço de Comunicação - Mobiliário Urbano',
                            'Serviço de Comunicação - Propaganda Indoor',
                            'Serviço de Comunicação - Criação e Produção de Material Gráfico',
                            'Serviço de Comunicação - Cobertura Jornalistica',
                            'Serviço de Comunicação - Cobertura Fotográfica',
                            'Serviço de Comunicação - Produção de Vídeo',
                            'Serviço de Comunicação - Plano de Comunicação'
                        ]
*/
    for(j = 0; j < arr.length; j++){
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arr[j].CODIGO
        voption.setAttributeNode(att)
        voption.innerText = arr[j].NOME
        vdatalist.appendChild(voption)
    }

    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)
}
//window.addEventListener('load', panelInput)

