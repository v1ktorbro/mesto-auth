# [Место Russia auth](https://v1ktorbro.students.nomoreparties.co/)

## Используемый стэк :

**React.js, CSS3, API fetch, БЭМ nested**

## Бэкэнд
Все fetch запросы отправляются на поддомен https://api.v1ktorbro.students.nomoreparties.co
Ознакомиться с бэкэндом можно [тут](https://github.com/v1ktorbro/react-mesto-api-full)

## О проеке

Проект ["Mesto Russia auth"](https://v1ktorbro.students.nomoreparties.co/) есть прототип проекта ["React Mesto Russia"](https://v1ktorbro.github.io/mesto-react/index.html), главное отличие которого является - авторизация и регистрация посетителей сайта.

В приложении есть возможность поменять информацю о пользователе, изменить аватар, разместить свою любимую карточку, а так же удалить ее.

Шапка сайта при разрешении <400px реализована в стиле "бургер меню"

### Структура проекта

        blocks/     | CSS для бллоков. Проект оформлен по структуре БЭМ nested;
        components/ | компоненты страницы;
        contexts/   | контексты с информацией о текущем пользователе и текущими карточками;
        fonts/      | шрифт Inter;
        images/     | svg изображения размещенные на странице;
        utils/      | находятся нужные переменные, которые отделены от основного кода;
        vendor/     | normalize.css;
        auth.js     | в файле находятся fetch запросы авторизации, регистрации и аунтификации юзера;
        index.css   | import всех блоков в единый файл.


### Авторы

* **Яндекс.Практикум** *гуру и наставник* - [Yandex.Practikum](https://praktikum.yandex.ru);

* **Виктор Абросимов** *писарь* - [linkedin](https://www.linkedin.com/in/victor-abrosimov-631b6b1a4/).
