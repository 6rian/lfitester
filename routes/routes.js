const express = require('express');
const router = express.Router();

router.post('/exploit', async (req, res, next) => {
  const LFIExploit = require('../classes/LFIExploit.js');
  const exploit = new LFIExploit();
  const validation = exploit.init(req.body);

  if (validation.hasError === true) {
    res.send({
      success: false,
      data: { ...validation }
    });
    return next();
  }

  const result = await exploit.run();
  res.send({
    success: !result.hasError,
    data: { ...result }
  });
  next();
});

module.exports = router;
