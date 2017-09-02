var addressbook = (function(){
    // private
    function addData(formdata){
        $.ajax({ //tudd
            type: "POST",
            url: "",
            data: formdata,
            dataType: 'json',
            success: function(){},
            error: function(){}
        });
    }

    // public methods
    return {
        init: function(){
            // Submit form
            $("#form").submit(function(event){
                event.preventDefault();
                var formdata = $(this).serialize();
                addData(formdata);
            });



        }
    }//

})();// end of addressbook