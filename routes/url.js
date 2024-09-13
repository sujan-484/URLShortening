const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalaytics } = require('../controllers/url');
const router = express.Router();

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalaytics);

module.exports = router;