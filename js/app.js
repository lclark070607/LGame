const app = angular.module('LemonadeApp', []);

const controllers = [
    require('./controllers/stockList'),
    require('./controllers/statusList'),
    require('./controllers/buyButton'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

app.component('buyButton', {
    templateUrl: 'templates/buyButton.html',
    bindings: {
        bought: '<', 
        clickedOn: '&', 
    },
    controller: 'BuyButtonController',
});

app.component('statusList', {
    templateUrl: 'templates/statusList.html',
    inputs: "",
    bindings: {

    },
    controller: 'StatusListController'
});

app.component('stockList', {
    templateUrl: 'templates/stockList.html',
    bindings: {
        onUpdate: '&', //need to write this
    },
    controller: 'StockListController'
});
