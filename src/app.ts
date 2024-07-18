import abc from "./module";

interface xInterface {
    xInterfaceFunction: (param1: string) => string;
}

class xClass implements xInterface{
    xInterfaceFunction(param1: string): string {
        return param1;
    }
    sa(param1: string): string {
        return param1;
    }
}

var obj = new xClass();

console.log(obj.sa("sa"));

enum xEnum {
    sa,
    as
}

var xEnumVar = xEnum.sa;
abc();