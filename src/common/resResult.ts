/**
 * @description 返回值格式化
 */

enum StatusCode {
  success = 0,
  failure = -1,
}

class ResResult<Data = undefined> {
  private code: number;
  private message: string;
  private data?: Data;

  constructor(code: number, message: string, data?: Data) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static success<Data = undefined>(
    message: string,
    data?: Data,
  ): ResResult<Data> {
    return new ResResult<Data>(StatusCode.success, message, data);
  }

  static failure<Data = undefined>(
    message: string,
    data?: Data,
  ): ResResult<Data> {
    return new ResResult<Data>(StatusCode.failure, message, data);
  }
}

export default ResResult;
