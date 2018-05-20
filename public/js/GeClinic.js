

/*Precargar elementos*/

$(document).ready(function(){
	insertarAnios();
	insertarEnfermedades(enfermedades);
	$("#failUser").css("display","none");
});

/*end precargar elementos*/



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

$("#antec").click(function(){
	darColorTD("#antec");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idAntec">Clave de antecedentes:</label><input type="text" id="idAntec" name="idAntec"></div><div class="groupForm"><label for="parentesco">Parentesco:</label><select id="parentesco" name="parentesco"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="HA">HA:</label><select id="HA" name="HA"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="diabetes">Diabetes:</label><select id="diabetes" name="diabetes"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="cancer">Cáncer:</label><select id="cancer" name="cancer"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="TB">TB:</label><select id="TB" name="TB"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="sida">SIDA:</label><select id="sida" name="sida"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="otros">Otros:</label><textarea name="otros" id="otros" placeholder="Especifique..."></textarea></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formAntec").css("display","block");
});

$("#fi").click(function(){
	darColorTD("#fi");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idFicha">Clave de identificación:</label><input type="text" id="idFicha" name="idFicha"></div><div class="groupForm"><label for="divorciado">Divorciado:</label><select id="divorciado" name="divorciado"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="casado">Casado:</label><select id="casado" name="casado"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="unionLibre">Unión libre:</label><select id="unionLibre" name="unionLibre"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="soltero">Soltero:</label><select id="soltero" name="soltero"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="separado">Separado:</label><select id="separado" name="separado"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="viudo">Viudo:</label><select id="viudo" name="viudo"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="sinOcupacion">Sin ocupación:</label><select id="sinOcupacion" name="sinOcupacion"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="estudia">Estudia:</label><select id="estudia" name="estudia"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="laboresHogar">Labores de hogar:</label><select id="laboresHogar" name="laboresHogar"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="trabaja">Trabaja:</label><select id="trabaja" name="trabaja"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="jubilado">Jubilado:</label><select id="jubilado" name="jubilado"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="padreSoltero">Padre soltero:</label><select id="padreSoltero" name="padreSoltero"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formFichIde").css("display","block");
});
$("#an").click(function(){
	darColorTD("#an");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idApnp">Clave APNP:</label><input type="text" id="idApnp" name="idApnp"></div><div class="groupForm"><label for="tabaco">Tabaco:</label><select id="tabaco" name="tabaco"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="dieta">Dieta:</label><select id="dieta" name="dieta"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="alcohol">Alcohol:</label><select id="alcohol" name="alcohol"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="vivienda">Vivienda:</label><select id="vivienda" name="vivienda"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="fauna">Fauna:</label><select id="fauna" name="fauna"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="promiscuidad">Promiscuidad:</label><select id="promiscuidad" name="promiscuidad"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="hacimiento">Hacimiento:</label><select id="hacimiento" name="hacimiento"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formAPNP").css("display","block");
});
$("#in").click(function(){
	darColorTD("#in");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idInmu">Clave de inmunizaciones:</label><input type="text" id="idInmu" name="idInmu"></div><div class="groupForm"><label for="sabin">SABIN:</label><select id="sabin" name="sabin"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="dpt">DPT:</label><select id="dpt" name="dpt"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="bcg">BCG:</label><select id="bcg" name="bcg"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="antisarampion">Antisarampión:</label><select id="antisarampion" name="antisarampion"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formInmu").css("display","block");
});
$("#ap").click(function(){
	darColorTD("#ap");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idApp">APP:</label><input type="text" id="idApp" name="idApp"></div><div class="groupForm"><label for="sonrie">Sonríe:</label><select id="sonrie" name="sonrie"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="sostieneCabeza">Sostiene su cabeza:</label><select id="sostieneCabeza" name="sostieneCabeza"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="seSienta">Se sienta:</label><select id="seSienta" name="seSienta"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="gatea">Gatea:</label><select id="gatea" name="gatea"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="habla">Habla:</label><select id="habla" name="habla"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="sarampion">Sarampión:</label><select id="sarampion" name="sarampion"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="rubeola">Rubeola:</label><select id="rubeola" name="rubeola"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="tosferina">Tosferina:</label><select id="tosferina" name="tosferina"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="varicela">Varicela:</label><select id="varicela" name="varicela"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="escarlatina">Escarlatina:</label><select id="escarlatina" name="escarlatina"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="amigdalitis">Amigdalitis:</label><select id="amigdalitis" name="amigdalitis"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="parasitoIntestinal">Parásito intestinal:</label><select id="parasitoIntestinal" name="parasitoIntestinal"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="convulsiones">Convulsiones:</label><select id="convulsiones" name="convulsiones"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="urosepsis">Urosepsis:</label><select id="urosepsis" name="urosepsis"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="traumatismos">Traumatismos:</label><select id="traumatismos" name="traumatismos"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="ingresoHospital">Ingreso a hospital:</label><input type="date" id="ingresoHospital" name="ingresoHospital"></div><div class="groupForm"><label for="cirugia">Cirugía:</label><select id="cirugia" name="cirugia"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formAPP").css("display","block");
});
$("#anGi").click(function(){
	darColorTD("#anGi");
	$(".putForm form").css("display","none");
	// $(".putForm").append(`<form id="formAntec" action=""><div class="groupForm"><label for="idGine">Clave Ginecoobstétricos:</label><input type="text" id="idGine" name="idGine"></div><div class="groupForm"><label for="menarquia">Menarquía:</label><select id="menarquia" name="menarquia"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="ritmo">Ritmo:</label><input type="text" id="ritmo" name="ritmo"></div><div class="groupForm"><label for="magSang">Magnitud sanguínea:</label><input type="text" id="magSang" name="magSang"></div><div class="groupForm"><label for="vidSexAct">Vida sexual activa:</label><select id="vidSexAct" name="vidSexAct"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="ultMens">Última menstruación:</label><input type="date" id="ultMens" name="ultMens"></div><div class="groupForm"><label for="gesta">Gesta:</label><input type="text" id="gesta" name="gesta"></div><div class="groupForm"><label for="aborto">Aborto:</label><select id="aborto" name="aborto"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="cesarea">Cesarea:</label><select id="cesarea" name="cesarea"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="legradoUt">Legrado uterino:</label><select id="legradoUt" name="legradoUt"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="pruebaEmb">Prueba embarazo:</label><select id="pruebaEmb" name="pruebaEmb"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="citologia">Citología:</label><select id="citologia" name="citologia"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div class="groupForm"><label for="fechaAnticonceptivo">Fecha anticonceptivo:</label><input type="date" id="fechaAnticonceptivo" name="fechaAnticonceptivo"></div><div class="groupForm"><label for="tipoAnticoncep">Tipo anticonceptivo:</label><select id="tipoAnticoncep" name="tipoAnticoncep"><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="fiat">Fiat</option><option value="audi">Audi</option></select></div><div style="clear:both;"></div><button class="btn btn-success" type="submit">Guardar</button></form>`);
	$("#formAntecGine").css("display","block");
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

$(".modifUser .edit").click(function(){
	$(".modifUser").css("display","none");
	$(".createUser").css("display","block");
    texto = $(".createUser p").text();
	texto = texto.replace("CREAR", "MODIFICAR");
	$(".createUser p").text(texto);
});

/*end eventos de modificación de usuario*/

$(".actions button").click(function(){
	$(this).css("opacity","0");
	$(".sigVit").css("display","block");
	$(".circle1").css("background-color","#88d392");
	
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

function insertarEnfermedades(arrayEnfer){
	arrayEnfer.forEach(element => {
		$(".formatConsulta #deteccion").append("<option value='"+element.value+"'>"+element.nombre+"</option>");
	});
}


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
			console.log(r);
			$("#results").html(r);
		});
	}
	else
	{
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
		console.log(r);
		$("#failUser").css("display","block");
		$("#failUser").text("<p>"+r+"</p>");
	}).fail((r)=>{
		console.log(r);
		$("#failUser").css("display","block");
		$("#failUser").append("<p>"+r+"</p>");
	});;
});

$(".delete").click((event)=>{
	// console.log(event.currentTarget.value);
	// $("#usuElim").text(event.currentTarget.value);
	var nombre = $(".delete").parent().child().child().text();
	$("#usuElim").text(nombre);
});