/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/api'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/api'
    }
}
export default {
    env,
    mock:false,
    namespace:'manager',
    ...EnvConfig[env]
}