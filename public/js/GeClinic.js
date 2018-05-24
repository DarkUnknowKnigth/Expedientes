/*Precargar elementos*/
var localResource='';
var formAntec=[];
var formFichIde;
var formAPNP;
var formInmu;
var formAntecGine;
var formAPP;
var dec=2;
$(document).ready(function(){
	localResource=$("#results").html();
	insertarAnios();
	insertarEnfermedades(enfermedades);
	insertarEstadoCivil(estadosCiviles);
	$("#failUser").css("display","none");
	$("#parentRest").text(dec);
});

/*end precargar elementos*/

$("#buscadorExp").keyup((e)=>{
	$.ajax({
		type: "POST",
		url: e.target.name,
		data:{type:$("#tipoBusquedaExp").val(),value:$("#buscadorExp").val()}
	}).done((e)=>{
		$("#informe").text(e);
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
					window.location.href=e.url;
				}
			}
		});

	});
});
/*Eventos de accordion*/
$("#crearExp a").click(function(){
	darColorVinetas("#crearExp");
	$(".containerForms").css("display","none");
	texto = $(".createExp p").text();

	if (texto == "MODIFICAR EXPEDIENTE") {
		texto = texto.replace("MODIFICAR", "CREAR");
		$(".createExp p").text(texto);
	}
	$(".createExp").css("display","block");
	$(".createExp form").css("display","none");
	$(".createExp #firstForm").css("display","block")
});
$("#modifExp a").click(function(){
	darColorVinetas("#modifExp");
	$(".containerForms").css("display","none");
	$(".modifExp").css("display","block");
})
$("#crearUser a").click(function(){
	darColorVinetas("#crearUser");
	$(".containerForms").css("display","none");
	$(".putForm form").css("display","none");

	texto = $(".createUser p").text();

	if (texto == "MODIFICAR USUARIO") {
		texto = texto.replace("MODIFICAR", "CREAR");
		$(".createUser p").text(texto);
	}
	$(".createUser").css("display","block");
	$("#formUser").css("display","block");

});
$("#modifUser a").click(function(){
	darColorVinetas("#modifUser");
	$(".containerForms").css("display","none");
	$(".modifUser").css("display","block");
});
$("#procesoConsulta a").click(function(){
	darColorVinetas("#procesoConsulta");
	$(".containerForms").css("display","none");
	$(".procesoConsulta").css("display","block");
});
$("#genHojaDiaria a").click(function(){
	darColorVinetas("#genHojaDiaria");
	$(".containerForms").css("display","none");
	$(".genHojaDiaria").css("display","block");
});
$("#genInformeMensual a").click(function(){
	darColorVinetas("#genInformeMensual");
	$(".containerForms").css("display","none");
	$(".genInformeMensual").css("display","block");
});
function darColorVinetas(element){
	$(".card-body div").removeClass("activeVineta");
	$(".card-body div a").css("color","#0056b3");
	$(element).addClass("activeVineta");
	$(element + " a").css("color","#fff");
}

/*end Eventos de accordion*/

/*Eventos de Tabla*/

$("#initExp").click(function(){

$antec = false;
$fi = false;
$an = false;
$in = false;
$ap = false;
$anGi = false;
	if ($fi == false) {
		darColorTD("#fi");
		$(".putForm form").css("display","none");
		$("#formFichIde").css("display","block");
		$(".continuarExp .btn-success").click(function(){//guardar ficha identificacion
				$fi = true;
				$("#fi").css("background-color","#6CDE71");
				darColorTD("#antec");///////////////
				$(".putForm form").css("display","none");
				$("#formAntec").css("display","block");
				$(".continuarExp .btn-success").click(function(e){
						$antec = true;
						$("#antec").css("background-color","#6CDE71");
						if(dec==01)
						{	
							$("#parentRest").css("color","red");
							e.preventDefault();
							
						}
						darColorTD("#an");
						$(".putForm form").css("display","none");
						$("#formAPNP").css("display","block");
						$(".continuarExp .btn-success").click(function(){
								$an = true;
								$("#an").css("background-color","#6CDE71");
								darColorTD("#in");
								$(".putForm form").css("display","none");
								$("#formInmu").css("display","block");
								$(".continuarExp .btn-success").click(function(){
										$in = true;
										$("#in").css("background-color","#6CDE71");
										darColorTD("#ap");
										$(".putForm form").css("display","none");
										$("#formAPP").css("display","block");
										$(".continuarExp .btn-success").click(function(){
												$ap = true;
												$("#ap").css("background-color","#6CDE71");
												darColorTD("#anGi");
												$(".putForm form").css("display","none");
												if(formFichIde.sexo=="Mujer")
												{
													$("#formAntecGine").css("display","block");
												}
												else
												{
													$("#formAntecGine button").click();
												}
												$(".continuarExp .btn-success").click(function(){
														$anGi = true;
														$("#fi,#antec,#an,#in,#ap,#anGi").css("background-color","#2F789F");
														$(".statusTable td").removeClass("active");
														$(".statusTable td").css("color","#fff");
														$(".putForm form").css("display","none");
														$("#firstForm").css("display","block");
												});
											
										});

									
								});
						});
				});
		});
	}
});

