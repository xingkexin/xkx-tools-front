import Mock from 'mockjs'
let R

Mock.mock(new RegExp('/commons/uuid$'), 'get', 'da416989-fe61-40ce-8f15-4dbf194466dc')
Mock.mock(new RegExp('/commons/uuidWithoutLine$'), 'get', '4a0054792dea4fd385784c843399038d')

R = {"code":"200","msg":"成功","data":[{"id":"1","folderName":"CDN","folderSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:55","websiteList":[{"id":"1","websteFolderId":1,"websiteName":"jsdelivr","websiteUrl":"https://www.jsdelivr.com/","websiteSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"},{"id":"2","websteFolderId":1,"websiteName":"BootCDN","websiteUrl":"https://www.bootcdn.cn/","websiteSort":2,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"}]},{"id":"2","folderName":"下载","folderSort":2,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[{"id":"3","websteFolderId":2,"websiteName":"eclipse","websiteUrl":"https://archive.eclipse.org/eclipse/downloads/","websiteSort":1,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53"}]},{"id":"3","folderName":"MAVEN仓库","folderSort":3,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"4","folderName":"Linux","folderSort":4,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"5","folderName":"画图","folderSort":5,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"6","folderName":"教程","folderSort":6,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"7","folderName":"前端网站","folderSort":7,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]},{"id":"8","folderName":"VUE","folderSort":8,"createTime":"2020-06-26 13:48:53","updateTime":"2020-06-26 13:48:53","websiteList":[]}]}
Mock.mock(new RegExp('/website/list??'), 'get', R)

export default Mock;
