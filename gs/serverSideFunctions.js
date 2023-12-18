
//LISTAR TODAS LAS FACTURAS


function listarFactures(){
  
  const lastRow = sheetControlFactures.getLastRow() - 1;
  const lastCol = sheetControlFactures.getLastColumn();
  //const dataFactures = ws.getRange(2, 1, lastRow, lastCol).getDisplayValues();
  const dataFactures = sheetControlFactures.getDataRange().getDisplayValues();
  dataFactures.shift();
//Logger.log(dataFactures);
return dataFactures;
}

//OBTENER FACTURA PDF


//FIN OBTENER FACTURA PDF



//Listar FACTURAS SIN CONTABILIZAR
function listarFacturesPendents(){

  /* const lastRow = sheetControlFactures.getLastRow() - 1;
  const lastCol = sheetControlFactures.getLastColumn();
  const dataFacturesPendents = sheetControlFactures.getRange(2, 1, lastRow, lastCol).getDisplayValues(); */

  const dataFacturesPendents = sheetControlFactures.getDataRange().getDisplayValues();
  dataFacturesPendents.shift();

if (dataFacturesPendents.length === 0 ){
  return "No hi ha cap factura sense comptabilitzar";
}
  let dataValueFacturesPendents = [];

  dataFacturesPendents.forEach(function (task, indice) {
    //Asignamos a cada columna una variable
    let numF = task [0];
    let formaP = task[1];
    let dataP = task[2];
    let ecoib = task[3];
    let departamentsProgrames = task[4];
    let empresa = task[5];
    let cif_nif = task[6];
    let importe = task[7];
    let data = task[8];
    let nFactura = task[9];
    let factura = task[10];
    let concepte = task[11];
    let estatPagament = task[12];
    let observacions = task[13];
    //let responsable = task[14];
    let facturaId = task[15];


    //if (estat == 'oberta' || estat == 'tancada' && revisio == false) {
//if (revisio == " " || revisio == false) {
 //if (estat == 'true' && observacions == 'true') {
   if (ecoib == 'FALSE'){
      dataValueFacturesPendents.push([
        numF,
        formaP,
        dataP,
        ecoib,
        departamentsProgrames,
        empresa,
        cif_nif,
        importe,
        data,
        nFactura,
        factura,
        concepte,
        estatPagament,
        observacions,
       // responsable,
        facturaId
      ])

    }

  });
//Logger.log(dataValueFacturesPendents);

return dataValueFacturesPendents;

}
// Fin listar tareas sin activar









/* function addFactura(facturaInfo){
  //let ss_bd = SpreadsheetApp.openByUrl(URL_SS_BD_CALENDAR);
  //let nhoja_activitats = ss_bd.getSheetByName(HOJA_ACTIVIDADES);
 const lastRow = sheetControlFactures.getLastRow(); 
 const uniqueIDs = sheetControlFactures.getRange(2,1,lastRow,1).getValues();
 

 let maxNum= 0;
 uniqueIDs.forEach(r => {
     maxNum = r[0] > maxNum ? r[0] : maxNum
 });
 
 let info = activitatInfo.info;
 let descripcion = activitatInfo.descripcion;
 let fechaInicio = activitatInfo.fechaInicio;
 let fechaFin = activitatInfo.fechaFin;
 let enviaInvitaciones = activitatInfo.enviaInvitaciones;
 let invitados = activitatInfo.invitados;
 let lugar = '-';
 let estado = false;//insertCheckboxes()
 let color = '-';
 let fechaCreacion = new Date();
 let organizador = activitatInfo.organizador;

let newID = maxNum + 1;
let usuari = facturaInfo.usuari;
let selectprogrames = facturaInfo.select-programes;
let selectdepartaments= facturaInfo.select-departaments;
let concepte = facturaInfo.info-concepte;
let selecttipus = facturaInfo.select-tipus;
let pagamentusuaripendent = facturaInfo.pagament-usuari-pendent;
let pagaementusuarifet = facturaInfo.pagament-usuari-fet;
let pagamentdatafactura = facturaInfo.pagament-data-factura;
let nomempresa = facturaInfo.nom-empresa;
let cifempresa = facturaInfo.cif-empresa;
let importefactura = facturaInfo.importe-factura;
let conceptefactura = facturaInfo.concepte-factura;
let arxiufactura = facturaInfo.arxiu-factura;
let observacionsfactura = facturaInfo.observacions-factura;
let selectipuspagament = facturaInfo.select-tipus-pagament-add;



 nhoja_activitats.appendRow([
   
              newID,
              usuari,
              selectprogrames,
              selectdepartaments,
              concepte,
              selecttipus,
              pagamentusuaripendent,
              pagaementusuarifet,
              pagamentdatafactura,
              nomempresa,
              cifempresa,
              importefactura,
              conceptefactura,
              arxiufactura,
              observacionsfactura,
              selectipuspagament
                    
              
              
                            ]);
              
//insertarCheck();
 
} */







 