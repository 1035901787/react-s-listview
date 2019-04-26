module.exports = {
  host: '0.0.0.0',
  port: 8099,
  https: false,
  open: true,
  proxy: {
    '/app': {
      target: 'https://beta.dlm.ed58.net/',
      changeOrigin: true,
      secure: false,
    }
  }
};