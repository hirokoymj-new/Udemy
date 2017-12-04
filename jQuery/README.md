# jQuery

**1. Get images in hero div**
- [each(index, value)](https://api.jquery.com/each/)

```js
$('.hero-slider img').each(function(){
    console.log($(this).attr('src'));
});
```

- append() - To insert content at the end of the selected elements
- prepent() - To insert content at the beginning of the selected elements.
- before() - Insert contents before an element.
- after() - Insert contents after an selected element.

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
- [Quick Selector Tester](https://www.w3schools.com/jquery/trysel.asp)

## first vs first:child
- $("ul li:first") - The first `<li>` element of ther parent.
- $("ul li:first-child") - All `<li>` elements that are the first child of their parent `<ul>`.
- [demo](https://github.com/hirokoymj/Udemy/blob/master/jQuery/p-first.html)

```html
<p>List 1:</p>
<ul>
  <li>Coffee</li>//<----- $("ul li:first"), $("ul li:first-child")
  <li>Milk</li>
  <li>Tea</li>
</ul>

<p>List 2:</p>
<ul>
  <li>Coffee</li>//<----- $("ul li:first-child")
  <li>Milk</li>
  <li>Tea</li>
</ul>
```

## $(div > p) vs $(div p)

- $(div > p) - All `<p>` elements that are a **direct child** of a `<div>` element.
- $(div p) - All `<p>` elements that are **descendants** of a `<div>` element.
- [Quick Selector Tester](https://www.w3schools.com/jquery/trysel.asp)
 

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
        <p>test</p><----$("div>p"), $("div p")  -->
        <p>test</p><----$("div>p"), $("div p")  -->
        <p>test</p><----$("div>p"), $("div p")  -->
    </span>
</div>
```

## nth-child
- [:nth-child()](https://api.jquery.com/nth-child-selector/)
- The index of each child to match, **starting with 1**

```html
<p>List 1:</p>
<ul>
    <li>Coffee</li> <----$("ul li:nth-child(1)")
    <li>Milk</li>   <----$("ul li:nth-child(2)")
    <li>Tea</li>    <----$("ul li:nth-child(3)")
</ul>

<p>List 2:</p>
<ul>
    <li>Coffee</li> <----$("ul li:nth-child(1)")
</ul>

<p>List 3:</p>
<ul>
    <li>A</li>  <----$("ul li:nth-child(1)")
    <li>B</li>  <----$("ul li:nth-child(2)")
    <li>C</li>  <----$("ul li:nth-child(3)")
    <li>D</li>
</ul>
```

## eq() selector
- [.eq(index)](https://api.jquery.com/eq/)
- An index is the **starting with 0**

```html
<p>Test</p> <----$("p:eq(0)")
<p>Test</p> <----$("p:eq(1)")
<p>Test</p> <----$("p:eq(2)")
<p>Test</p> <----$("p:eq(3)")
```


## Next Adjacent Selector ("prev + next")

- [next Adjacent Selector](http://api.jquery.com/next-adjacent-Selector/)
- ("prev + next") - Selects all next elements matching "next" that are **immediately** preceded by a sibling "prev".

```html
<ul>
    <li>list1</li>
    <li>list1</li>
</ul>
<h3>This is h3 next to unordered list ul</h3> //<----$("ul+h3")

<div>This is div</div>
<h3>This is h3 next to div</h3> //<----$("div+h3")
<h3>This is h3</h3>

<p>This is a paragraph tag</p>
<h3>This is h3 next to P</h3> //<----$("p+h3")
<h3>This is 2nd h3</h3>
<h3>This is 3rd h3</h3>
```


## Next Siblings Selector (“prev ~ siblings”)

- https://api.jquery.com/next-siblings-selector/

**Example ("ul~h3")**

```html
<ul>
    <li>list1</li>
    <li>list1</li>
</ul>
<h3>This is h3 next to unordered list ul</h3> //<----$("ul~h3")

<div>This is div</div>
<h3>This is h3 next to div</h3> //<----$("ul~h3")
<h3>This is h3</h3>             //<----$("ul~h3")

<p>This is a paragraph tag</p>
<h3>This is h3 next to P</h3> //<----$("ul~h3")
<h3>This is 2nd h3</h3>       //<----$("ul~h3")
<h3>This is 3rd h3</h3>       //<----$("ul~h3")
```

**Example ("div~h3")**
```html
<ul>
    <li>list1</li>
    <li>list1</li>
</ul>
<h3>This is h3 next to unordered list ul</h3> 

<div>This is div</div>
<h3>This is h3 next to div</h3> //<----$("div~h3")
<h3>This is h3</h3>             //<----$("div~h3")

<p>This is a paragraph tag</p>
<h3>This is h3 next to P</h3> //<----$("div~h3")
<h3>This is 2nd h3</h3>       //<----$("div~h3")
<h3>This is 3rd h3</h3>       //<----$("div~h3")
```

**Example ("p~h3")**
```html
<ul>
    <li>list1</li>
    <li>list1</li>
</ul>
<h3>This is h3 next to unordered list ul</h3> 

<div>This is div</div>
<h3>This is h3 next to div</h3> 
<h3>This is h3</h3>             

<p>This is a paragraph tag</p>
<h3>This is h3 next to P</h3> //<----$("p~h3")
<h3>This is 2nd h3</h3>       //<----$("p~h3")
<h3>This is 3rd h3</h3>       //<----$("p~h3")
```

# Form Selector