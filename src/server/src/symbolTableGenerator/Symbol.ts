export enum SymbolType {
    CONSTANT, //常量
    VARIABLE, //变量
    FUNCTION, //函数
    STRUCTOR //结构体
}
// name,类型,位置(行 列)
export class Symbol {
    constructor(public name: string, public type: SymbolType, public line: number, public column: number) {}
}
