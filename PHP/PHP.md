# PHP basic

## 1. Create array
1. Array
2. Associative array
3. Multidimensional array
   


```php
$cars=array("Volvo","BMW","Toyota");
```

```php
$array = array(0 => 'blue', 1 => 'red', 2 => 'green', 3 => 'red');
```

```php
$array3 = array(array("firstname"=>"Hiroko"), array("firstname"=>"Daisuke"), array("firstname"=>"Grace"));
```




## 2. Find an Index

**Array**

- `array_search` returns **index number** for an Array.

```php
$array = array("red", "blue", "green");
$index = array_search('green', $array1);
echo $index;        //2
```

**Associative array**
- `array_search` returns **key** for associative array.

```php
$array = array("1"=> "red", "2"=> "blue", "3"=>"green");
$key = array_search("red", $array);
echo "key is " . $key;      //1
```

**Multi-dimentional array**
```php
$records = array(
    array(
        'id' => 2135,
        'first_name' => 'John',
        'last_name' => 'Doe',
    ),
    array(
        'id' => 3245,
        'first_name' => 'Sally',
        'last_name' => 'Smith',
    ),
    array(
        'id' => 5342,
        'first_name' => 'Jane',
        'last_name' => 'Jones',
    ),
    array(
        'id' => 5623,
        'first_name' => 'Peter',
        'last_name' => 'Doe',
    )
);

$index_records = array_search(5623, array_column($records, 'id'));
echo $index_records;        //3
```


## 3. Iterate array
**array**

```php
$a = array(1, 2, 3, 17);

foreach ($a as $v) {
    echo "$v\n";
}
```

**associative array**
```php
$a = array(
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
);

foreach($a as $k=>$v){
    echo "[$k] => $v\n";
}
```

**multi-dimentional array**
```php
$a = array();
$a[0][0] = "a";
$a[0][1] = "b";
$a[1][0] = "y";
$a[1][1] = "z";

foreach ($a as $v1) {
    foreach ($v1 as $v2) {
        echo "$v2\n";
    }
}
```

## 4. Add an element in array
- [array_push](http://php.net/manual/en/function.array-push.php)

```php
$data = array("red", "green", "blue");
array_push($data, "yellow");
```

**Result**
```php
array("red", "green", "blue", "yellow")
```

## 5. Delete an element in array
- [array_splice](https://secure.php.net/manual/en/function.array-splice.php)
```php
$data = array("red", "green", "blue");
array_splice($data, 1, 1);

```

**Result**
```php
array("red", "blue")
```

### References
- http://php.net/manual/en/function.array-search.php
- http://php.net/manual/en/function.array-column.php
- https://stackoverflow.com/questions/4128323/in-array-and-multidimensional-array
- http://php.net/manual/en/control-structures.foreach.php
- HereDoc: https://stackoverflow.com/questions/12783282/how-to-make-sql-query-more-readable-in-php