function darColorTD(element){
	$(".statusTable td").removeClass("active");
	$(".statusTable td").css("color","#fff");
	$(element).addClass("active");
	$(element).css("color","#528AF2");
}

/*end Eventos de Tabla*/

/*Eventos de modificación de expediente*/

$(".modifExp .edit").click(function(){
	$(".modifExp").css("display","none");
	$(".createExp").css("display","block");
	var texto = $(".createExp p").text();
	texto = texto.replace("CREAR", "MODIFICAR");
	$(".createExp p").text(texto);
});

/*end eventos de modificación de expediente*/

/*Eventos de modificación de usuario*/

$(".modifUser .edit").click(function(e){
	let url=
	$(".modifUser").css("display","none");
	$(".createUser").css("display","block");
    texto = $(".createUser p").text();
	texto = texto.replace("CREAR", "MODIFICAR");
	$(".createUser p").text(texto);
});

/*end eventos de modificación de usuario*/
$("#buscarEXP").click(function(){
	if ($("#buscarExpCurp").val() != "") {
		$(".resultExpCurp").css("display","block");
	}
	else{
		alert("Usted no ha ingresado un expediente");
	}
	
});
$(".actions button").click(function(){
	if ($(".resultExpCurp").css("display") == "block") {
		$("#buscarExpPorCurp").css("display","none");
		$(".resultExpCurp").css("display","none");
		$(this).css("opacity","0");
	$(".sigVit").css("display","block");
	$(".circle1").css("background-color","#88d392");
	}
	else{
		alert("Debe buscar la CURP del paciente");
	}
	
});
$(".modal.cancelar .modal-footer .btn-danger").click(function(){
	$(".consultaViewer").css("display","none");
	$(".consultaViewer form")[0].reset();
	$(".actions button").css("opacity","1");
	$(".circle1,.circle2,.circle3").css("background-color","transparent");
});
$(".modal.cancelar2 .modal-footer .btn-danger").click(function(){
	$(".consultaViewer").css("display","none");
	$(".consultaViewer form")[0].reset();
	$(".actions button").css("opacity","1");
	$(".circle1,.circle2,.circle3").css("background-color","transparent");
});
$(".modal.cancelar3 .modal-footer .btn-danger").click(function(){
	$(".consultaViewer").css("display","none");
	$(".consultaViewer form")[0].reset();
	$(".actions button").css("opacity","1");
	$(".circle1,.circle2,.circle3").css("background-color","transparent");
});

$(".modal.continuar .modal-footer .btn-success").click(function(){
	// $(".consultaViewer").css("display","none");
	// $(".actions button").css("opacity","1");
	var validar = true;
	$(".sigVit input").each(function(){
			if ($(this).val() == "") {
				validar = false;
			}
		});
	if (validar) {
		$(".consultaViewer.sigVit").css("display","none");
		$(".consultaViewer.formatConsulta").css("display","block");
		$(".circle2").css("background-color","#88d392");
	}
	else{
		alert("Falta rellenar algunos campos");
	}
});

$(".modal.continuar2 .modal-footer .btn-success").click(function(){
	// $(".consultaViewer").css("display","none");
	// $(".actions button").css("opacity","1");
	var validar = true;
	$(".formatConsulta input").each(function(){
			if ($(this).val() == "") {
				validar = false;
			}
		});
	if (validar) {
		$(".consultaViewer.formatConsulta").css("display","none");
		$(".consultaViewer.formatDiagnostico").css("display","block");
		$(".circle3").css("background-color","#88d392");
	}
	else{
		alert("Falta rellenar algunos campos");
	}
});

