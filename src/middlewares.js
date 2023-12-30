// middlewares.js
module.exports = {
  // 安裝 npm install cors
  // 使用這個中間件啟用 CORS
  after: (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  },
};
