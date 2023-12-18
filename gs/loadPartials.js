function loadPartialHTML_(partial) {
  const htmlServ = HtmlService.createTemplateFromFile(partial);
  return htmlServ.evaluate().getContent();
}




function loadIniciView(){

return loadPartialHTML_("html/main");

}

function loadAddFacturaView(){

return loadPartialHTML_("html/addFactura");


}

function loadShowFacturasView(){

return loadPartialHTML_("html/showFacturas");

}


function loadSearchFacturaView(){

return loadPartialHTML_("html/searchFactura");

}



/* function loadEditArticleView(){

return loadPartialHTML_("editarticle");

} */