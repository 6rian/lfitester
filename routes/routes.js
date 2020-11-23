const express = require('express');
const router = express.Router();

router.post('/exploit', async (req, res, next) => {
  const LFIExploit = require('../modules/LFIExploit.js');
  const validation = LFIExploit.init(req.body);

  if (validation.hasError === true) {
    res.send({
      success: false,
      data: { ...validation }
    });
    return next();
  }

  const payload = { success: true, data: {} };
  res.send(payload);
});

module.exports = router;
