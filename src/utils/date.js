/**
 * 
 * @param {Number} year 当前年份
 * @param {Number} month 当前月份
 * @returns 获取当前月份的第一天
 */
export const getFirstDayOfMonth = (year, month) => {
  const d = new Date()
  d.setFullYear(year)
  d.setMonth(month - 1)
  d.setDate(1)
  return d
}

/**
 * 
 * @param {Number} year 当前年份
 * @param {Number} month 当前月份
 * @returns 获取当前月份的最后一天
 */
export const getlastDayOfLastMonth = (year, month) => {
  let d
  if (Number(month) === 12) {
    d = getFirstDayOfMonth(year + 1, 1)
  } else {
    d = getFirstDayOfMonth(year, month + 1)
  }
  return getYesterday(d)
}

/**
 * 
 * @param {Date} date 当前日期
 * @returns 返回昨天日期
 */
export const getYesterday = (date) => {
  const d = new Date(JSON.parse(JSON.stringify(date)))
  d.setTime(d.getTime() - 24 * 60 * 60 * 1000)
  return d
}

/**
 * 
 * @param {Date} date 当前日期
 * @returns 返回明天日期
 */
export const getTomorrow = (date) => {
  const d = new Date(JSON.parse(JSON.stringify(date)))
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000)
  return d
}

/**
 * 
 * @param {Number} year 当前年份
 * @param {Number} month 当前月份
 * @returns 获取当月所有日期，不足一周，则取上个月或下个月的日期补充
 */
export const getDays = (year, month) => {
  const firstDayOfMonth = getFirstDayOfMonth(year, month)
  const lastDayOfLastMonth = getlastDayOfLastMonth(year, month)
  const weekOfFirstDay = firstDayOfMonth.getDay()

  const days = []
  
  let curr = getYesterday(firstDayOfMonth)
  for (let i = 0; i < weekOfFirstDay; i++) {
    days.unshift(curr)
    curr = getYesterday(curr)
  }
  
  curr = new Date(JSON.parse(JSON.stringify(firstDayOfMonth)))
  while(curr.getMonth() === lastDayOfLastMonth.getMonth() && curr.getDate() <= lastDayOfLastMonth.getDate()) {
    days.push(curr)
    curr = getTomorrow(curr)
  }

  curr = getTomorrow(lastDayOfLastMonth)
  const remainder = days.length % 7
  if (remainder !== 0) {
    for (let i = 0, len = 7 - remainder; i < len; i++) {
      days.push(curr)
      curr = getTomorrow(curr)
    }
  }

  return days
}

/**
 * 
 * @param {Number} year 当前年份
 * @param {Number} month 当前月份
 * @returns 格式化日期数组，返回结果为数组，元素也是数组，每个元素保存一周日期
 */
export const getFormateDays = (year, month) => {
  const days = getDays(year, month)
  const result = []
  while(days.length > 0) {
    result.push(days.splice(0, 7))
  }

  return result
}