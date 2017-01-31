module.exports = {
    name: 'StockListController',
    func: function ($scope) {

        $scope.stock = [

            { name: 'Lemons', count: 20, price: "$2.00/lemon" },
            { name: 'Sugar', count: 12, price: "$1.25/bag" },
            { name: 'Cups', count: 15, price: "$0.10/cup" },
            { name: 'Ice', count: 18, price: "$0.50/chunk" },
        ];

        // $scope.re= /^[0-9]*$, I want to add in a regex restricting input to numbers

        $scope.buy = function (what) {
            console.log(`Buying ${what.name}`);
            if (what.count > 0) {
                what.count--;
                //and subtract from total, probably needs to to setup in the Service
            }
        };
    },
};
