async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {

  alert('即将开始导入，若导入失败\n' +
      '  请联系 QQ: 1507410636 || wechat: xinzhizhu0_0，\n' +
      '感谢您的使用~~')

  return dom.getElementById('Frame1').contentWindow.document.getElementById('timetable').innerHTML

}


export function log(message) {
  console.log('\n' + message)
}