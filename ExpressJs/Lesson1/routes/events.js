const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const events = [
    'Yoga Class - Monday 7pm',
    'Gardening Workshop - Wednesday 5pm',
    'Book Club - Friday 6pm'
  ];
  res.json(events);
});

module.exports = router;