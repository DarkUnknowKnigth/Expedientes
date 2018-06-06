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
	$('#EXPEDIENTES_TABLE').DataTable({
		"decimal":        "",
		"emptyTable":     "No hay datos disponibles en la tabla",
		"info":           "Showing _START_ to _END_ of _TOTAL_ entries",
		"infoEmpty":      "Showing 0 to 0 of 0 entries",
		"infoFiltered":   "(filtered from _MAX_ total entries)",
		"infoPostFix":    "",
		"thousands":      ",",
		"lengthMenu":     "Show _MENU_ entries",
		"loadingRecords": "Cargando...",
		"processing":     "Procesando...",
		"search":         "Buscador local:",
		"zeroRecords":    "No se encontraron registros",
		"paginate": {
			"first":      "Primero",
			"last":       "Ultimo",
			"next":       "Siguiente",
			"previous":   "Anteriro"
		},
		"aria": {
			"sortAscending":  ": activate to sort column ascending",
			"sortDescending": ": activate to sort column descending"
		}
	});
	$("#TABLE_USER").DataTable({
		"decimal":        "",
		"emptyTable":     "No hay datos disponibles en la tabla",
		"info":           "Showing _START_ to _END_ of _TOTAL_ entries",
		"infoEmpty":      "Showing 0 to 0 of 0 entries",
		"infoFiltered":   "(filtered from _MAX_ total entries)",
		"infoPostFix":    "",
		"thousands":      ",",
		"lengthMenu":     "Show _MENU_ entries",
		"loadingRecords": "Cargando...",
		"processing":     "Procesando...",
		"search":         "Buscador local:",
		"zeroRecords":    "No se encontraron registros",
		"paginate": {
			"first":      "Primero",
			"last":       "Ultimo",
			"next":       "Siguiente",
			"previous":   "Anteriro"
		},
		"aria": {
			"sortAscending":  ": activate to sort column ascending",
			"sortDescending": ": activate to sort column descending"
		}
	});
	localResource=$("#results").html();
	insertarAnios();
	insertarEnfermedades(enfermedades);
	insertarEstadoCivil(estadosCiviles);
	$("#failUser").css("display","none");
	$("#parentRest").text(dec);
});

