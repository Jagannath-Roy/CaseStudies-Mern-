const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
const contactDetails = {
    email:"jagaroy10@gmail.com",
    phnno : 8689870367
  }

  res.json(contactDetails);

});

module.exports = router;