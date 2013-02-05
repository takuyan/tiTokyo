function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.container = A$(Ti.UI.createView({
        layout: "vertical",
        opacity: 0,
        id: "container"
    }), "View", null);
    $.addTopLevelView($.__views.container);
    $.__views.title = A$(Ti.UI.createLabel({
        top: "20dp",
        bottom: "20dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "- VENUE -",
        id: "title"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.title);
    $.__views.__alloyId8 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "14dp"
        },
        textid: "venue_description0",
        id: "__alloyId8"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId8);
    $.__views.__alloyId9 = A$(Ti.UI.createLabel({
        right: "10dp",
        bottom: "10dp",
        left: "10dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#383838",
        shadowColor: "#fff",
        shadowOffset: {
            x: 0,
            y: 1
        },
        font: {
            fontSize: "14dp"
        },
        textid: "venue_description1",
        id: "__alloyId9"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.__alloyId9);
    var __alloyId10 = [];
    $.__views.annotation = A$(Ti.Map.createAnnotation({
        latitude: 35.662331,
        longitude: 139.728733,
        animate: !0,
        id: "annotation",
        titleid: "venue_annotation_title",
        subtitleid: "venue_annotation_subtitle"
    }), "Annotation", null);
    __alloyId10.push($.__views.annotation);
    $.__views.map = A$(Ti.Map.createView({
        region: {
            latitude: 35.662331,
            latitudeDelta: 0.001,
            longitude: 139.728733,
            longitudeDelta: 0.001
        },
        animate: !0,
        regionFit: !0,
        userLocation: !0,
        annotations: __alloyId10,
        ns: Ti.Map,
        id: "map"
    }), "View", $.__views.container);
    $.__views.container.add($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.map.selectAnnotation($.annotation);
    $.on("venue:focus", function() {});
    $.on("venue:blur", function() {});
    $.on("venue:layout", function() {
        $.container.applyProperties({
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;