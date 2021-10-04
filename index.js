const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: ['习近平', '毛泽东','礼品购买','代发','价格实惠','物流','快递','专业网站','买单号'],
});
