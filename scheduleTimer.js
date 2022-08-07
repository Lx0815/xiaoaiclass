async function scheduleTimer() {
  return {
    totalWeek: 20, // 总周数：[1, 30]之间的整数
    startSemester: new Date().getTime().toString(), // 开学时间：时间戳，13位长度字符串，推荐用代码生成
    startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
    showWeekend: false, // 是否显示周末
    forenoon: 4, // 上午课程节数：[1, 10]之间的整数
    afternoon: 4, // 下午课程节数：[0, 10]之间的整数
    night: 2, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
        section: 1,
        startTime: "08:30",
        endTime: "09:10"
      },
      {
        section: 2,
        startTime: "09:15",
        endTime: "09:55"
      },
      {
        section: 3,
        startTime: "10:15",
        endTime: "10:55"
      },
      {
        section: 4,
        startTime: "11:00",
        endTime: "11:40"
      },
      {
        section: 5,
        startTime: "13:40",
        endTime: "14:20"
      },
      {
        section: 6,
        startTime: "14:25",
        endTime: "15:05"
      },
      {
        section: 7,
        startTime: "15:15",
        endTime: "15:55"
      },
      {
        section: 8,
        startTime: "16:00",
        endTime: "16:40"
      },
      {
        section: 9,
        startTime: "19:00",
        endTime: "19:40"
      },
      {
        section: 10,
        startTime: "19:45",
        endTime: "20:25"
      }
    ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  }
  // PS: 夏令时什么的还是让用户在夏令时的时候重新导入一遍吧，在这个函数里边适配吧！奥里给！————不愿意透露姓名的嘤某人
}