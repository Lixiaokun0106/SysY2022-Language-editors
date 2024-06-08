grammar SysY2022E;
// Parser
compUnit : (decl | funcDef)* EOF;

decl : constDecl | varDecl | structDecl;

constDecl : 'const' bType constDef (',' constDef)* ';' ;

bType: 'int' | 'float' | STRUCTNAME | lambdaType;

constDef : ID ('[' constExp ']')* '=' constInitVal;

constInitVal
    : constExp # scalarConstInitVal
    | '{' (constInitVal (',' constInitVal)* )? '}' # listConstInitVal
    ;

structDecl : 'struct' STRUCTNAME '{' bType varDef (',' bType varDef)* '}' ';';

lambdaType : '(' bType (',' bType)* ')' '->' bType;

varDecl : bType varDef (',' varDef)* ';';

varDef
    : ID ('[' constExp ']')* # uninitVarDef
    | ID ('[' constExp ']')* '=' initVal # initVarDef
    ;

initVal
    : exp # scalarInitVal
    | '{' (initVal (',' initVal)* )? '}' # listInitval
    ;

funcDef : funcType ID '(' (funcFParams)? ')' block;

funcType : 'void' | 'int' |'float';

funcFParams : funcFParam (',' funcFParam)*;

funcFParam : bType ID ('[' ']' ('[' constExp ']')* )?;

block : '{' (blockItem)* '}';

blockItem : decl | stmt;

stmt
    : lVal '=' exp ';' # assignment
    | (exp)? ';' # expStmt
    | block # blockStmt
    | 'if' '(' cond ')' stmt # ifStmt1
    | 'if' '(' cond ')' stmt 'else' stmt # ifStmt2
    | 'while' '(' cond ')' stmt # whileStmt
    | 'break' ';' # breakStmt
    | 'continue' ';' # continueStmt
    | 'return' (exp)? ';' # returnStmt
    ;

exp : addExp;

cond : lOrExp;

lVal : ID ('[' exp ']')* # lVal1
     | ID '.' ID # lVal2
     ;

primaryExp
    : '(' exp ')' # primaryExp1
    | lVal # primaryExp2
    | number # primaryExp3
    | lambdaExp # primaryExp4
    ;

lambdaExp : '^' '(' bType varDef (',' bType varDef)* ')' block;

number : INT_LIT | FLOAT_LIT;

unaryExp
    : primaryExp # unary1
    | ID '(' (funcRParams)? ')' # unary2
    | unaryOp unaryExp # unary3
    | unaryExp '.' ID # unary4
    ;

unaryOp : '+' | '-' | '!';

funcRParams : funcRParam (',' funcRParam)*;

funcRParam
    : exp # expAsRParam
    | STRING # stringAsRParam
    ;

mulExp
    : unaryExp # mul1
    | mulExp ('*' | '/' | '%') unaryExp # mul2
    ;

addExp
    : mulExp # add1
    | addExp ('+' | '-') mulExp # add2
    ;

relExp
    : addExp # rel1
    | relExp ('<' | '>' | '<=' | '>=') addExp # rel2
    ;
eqExp
    : relExp # eq1
    | eqExp ('==' | '!=') relExp # eq2
    ;

lAndExp
    : eqExp # lAnd1
    | lAndExp '&&' eqExp # lAnd2
    ;

lOrExp
    : lAndExp # lOr1
    | lOrExp '||' lAndExp # lOr2
    ;

constExp
    : addExp
    ;

// Lexer 

// keyword
INT : 'int';
FLOAT : 'float';
VOID : 'void';
CONST : 'const';
RETURN : 'return';
IF : 'if';
ELSE : 'else';
WHILE : 'while';
BREAK : 'break';
CONTINUE : 'continue'; 
FOR : 'for';
STRUCT : 'struct';

// delimeter
LP : '(' ;
RP : ')' ;
LB : '[' ;
RB : ']' ;
LC : '{' ;
RC : '}' ;
COMMA : ',' ;
SEMICOLON : ';';
QUESTION : '?';
COLON : ':';

// operator
MINUS : '-';
NOT : '!';
ASSIGN : '=';
ADD : '+';
MUL : '*';
DIV : '/';
MOD : '%';
AND : '&&';
OR : '||';
EQ : '==';
NEQ : '!=';
LT : '<';
LE : '<=';
GT : '>';
GE : '>=';
LAMBDA : '^';
POINT : '.';
DOT : '->';

// integer literal
INT_LIT : [0-9]+ ;

// float literal
FLOAT_LIT : [0-9]+ '.' [0-9]* EXP? | '.' [0-9]+ EXP? | [0-9]+ EXP ;

// fragment for float literal
fragment
EXP : [Ee] [+\-]? [0-9]+ ;

// identifier,规定首字母必须小写
ID : [a-z_][a-zA-Z_0-9]* ;

// struct name,规定首字母必须大写
STRUCTNAME : [A-Z_][a-zA-Z_0-9]*;

// string
STRING : '"'(ESC|.)*?'"';

// for string
fragment
ESC : '\\"'|'\\\\';

// whitespace
WS : 
    [ \t\r\n] -> skip
    ;

// comments
LINE_COMMENT : '//' .*? '\r'? '\n' -> skip;
BLOCK_COMMENT : '/*'.*?'*/'-> skip ;