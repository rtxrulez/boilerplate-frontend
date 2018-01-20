## Тонкое управление gulp

После выполнения команды `gulp` запускается локальный сервер с живой перезагрузкой страниц. 
При изменение исходного кода страница будет перезагружена автоматически.

Команды gulp:
- `gulp styles` - сборка всех стилей.
- `gulp js` - соединяет все скрипты
- `gulp fonts` - собирает шрифты
- `gulp templates` - собирает все pug файлы
- `gulp svg-sprite` - собирает спрайты
- `gulp images` - собирает все картинки, сжатые и не сжатые
- `gulp imagesPack` - собирает все картинки и спрайты одновременно
- `gulp copyDist` - копирование полученных стилей из `dist` в  `src/backend/web/frontend/template`.
- `gulp clear` - Удаляет содержимое папки `dist`
- `gulp server` - запускает локальный сервер
- `gulp react` - запускает копирование основных стилей в папки реакт приложений `src/frontend/components/menu/dist` и `src/frontend/components/menu/dist`


Команды npm:
- `npm start` - запускает сборку для продакшена
- `npm run dev` - запук сервера в режиме разработки
- `npm run copyDist` - копирование собранных файлов в папку `src/backend/web/frontend/template`
- `npm run clear` - удаление всего из папки `dist`

Есть возможность расщарить проект по тунелю в интернет по средствам плагина browsersync. Работает не надежно.

```bush
gulp server-tunnel
```