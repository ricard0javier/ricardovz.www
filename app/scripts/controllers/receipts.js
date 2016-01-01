'use strict';

/**
 * @ngdoc function
 * @name ricardoJsApp.controller:ReceiptsCtrl
 * @description
 * # ReceiptsCtrl
 * Controller of the ricardoJsApp to manage all the receipt stored on the database
 */
angular.module('ricardoJsApp')
    .controller('ReceiptsCtrl', ["$scope", "environment", "$http", "$interval", "$modal", function ($scope, environment, $http, $interval, $modal) {

        $scope.saving = false;

        $scope.alerts = [];

        $scope.orderPredicate = 'date';

        $scope.orderReverse = true;

        $scope.modalImage = '#';

        $scope.image2 = {};



        var headers = {
            authorization: "Basic dXNlcjpwYXNzd29yZA=="
        };

        $http({
            method: 'GET',
            url: "http://api.ricardovz.com:8080/users",
            headers : headers
        }).success(function(data) {
            console.log("yeah!");
            console.log(data);
            console.log("yeah!");
        }).error(function(data) {
            console.log("ouch!");
            console.log(data);
            console.log("ouch!");
        });




        var id = 0;

        initialize();

        // Initialize the form
        function initialize() {

            $scope.amount = '';
            $scope.image = '';
            $scope.saving = false;
            $scope.date = new Date();

            $http.get(environment.apiReceipts)
                .success(function (data) {

                    $scope.receipts = data;

                    $http.get(environment.apiUsers)
                        .success(function (data) {

                            $scope.userOptions = data;
                            $scope.nameSelected = $scope.userOptions[0];

                            $scope.totalReceipts = 0;

                            $scope.userOptions.forEach(function (user) {

                                user.total = user.total || 0;

                                $scope.receipts.forEach(function (receipt) {

                                    if (receipt.userId === user.id) {

                                        user.total += receipt.amount;

                                    }

                                });

                                $scope.totalReceipts += user.total;

                            });

                        });

                });


        }


        function createAlert(type, msg) {

            var alert = {};
            alert.id = ++id;
            alert.type = type;
            alert.msg = msg;

            $scope.alerts.push(alert);

            $interval(function () {
                $scope.closeAlert(alert.id);
            }, 3000, 1);
        }

        // submit the form
        $scope.submit = function () {

            $scope.saving = true;

            var receiptData = {};
            receiptData.userId = $scope.nameSelected.id;
            receiptData.amount = $scope.amount;
            receiptData.date = $scope.date;

            var data = new FormData();

            if ($scope.image2 !== undefined
                && $scope.image2.resized !== undefined
                && $scope.image2.resized.dataURL !== undefined) {


                data.append('image', $scope.image2.resized.dataURL);

            }
            data.append('receiptData', JSON.stringify(receiptData));

            $http.post(environment.apiReceipts, data, {
                headers: {'Content-Type': undefined},
                transformRequest: angular.identity
            })
                .success(function () {

                    createAlert('info', 'Data sent successfully');

                })
                .error(function () {

                    createAlert('danger', 'An error has occurred sending the data, please contact to the Administrator');


                }).then(function () {

                    initialize();

                });

        };

        // order table by field value
        $scope.orderBy = function (field) {

            // invert the order
            if (field === $scope.orderPredicate) {
                $scope.orderReverse = !$scope.orderReverse;
            }
            else {
                $scope.orderPredicate = field;
                $scope.orderReverse = false;
            }
        };

        $scope.openImage = function (receiptId) {

            $scope.modalImage = environment.apiReceipts + '/' + receiptId + '/image';


            $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    modalImage: function () {
                        return $scope.modalImage;
                    }
                }
            });

        };

        $scope.toggleDeleteConfirmation = function (receipt) {

            var showDeleteConfirmation = receipt.deleteConfirm || false;

            receipt.deleteConfirm = !showDeleteConfirmation;
        };


        $scope.closeAlert = function (id) {

            $scope.alerts.forEach(function (alert, index) {
                if (id === alert.id) {

                    $scope.alerts.splice(index, 1);

                }
            });

        };

        $scope.delete = function (receiptId) {

            var url = environment.apiReceipts + '/' + receiptId;

            $http.delete(url)
                .success(function () {

                    initialize();

                    createAlert('danger', 'Receipt deleted successfully');

                })
                .error(function () {

                    createAlert('warning', 'An error has ocurred sending the data, please contact to the Administrator');

                });
        }


    }]);