/*end precargar elementos*/
$("#SearchUsr").click((r)=>{
	$.ajax({
		type: "POST",
		url: $("#buscadorUser").attr('name'),
		data:{tipo:$("#tipoBusquedaUsr").val(),campo:$("#buscadorUser").val()}
	}).done((e)=>{
		$("#resUser").html(e);
	});
});
$("#SearchExp").click((r)=>{
	$.ajax({
		type: "POST",
		url: $("#buscadorExp").attr('name'),
		data:{tipo:$("#tipoBusquedaExp").val(),query:$("#buscadorExp").val()}
	}).done((e)=>{
		$("#informe").html(e);
		$("#dialog-message").dialog({
			modal: true,
			width:1200,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
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

$("#initExp").click(function () {

	$antec = false;
	$fi = false;
	$an = false;
	$in = false;
	$ap = false;
	$anGi = false;
	if ($fi == false) {
		darColorTD("#fi");
		$(".putForm form").css("display", "none");
		$("#formFichIde").css("display", "block");
		$(".continuarExp .btn-success").click(function (e) {//guardar ficha identificacion
			$fi = true;
			$("#fi").css("background-color", "#6CDE71");
			darColorTD("#antec");///////////////
			$(".putForm form").css("display", "none");
			$("#formAntec").css("display", "block");
			$(".continuarExp .btn-success").click(function (e) {
				if (formAntec.length > 1) {
					console.log(formAntec)
					$("#parentRest").css("color", "red");
					$antec = true;
					$("#antec").css("background-color", "#6CDE71");
					darColorTD("#an");
					$(".putForm form").css("display", "none");
					$("#formAPNP").css("display", "block");
					$(".continuarExp .btn-success").click(function () {
						$an = true;
						$("#an").css("background-color", "#6CDE71");
						darColorTD("#in");
						$(".putForm form").css("display", "none");
						$("#formInmu").css("display", "block");
						$(".continuarExp .btn-success").click(function () {
							$in = true;
							$("#in").css("background-color", "#6CDE71");
							darColorTD("#ap");
							$(".putForm form").css("display", "none");
							$("#formAPP").css("display", "block");
							$(".continuarExp .btn-success").click(function () {
								$ap = true;
								$("#ap").css("background-color", "#6CDE71");
								darColorTD("#anGi");
								$(".putForm form").css("display", "none");
								if (formFichIde.sexo == "Mujer") {
									$("#formAntecGine").css("display", "block");
								}
								else {
									$("#formAntecGine button").click();
								}
								$(".continuarExp .btn-success").click(function () {
									$anGi = true;
									$("#fi,#antec,#an,#in,#ap,#anGi").css("background-color", "#2F789F");
									$(".statusTable td").removeClass("active");
									$(".statusTable td").css("color", "#fff");
									$(".putForm form").css("display", "none");
									$("#firstForm").css("display", "block");
								});
							});
						});
					});
				}
				else
				{
					e.preventDefault();
					$("#informe").text("Se necesitan 2 antecedentes para continuar");
					$("#dialog-message").dialog({
						modal: true,
						buttons: {
							Ok: function (){
								$(this).dialog("close");
							}
						}
					});
				}
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

$(".modifExp .edit").click(function(e){
	// $(".modifExp").css("display","none");
	// $(".createExp").css("display","block");
	// var texto = $(".createExp p").text();
	// texto = texto.replace("CREAR", "MODIFICAR");
	// $(".createExp p").text(texto);
	$.ajax({
		type: "POST",
		url: e.target.value,
		data:{id:e.target.name}
	}).done((res)=>{
		console.log(res);

	});
});

/*end eventos de modificación de expediente*/

/*Eventos de modificación de usuario*/

$(".modifUser .edit").click(function(e){
   $.ajax({
	   type: "GET",
	   url: e.target.name,
	   success: function (response) {
		   console.log(response);
	   }
   });
});
$(".modifUser .toggleUser").click((e)=>{
	$.ajax({
		type: "PUT",
		url: e.target.value,
		success: function (response) {
			console.log(response.msg);	
			$("#informe").text(response.msg);
			$("#dialog-message").dialog({
				modal: true,
				width: 200,
				heigth: 200,
				buttons: 
				{
					Ok: function () {
						$(this).dialog("close");
						if(response.url)
						{
							window.location.href=response.url;
						}
					}
				}
			});
		}
	});
});
var consulta={
	id_exp:"",
	Talla:"",
	Peso:"",
	IMC:"",
	Pulso:"",
	TA:"",
	Temp:"",
	deteccion:"",
	primeravez:false,
	sitomasTB:false,
	nivelObesidad:"",
	saludReprod:"",
	diagnostico:"",
	programa:"",
	fecha:"",
	doc:""
};
/*end eventos de modificación de usuario*/
/*Apartado de consultas */
$("#buscarEXP").click(function(e){
	if ($("#buscarExpCurp").val() != "") 
	{
		$.ajax({
			type: "POST",
			url: e.target.value,
			data: {curp:$("#buscarExpCurp").val()},
			success: function (r) {
				$(".resultExpCurp").html(r.msg);
				$(".resultExpCurp").css("display","block");
				$("#informe").text('Porfavor seleccione el expediente y presione "iniciar Consulta" para continuar');
				$("#dialog-message").dialog({
					modal: true,
					buttons: {
						Aceptar: function () 
						{
							$(this).dialog("close");
						}
					}
				});
			}
		});
	}
	else{
		$("#informe").text("Usted no ha ingresado el CURP");
		$("#dialog-message").dialog({
			modal: true,
			width: 200,
			heigth: 200,
			buttons: 
			{
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
		e.preventDefault();
	}
});
// $("#selectExp").click((e)=>{
// 	console.log("click: "+e.target.value);
// 	$(".resultExpCurp").css("display","none");
// 	consulta.id_exp=e.target.value;
// });
$("#iniciar_consulta").click((e)=>{
	
});
/* apartado de consultas */
$(".actions button").click(function(e){
	if(consulta.id_exp=="")
	{
		$("#informe").text("Parece que no ha seleccionado un expediente, Porfavor busque el expediente y seleccionelo para continuar");
		$("#dialog-message").dialog({
			modal: true,
			width: 400,
			heigth: 200,
			buttons: 
			{
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
		e.preventDefault();
	}
	else
	{
		if($(".resultExpCurp").css("display") == "block") 
		{
			$("#buscarExpPorCurp").css("display","none");
			$(".resultExpCurp").css("display","none");
			$(this).css("opacity","0");
			$(".sigVit").css("display","block");
			$(".circle1").css("background-color","#88d392");
		}
		else{
			alert("Debe buscar la CURP del paciente");
		}
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
		$(".circle1,.circle2,.circle3").css("background-color","transparent");
		$(".consultaViewer form")[0].reset();
		$("#buscarExpPorCurp").css("display","block");
	}
	else{
		alert("Falta rellenar algunos campos");
	}
});
// 
$("#generarHojaDiaria").click((e)=>{
	$.ajax({
		type: "POST",
		url: e.target.value,
		data: { fecha: $("#fechaHoja").val() },
		success: function (r) {
			//console.log(r);
			$("#informe").html(r);
			$("#dialog-message").dialog({
				modal: true,
				width: 1000,
				heigth: 500,
				buttons:{
					Ok: function () {
						$(this).dialog("close");
					}
				}
			});
		}
	});
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
						{nombre:"Diabetes Mellitus", value: "Diabetes Mellitus"},
						{nombre:"Hipertensión arterial", value: "Hipertensión arterial"},
						{nombre:"Obesidad", value: "Obesidad"},
						{nombre:"Dislipidemias", value: "Dislipidemias"},
						{nombre:"Depresión", value: "Depresion"},
						{nombre:"Alteración de memoria", value: "Alteración de memoria"},
						{nombre:"Síntomas respiratorios", value: "Síntomas respiratorios"},
						{nombre:"Alcoholismo", value: "Alcoholismo"},
						{nombre:"Tabaquismo", value: "Tabaquismo"},
						{nombre:"Fármacos", value: "Farmacos"},
						{nombre:"Incontinencia urinaria", value: "Incontinencia urinaria"},
						{nombre:"VIH", value: "VIH"},
						{nombre:"Gonorrea", value: "Gonorrea"},
						{nombre:"ITS", value: "ITS"},
						{nombre:"Sífilis", value: "Sifilis"},
						{nombre:"Otros", value:"Otros"}
					];

					var estadosCiviles = [
		{nombre:"Soltero(a)", value: "Soltero"},
		{nombre:"Casado(a)", value: "Casado"},
		{nombre:"Madre (p) soltero", value: "Madre(p) Soltero"},
		{nombre:"Viudo(a)", value: "Viudo"},
		{nombre:"Divorciado(a)", value: "Divorciado(a)"},
		{nombre:"Unión libre", value: "Union Libre"},
		{nombre:"Separado", value: "Separado"}
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
// $("#buscadorUser").keyup((e)=>{
// 	if(/[A-Za-z]/.test($("#buscadorUser").val()))
// 	{
// 		$.ajax({
// 			method:"POST",
// 			url: $("#buscadorUsuarios").attr('action'),
// 			data:{
// 				valor:$("#buscadorUser").val()
// 			}
// 		}).done((r)=>{
// 			$("#results").html(r);
// 		});
// 	}
// 	else
// 	{
// 		console.log("No permitido");
// 		e.preventDefault();
// 	}
	
// });

//Envio de datos al servidor 
$("#nuevaEstadistica").click((e)=>{
	$.ajax({
		type: "POST",
		url: e.target.value,
		data: {"campoBusqueda":$("#estadi").val()}
	}).done((r)=>{
		if(r.e)
		{
			console.log(r);
			$("#informe").html('<div id="piechart" style="width: 900px; height: 500px;"></div>');
			google.charts.load('current', { 'packages': ['corechart'] });
			google.charts.setOnLoadCallback(drawChart);
			function drawChart() {
				var data = google.visualization.arrayToDataTable([
					['Poblacion', 'Detecciones'],
					['Hombres', r.h],
					['Mujeres', r.m],
					['Sin Padecimiento', r.t],
				]);
				var options = {
					title: "Estadistica de " + r.e
				};
				var chart = new google.visualization.PieChart(document.getElementById('piechart'));
				chart.draw(data, options);
			}
			$("#dialog-message").dialog({
				modal: true,
				width: 900,
				heigth: 900,
				buttons: {
					Ok: function () {
						$(this).dialog("close");
					}
				}
			});
		}
		else
		{
			$("#informe").text(r);
			$("#dialog-message").dialog({
				modal: true,
				width: 200,
				heigth: 200,
				buttons: {
					Ok: function () {
						$(this).dialog("close");
					}
				}
			});
		}
		
	}).fail((r)=>{
		console.log("fallo");
		console.log(r);
	});
});

$(".toggleUser").click((e)=>{
	
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
	if(!/\s/.test(u.val()))
	{
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
		});
	}
	else
	{
		e.preventDefault();
		$("#informe").text("No se permiten espacios \n en el nombre de usuario");
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
	}
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
			width: 1200,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
	});
});
$(".modifExp .delete").click((e)=>{
	$("#informe").text("Esta apunto de eliminar el expedeinte: "+e.target.value);
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				eliminar: function () 
				{
					$.ajax({
						type: "delete",
						url: e.target.name,
					}).done((r)=>{
						$("#informe").text(r.msg);
						$("#dialog-message").dialog({
							modal: true,
							buttons: {
								Ok: function () {
									$(this).dialog("close");
									window.location.href=r.url;
								},
								cancelar:()=>{
									$(this).dialog("close");
								}
							}
						});
					});
					$(this).dialog("close");
				}
			}
		});
	
});
$(".tablaResultados .delete").click((e) => {
	$("#informe").text("Esta a punto de eliminar al usuario: " + e.target.value);
	$("#dialog-message").dialog({
		modal: true,
		buttons: {
			Ok: function () {
				$.ajax({
					type: "delete",
					url: e.target.name,
				}).done((r) => {
					$("#informe").text(r.msg);
					$("#dialog-message").dialog({
						modal: true,
						buttons: {
							Ok: function () {
								$(this).dialog("close");
								window.location.href = r.url;
							},
							cancelar:()=>{
								$(this).dialog("close");
							}
						}
					});
				});
				$(this).dialog("close");
			}
		}
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
// $("#buscarExpCurp").keyup((k)=>{
// 	let type=$("#tipoBusquedaExp").val();
// 	let value=$("#buscarExpCurp").val();
// });

$("#agregar").click(function(e){
	dec--;
	if(!/[{$´'+}]/.test($("#otros").val()))
	{
		if(dec>=0)
		{
			formAntec.push({
				"parentesco": $("#parentesco").val(),
				"HA": $("#Ha input:radio[name=Ha]:checked").val(),//este solo es uno debes verificar cual esta avtivo
				"cancer": $("#cancer input:radio[name=cancer]:checked").val(),//este solo es uno debes verificar cual esta avtivo
				"sida": $("#sida input:radio[name=sida]:checked").val(),//este solo es uno debes verificar cual esta avtivo
				"diabetes": $("#diabetes input:radio[name=diabetes]:checked").val(),//este solo es uno debes verificar cual esta avtivo
				"TB": $("#tb input:radio[name=TB]:checked").val(),//este solo es uno debes verificar cual esta avtivo
				"otro": $("#otros").val()
			});
			$("#parentRest").css("color", "green").text(dec);
			$("#informe").text("Se agrego correctamente");
			$("#dialog-message").dialog({
				modal: true,
				buttons: {
					Ok: function () {
						$(this).dialog("close");
					}
				}
			});
		}
		else
		{
			$("#agregar").attr("disable",true);
		}
	}
	else{
		e.preventDefault();
		$("#informe").text("Los campos solo permiten caracteres alfanumericos");
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});

	}
});

$("#formFichIde button").click(function(e){
	if(/[a-zA-ZZ0-9.,]/.test($("#direccion").val()+$("#curp").val()) && /[a-zA-Z]/.test($("#idNombrePaciente").val()+$("#idApPat").val()+$("#idApMat").val()))
	{
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
	}
	else
	{
		e.preventDefault();
		$("#informe").text("Los campos deben poseer solo caracteres alfanumericos, \n\n porfavor intentelo de nuevo.");
		$("#dialog-message").dialog({
			modal: true,
			buttons: {
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
	}
	
	
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
		"tipoAnt": $("#tipoAnticoncep").val(),
		"creacion": new Date()
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

$(".modal.continuar .modal-footer .btn-success").click(function(){
	
	consulta.Talla=$("#talla").val();
	consulta.TA=$("#ta1").val()+"/"+$("#ta1").val();
	consulta.Peso=$("#peso").val();
	consulta.Temp=$("#temperatura").val();
	consulta.IMC= $("#imc").val();
	consulta.Pulso=$("#pulso").val();
});

$(".modal.continuar2 .modal-footer .btn-success").click(function(){
	
	consulta.deteccion=$("#deteccion").val();
	consulta.primeravez=$("#primAnio").prop('checked');
	consulta.sintomasTB=$("#tb").prop('checked');
	consulta.nivelObesidad=$("#obesidad").val();
	consulta.saludReprod=$("#saludRepro").val();
});
$(".modal.continuar3 .modal-footer .btn-success").click(function(e){

	consulta.diagnostico=$("#diagnostico").val();
	consulta.programa=$("#programMotivo").val();
	var ff=new Date();
	consulta.fecha=ff.getFullYear+"-"+ff.getMonth+"-"+ff.getDay;
	consulta.doc=$("#ID_USER").text().trim();
	console.log(consulta);
	$.ajax({
		type: "POST",
		url: e.target.value,
		data: consulta,
		success: function (r) {
			$("#informe").html(r.msg);
			$("#dialog-message").dialog({
			modal: true,
			width: 200,
			heigth: 200,
			buttons: 
			{
				Ok: function () {
					$(this).dialog("close");
				}
			}
		});
			
		}
	});

});
$("#nextAntec").click(()=>{

});

///campos seguros
