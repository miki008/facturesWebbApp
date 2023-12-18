//https://script.google.com/a/macros/ceippedraviva.com/s/AKfycbxV3tu2S7MX0Zb75yAe7LJlnAPqt2U67rTH2uzDIbc/dev
//Definimos el nombre de la aplicación
const APP_NAME = "FacturesWebApp";

//Obtenemos la dirección del usuario
const USUARIO_ACTIVO = Session.getActiveUser().getEmail();

//Definimos el libro (BBDD) que nos servirà de base de datos
//para obtener los datos generales del centro, el personal, los horarios y los recursos
const URL = "https://docs.google.com/spreadsheets/d/1gBFU_2F5n2qmkZKOGM0vFIp18lkSOxVvtaw7bpiA_cc/edit#gid=0";
//const BD_ID = "1BNOKhlgSNqCQYYiU9ceFwb0PaJVg9zhDvNJKyDHm9lw";
const SS = SpreadsheetApp.openByUrl(URL);
const sheetConfig = SS.getSheetByName("config");
const sheetControlFactures = SS.getSheetByName("controlFactures");
const sheetDadesForm = SS.getSheetByName("dadesForm");


//para obtener los datos generales del centro, el personal, los horarios y los recursos
const URL_SS_BD_CONFIG = "https://docs.google.com/spreadsheets/d/1w2NAI53fsUlmMObNA0WIbK8c37RNsO3-nL8hnfjUJtQ/edit#gid=1859437246"

const ss_bd_config = SpreadsheetApp.openByUrl(URL_SS_BD_CONFIG);

//Nombre de las hojas de cálculo
const HOJA_PERMISOS="dadesMestres";
const HOJA_DATOSCOLEGIO="dadesEscola";
const HOJA_HORARIOSCOLEGIO="horarisEscola";
const HOJA_RECURSOS="recursosEscola";


//Dirección del script publicado y de la hoja de cálculo

//Eliminar comentar para realizar las pruebas. Comentar al publicar la versión. 
// Versión de desarrollo
//const APLI = "https://script.google.com/a/macros/ceippedraviva.com/s/AKfycbxV3tu2S7MX0Zb75yAe7LJlnAPqt2U67rTH2uzDIbc/dev";

//Eliminar comentar por publicar. Comentar cuándo se hacen pruebas y no se publica.
// Versión de producción
const APLI = ScriptApp.getService().getUrl();

  //NÚMERO DE ÍNDICES DE LAS COLUMNAS (0 - ,,,,)
  //let ss_bd = SpreadsheetApp.openByUrl(URL_SS_BD_CALENDAR);
 
  let [headerA,...data] = sheetDadesForm.getDataRange().getValues();

const ID_ACTIVITAT = headerA.indexOf('ID');
const MARCA_TEMPORAL = headerA.indexOf('Marca de temps');
const USUARIO = headerA.indexOf('Usuari');
const DEPARTAMENTO_PROGRAMA = headerA.indexOf('Departament-Programa');
const COMISION_TALLER_ACTIVIDAD = headerA.indexOf('Comissió-Programa-Activitat, ...');
const ESTADO_PAGO = headerA.indexOf('Estat del pagament');
const FORMA_PAGO = headerA.indexOf('Forma de pagament');
const FECHA_PAGO = headerA.indexOf('Data pagament factura');
const FECHA_FACTURA= headerA.indexOf('Data de la factura');
const NOMBRE_EMPRESA = headerA.indexOf('Nom de l\'empresa');
const CIF_EMPRESA = headerA.indexOf('CIF-NIF de l\'empresa');
const NUMERO_FACTURA = headerA.indexOf('Número de la factura');
const IMPORTE_FACTURA = headerA.indexOf('Import de la factura');
const CONCEPTO_FACTURA = headerA.indexOf('Concepte');
const ENLACE_FACTURA = headerA.indexOf('Enlace factura');
const OBSERVACIONES_FACTURA = headerA.indexOf('Observacions');
const CONTABILIZADA_ECOIB = headerA.indexOf('Ecoib');

// FIN NÚMERO DE ÍNDICES DE LAS COLUMNAS

