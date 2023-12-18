
// SELECT PROGRAMAS
//devuelve el valor deapartamento o programa sin repetir.
function loadSelectProgrames(){

  const lastRow = sheetConfig.getLastRow() - 1;
  const lastCol = sheetConfig.getLastColumn();
  const dataProgrames = sheetConfig.getRange(2, 4, lastRow, 1).getDisplayValues();
//Logger.log(dataProgrames);

let valueProgrames = [];
dataProgrames.forEach(row=>{
  if ( valueProgrames.indexOf(row[0]) == -1){
    //Agregar value
    valueProgrames.push(row[0]);
  }
});
//Logger.log(valueProgrames) ;
return valueProgrames;
}



// SELECT DEPARTAMENTS

function loadSelectDepartaments(){
  const ss = SpreadsheetApp.openByUrl(url);
  const ws = ss.getSheetByName("config");
  const lastRow = ws.getLastRow() - 1;
  const lastCol = ws.getLastColumn();
  const dataDepartaments = ws.getRange(2, 5, lastRow, 1).getDisplayValues();
//Logger.log(dataDepartaments);
return dataDepartaments;
} 


function loadSelectDepartaments(programaSeleccionado){
 
  let data = sheetConfig.getDataRange().getValues();
  let listaProgrames = [];

  data.map( row => {
  if( row[3] == programaSeleccionado ){
     listaProgrames.push( row[4]);
    }
  });

  //Logger.log(listaProgrames);
  return listaProgrames;
 //const dataDepartaments = ws.getRange(2, 5, lastRow, 1).getDisplayValues();
//Logger.log(dataDepartaments);
//return dataDepartaments;
}


// SELECT TIPUS DOCUMENT

function loadSelectTipusDocument(){
 
  const lastRow = sheetConfig.getLastRow() - 1;
  const lastCol = sheetConfig.getLastColumn();
  const dataTipus = sheetConfig.getRange(2, 6, lastRow, 1).getDisplayValues();

  let valueTipusDocument = [];
dataTipus.forEach(row=>{
  if ( valueTipusDocument.indexOf(row[0]) == -1){
    //Agregar value
    valueTipusDocument.push(row[0]);
  }
});
//Logger.log(valueTipusDocument) ;
return valueTipusDocument;
}


// SELECT TIPUS PAGAMENT

function loadSelectTipusPagament(){

  const lastRow = sheetConfig.getLastRow() - 1;
  const lastCol = sheetConfig.getLastColumn();
  const dataTipusPagament = sheetConfig.getRange(2, 7, lastRow, 1).getDisplayValues();

  let valueTipusPagament = [];
dataTipusPagament.forEach(row=>{
  if ( valueTipusPagament.indexOf(row[0]) == -1){
    //Agregar value
    valueTipusPagament.push(row[0]);
  }
});
//Logger.log(valueTipusDocument) ;
return valueTipusPagament;

}

//AFEGIR NOVA FACTURA

function addFactura(facturaInfo){ 
//console.log(facturaInfo);
/*    const arxiupujat = facturaInfo.arxiufactura;//"C:\fakepath\todosLosBloques.png"//
   const folder = DriveApp.getFolderById("1JesrDt-dpQZUXhftv2ErqygXYC8aFfSI");
   const file = folder.createFile(arxiupujat);
   const arxiufactura = file.getUrl(); */

let newID = crearNuevoId();
let registre = obtenerTimestamp();
let usuari = obtenerUsuario();
let selectprogrames = facturaInfo.selectprogrames;
let selectdepartaments = facturaInfo.selectdepartaments;
let concepte = facturaInfo.infoconcepte;
let selecttipus = facturaInfo.selecttipus;
let estatPagamentMestre = facturaInfo.estadoPago;
let estatPagamentCentre = facturaInfo.pagamentusuarifet;
let selectipuspagament = facturaInfo.selecttipuspagament;
let pagamentdatafactura = "";
let datafactura = facturaInfo.datafactura;
let nomempresa = facturaInfo.nomempresa;
let cifempresa = facturaInfo.cifempresa;
let numfactura = facturaInfo.numfactura ;
let importefactura = facturaInfo.importefactura;
let conceptefactura = facturaInfo.conceptefactura;
//let arxiufactura = facturaInfo.arxiufactura;
let arxiufactura = facturaInfo.arxiufactura;
let observacionsfactura = facturaInfo.observacionsfactura;



 sheetDadesForm.appendRow([
   
              newID,
              registre,
              usuari,
              selectprogrames,
              selectdepartaments,
              concepte,
              selecttipus,
              estatPagamentMestre,
              estatPagamentCentre,
              selectipuspagament,
              pagamentdatafactura,
              datafactura,
              nomempresa,
              cifempresa,
              numfactura,
              importefactura,
              conceptefactura,
              arxiufactura,
              observacionsfactura
              
                            ]);
              
insertarCheck();
//insertarLinkFactura()
}


