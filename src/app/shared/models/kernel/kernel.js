"use strict";
var AlphaMetadata = (function () {
    function AlphaMetadata(color, area, description, name, states, subAlphas, workProducts) {
        this.color = color;
        this.area = area;
        this.description = description;
        this.name = name;
        this.states = states;
        this.subAlphas = subAlphas;
        this.workProducts = workProducts;
    }
    return AlphaMetadata;
}());
exports.AlphaMetadata = AlphaMetadata;
var AreaMetadata = (function () {
    function AreaMetadata(color, description, name, type) {
        this.color = color;
        this.description = description;
        this.name = name;
        this.type = type;
    }
    return AreaMetadata;
}());
exports.AreaMetadata = AreaMetadata;
var StateMetadata = (function () {
    function StateMetadata(name, id, next, back, checkList) {
        this.name = name;
        this.id = id;
        this.next = next;
        this.back = back;
        this.checkList = checkList;
    }
    return StateMetadata;
}());
exports.StateMetadata = StateMetadata;
var CheckpointMetadata = (function () {
    function CheckpointMetadata(name, description, type, code, state) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.code = code;
        this.state = state;
    }
    return CheckpointMetadata;
}());
exports.CheckpointMetadata = CheckpointMetadata;
//# sourceMappingURL=kernel.js.map