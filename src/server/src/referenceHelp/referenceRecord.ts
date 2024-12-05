// 为了显示引用而建立一个辅助表

export interface ReferenceRecord {
	name: string;
	// 引用的位置
	line: number;
	column: number;
	// 引用的文件
	//uri: string;
	// 引用的内容,上下文
	content: string;
}

