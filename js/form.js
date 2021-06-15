function register(ruta){
   $.ajax({
      url:'php/register_product.php',
      type:'POST',
      data:ruta,
   }).done(function(res){
      if(res == true){
         Swal.fire({
            icon: 'success',
            title: 'Producto registrado',
            showConfirmButton: true,
           }).then((result)=>{
            $("#form-product")[0].reset();
           })
        }else{
         Swal.fire({
            icon: 'error',
            text: 'Nombre ya registrado',
           })
        }
   }).fail(function(){
      console.log('gg')
   }).always(function(){
    console.log('completado')
   })
}
$(document).ready(function(){
    $("#form-product").validate({
        rules:{
         txt_code:{
              required: true,
           },
        txt_name:{
              required: true,
           },
        txt_price:{
              required: true,
              number: true,
              min: 0,
           },
        txt_amount:{
              required: true,
              number: true,
              min:0 ,
           }
        },
        messages: { 
            txt_code:{
                required: 'Debes ingresar un código',
             },
             txt_name:{
                required:'Debes ingresar un nombre',
             },
             txt_price:{
                required: 'Debes ingresar el precio',
                number:'Solo puedes ingresar numeros',
                min:'Ingresa numeros enteros o decimales'
             },
             txt_amount:{
                required: 'Debes ingresar la cantida',
                min:'Ingresa numeros enteros o decimales',
                number:'Solo puedes ingresar numeros',
             }
        }
      });
});

$("#btn-save").click(function(){
    if($("#form-product").valid()===false){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revisa bien los campos',
           })
        return;
    }
    let input_code = $("#txt_code").val();
    let input_name = $("#txt_name").val();
    let input_price = $("#txt_price").val();
    let input_amount =$("#txt_amount").val();

    let ruta = `code=${input_code}&name=${input_name}&price=${input_price}&amount=${input_amount}`;
    register(ruta);
});

$("#btn-cancel").click(function(){
    $("#form-product")[0].reset();
});
