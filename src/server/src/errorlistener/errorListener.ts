// 当自动构件语法树时，如果发现错误，会调用这个类的方法
// 当发现某些语句不符合语法规则时,就会记录错误信息进入errors,之后在主文件中将这些信息返回给客户端
import { ANTLRErrorListener, RecognitionException, Recognizer,DefaultErrorStrategy,Parser } from 'antlr4ts';

export class ErrorListener implements ANTLRErrorListener<any> {
	errors: string[] = [];

	syntaxError(recognizer: Recognizer<Symbol, any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
		this.errors.push(`line ${line}:${charPositionInLine} ${msg}`);
	}
}

export class MyErrorStrategy extends DefaultErrorStrategy {
    reportError(recognizer: Parser, e: RecognitionException) {
        // 不做任何事情
    }
}
