# Change log of Mint CSS project
- Добавлена кастомная функция на подобие `lg`
- Добавлена функция для смены колонок `col-queue`
- Добавлена функция для автозаполнения простанства `col-auto`
- Теперь ширина колонки высчитывается не по свойству `width`, а по свойству `flex-basis`
- Добавлена обработка второго параметра функции `col`, теперь можно передавать условие для медиа запроса
- Заменина в функции `col` медиа запросы на внутренние функции
- Добавлено ко всем названиям переменных знак `$`, что бы не перепутать со свойствами `CSS`
- Заменил слово `offset` на `gutter`, что бы не было конфликтов

# Change log of Mint CSS project
- Added a custom function like `lg` and etc.
- Added the function to change the order of the columns `col-queue`
- Added the function for autofill `col-auto`
- Now uses `flex-basis` property instead of `width`
- Added processing of the second parameter in `col` function as the number for the media query condition
- Replaced `@media` queries by `lg` and etc. functions in `col` function
- Added to all variable names the `$` sign, so as not to confuse it with the `CSS`
- Replaced the word `offset` by `gutter`