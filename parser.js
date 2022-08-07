// 为了有语法提示
// 提交前需要删除这段
// const cheerio = require('cheerio')
const contentHTML =
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-1-1" class="kbcontent1" style="display: none;">大学英语C<br><font title="周次(节次)">1-5,7-15(周)</font><br><font title="教室">潘安湖教3楼-302</font><br></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-1-2" style="" class="kbcontent">大学英语C<br><font title="教师">罗宇希706</font><br><font title="周次(节次)">1-5,7-15(周)[01-02节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-302</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231927</font><br><font name="xsks" color="black" style="display:none;">(讲课:48)<br></font></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-1-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-2-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-2-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-2-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-3-1" class="kbcontent1" style="display: none;">概率论与数理统计<br><font title="周次(节次)">3-5,7-9(周)</font><br><font title="教室">潘安湖教3楼-226</font><br></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-3-2" style="" class="kbcontent">概率论与数理统计<br><font title="教师">周媛媛副教授</font><br><font title="周次(节次)">3-5,7-9(周)[01-02节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-226</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231930</font><br><font name="xsks" color="black" style="display:none;">(讲课:48)<br></font></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-3-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-4-1" class="kbcontent1" style="display: none;">大学英语C<br><font title="周次(节次)">3,5,7,9,11,13,15(周)</font><br><font title="教室">潘安湖教3楼-302</font><br></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-4-2" style="" class="kbcontent">大学英语C<br><font title="教师">罗宇希706</font><br><font title="周次(节次)">3,5,7,9,11,13,15(周)[01-02节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-302</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231927</font><br><font name="xsks" color="black" style="display:none;">(讲课:48)<br></font></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-4-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-5-1" class="kbcontent1" style="display: none;">数据库系统原理<br><font title="周次(节次)">13-15(周)</font><br><font title="教室">潘安湖教3楼-403</font><br></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-5-2" style="" class="kbcontent">数据库系统原理<br><font title="教师">刘天琪706</font><br><font title="周次(节次)">13-15(周)[01-02节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-403</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231933</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-5-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-6-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-6-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-6-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-7-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-7-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="348E6D3F5DE34E8281B781A0BD03695D-7-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-1-1" class="kbcontent1" style="display: none;">概率论与数理统计<br><font title="周次(节次)">3-5,7-15(周)</font><br><font title="教室">潘安湖教3楼-226</font><br></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-1-2" style="" class="kbcontent">概率论与数理统计<br><font title="教师">周媛媛副教授</font><br><font title="周次(节次)">3-5,7-15(周)[03-04-05节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-226</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231930</font><br><font name="xsks" color="black" style="display:none;">(讲课:48)<br></font></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-1-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-2-1" class="kbcontent1" style="display: none;">Python程序设计<br><font title="周次(节次)">3-14(周)</font><br><font title="教室">潘安湖教3楼-405</font><br></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-2-2" style="" class="kbcontent">Python程序设计<br><font title="教师">戴宏玲082</font><br><font title="周次(节次)">3-14(周)[03-04节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-405</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231936</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-2-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-3-1" class="kbcontent1" style="display: none;">数据库系统原理<br><font title="周次(节次)">3-15(周)</font><br><font title="教室">潘安湖教3楼-402</font><br></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-3-2" style="" class="kbcontent">数据库系统原理<br><font title="教师">刘天琪706</font><br><font title="周次(节次)">3-15(周)[04-05节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-402</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231933</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-3-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-4-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-4-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-4-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-5-1" class="kbcontent1" style="display: none;">Python程序设计<br><font title="周次(节次)">3-14(周)</font><br><font title="教室">潘安湖双创楼305</font><br></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-5-2" style="" class="kbcontent">Python程序设计<br><font title="教师">戴宏玲082</font><br><font title="周次(节次)">3-14(周)[03-04节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼305</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231936</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-5-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-6-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-6-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-6-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-7-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-7-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="9958F6D473A54407B30561EF4D656A0C-7-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-1-1" class="kbcontent1" style="display: none;">数据结构与算法（Java）<br><font title="周次(节次)">3-13(周)</font><br><font title="教室">潘安湖教3楼-410</font><br></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-1-2" style="" class="kbcontent">数据结构与算法（Java）<br><font title="教师">孟宣彤706</font><br><font title="周次(节次)">3-13(周)[06-07节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-410</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231939</font><br><font name="xsks" color="black" style="display:none;">(讲课:48,实践:6,实验:26)<br></font></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-1-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-2-1" class="kbcontent1" style="display: none;">数据结构与算法（Java）<br><font title="周次(节次)">3-15(周)</font><br><font title="教室">潘安湖教3楼-410</font><br></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-2-2" style="" class="kbcontent">数据结构与算法（Java）<br><font title="教师">孟宣彤706</font><br><font title="周次(节次)">3-15(周)[06-07节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-410</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231939</font><br><font name="xsks" color="black" style="display:none;">(讲课:48,实践:6,实验:26)<br></font></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-2-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-3-1" class="kbcontent1" style="display: none;">数据库系统原理<br><font title="周次(节次)">3-15(周)</font><br><font title="教室">潘安湖双创楼308</font><br></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-3-2" style="" class="kbcontent">数据库系统原理<br><font title="教师">刘天琪706</font><br><font title="周次(节次)">3-15(周)[06-07节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼308</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231933</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-3-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-4-1" class="kbcontent1" style="display: none;">大学英语C<br><font title="周次(节次)">4-6(周)</font><br><font title="教室">潘安湖教3楼-302</font><br></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-4-2" style="" class="kbcontent">大学英语C<br><font title="教师">罗宇希706</font><br><font title="周次(节次)">4-6(周)[06-07节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-302</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231927</font><br><font name="xsks" color="black" style="display:none;">(讲课:48)<br></font></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-4-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-5-1" class="kbcontent1" style="display: none;">数据库系统原理<br><font title="周次(节次)">13-15(周)</font><br><font title="教室">潘安湖双创楼308</font><br></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-5-2" style="" class="kbcontent">数据库系统原理<br><font title="教师">刘天琪706</font><br><font title="周次(节次)">13-15(周)[06-07节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼308</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231933</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-5-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-6-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-6-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-6-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-7-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-7-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="9FA5087424F34492BA86E270A3AEBF9A-7-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-1-1" class="kbcontent1" style="display: none;">体育C<br>(10809太极)<br><font title="周次(节次)">1-16(周)</font><br></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-1-2" style="" class="kbcontent">体育C<br>(10809太极)<br><font title="教师">毕司铭副教授</font><br><font title="周次(节次)">1-16(周)[08-09节]</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：2022202311449</font><br><font name="xsks" color="black" style="display:none;">(讲课:32)<br></font></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-1-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-2-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-2-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-2-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-3-1" class="kbcontent1" style="display: none;">Python程序设计<br><font title="周次(节次)">4,6,8,10(周)</font><br><font title="教室">潘安湖双创楼307</font><br>----------------------<br>数据结构与算法（Java）<br><font title="周次(节次)">13-15(周)</font><br><font title="教室">潘安湖双创楼307</font><br>----------------------<br>Python程序设计<br><font title="周次(节次)">3,5,7,9(周)</font><br><font title="教室">潘安湖教3楼-405</font><br></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-3-2" style="" class="kbcontent">Python程序设计<br><font title="教师">戴宏玲082</font><br><font title="周次(节次)">4,6,8,10(周)[08-09节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼307</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231936</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实验:32)<br></font>---------------------<br>数据结构与算法（Java）<br><font title="教师">孟宣彤706</font><br><font title="周次(节次)">13-15(周)[08-09节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼307</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231939</font><br><font name="xsks" color="black" style="display:none;">((讲课:32,实验:32),讲课:48,实践:6,实验:26)<br></font>---------------------<br>Python程序设计<br><font title="教师">戴宏玲082</font><br><font title="周次(节次)">3,5,7,9(周)[08-09节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教三楼】</font><font title="教室">潘安湖教3楼-405</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231936</font><br><font name="xsks" color="black" style="display:none;">(((讲课:32,实验:32),讲课:48,实践:6,实验:26),讲课:32,实验:32)<br></font></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-3-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-4-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-4-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-4-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-5-1" class="kbcontent1" style="display: none;">数据结构与算法（Java）<br><font title="周次(节次)">3-15(周)</font><br><font title="教室">潘安湖双创楼307</font><br></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-5-2" style="" class="kbcontent">数据结构与算法（Java）<br><font title="教师">孟宣彤706</font><br><font title="周次(节次)">3-15(周)[08-09节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖双创楼】</font><font title="教室">潘安湖双创楼307</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231939</font><br><font name="xsks" color="black" style="display:none;">(讲课:48,实践:6,实验:26)<br></font></div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-5-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-6-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-6-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-6-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-7-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-7-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="268E7634ACD24C6FB306BA8DB8763601-7-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-1-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-1-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-1-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-2-1" class="kbcontent1" style="display: none;">形势与政策ⅠC<br><font title="周次(节次)">7-10(周)</font><br><font title="教室">潘安湖教2-南101</font><br></div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-2-2" style="" class="kbcontent">形势与政策ⅠC<br><font title="教师">朱俊海082</font><br><font title="周次(节次)">7-10(周)[10-11节]</font><br><font title="教学楼" name="jxlmc" style="display:none;">【潘安湖教二楼】</font><font title="教室">潘安湖教2-南101</font><br><font name="tzdbh" style="display:none;" title="通知单编号">通知单编号：202220231920</font><br><font name="xsks" color="black" style="display:none;">(讲课:8)<br></font></div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-2-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-3-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-3-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-3-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-4-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-4-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-4-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-5-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-5-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-5-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-6-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-6-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-6-4" style="display:none;" class="kbcontent"></div>\n' +
  
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-7-1" class="kbcontent1" style="display: none;">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-7-2" style="" class="kbcontent">&nbsp;</div>\n' +
  '                    <div id="31CE2C22CF304CA388BDEB118B912C2C-7-4" style="display:none;" class="kbcontent"></div>\n';


const cheerio = require('cheerio')
// import {log} from "./provider"

function setClassNum(num, oneClass) {
  switch (num) {
    case 1:
      oneClass.sections = [1, 2]
      break
    case 2:
      oneClass.sections = [3, 4]
      break
    case 3:
      oneClass.sections = [5, 6]
      break
    case 4:
      oneClass.sections = [7, 8]
      break
    case 5:
      oneClass.sections = [9, 10]
      break
    case 6:
      oneClass.sections = [11, 12]
      break
    default:
      oneClass.sections = []
  }
}


function scheduleHtmlParser(html) {
  
  
  
  //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://juejin.im/post/5ea131f76fb9a03c8122d6b9
  let result = []
  let $ = cheerio.load(html, {
    decodeEntities: false
  })
  try {
    
    let $divs = $('div')
    let day = 1
    let num = 1
    
    for (let i = 1; i < $divs.length; i += 3) {
      let item = $divs[i].children;
      let oneClass = {}
      
      if (item.length === 1) {
        oneClass.name = '无'
        oneClass.day = day
        oneClass.position = ''
        oneClass.weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        oneClass.teacher = ''
        setClassNum(num, oneClass)
  
        if (++day > 7) {
          day = 1
          ++num
        }
        result.push(oneClass)
        continue
      }
      
      for (let j = 0; j < item.length; j++) {
        let it = item[j]
        
        if (it.type === 'text') {
          if (it.data === '---------------------') {
            setClassNum(num, oneClass)
            oneClass.day = day
            result.push(oneClass)
            oneClass = {}
            continue
          }
          
          oneClass.name = it.data.trim()
        } else if (it.type === 'tag') {
          
          if (it.name === 'br') {
            continue
          }
          
          let title = it.attribs.title
          if (title === '周次(节次)') {
            let weeksStr = it.children[0].data.toString().trim()
            
            if (weeksStr.match(/\d\d-\d\d节/)) {
              weeksStr = weeksStr.substring(0, weeksStr.indexOf('['))
            }
            if (weeksStr.match(/(周)/)) {
              weeksStr = weeksStr.substring(0, weeksStr.indexOf('('))
            }
            
            let weeks = []
            // ,
            if (weeksStr.includes(',')) {
              let w = weeksStr.split(',')
              
              for (let k = 0; k < w.length; k++) {
                // -
                if (w[k].includes('-')) {
                  let m0 = w[k].split('-')
                  for (let l = m0[0] - 0; l <= m0[1] - 0; l++) {
                    weeks.push(l)
                  }
                  continue
                }
                // ! -
                weeks.push(w[k])
              }
            } else if (weeksStr.includes('-')) {
              let m = weeksStr.split('-')
              for (let l = m[0] - 0; l <= m[1] - 0; l++) {
                weeks.push(l)
              }
            } else {
              weeks = weeksStr.split('(周)').subarray(0, 1)
            }
            oneClass.weeks = weeks
            continue
          } else if (title === '教师') {
            let teacher = it.children[0].data.toString().trim();
            if (teacher.match(/\d/)) {
              
              teacher = teacher.replace(/\d+/g, '')
            }
            oneClass.teacher = teacher
            continue
          } else if (title === '教室') {
            oneClass.position = it.children[0].data.toString().trim()
          }
          
          if (j === item.length - 1) {
            
            oneClass.day = day
            setClassNum(num, oneClass)
            if (++day > 7) {
              day = 1
              ++num
              
            }
          }
        }
      }
      // alert('\noneClass : ' + JSON.stringify(oneClass))
      result.push(oneClass)
    }
    
    // alert('result.length : ' + result.length)
    console.log(result)
    return result
  } catch (error) {
    return [
      {
        name: error.toString().substring(0, 50),
        teacher: error.toString().substring(51, 100),
        weeks: [1],
        position: error.toString().substring(101, 150),
        day: 1,
        sections: [1, 2]
      }
    ]
  }
  
}

console.log(scheduleHtmlParser(contentHTML))