function crearNuevoId(){
const lastRow = sheetDadesForm.getLastRow(); 
 const uniqueIDs = sheetDadesForm.getRange(2,1,lastRow,1).getValues();

 //Logger.log(lastRow )
 let maxNum= 0;
 uniqueIDs.forEach(r => {
     maxNum = r[0] > maxNum ? r[0] : maxNum
 });
 
let nuevoId = maxNum + 1;

return nuevoId;
}

//Obtenemos la dirección del usuario para comprobar credenciales y conceder acceso
function obtenerUsuario(){

  const user = Session.getActiveUser().getEmail();

  return user;
}  


function obtenerTimestamp()
{
   const now     = new Date();
   const year    = now.getFullYear();
   const month   = now.getMonth() + 1;
   const day     = now.getUTCDate();
   const hora    = now.getHours();
   const minutos = now.getMinutes();

   const timestamp = day + "/" + month + "/" + year + "-" + hora + ":" +  minutos;

//console.log(timestamp);
  return timestamp;
}

function insertarCheck(){
  
  const lastRow = sheetDadesForm.getLastRow(); 
  const lastCol = sheetDadesForm.getLastColumn(); 
  const estatPagamentMestre = sheetDadesForm.getRange(lastRow,8,1,1).getValue();
  
  //Logger.log(estatPagamentMestre);
  const estatPagamentCheck = sheetDadesForm.getRange(lastRow,8,1,1);
 if (estatPagamentMestre == false){estatPagamentCheck.insertCheckboxes();}
 else { estatPagamentCheck.insertCheckboxes().check();}

const estadoPagamentCentre = sheetDadesForm.getRange(lastRow,9,1,1).getValue();
 const estadoCheck = sheetDadesForm.getRange(lastRow,9,1,1);
 if (estadoPagamentCentre == false){estadoCheck.insertCheckboxes();}
else { estadoCheck.insertCheckboxes().check();} 


//const estadoEcoib = sheetDadesForm.getRange(lastRow,20,1,1).getValue();
 const estadoEcoib = sheetDadesForm.getRange(lastRow,20,1,1);
              estadoEcoib.insertCheckboxes();

}

function uploadFiles(form){
//console.log(form);
  const folder = DriveApp.getFolderById('1JesrDt-dpQZUXhftv2ErqygXYC8aFfSI');
  const file = folder.createFile(form.file);
//console.log(file)
  const fileLink = file.getUrl()
  return fileLink; 
}

/* function insertarLinkFactura(fileLink){
  Logger.log(fileLink);
  const lastRow = sheetDadesForm.getLastRow(); 
  const lastCol = sheetDadesForm.getLastColumn(); 
  const linkFactura = sheetDadesForm.getRange(lastRow,18,1,1);
  
linkFactura.setValue(fileLink).toString();


} */
/* function obtenerEstadoPago(){
  const lastRow = sheetDadesForm.getLastRow(); 
  const estadoPago = sheetDadesForm.getRange(2,8,lastRow,1).getValues();
 

} */