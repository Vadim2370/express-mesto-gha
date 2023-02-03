[![Tests](https://github.com/Vadim2370/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/Vadim2370/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/Vadim2370/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/Vadim2370/express-mesto-gha/actions/workflows/tests-14-sprint.yml)
# Бэкенд проекта Место

Взаимодействие с базой данных проекта
- регистрация, авторизация и обновление данных пользователя;
- обновление аватара пользователя;
- добавление и удаление карточек;
- "лайки" на карточках;
- получения списка пользователей и списка карточек;
- обработка ошибок и валидация форм.

### Стек

- JavaScript
- NodeJS
- Express
- MongoDB

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
