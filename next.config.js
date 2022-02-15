require('dotenv').config()
module.exports = {
    env: {
        serviceName: 'CloudBase', //大文字小文字を区別する正式名称
        serviceNamePlain: 'cloudbase', //大文字小文字を区別しない正式名称
        serviceDomain: 'cloudbase.host', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '🎛Control and integrate individual/group projects', //サービスの説明文を入力
        serviceIcon: 'https://cloudbase.host/img/cloudbase-logo.png', //サービスのアイコンを指定するためのURL
    }
};