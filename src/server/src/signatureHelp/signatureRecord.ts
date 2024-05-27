// 记录函数签名帮助的信息的数据结构
export interface SignatureRecord {
  // 函数签名的参数
  parameters: string[];
  // 函数签名的返回值
  returnType: string;
  // 函数签名的描述
  documentation: string;
}