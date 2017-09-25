# Form 

## Method 1 (without Ajax)
- JavaScript module
- jQuery  
- Handlebars.js
- Code: [addressbook.js](https://github.com/hirokoymj/Udemy/blob/master/Form/method1/addressbook.js)

**1. Submit Form**

```js
$('#form').submit(function(event){
    event.preventDefault();    
});
```

**2. Get form data**
```js
$('#form').serializeArray();
//[{name: firstname, value: Hiroko}, {name: lastname, value: Yamaji}]
```
**3. Convert formArray to JSON**

```js
var formJson = formArray.reduce(function(acc, value, index){
    acc[value.name] = value.value;
    return acc;
}, {});
//
```
**4. Display form array with Handlebars**
```js
var source = $("#addressbook-template").html();
var template = Handlebars.compile(source);
var html = template(data);
$("#addressList").html(html);
```


# Method 2 - jQuery Ajax+PHP

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
- [Handlebars](http://handlebarsjs.com/)