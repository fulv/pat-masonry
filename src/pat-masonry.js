
var masonry = {
    name: "masonry",
    trigger: ".pat-masonry",

    init: function mypattern_init($el) {
        $el.addClass("i-am-a-header");
    }
};

window.patterns.register(masonry);
