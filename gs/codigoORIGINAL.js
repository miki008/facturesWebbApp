//https://www.briored.com/category/javascript/


/* function doGet() {

  //Obtenemos la dirección del usuario
  const usuario = Session.getActiveUser().getEmail();

  //Comprovamos si tiene permisos para usar la aplicación

  //Adquirimos los datos de la hoja permisos
  //let ss_bd = SpreadsheetApp.openByUrl(URL_SS_BD_CALENDAR); 
  let nhoja_permisos = ss_bd_config.getSheetByName(HOJA_PERMISOS);
  
  //Logger.log(nhoja_permisos);
  let rng_hoja_permisos = nhoja_permisos.getDataRange();
  let filas_rng_hoja_permisos = rng_hoja_permisos.getNumRows();
  let datos_rng_hoja_permisos = rng_hoja_permisos.getValues();

  //Comprobamos si el usuario està en la lista
  let permiso = false;
  for (let i=1;i<filas_rng_hoja_permisos;i++){  
    // Los datos empiezan en la fila 2 (1 en la matriz de datos recogidos)
    // y en la columna 5 

    if (datos_rng_hoja_permisos[i][5]== usuario && datos_rng_hoja_permisos[i][7]==true){
    
      permiso=true;
   }
  }

  //Si no está en la lista, le mostramos mensaje de NO AUTORIZADO
  if (permiso == false){
    return HtmlService.createHtmlOutputFromFile('html/noautorizado').setTitle(APP_NAME)
  }else{ //Si está en la lista, se accede
  const htmlServ = HtmlService.createTemplateFromFile("html/index");
  htmlServ.usuario = usuario;
  htmlServ.apli = APLI;
  htmlServ.nombre_app = APP_NAME;
  const html = htmlServ.evaluate();
  
return HtmlService.createHtmlOutput(html).setTitle(APP_NAME);
        //plantilla=HtmlService.createTemplateFromFile('views/pages/p1');
        //plantilla.usuario=usuario;
        //plantilla.apli=apli;
        //plantilla.nombre_app=nombre_app;
        //return plantilla.evaluate().setTitle(nombre_app)
    }


  }


//Obtenemos la dirección del usuario para comprobar credenciales y conceder acceso
function obtenerUsuario(){

  const usuario = Session.getActiveUser().getEmail();

  return usuario;
} 
  


//Creamos la funcion include que nos permite tener el css y js en un archivo diferente(externo)

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

*/