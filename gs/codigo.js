
function doGet() {
  // Es necesario que el mail del usuario activo esté en la HOJA_PERMISOS 
  // También que el check de la aplicación facturesWebApp tenga valor true
  //Comprovamos si tiene permisos para usar la aplicación

  // Accedemos a los datos de la hoja permisos
  let nhoja_permisos = ss_bd_config.getSheetByName(HOJA_PERMISOS);
  
  //Logger.log(nhoja_permisos);
  let rng_hoja_permisos = nhoja_permisos.getDataRange();
  let filas_rng_hoja_permisos = rng_hoja_permisos.getNumRows();
  let datos_rng_hoja_permisos = rng_hoja_permisos.getValues();



  // Recorremos los datos y comprobamos que el usuario activo
  // aparece en la HOJA_PERMISOS y que tiene el check en valor true
  let permiso = false;
  for (let i=1;i<filas_rng_hoja_permisos;i++){  

  // Obtenemos los valores de la HOJA_PERMISOS que nos ofrecen
  // los usuarios y las aplicaciones a las que tienen accesos
  const userActive = datos_rng_hoja_permisos[i][5]== USUARIO_ACTIVO;
  const checkActive = datos_rng_hoja_permisos[i][7]==true;

    if ( userActive && checkActive) {
    
    permiso = true;
   }
  }

  //Si no está en la lista, le mostramos mensaje de NO AUTORIZADO
  if (permiso == false){
    return HtmlService.createHtmlOutputFromFile('html/noautorizado').setTitle(APP_NAME)

  }else{ //Si está en la lista, se accede
  const htmlServ = HtmlService.createTemplateFromFile("html/index");
  htmlServ.USUARIO_ACTIVO = USUARIO_ACTIVO;
  htmlServ.apli = APLI;
  htmlServ.nombre_app = APP_NAME;
  const html = htmlServ.evaluate();
  
return HtmlService.createHtmlOutput(html).setTitle(APP_NAME);

    }

  } 



//Creamos la funcion include que nos permite tener el css y js en un archivo diferente(externo)

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}