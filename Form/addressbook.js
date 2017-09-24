"use strict";

var addressbook = (function(){
    var data = {
        addressbook: []
    };

    function saveAddress(formArray){

        // var returnArray = {};
        // for (var i = 0; i < formArray.length; i++){
        //     returnArray[formArray[i]['name']] = formArray[i]['value'];
        // }
        // console.log(returnArray);

        var formJson = formArray.reduce(function(acc, value, index){
            acc[value.name] = value.value;
            return acc;
        }, {});
        data.addressbook.push(formJson);
        displayData(data.addressbook);
    }

    function displayData(){
        var source = $("#addressbook-template").html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $("#addressList").html(html);
    }





    // public methods
    return {
        init: function(){
            // Submit form
            $("#addressForm").submit(function(event){
                event.preventDefault();
                var formData = $(this).serializeArray(); //[{name: firstname, value: Hiroko}, {name: lastname, value: Yamaji}]
                saveAddress(formData);
            });
        }
    }//

})();// end of addressbook