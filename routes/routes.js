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

  const result = await LFIExploit.run();
  res.send({
    success: !result.hasError,
    data: { ...result }
  });
  next();
});

module.exports = router;
