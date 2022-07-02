# [Mesto-auth](https://mesto-auth.abrosimov.site)
**[ Base URL: mesto-auth.abrosimov.site ]**

## Инструменты:

**REACT, JS, GIT, CSS, HTML, NGINX, UBUNTU.**

## О проекте

*Mesto-auth* является обновленной и переписанной на библиотеку React работой [Mesto](https://github.com/v1ktorbro/mesto). В приложении доступен функционал из предыдущего проекта. В текущей версии добавлена следующая функциональность:

* Регистрация;
* Авторизация;
* Приватность страницы (возможность попасть на страницу галереи только после аунтефикации юзера);
* Бэкэнд, [подробнее](https://github.com/v1ktorbro/api-mesto-auth).

Перед просмотром контента страницы, гостю необходимо пройти регистрацию. *

**Если пользователь ранее авторизовался, то на крайнем посещении в localStorage был записан JWT и дополнительных действий от юзера не потребуется.*

Удалить возможно только свои ранее созданные картинки.


## Хостинг

Проект расположен на VPS. ОС: ubuntu, веб-сервер: nginx.

Посмотреть страницу можно по домену [mesto-auth.abrosimov.site](https://mesto-auth.abrosimov.site). 

## Бэкэнд

Сохранение карточек, запрос бд, регистрация, авторизация и аунтификация пользователей происходит на своем бэкэнде,  [подробнее](https://github.com/v1ktorbro/api-mesto-auth).