$(".modal.continuar3 .modal-footer .btn-success").click(function(){
	// $(".consultaViewer").css("display","none");
	// $(".actions button").css("opacity","1");
	var validar = true;
	$(".formatDiagnostico input").each(function(){
			if ($(this).val() == "") {
				validar = false;
			}
		});
	if (validar) {
		$(".consultaViewer.formatDiagnostico").css("display","none");
		$(".actions button").css("opacity","1");
		alert("¡Registro de consulta exitosa!");
		$(".circle1,.circle2,.circle3").css("background-color","transparent");
		$(".consultaViewer form")[0].reset();
		$("#buscarExpPorCurp").css("display","block");
	}
	else{
		alert("Falta rellenar algunos campos");
	}
});


//Obtener año
var fecha = new Date();
// var ano = fecha.getFullYear();
// alert('El año actual es: '+ano);


function insertarAnios(){
	for(var i = 1950; i<=fecha.getFullYear();i++){
		$(".genInformeMensual #anioInfo").append("<option value='"+i+"'>"+i+"</option>");
	}
}

var enfermedades = [
						{nombre:"Diabetes Mellitus", value: "diabetesMellitus"},
						{nombre:"Hipertensión arterial", value: "hipertensionArterial"},
						{nombre:"Obesidad", value: "obesidad"},
						{nombre:"Diabetes Mellitus", value: "diabetesMellitus"},
						{nombre:"Dislipidemias", value: "dislipidemias"},
						{nombre:"Depresión", value: "depresion"},
						{nombre:"Alteración de memoria", value: "alteracionMemoria"},
						{nombre:"Síntomas respiratorios", value: "sintomasRespiratorios"},
						{nombre:"Alcoholismo", value: "alcoholismo"},
						{nombre:"Tabaquismo", value: "tabaquismo"},
						{nombre:"Fármacos", value: "farmacos"},
						{nombre:"Incontinencia urinaria", value: "incontinenciaUrinaria"},
						{nombre:"VIH", value: "vih"},
						{nombre:"Gonorrea", value: "gonorrea"},
						{nombre:"ITS", value: "its"},
						{nombre:"Sífilis", value: "sifilis"}
					];

					var estadosCiviles = [
		{nombre:"Soltero(a)", value: "soltero"},
		{nombre:"Casado(a)", value: "casado"},
		{nombre:"Madre (p) soltero", value: "MPSoltero"},
		{nombre:"Viudo(a)", value: "viuda"},
		{nombre:"Divorciado(a)", value: "divorciado"},
		{nombre:"Unión libre", value: "unionLibre"},
		{nombre:"Separado", value: "separado"}
];

function insertarEstadoCivil(arrayEstadoCivil){
	arrayEstadoCivil.forEach(element =>{
		$("#formFichIde #estadoCivil").append("<option value='"+element.value+"'>"+element.nombre+"</option>");
	});
}

