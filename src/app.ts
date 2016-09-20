/// <reference path="ref.d.ts" />

import * as angular from "angular";

angular.module(
    "xui.services",
    [
        "ngCookies",
        "ngRoute",
        "ngSanitize",
        "pascalprecht.translate",
        "restangular",
        "ui.router",
        "angular-promise-cache"
    ]);

angular.module(
    "xui.components",
    [
        "ngMessages",
        "ngAnimate",
        "ui.bootstrap",
        "ui.indeterminate",
        "ngAria"
    ]);

angular.module(
    "xui.filters",
    [
        "angular.filter"
    ]);

angular.module(
    "xui.providers",
    []);

angular.module(
    "xui",
    [
        "xui.services",
        "xui.components",
        "xui.filters",
        "xui.providers"
    ]);
