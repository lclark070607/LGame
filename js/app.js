const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/stocklist'),
    require('./controllers/statuslist'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}