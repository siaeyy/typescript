"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("./module"));
class xClass {
    xInterfaceFunction(param1) {
        return param1;
    }
    sa(param1) {
        return param1;
    }
}
var obj = new xClass();
console.log(obj.sa("sa"));
var xEnum;
(function (xEnum) {
    xEnum[xEnum["sa"] = 0] = "sa";
    xEnum[xEnum["as"] = 1] = "as";
})(xEnum || (xEnum = {}));
var xEnumVar = xEnum.sa;
(0, module_1.default)();
