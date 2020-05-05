module.exports = {
    // 动态添加路径
    publicPath: process.env.NODE_ENV === 'production'
        ? '/cart/'
        : '/',
    // : '/c'
    devServer: {
        open: true
    }
}