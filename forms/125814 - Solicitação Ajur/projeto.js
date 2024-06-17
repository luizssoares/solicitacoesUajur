
function a(){
    var dataset = DatasetFactory.getDataset("dsprojeto", null, null, null);
    return dataset.values
}
function inp_slc(){
    var divaAll = document.getElementById('projetov')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

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
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    
    console.log("3")
    //var arrayOption =   a()  
    if(obju.state != 4 && obju.state != 5 && obju.state != 36 && obju.state != 47){    
        var aa = showDados()
        console.log(aa)
    }else{
        var arrayOption =   a()  
        for(i = 0; i < arrayOption.length; i++){
            var voption = document.createElement('option')
            att = document.createAttribute('value')
            att.value = arrayOption[i].CODCCUSTO
            voption.setAttributeNode(att)
            voption.innerText = arrayOption[i].NOME
            vselect.appendChild(voption)
        }
    }
    //var aaa = getINP()
    //console.log(aaa)
    divaAll.appendChild(vselect)

}
var obju = {
    state: window.parentOBJ.ECM.workflowView.sequence
} 
function inp_slc1(divv){
    var divaAll = document.getElementById(divv)
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'txt_codprojeto1'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Projeto'

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
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'txt_codprojeto1'
    vselect.setAttributeNode(att)

    divaAll.appendChild(vselect)
    console.log(divaAll)
    return vselect
}
function showDados(){
    var objX = {
        arrFindivs: [],
        arrFininps: []
    } 
    if(obju.state != 4){
        var rws = document.getElementById('dadosrateio').tBodies[0].rows
       console.log(rws)
        var arrInps = ['txt_codprojeto___']//'txt_codprojeto___', 'txt_codacao___', 'txt_codrecurso___'
        var arrdivs = ['projetov']//'projetov', 'acaov', 'unidadev'
       
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
        var inpa = getINP(inpuTT)
        //for(y = 0; y < objX.arrFindivs.length; y++){
            var slc = inp_slc1(objX.arrFindivs[k].id)
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
function getINP(inp){
    var inpGet = []
    console.log(obju.state)
    if(obju.state != 4){
        var arrInps = ['codProjeto', 'codAcao', 'codRecurso']
        var arrdivs = ['projetov', 'acaov', 'unidadev']

        var inpNow = document.getElementById(inp)
        var dataset =   a()
        if(inpNow.value != null || inpNow.value != ''){
            for(i = 0; i < dataset.length; i++){
                var cod = dataset[i].CODCCUSTO
                var codInp = inpNow.value
                if(cod.indexOf(codInp) != -1 && cod.length == 5){
                    inpGet[0] = cod
                    inpGet[1] = dataset[i].NOME
                    console.log(cod)
                }
            }
        }
    
    } 
    console.log(inpGet)
return inpGet
}
function init1(){
    var inP1 = document.getElementsByTagName('input')
    var inP = document.getElementsByTagName('span')
    var rr = 0
    console.log(inP1)
    for(i = 0; i < inP1.length; i++){
        if(inP1[i].id.indexOf('txt_projeto___') != -1 && inP1[i].value != ''){
            inP1[i].parentElement.style.display = 'block'
            console.log('a')
            rr++
        }
    }   
    for(i = 0; i < inP.length; i++){
        var inpNow = inP[i].id.indexOf('txt_projeto___')
        if(inP[i].id.indexOf('txt_projeto___') != -1 && inpNow.innerHTML != '' && inpNow.innerHTML != undefined){
            inP[i].parentElement.style.display = 'block'
            console.log(inP[i])
            console.log(inpNow.innerHTML)
            rr++
            console.log(rr)
        }   
    }   
    if(rr == 0){
        inp_slc()
    }
    /*
    var a = document.getElementById('txt_projeto___1')
    if(a == undefined || a == null){
         inp_slc()
        
    }else{
        var inP = document.getElementsByTagName('span')
        for(i = 0; i < inP.length; i++){
            if(inP[i].id.indexOf('txt_projeto___') != -1){
               inP[i].parentElement.style.display = 'block'
            }   
        }
    }
   console.log(a)
   */
}
window.addEventListener('load', init1)


//window.addEventListener('load', inp_slc)