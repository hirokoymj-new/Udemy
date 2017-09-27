# Form 

## Basic 1 
- JavaScript module
- jQuery  
- Handlebars.js
- Code: [addressbook.js](https://github.com/hirokoymj/Udemy/blob/master/Form/basic/addressbook.js)

**1. Submit Form**

```js
$('#form').submit(function(event){
    event.preventDefault();    
});
```

**2. Get form data**
```js
$('#form').serializeArray();
```


```js
[
    {name: "firstname", value: "hiroko"},
    {name: "lastname", value: "yamaji"},
    {name: "department", value: "IT"},
    {name: "hobby", value: "yoga"},
    {name: "hobby", value: "Golf"},
    {name: "hobby", value: "Tennis"}
]
```



**3. Convert formArray to JSON**

```js
var formJson = formArray.reduce(function(acc, value, index){
    var existing = acc.hasOwnProperty(value.name);
    if(existing){
        acc[value.name] = [ acc[value.name] ]; //convert string to array
        acc[value.name].push(value.value);
    }else{
        acc[value.name] = value.value;
    }
    return acc;
}, {});
//
//{firstname: "hiroko", lastname: "yamaji", department: "HR", hobby: ["yoga", "golf"]}
//
```
**4. Display form array with Handlebars**
```js
var source = $("#addressbook-template").html();
var template = Handlebars.compile(source);
var html = template(data);
$("#addressList").html(html);
```

## Form selector/event

## Selector
```js
$(id), $(class), $('[name=hobby]')
```

##Submit
```js
$('#form').serializeArray()
```

## Get a selected value(s)
- `:checked`
- `option:selected`

**selectbox**

```js
var selectedOne = $('#selectbox').val()
var multiple = $("#selectbox").val()
```

**radio button**
```js
$("#radio").val();
```

**checkbox**
```js
$("#checkbox:checked").each()
```

##Is selected?

**checkbox**
```html
<input type="checkbox" name="hobby" value="yoga" id="hobby_yoga" >
<input type="checkbox" name="hobby" value="golf" id="hobby_golf">
<input type="checkbox" name="hobby" value="tennis" id="hobby_tennis">
```

```js
$('#hobby_golf').is(":checked")
```

**radio button**

```html
<input type="radio" name="commute" value="car" id="commute_car" >
<input type="radio" name="commute" value="train" id="commute_train">
<input type="radio" name="commute" value="bus" id="commute_bus">
```

```js
$("#commute_car").is(":checked")
```

**selectbox**

```html
<select name="skills" id="skills">
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JavaScript">JavaScript</option>
</select>
```

```js
var selected = $("#skill").val();
if(selected == "css"){
    console.log("css is selected");
}
```



##Events

```text
selectbox- change()
checkbox - click
radio - click
```
```js
$('#selectbox').change(function(){})
$('#checkbox').on('click', function(){})
$("#radio").on('click', function(){})

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
```





# References:
- [jQuery Events](https://api.jquery.com/category/events/form-events/)
- [Events](https://api.jquery.com/category/events/)
- [Handlebars](http://handlebarsjs.com/)