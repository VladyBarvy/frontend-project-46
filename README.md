# Тесты

### Github Actions:
[![my-tests](https://github.com/VladyBarvy/frontend-project-46/actions/workflows/testing.yml/badge.svg)](https://github.com/VladyBarvy/frontend-project-46/actions/workflows/testing.yml)

### Hexlet tests:
[![Actions Status](https://github.com/VladyBarvy/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/VladyBarvy/frontend-project-46/actions)

### Code Climate:
[![Maintainability](https://api.codeclimate.com/v1/badges/e3ab236d6f8f84f302fb/maintainability)](https://codeclimate.com/github/VladyBarvy/frontend-project-46/maintainability)

### Code Climate Test Coverage:
[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/VladyBarvy/frontend-project-46/test_coverage)


# Описание
Консольное приложение "Вычислитель отличий" - утилита, определяющая разницу между двумя структурами данных, представленных в виде объектов.

Программа поддерживает файлы с расширением .json, .yaml или .yml. 
Генерация отчётов осуществляется в виде текстового сообщения, структурированного вывода или в json-формате.


# Установка
<ol>
    <li>Склонировать репозиторий</li>
    <li>Выполнить команду make install</li>
</ol>

```
git clone git@github.com:VladyBarvy/frontend-project-46.git
cd frontend-project-46
make install
```



# Применение утилиты

Вывод справки для данной утилиты осуществляется по команде "gendiff -h".

```
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version       output the version number
  -f --format <type>  output format (default: "stylish")
  -h, --help          display help for command
```

Программа умеет выводить различия в трех форматах:
* stylish (по умолчанию)
* plain
* json


Чтобы указать конкретный тип вывода данных, необходимо указать его название с флагом -f.

Например, ниже представлен вывод в плоском формате **plain** результатов вычисления отличий двух файлов:

```
gendiff -f plain file1.json file2.json

Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```



# Демонстрация

Пример работы пакета:

Сравнение двух файлов с расширением .json в формате stylish:
https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH
[![asciicast](https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH.svg)](https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH)

Сравнение двух файлов с расширением .yml в формате stylish:
https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4
[![asciicast](https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4.svg)](https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4)

Сравнение двух файлов с выводом результата в формате plain:
https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv
[![asciicast](https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv.svg)](https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv)

Сравнение двух файлов с выводом результата в формате json:
https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl
[![asciicast](https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl.svg)](https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl)
