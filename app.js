/**
 * Created by monix on 3/3/2018.
 */
(function() {

    angular.
    module('ShoppingListCheckOff', []).
    controller("ToBuyShoppingController", ToBuyShoppingController).
    controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController).
    service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuy.message = "Everything is bought!";
        toBuy.buy = function (item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
        alreadyBought.message = "Nothing bought yet";
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var CATALOG = [{
            name: 'Cookies',
            quantity: 3
        }, {
            name: 'chocolate cookies',
            quantity: 5
        }, {
            name: 'Ice cream',
            quantity: 2
        }, {
            name: 'Cereal',
            quantity: 5
        }, {
            name: 'Coffee',
            quantity: 2
        }];

        var itemsToBuy = CATALOG;
        var itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        service.buyItem = function (item) {
            var index = itemsToBuy.indexOf(item);
            if (index !== -1) {
                // Removes the item from itemsToBuy
                itemsToBuy.splice(index, 1);

                // Adds the item to itemsBought
                itemsBought.push(item);
            }
        };
    }

})();