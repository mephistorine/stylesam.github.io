<style>code, pre{ tab-size: 2; }</style>

## Mint Документация
`container([int max_width])` - принимает один не обязательный параментр максимальная ширина контейнера. По умолчанию берется из `mint.container_max_width`

`flex-row()` - не принимает параметров, сокращение свойств `display: flex;` и `flex-wrap: wrap;`

`lg( string property_name, string value )` - принимает два параметра это `property-name` и `value`, дальше добавляет этот селектор в медиа запрос с соотвествущей точкей оставки

Анологичные функции:
- `md()`
- `sm()`
- `xs()`

`col()` - принимает на вход два парментра, это количество колонок `count` и точка остановки для медиа запросов`break` принимает одно из 4 значений ( `lg`, `md`, `sm`, `xs` )

## Mint docs

### Container function
`container([ int max_width = mint.container_max_width ])`
Sets the default properties for the container

#### Parameters
`max_width` - Maximum width of the container ( `px` )

#### Examples
```stylus
.container
	container 960px
	// or
	container(960px)
```
Yields:
```css
.container {
  max-width: 960px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
}
@media screen and (max-width: 1300px) {
  .container {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media screen and (max-width: 960px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 780px) {
  .container {
    padding-left: 2%;
    padding-right: 2%;
  }
}
@media screen and (max-width: 560px) {
  .container {
    padding-left: 1%;
    padding-right: 1%;
  }
}
```

### flex-row function
`flex-row()` - Reduction of properties `display: flex;` and `flex-wrap: wrap;`

#### Examples
```stylus
.container
	flex-row()
```
Yields:
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### Col function
`col( int count [, string break = 'all'] )` - Defines a column

#### Parameters

`count` - Column width

`break` - The breakpoint of resolution. Possible values: `lg`, `md`, `sm`, `xs`.

#### Examples
##### Example #1
```stylus
.col
  col( 2 )
  col( 2, 'lg' )
  col( 3, 'md' )
  col( 6, 'sm' )
  col( 12, 'sm' )
```
Yields:
```css
.col {
  width: calc( 16.666666666666668% - 30px );
  padding-left: 15px;
  padding-right: 15px;
}
@media screen and (max-width: 1300px) {
  .col {
    width: calc( 16.666666666666668% - 30px );
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media screen and (max-width: 960px) {
  .col {
    width: calc( 25% - 20px );
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (max-width: 780px) {
  .col {
    width: calc( 50% - 2% );
    padding-left: 1%;
    padding-right: 1%;
  }
}
@media screen and (max-width: 780px) {
  .col {
    width: calc( 100% - 2% );
    padding-left: 1%;
    padding-right: 1%;
  }
}
```

##### Example #2 - without second parameter
```stylus
.col
  col( 2 )
```
Yields:
```css
.col {
  width: calc( 16.666666666666668% - 30px );
  padding-left: 15px;
  padding-right: 15px;
}
```
##### Example #3 - with second parameter
```stylus
.col
  col( 2, 'lg' )
```
Yields:
```css
@media screen and (max-width: 1300px) {
  .col {
    width: calc( 16.666666666666668% - 30px );
    padding-left: 15px;
    padding-right: 15px;
  }
}
```
##### Example #3.1 - alternative syntax
```stylus
.col
  col 2 'lg'
```
Yields:
```css
@media screen and (max-width: 1300px) {
  .col {
    width: calc( 16.666666666666668% - 30px );
    padding-left: 15px;
    padding-right: 15px;
  }
}
```

### Breakpoint function
`lg( string property, string value )` - Adds this selector with the specified property in the media query of the corresponding breakpint

#### Parameters

`property` - Propery name

`value` - Property value

#### Examples
```stylus
.col
  lg(display, none)
```
Yields:
```css
@media screen and (max-width: 1300px) {
  .col {
    display: none;
  }
}
```