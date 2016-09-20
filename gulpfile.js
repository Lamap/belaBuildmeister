"use strict";

const gulp = require("gulp");

// --- buildmeister stuff ---

const basic = require("@solarwinds/buildmeister/templates/library-with-demo");
const runtimeScripts = [
    "./node_modules/@solarwinds/xui/dist/js/modernizr.js",
    "./node_modules/@solarwinds/xui/dist/js/vendor.js",
    "./node_modules/@solarwinds/xui/dist/js/xui.js",
    "./bower_components/i18n-gettext-tools/dist/js/i18n-gettext.js"
];
const config = basic(gulp, {
    name: "belabuildmeister",
    runtimeScripts: runtimeScripts/*,
    projects: [
        {
            name: "bela",
            root: ".",
            entry: {
                bela: [
                    ".styles.less",
                    "index.ts"
                ]
            }
        },
        {
            name: "bela-demo",
            root: "demo",
            entry: {
                bela: [
                    ".styles.less",
                    "index.ts"
                ]
            }
        }
    ]*/
});
config.features.server.port = 9999;
config.features.e2e = false;
require("@solarwinds/buildmeister").tasks(gulp, config);

// ---