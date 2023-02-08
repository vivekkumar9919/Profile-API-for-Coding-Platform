const axios = require('axios');
const cheerio = require('cheerio');
const bodyparser=require('body-parser');
const express =require('express');
const router =require('express').Router()



router.get('/:userID' ,async (req,res)=>{
    // const userid='varanasisk0011'
    const userid=req.params.userID;
    const URL = `https://auth.geeksforgeeks.org/user/${userid}/practice/`;
    const response = await axios.get(URL)
    .then((response)=>{
      const $ = cheerio.load(response.data);
  
      const username=$('.profile_name').text();
      const collage_rank=$('.rankNum').text();
      const basic_details=$('.basic_details_data').map((index, element) => {
        return $(element).text();
      }).get();
      const scoreCardValues = $('.score_card_value').map((index, element) => {
        return $(element).text();
      }).get();
      const questionCat = $('.tab').map((index, element) => {
        return $(element).text();
      }).get();
    
      const data ={
        'username':username,
        'collage_rank':collage_rank,
        'institute_name':basic_details[0],
        'language_used':basic_details[1],
        'overall_coding_score':scoreCardValues[0],
        'total_problems_solved':scoreCardValues[1],
        'monthly_score':scoreCardValues[2],
        'school_problems_solved':extractNumber(questionCat[0]),
        'basic_problems_solved':extractNumber(questionCat[1]),
        'easy_problems_solved':extractNumber(questionCat[2]),
        'medium_problems_solved':extractNumber(questionCat[3]),
        'hard_problems_solved':extractNumber(questionCat[4]),
    
      }
     console.log(data);
    res.json(data);
    })

    .catch((err)=>{
      res.status(400).json({data:null});
    })

});



function extractNumber(str){
let result = str.match(/\d+/);
let number = parseInt(result[0]);
return number;
}


module.exports = router;