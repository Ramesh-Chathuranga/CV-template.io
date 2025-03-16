$("#submit").click(function(eventData){
    var name=$("#txtName").val().trim();
    var email=$("#txtEmail").val().trim();
    var message=$("#textArea").val().trim();
    var okAlert=` <div class="alert alert-dark" role="alert">
               <a href="#" class="alert-link"> Message is sent</a>
                </div>`

    var badAlert=`<div class="alert alert-danger" role="alert">
                    <a href="#" class="alert-link">Fill Empty Fields before Send Mail or Check Your Email</a>
                    </div> `;

    var badEmailAlert=`<div class="alert alert-danger" role="alert">
                    <a href="#" class="alert-link">Check Your Email it is not valid</a>
                    </div> `;

     var messageTo=`<div>${name}<div><div>${message}<div>`;               

    if(!name){
        $('#alert').append(badAlert);
       setTimeout(function(){
          $('#alert').children().remove();
       },750);
      
    }else if(  !email ){
        $('#alert').append(badAlert);
        setTimeout(function(){
           $('#alert').children().remove();
        },750);
    }else if( !message){
        $('#alert').append(badAlert);
        setTimeout(function(){
           $('#alert').children().remove();
        },750);
    }else{
       if(IsEmail(email)){
           
        // $.ajax({
         
        //     https:"https://formspree.io/rmrcchathuranga@gmail.com",
        //     method="POST",  
        //     data:$('form').serialize(),
        //     dataType:"json"
            
        // }); 
        var j_son={"name":name,"email":email,"comment":message}
        alert(JSON.stringify(j_son))
        var ajax_config={
            method:'POST',
            url:'https://www.enformed.io/djdhtgk9/',
            async:true,
            contentType:'application/json',
            data:JSON.stringify(j_son),
           
        }
      
        
        $.ajax(ajax_config).done(function(res,stat,jxhr){

          }).fill(function(jxhr,status,err){
              alert(err)
          });



         


        $('#alert').append(okAlert);
                setTimeout(function(){
                   $('#alert').children().remove();
                },750);
        eventData.preventDefault();
       $("#txtName").val("");
       $("#txtEmail").val("");
       $("#textArea").val("");

        
       }else{
        $('#alert').append(badEmailAlert);
        setTimeout(function(){
           $('#alert').children().remove();
        },750);
       }
    }
})


function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }

