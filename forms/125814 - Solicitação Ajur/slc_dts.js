function slc_dts(){
    //document.getElementById('Portaria').style.display = 'block'
    var dts = DatasetFactory.getDataset("colleague", null, null, null) 
    var lista = []
    // console.log("1")
    for(i = 0; i < dts.values.length; i++){
        var inte = dts.values[i].colleagueName
        
        lista.push(inte.toUpperCase())
        // console.log("2")
    }
    listaorder = lista.sort()
    // console.log(listaorder);
    return listaorder
}
//window.addEventListener('load', slc_dts)

function matricula(){
      
    /************ PEGAR MATRICULA *************/
    var dts = DatasetFactory.getDataset("colleague", null, null, null) 
    var sub = document.getElementById("cmb_Substituto").value;

    for(i = 0; i < dts.values.length; i++){
        // console.log(sub)
        var inte = dts.values[i].colleagueName
        if(sub == inte.toUpperCase()){
            // console.log(dts.values[i][dts.columns[1]])
            document.getElementById("matriculaSubstituto").value = dts.values[i][dts.columns[1]]
            //console.log(dts.getValue(i-1,"colleaguePK.colleagueId"));
        }
        if(sub == ''){document.getElementById("matriculaSubstituto").value = ''}
    }
}

function panelInput(){
    var divaAll = document.getElementById('input1')
    /****************label************************/
    var vlabel = document.createElement('label')
    att = document.createAttribute('for')
    att.value = 'cmb_Substituto'
    vlabel.setAttributeNode(att)
    vlabel.innerText = 'Substituto'

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
    att.value = 'cmb_Substituto'
    vselect.setAttributeNode(att)
    att = document.createAttribute('id')
    att.value = 'cmb_Substituto'
    vselect.setAttributeNode(att)
    att = document.createAttribute('placeholder')
    att.value = 'Digite o nome do Substituto...'
    vselect.setAttributeNode(att)

    var vdatalist = document.createElement('datalist')
    att = document.createAttribute('id')
    att.value = 'browsers'
    vdatalist.setAttributeNode(att)

    // console.log("3")
    var arrayOption =   slc_dts()
                       
    for(i = 0; i < arrayOption.length; i++){
        var voption = document.createElement('option')
        att = document.createAttribute('value')
        att.value = arrayOption[i]
        voption.setAttributeNode(att)
        voption.innerText = arrayOption[i]
        vdatalist.appendChild(voption)
    }

    divaAll.appendChild(vselect)
    divaAll.appendChild(vdatalist)

    document.getElementById('cmb_Substituto').addEventListener('change', function ()  { 
        matricula();
    });
}
window.addEventListener('load', panelInput)