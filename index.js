const Waline = require('@waline/vercel');

module.exports = Waline({
  forbiddenWords: ['习近平', '毛泽东'],
  avatarCDN: ['https://gravatar.loli.net/avatar/'],
});