function insertarEnfermedades(arrayEnfer){
	arrayEnfer.forEach(element => {
		$(".formatConsulta #deteccion").append("<option value='"+element.value+"'>"+element.nombre+"</option>");
	});
}
$("#RefreshUser").click((e)=>{
	$("#result").append(localResource);
});
$("#buscadorUser").keyup((e)=>{
	if(/[A-Za-z]/.test($("#buscadorUser").val()))
	{
		$.ajax({
			method:"POST",
			url: $("#buscadorUsuarios").attr('action'),
			data:{
				valor:$("#buscadorUser").val()
			}
		}).done((r)=>{
			$("#results").html(r);
		});
	}
	else
	{
		console.log("No permitido");
		e.preventDefault();
	}
	
});
$("#guardarUsuario").click((e)=>{
	var u=$("#nomUser");
	var c=$("#password");
	var cc=$("#confirmPassword");
	var n=$("#nomReal");
	var ap=$("#apPaterno");
	var am=$("#apMaterno");
	var tu=$("#tipoUser");
	var cp=$("#cedulaProfesional");
	var a=$("#activeUser");
	$.ajax({
		method:"POST",
		url: $("#formUser").attr('action'),
		data: {
			'usuario':u.val(),
			'password':c.val(),
			'cpassword':cc.val(),
			'nombre':n.val(),
			'apPaterno':ap.val(),
			'apMaterno':am.val(),
			'TipoUsuario':tu.val(),
			'cedula':cp.val(),
			'activo':a.val()
		}
	}).done((r)=>{
		$("#informe").text(r.msg);
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
					if (r.url) {
						window.location.href = r.url;
					}
				}
			}
		});
	}).fail((r)=>{
		console.log(r);
		$("#failUser").css("display","block");
		$("#failUser").html("<p>"+r+"</p>");
	});;
});
$(".modifExp .see").click((e)=>{
	console.log(e.target.name);

	$.ajax({
		type: "post",
		url: e.target.name,
		data: {id:e.target.value},
	}).done((e)=>{
		$("#informe").html(e);
		$("#dialog-message").dialog({
			modal: true,
			width: 900,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
	});
});
$(".modifExp .delete").click((e)=>{
	$.ajax({
		type: "delete",
		url: e.target.name,
	}).done((r)=>{
		$("#informe").text(r);
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
					window.location.href=r;
				}
			}
		});
	});
});
$("#YesElimUser").click((e)=>{
	console.log(e);
});
$("#talla").keyup(function(){
	let talla = $("#talla").val();
	let peso = $("#peso").val();
	asignarIMC(talla,peso);
});


$("#peso").keyup(function(){
	let talla = $("#talla").val();
	let peso = $("#peso").val();
	asignarIMC(talla,peso);
});

function asignarIMC(talla,peso){
	// $("#imc").val(talla*peso);
	let tb = talla/100;
	if (talla > 0 && peso > 0) {
		let imc = peso/(tb*tb);
		$("#imc").val(imc);
	}
}
$("#buscarExpCurp").keyup((k)=>{
	let type=$("#tipoBusquedaExp").val();
	let value=$("#buscarExpCurp").val();
});

