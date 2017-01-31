module.exports = {
    name: 'StatusListController',
    func: function ($scope) {

        $scope.name = [ //do I have to use name here?  Can I use the word status?

            { name: 'Day', count: 1},
            { name: 'Money', count: 20.00},
            { name: 'Customers', count: 0},
            { name: 'Visitors', count: 0},
        ];
    },
};