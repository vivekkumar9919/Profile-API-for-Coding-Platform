const axios = require('axios');
const cheerio = require('cheerio');
const router =require('express').Router()



router.get('/:userID' ,async (req,res)=>{
    // const userid='vivek9919'
    const userid=req.params.userID;
    const URL = `https://leetcode.com/${userid}`;
    const response = await axios.get(URL)
    .then((response)=>{
      const $ = cheerio.load(response.data);
      const basic_details=$('.text-xs').map((index, element) => {
        return $(element).text();
      }).get();
      const basic_details2 = $('.text-base').map((index, element) => {
        return $(element).text();
      }).get();
      const basic_details3 = $('.text-label-2').map((index, element) => {
        return $(element).text();
      }).get();
     
      const data ={
        'username':basic_details[0],
        'name':basic_details2[7],
        'rank':basic_details2[8].slice(4),
      'easy_problems_solved':extractNumber(basic_details2.reverse()[6]),
      'medium_problems_solved':extractNumber(basic_details2[5]),
      'hard_problems_solved':extractNumber(basic_details2[4]),
      'total_problems_solved':extractNumber(basic_details2[6])+extractNumber(basic_details2[5])+extractNumber(basic_details2[4]),
      // 'total_active_days':basic_details3[28],
      }
      console.log(basic_details2);
    res.json(data);
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