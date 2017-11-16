# jQuery

**1. Get images in hero div**
- each()

```js
$('.hero-slider img').each(function(){
    console.log($(this).attr('src'));
});
```

- append()
- prepent()
- before()
- after()
```js
$('#hero').after('<img src="//img1.beachbodyimages.com/beachbody/image/upload/v1472595736/bbweb/homepage/header_slider_slide2_1350.jpg">');
```

```html
$("p:first") - The first p element
$("p:last") - The last p element 
$("p:first-child") - All p elements that are the first child of their parents.
$("p:last-child") - All p elements that are the last child of their parents.
$('div>p') - All p elements that are a direct child of div.
$('div p) - All p elements that are descendant of div.
$("ul + h3") - h3 element next to ul
$("ul ~ table") - All tables that are sibling of ul.
$("[id=my-Address]") - All elements with id attribute is my-Address
$("[id$=ess]") - All elements with id attribuet ending with "ess".
$("[id^=L]") - All elements with id attribute starting with letter "L".
$("[title~=beautiful]") - All elements with title attribute that contains "beautiful" string.
```


### Example
**$("p:first-child")**

```html
<p>List 1:</p>
<ul>
    <li>Coffee</li> //<----$("p:first-child")
    <li>Milk</li>
    <li>Tea</li>
</ul>

<p>List 2:</p>
<ul>
    <li>Coffee</li> //<----$("p:first-child")
    <li>Milk</li>
    <li>Tea</li>
</ul>
```

**$('div>p')** - direct child from their parents
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<div>
    <p>test</p> <----$("div>p") -->
    <p>test</p> <----$("div>p") -->
    <p>test</p> <----$("div>p") -->
</div>

<div>
    <span>
        <p>test</p>
        <p>test</p>
        <p>test</p>
    </span>
</div>
```

**$('div p')** - `descendant`
```html
<div>
    <p>test</p> <----$("div p") -->
    <p>test</p> <----$("div p") -->
    <p>test</p> <----$("div p") -->
</div>
<div>
    <span>
        <p>test</p> <----$("div p") -->
        <p>test</p> <----$("div p") -->
        <p>test</p> <----$("div p") -->
    </span>
</div>
```

**$("ul ~ table")** `sibling`
```html
<ul>
    <li>test</li>
    <li>test</li>
    <li>test</li>
</ul>

<table border="1">
    <tr>
        <td>item1</td>
        <td>item1</td>
        <td>item1</td>
    </tr>
</table>
```

