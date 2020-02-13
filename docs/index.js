import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vk-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK  Mini App
import connect from '@vkontakte/vk-connect';

// Sends event to client
connect.send('VKWebAppInit');

// Subscribes to event, sended by client
connect.subscribe(e => console.log(e));

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();



ReactDOM.render(<App />, document.getElementById('root'));
