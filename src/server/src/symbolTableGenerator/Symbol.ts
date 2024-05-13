export enum SymbolType {
    CONSTANT,
    VARIABLE,
    FUNCTION
}

export class Symbol {
    constructor(public name: string, public type: SymbolType) {}
}