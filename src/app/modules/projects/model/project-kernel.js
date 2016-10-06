"use strict";
var Dimension = (function () {
    function Dimension(info) {
        this.info = info;
        this.currentState = null;
        this.history = [];
        this.states = [];
    }
    Dimension.prototype.setCurrentState = function (state) {
        this.currentState = state;
    };
    Dimension.prototype.getName = function () {
        return this.info.name;
    };
    Dimension.prototype.getType = function () {
        return this.info.area.type;
    };
    Dimension.prototype.getStates = function () {
        return this.info.states;
    };
    Dimension.prototype.fulfiledThisState = function (state) {
        if (this.states.length != 0) {
            return this.states.find(function (stat) { return stat.info === state; }) ? true : false;
        }
        else {
            return false;
        }
    };
    return Dimension;
}());
exports.Dimension = Dimension;
var State = (function () {
    function State(code, info, checkpoint) {
        this.code = code;
        this.info = info;
        this.checkpoint = checkpoint;
    }
    return State;
}());
exports.State = State;
//# sourceMappingURL=project-kernel.js.map