const express  =  require('express');
const router  =  express.Router()
const MyControllers =  require('../Controllers/Controllers')

router.get('/' , MyControllers.getApi )
router.post('/add-user' , MyControllers.RegisterUser )


module.exports = router