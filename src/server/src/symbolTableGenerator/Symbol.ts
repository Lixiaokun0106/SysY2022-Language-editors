export enum SymbolType {
    CONSTANT, //常量
    VARIABLE, //变量
    FUNCTION, //函数
    STRUCTOR //结构体
}

export class Symbol {
    constructor(public name: string, public type: SymbolType) {}
}