$("#agregar").click(function(e){
	dec--;
	formAntec.push(
	{
		"parentesco": $("#parentesco").val(),
		"HA": $("#Ha input:radio[name=Ha]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"cancer": $("#cancer input:radio[name=cancer]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"sida": $("#sida input:radio[name=sida]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"diabetes": $("#diabetes input:radio[name=diabetes]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"TB": $("#tb input:radio[name=TB]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"otro": $("#otros").val()
	});
	if(dec<=0)
	{
		e.preventDefault();	
		$("#parentRest").text("Presione continuar");
	}
	$("#parentRest").text(dec);
	console.log(formAntec);
});

$("#formFichIde button").click(function(){
	formFichIde=
	{
		"nombre": $("#idNombrePaciente").val(),
		"apPaterno": $("#idApPat").val(),//este solo es uno debes verificar cual esta avtivo
		"apMaterno": $("#idApMat").val(),//este solo es uno debes verificar cual esta avtivo
		"direccion": $("#direccion").val(),//este solo es uno debes verificar cual esta avtivo
		"curp": $("#curp").val(),//este solo es uno debes verificar cual esta avtivo
		"estadoCivil": $("#estadoCivil").val(),//este solo es uno debes verificar cual esta avtivo
		"ocupacion": $("#sinOcupacion").val(),
		"sexo": $("#sexo").val()
	};
	console.log(formFichIde);
});

$("#formAPNP button").click(function(){
	formAPNP=
	{
		"promiscuidad": $("#promiscuidad input:radio[name=promiscuidad]:checked").val(),
		"tabaco": $("#tabaco input:radio[name=tabaco]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"alcohol": $("#alcohol input:radio[name=alcohol]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"fauna": $("#fauna input:radio[name=fauna]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"hacinamiento": $("#hacinamiento input:radio[name=hacinamiento]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"dieta": $("#dieta input:radio[name=dieta]:checked").val(),
		"vivienda": $("#vivienda").val()
		
	};
	console.log(formAPNP);
});

$("#formInmu button").click(function(){
	formInmu=
	{
		"sabin": $("#sabin input:radio[name=sabin]:checked").val(),
		"bcg": $("#bcg input:radio[name=bcg]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"dpt": $("#dpt input:radio[name=dpt]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"antisarampion": $("#antisarampion input:radio[name=antisarampion]:checked").val()//este solo es uno debes verificar cual esta avtivo
		
	};
	console.log(formInmu);
});

$("#formAPP button").click(function(){
	formAPP=
	{
		"sonrie": $("#sonrie input:radio[name=sonrie]:checked").val(),
		"ingresoHos": $("#ingresoHospital input:radio[name=ingresoHospital]:checked").val(),
		"sostieneCab": $("#sostieneCabeza input:radio[name=sostieneCabeza]:checked").val(),
		"sienta": $("#seSienta input:radio[name=seSienta]:checked").val(),
		"gatea": $("#gatea input:radio[name=gatea]:checked").val(),
		"habla": $("#habla input:radio[name=habla]:checked").val(),
		"traumatismo": $("#traumatismos input:radio[name=traumatismos]:checked").val(),
		"sarampion": $("#sarampion input:radio[name=sarampion]:checked").val(),
		"rubeola": $("#rubeola input:radio[name=rubeola]:checked").val(),
		"tosferina": $("#tosferina input:radio[name=tosferina]:checked").val(),
		"varicela": $("#varicela input:radio[name=varicela]:checked").val(),
		"escarlatina": $("#escarlatina input:radio[name=escarlatina]:checked").val(),
		"amigdalitis": $("#amigdalitis input:radio[name=amigdalitis]:checked").val(),
		"parasitosis": $("#parasitoIntestinal input:radio[name=parasitoIntestinal]:checked").val(),
		"convulsiones": $("#convulsiones input:radio[name=convulsiones]:checked").val(),
		"urosepsis": $("#urosepsis input:radio[name=urosepsis]:checked").val(),
		"cirugia": $("#cirugia input:radio[name=cirugia]:checked").val()
		
	};
	console.log(formAPP);
});

$("#formAntecGine button").click(function(){
	formAntecGine=
	{
		"ultimaMenst": $("#ultMens").val(),
		"fechaAnti": $("#fechaAnticonceptivo").val(),
		"gesta": $("#gesta").val(),
		"ritmo": $("#ritmo").val(),
		"magnitudSang": $("#magSang").val(),
		"menarquia": $("#menarquia").val(),
		"aborto": $("#aborto").val(),
		"cesarea": $("#cesarea").val(),
		"vidaSex": $("#vidSexAct").val(),
		"legradoUt": $("#legradoUt").val(),
		"pruebaEnb": $("#pruebaEmb").val(),
		"citologia": $("#citologia").val(),
		"tipoAnt": $("#tipoAnticoncep").val()
		
	};
	var Expediente=
	{
		
		"parentesco": formAntec[0].parentesco,
		"HA": formAntec[0].HA,
		"cancer":formAntec[0].cancer, 
		"sida":formAntec[0].sida,
		"diabetes":formAntec[0].diabetes,
		"TB": formAntec[0].TB,
		"otro": formAntec[0].otro,
		"parentesco2": formAntec[1].parentesco,
		"HA2": formAntec[1].HA,
		"cancer2":formAntec[1].cancer, 
		"sida2":formAntec[1].sida,
		"diabetes2":formAntec[1].diabetes,
		"TB2": formAntec[1].TB,
		"otro2": formAntec[1].otro,
		"nombre": $("#idNombrePaciente").val(),
		"apPaterno": $("#idApPat").val(),//este solo es uno debes verificar cual esta avtivo
		"apMaterno": $("#idApMat").val(),//este solo es uno debes verificar cual esta avtivo
		"direccion": $("#direccion").val(),//este solo es uno debes verificar cual esta avtivo
		"curp": $("#curp").val(),//este solo es uno debes verificar cual esta avtivo
		"estadoCivil": $("#estadoCivil").val(),//este solo es uno debes verificar cual esta avtivo
		"ocupacion": $("#sinOcupacion").val(),
		"sexo": $("#sexo").val(),
		"promiscuidad": $("#promiscuidad input:radio[name=promiscuidad]:checked").val(),
		"tabaco": $("#tabaco input:radio[name=tabaco]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"alcohol": $("#alcohol input:radio[name=alcohol]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"fauna": $("#fauna input:radio[name=fauna]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"hacinamiento": $("#hacinamiento input:radio[name=hacinamiento]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"dieta": $("#dieta input:radio[name=dieta]:checked").val(),
		"vivienda": $("#vivienda").val(),
		"sabin": $("#sabin input:radio[name=sabin]:checked").val(),
		"bcg": $("#bcg input:radio[name=bcg]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"dpt": $("#dpt input:radio[name=dpt]:checked").val(),//este solo es uno debes verificar cual esta avtivo
		"antisarampion": $("#antisarampion input:radio[name=antisarampion]:checked").val(),
		"sonrie": $("#sonrie input:radio[name=sonrie]:checked").val(),
		"ingresoHos": $("#ingresoHospital input:radio[name=ingresoHospital]:checked").val(),
		"sostieneCab": $("#sostieneCabeza input:radio[name=sostieneCabeza]:checked").val(),
		"sienta": $("#seSienta input:radio[name=seSienta]:checked").val(),
		"gatea": $("#gatea input:radio[name=gatea]:checked").val(),
		"habla": $("#habla input:radio[name=habla]:checked").val(),
		"traumatismo": $("#traumatismos input:radio[name=traumatismos]:checked").val(),
		"sarampion": $("#sarampion input:radio[name=sarampion]:checked").val(),
		"rubeola": $("#rubeola input:radio[name=rubeola]:checked").val(),
		"tosferina": $("#tosferina input:radio[name=tosferina]:checked").val(),
		"varicela": $("#varicela input:radio[name=varicela]:checked").val(),
		"escarlatina": $("#escarlatina input:radio[name=escarlatina]:checked").val(),
		"amigdalitis": $("#amigdalitis input:radio[name=amigdalitis]:checked").val(),
		"parasitosis": $("#parasitoIntestinal input:radio[name=parasitoIntestinal]:checked").val(),
		"convulsiones": $("#convulsiones input:radio[name=convulsiones]:checked").val(),
		"urosepsis": $("#urosepsis input:radio[name=urosepsis]:checked").val(),
		"cirugia": $("#cirugia input:radio[name=cirugia]:checked").val(),
		"ultimaMenst": $("#ultMens").val(),
		"fechaAnti": $("#fechaAnticonceptivo input:radio[name=ingresoHospital]:checked").val(),
		"gesta": $("#gesta").val(),
		"ritmo": $("#ritmo").val(),
		"magnitudSang": $("#magSang").val(),
		"menarquia": $("#menarquia").val(),
		"aborto": $("#aborto").val(),
		"cesarea": $("#cesarea").val(),
		"vidaSex": $("#vidSexAct").val(),
		"legradoUt": $("#legradoUt").val(),
		"pruebaEnb": $("#pruebaEmb").val(),
		"citologia": $("#citologia").val(),
		"tipoAnt": $("#tipoAnticoncep").val()

	};
	$.ajax({
		type: "POST",
		url: $("#formAntecGine").attr("action"),
		data:Expediente
	}).done((e)=>{
		$("#informe").text(e.msg);
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
					window.location.href=e.url;
				}
			}
		});
	});
	console.log(Expediente);
});
var sigVit;
var formatConsulta;
var formatDiagnostico;
$(".modal.continuar .modal-footer .btn-success").click(function(){
	sigVit =
	{
		"talla": $("#talla").val(),
		"ta": $("#ta").val(),
		"peso": $("#peso").val(),
		"temperatura": $("#temperatura").val(),
		"imc": $("#imc").val(),
		"pulso": $("#pulso").val()
	};
	console.log(formAntecGine);
});

$(".modal.continuar2 .modal-footer .btn-success").click(function(){
	formatConsulta =
	{
		"deteccion": $("#deteccion").val(),
		"primeravez": $("#primAnio").val(),
		"sitomasTB": $(".formatConsulta #tb").val(),
		"nivelObesidad": $("#obesidad").val(),
		"saludReprod": $("#saludRepro").val()
	};
	console.log(formatConsulta);
});
$(".modal.continuar3 .modal-footer .btn-success").click(function(){
	formatDiagnostico =
	{
		"diagnostico": $("#diagnostico").val(),
		"programa": $("#programMotivo").val(),
		"fecha": $(".fechaDiagnostico").val()
	};
	console.log(formatDiagnostico);
});
$("#nextAntec").click(()=>{

});