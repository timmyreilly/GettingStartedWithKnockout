/// <reference path= "/scripts/knockout-3.4.0.debug.js" />

$(function () {
    var viewModel = {
        firstName: ko.observable("John")
    };

    ko.applyBindings(viewModel);
})