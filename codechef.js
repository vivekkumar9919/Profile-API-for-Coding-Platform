const axios = require('axios');
const cheerio = require('cheerio');
const router =require('express').Router()



router.get('/:userID' ,async (req,res)=>{
    // const userid='vivek9919'
    const userid=req.params.userID;
    const URL = `https://www.codechef.com/users/${userid}`;
    const response = await axios.get(URL)
    .then((response)=>{
      const $ = cheerio.load(response.data);
    
      const username=$('.m-username--link').text();
      const name=$('.h2-style').text();
      const country=$('.user-country-name').text();
      const rating=$('.rating-number').text();
      const rank=$('.inline-list li a strong').map((index, element) => {
        return $(element).text();
      }).get();
      const stars=$('.rating-star span').text();
      const contest=$('.contest-participated-count b').text();
      const solved = $('.content h5').map((index, element) => {
        return $(element).text();
      }).get();
    
      const data ={
        'username':username,
        'name':name,
        'country':country,
        'rating':rating,
        'global_rank':rank[0],
        'country_rank':rank[1],
        'stars':stars,
       'no_of_contest':contest,
       'problems_solved': extractNumber(solved[0]),
  
      }
      // console.log(basic_details)
      // console.log(data);
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