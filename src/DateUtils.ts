class DateUtils {
    static formatDate(dateTimeString: string|number, formatString: string):void {
      // 处理字符串类型的日期时间
      console.log(`Formatting string date: ${dateTimeString} with format: ${formatString}`);
    }
  }
  
  // 使用示例：
  DateUtils.formatDate('2022-01-15', 'YYYY-MM-DD'); // 输出：Formatting string date: 2022-01-15 with format: YYYY-MM-DD
  DateUtils.formatDate(1642742400000, 'YYYY-MM-DD'); // 输出：Formatting number date: 1642742400000 with format: YYYY-MM-DD
  