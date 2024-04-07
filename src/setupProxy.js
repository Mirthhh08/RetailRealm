const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://13.48.136.54:8000/api/api-code/',
            changeOrigin: true,
        })
    );
};