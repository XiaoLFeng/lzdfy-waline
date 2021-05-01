const Application = require('@waline/vercel');

module.exports = Waline({
  async postSave(comment) {
    // do what ever you want after save comment
  },
  avatarCDN: 'https://gravatar.loli.net/avatar/',
});


