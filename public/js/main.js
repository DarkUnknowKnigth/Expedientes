$(document).ready(()=>{
    let user=$("#u").val();//user
    let pass=$("#p").val();//pass
    let rec=$("#r").prop("checked");//remember
    config();
});
function config()
{
    $("#enviar").click((e)=>{
        $("span").text("");
        valida($("#u").val(),$("#p").val(),e);
    });
    $("#loginform").keydown((e)=>{
        if(e.keyCode==13)
        {
            $("#enviar").click();   
        }   
    });
    $("#u").keyup((e)=>{
        patern=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
        if(patern.test($("#u").val()))
        {
            $("#err-u").text("Solo numeros y letra");
        }
        else
        {
            $("#err-u").text("");
        }
    });
    $("#p").keyup((e)=>{
        patern=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
        if(patern.test($("#p").val()))
        {
            $("#err-p").text("Solo numeros y letra");
        }
        else
        {
            $("#err-p").text("");
        } 
    });
}
function valida(u,p,e) 
{  
    patern=/[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]/;
    //valida si user es un conjunto de letras y numeros y si la contraseña no contiene caracteres especiales
    if(!patern.test(u) && u!="")
    {
        if(p!="" && !patern.test(p))
        {
            $.ajax({
                //haciendo la peticion de validar usuario y contraseña
                type: "POST",
                url: "http://localhost:3000/validacion/usuario",
                data: {Usuario:u,Password:p}
            }).done((res)=>{//redireccionar a la pagina principal si el usuario existe si no a inicio
                $("#login").html(res.message);
                if(res.url)
                {
                    window.location.href=res.url;
                }
            }).fail((res)=>{ //si falla informar y recargar a inicio
                $("#status").text(res.message).css("color","red");
                window.location.href=res.url;
            }).progress(()=>{
                $("#status").text("enviando solicitud").css("color","yellow");
            });      
        }
        else
        {
            e.preventDefault();
            $("#err-p").text("No se permiten caracteres especiales");
        }
    }
    else
    {
        e.preventDefault();
        $("#err-u").text("Solo numeros y letra");
    }
}