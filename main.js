require.config({
    baseUrl: 'src',
    paths: {
        "doc-ready":            "bower_components/doc-ready",
        "eventEmitter":         "bower_components/eventEmitter",
        "imagesloaded":         "bower_components/imagesloaded/imagesloaded",
        "eventie":              "bower_components/eventie",
        "get-size":             "bower_components/get-size",
        "get-style-property":   "bower_components/get-style-property",
        "jquery":               "bower_components/jquery/jquery",
        "logging":              "bower_components/logging/src/logging",
        "masonry":              "bower_components/masonry/masonry",
        "matches-selector":     "bower_components/matches-selector",
        "outlayer":             "bower_components/outlayer",
        "pat-compat":           "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":       "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":           "bower_components/patternslib/src/core/logger",
        "pat-parser":           "bower_components/patternslib/src/core/parser",
        "pat-registry":         "bower_components/patternslib/src/core/registry",
        "pat-utils":            "bower_components/patternslib/src/core/utils",
        "patterns":             "bower_components/patternslib/bundle"
    },

    "shim": {
        "logging": { "exports": "logging" },
    }
});

require(["pat-registry", "pat-masonry"], function(registry, upload) {
    window.patterns = registry;
    // workaround this MSIE bug :
    // https://dev.plone.org/plone/ticket/10894
    if ($.browser.msie) {
        $("#settings").remove();
    }
    window.Browser = {};
    window.Browser.onUploadComplete = function () {};
    registry.init();
    return;
});

