const axios = require('axios');
const cheerio = require('cheerio');
const router =require('express').Router()



router.get('/:userID' ,async (req,res)=>{
    // const userid='tourist'
    const userid=req.params.userID;
    const URL = `https://codeforces.com/profile/${userid}`;
    const response = await axios.get(URL)
    .then((response)=>{
      const $ = cheerio.load(response.data);
    
      const username=$('.main-info h1 a').text();
      const level=$('.user-rank span').text();
      const rating = $('.info li:nth-child(1) span:nth-child(2)').eq(0).text();
      const highest_rating = $('.info li:nth-child(1) span:nth-child(3) span:nth-child(2)').text();
      const solved_count = $("._UserActivityFrame_counterValue").eq(0).text();
      const solved_lastyear = $("._UserActivityFrame_counterValue").eq(1).text();
      const data ={
        'username':username,
        'level':level,
        'rating':rating,
        'highest_rating':highest_rating,
       'total_problems_solved': extractNumber(solved_count),
       'total_problems_solved_lastyear': extractNumber(solved_lastyear),
  
      }
    //   console.log(solved)
    //   console.log(data);
    res.status(200).json(data);
    })
    .catch((err)=>{
       res.status(400).json({data:null});
    })
    

});



function extractNumber(str) {
    let extracted = str.match(/\d+/g);
  return extracted ? Number(extracted[0]) : NaN;
  }


module.exports = router;