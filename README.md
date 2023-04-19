# Тесты
[![my-tests](https://github.com/VladyBarvy/frontend-project-46/actions/workflows/testing.yml/badge.svg)](https://github.com/VladyBarvy/frontend-project-46/actions/workflows/testing.yml)

[![Actions Status](https://github.com/VladyBarvy/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/VladyBarvy/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/e3ab236d6f8f84f302fb/maintainability)](https://codeclimate.com/github/VladyBarvy/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/4b558dec7ce816334c44/test_coverage)](https://codeclimate.com/github/VladyBarvy/frontend-project-46/test_coverage)


# Описание
Консольное приложение "Вычислитель отличий" - утилита, определяющая разницу между двумя структурами данных.

Программа поддерживает файлы с расширением .json, .yaml или .yml. 
Генерация отчётов осуществляется в виде текстового сообщения, структурированного вывода или в json-формате.


# Установка
<ol>
    <li>Склонировать репозиторий</li>
    <li>Выполнить команду make install</li>
</ol>

```
git clone https://github.com/VladyBarvy/frontend-project-46.git
cd frontend-project-46/
make install
```



# Применение утилиты

```
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version       output the version number
  -f --format <type>  output format (default: "stylish")
  -h, --help          display help for command
```




# Демонстрация

Пример работы пакета:

Сравнение двух файлов с расширением .json:
https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH
[![asciicast](https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH.svg)](https://asciinema.org/a/t94ZksWdlHxGk9QWsQz6BTvgH)

Сравнение двух файлов с расширением .yml:
https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4
[![asciicast](https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4.svg)](https://asciinema.org/a/5r50XDQPvrwoRllRud2egbMb4)

Сравнение двух файлов с выводом результата в формате plain:
https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv
[![asciicast](https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv.svg)](https://asciinema.org/a/L6Uxi3zJHujAG05Lw2qI5VEDv)

Сравнение двух файлов с выводом результата в формате json:
https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl
[![asciicast](https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl.svg)](https://asciinema.org/a/IFY7ii2s8y1Q1NKuF2Ytojhxl)
