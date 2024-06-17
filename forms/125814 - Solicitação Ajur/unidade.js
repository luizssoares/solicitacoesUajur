function idxInpUn(elem){
    var dataset = DatasetFactory.getDataset("dsc_TT", null, null, null);
    inp_indx = elem.id.split('___')[1]
    console.log(inp_indx)
    inp_vlue = elem.value
    console.log(inp_vlue)
    var arr = []
    for(i = 0; i < dataset.values.length; i++){
        var cd = dataset.values[i].CODIGO
       //console.log(cd)
        if(cd.indexOf(inp_vlue) != -1 && cd.length == 16){
            console.log(arr)
            arr.push(dataset.values[i])
        }    
    }

    divAll = document.getElementById('unidadev___'+inp_indx)
    if(divAll.children.length > 0){
        var n = divAll.childNodes.length
        for(j = 0; j < n; j++){
            divAll.removeChild(divAll.lastElementChild);
        }
    }
    slcArrUn(arr, inp_indx)
    document.getElementById('txt_codacao___'+inp_indx).value = inp_vlue
}

function insertINPun(){
    inp = document.getElementsByTagName('select')
    console.log(inp)
    for(i = 0; i < inp.length; i++){
        if(inp[i].id.indexOf('txt_codacao1___') != -1){
            inp[i].onchange = function (){ idxInpUn(this) }
        }
    }
}

function slcArrUn(arr, ind){
    if(document.getElementById('unidadev___'+ind)){
        var divaAll = document.getElementById('unidadev___'+ind)
        var idA = 'txt_codunidade1___'+ind
    }else{ 
        var divaAll = document.getElementById('unidadev') 
        var idA = 'txt_codunidade1'
    }
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codacao1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

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
        var aa = showDados11()
        console.log(aa)
    }else{
        for(j = 0; j < arr.length; j++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arr[j].CODIGO
            voption.setAttributeNode(att)
            voption.innerText = arr[j].NOME
            vselect.appendChild(voption)
        }
        
    divaAll.appendChild(vselect)

    inp = document.getElementById(idA)
    inp_indxx = inp.id.split('___')[1]
    document.getElementById('txt_codrecurso___'+inp_indxx).value = inp.value
    inp.onchange = function (){ document.getElementById('txt_codrecurso___'+inp_indxx).value = this.value }
    }
}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc111(divv){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codunidade1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Unidade'

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
function showDados11(){
    var objX = {
        arrFindivs: [],
        arrFininps: []
    } 
    if(obju.state != 4){
        var rws = document.getElementById('dadosrateio').tBodies[0].rows
       console.log(rws)
        var arrInps = ['txt_codrecurso___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
        var arrdivs = ['unidadev']//'projetov', 'acaov', 'unidadev'
       
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
        var inpa = getINP11(inpuTT)
        //for(y = 0; y < objX.arrFindivs.length; y++){
            var slc = inp_slc111(objX.arrFindivs[k].id)
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
function getINP11(inp){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById(inp)
        var dataset11 =  DatasetFactory.getDataset("dsc_TT", null, null, null);
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset11.values.length; i++){
                var cod = dataset11.values[i].CODIGO
                var codInp = inpNow.value
                if(cod.indexOf(codInp) != -1 && cod.length == 16){
                    inpGet[0] = cod
                    inpGet[1] = dataset11.values[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
function init2(){
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    console.log(inP1)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_recursos___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        if(inP[i].id.indexOf('txt_recursos___') != -1 && inP[i].id.indexOf('txt_recursos___').innerHTML != '' && inP[i].id.indexOf('txt_recursos___').innerHTML != undefined){
            inP[i].parentElement.style.display = 'block'
            rr++
            console.log(rr)
        }   
    }   
    if(rr == 0){
        slcArrUn()
    }
    /*
    var a = document.getElementById('txt_projeto___1')
    if(a == undefined || a == null){
        slcArrUn()
        
    }else{
        var inP = document.getElementsByTagName('span')
        for(i = 0; i < inP.length; i++){
            if(inP[i].id.indexOf('txt_recursos___') != -1){
               inP[i].parentElement.style.display = 'block'
            }   
        }
    }
   console.log(a)
   */
}
window.addEventListener('load', init2)


//window.addEventListener('load', slcArrUn)