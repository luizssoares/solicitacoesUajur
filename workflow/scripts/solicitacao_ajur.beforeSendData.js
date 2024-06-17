function beforeSendData(customField,customFact){
    customField[0] = hAPI.getCardValue("dt_DataSolicit");
    customField[1] = hAPI.getCardValue("cmb_UnidadeSolicitante");
    customField[2] = hAPI.getCardValue("tp_solicitacao");
    customField[3] = hAPI.getCardValue("assunto");
    customField[4] = hAPI.getCardValue("detalhes");
    customField[5] = hAPI.getCardValue("num_contrato");
    customField[6] = hAPI.getCardValue("nu_contrato");
    customField[7] = hAPI.getCardValue("txt_Favorecido");
    customField[8] = hAPI.getCardValue("txt_CNPJ_CPF");
    customField[9] = hAPI.getCardValue("endereco");
    customField[10] = hAPI.getCardValue("email");
    customField[11] = hAPI.getCardValue("telefone");
    customField[12] = hAPI.getCardValue("rating_numbers1");
    customField[13] = hAPI.getCardValue("comentario");
    customField[14] = hAPI.getCardValue("tipo_potaria");
    customField[15] = hAPI.getCardValue("motivo");
    customField[16] = hAPI.getCardValue("num_direx");
}
