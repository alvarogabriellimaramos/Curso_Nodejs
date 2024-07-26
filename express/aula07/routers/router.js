const router = require('express').Router();


router.get('/',(request,response) => {
    return response.send('Rota principal');
});

module.exports = router;