# Form

## JavaScript Module

- Module - Creating public and private area. Also a module name is namespace.
- return {} object
```js
var addressbook = (function(){
    return {} 
})();
```

## Ajax
**"tudd"** - type, url, data, dataType
```js
$.ajax({}) 
```

```js
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

})();
```

## Submit

```js
$("#form").submit(function(event){
    event.preventDefault();
    var formdata = $(this).serialize();
    addData(formdata);
});
```

## Selectbox
- Get a selected value.
```js
$("#garden").on('change', function(){
    var selected = $(this).val();
    $('#myText').val(selected);
})
```

## HTML
```html
<script src="jquery.min.js"></script>
<script src="addressbook.js"></script>
<script>
    $(document).ready(function () {
        addressbook.init();
    });
</script>
```

# References:
- [jQuery Events](https://api.jquery.com/category/events/form-events/)
- [Events](https://api.jquery.com/category/events/)