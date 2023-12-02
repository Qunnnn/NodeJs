const path = require('path');

const rootDir = require('../utils/root');

const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'error_page.html'));
}
)

module.exports = router;