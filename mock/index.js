import Mock from 'mockjs'
let R

Mock.mock(new RegExp('/commons/uuid$'), 'get', 'da416989-fe61-40ce-8f15-4dbf194466dc')
Mock.mock(new RegExp('/commons/uuidWithoutLine$'), 'get', '4a0054792dea4fd385784c843399038d')

R = {"code":"200","msg":"成功","data":{"zoneId":"Asia/Shanghai","zoneOffset":"+08:00","timestamp":1598886973932,"date":"2020-08-31","time":"23:16:13","datetime":"2020-08-31 23:16:13","dayOfWeek":1,"dayOfYear":244,"weekOfMonth":6,"weekOfYear":36}}
Mock.mock(new RegExp('/time/datetime$'), 'post', R)

R = {"code":"200","msg":"成功","data":[{"id":"1","folderName":"CDN","folderSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:55","websiteList":[{"id":"1","websteFolderId":1,"websiteName":"jsdelivr","websiteUrl":"https://www.jsdelivr.com/","websiteSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"},{"id":"2","websteFolderId":1,"websiteName":"BootCDN","websiteUrl":"https://www.bootcdn.cn/","websiteSort":2,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"}]},{"id":"2","folderName":"下载","folderSort":2,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[{"id":"3","websteFolderId":2,"websiteName":"eclipse","websiteUrl":"https://archive.eclipse.org/eclipse/downloads/","websiteSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"}]},{"id":"3","folderName":"MAVEN仓库","folderSort":3,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"4","folderName":"Linux","folderSort":4,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"5","folderName":"画图","folderSort":5,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"6","folderName":"教程","folderSort":6,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"7","folderName":"前端网站","folderSort":7,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"8","folderName":"VUE","folderSort":8,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]}]}
Mock.mock(new RegExp('/website/list??'), 'get', R)

R = {"code":"200","msg":"成功","data":{"num2":"1111111111111111","num8":"177777","num10":"65535","num16":"ffff"}}
Mock.mock(new RegExp('/converter/convertNumber($|\\?)'), 'get', R)

R = {"code":"200","msg":"成功","data":{"unicode":"U+31","utf16":"0031","utf8":"31"}}
Mock.mock(new RegExp('/converter/encodeToUnicode($|\\?)'), 'get', R)

export default Mock;
