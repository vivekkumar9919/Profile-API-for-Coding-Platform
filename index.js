
const express=require('express');
const bodyparser=require('body-parser');

//import platform
const gfg=require('./geeksforgeeks');
const leetcode=require('./leetcode');
const codechef=require('./codechef');
const codeforces=require('./codeforces');

const app =express();
app.use(express.json());
app.use(bodyparser.json());


app.use('/geeksforgeeks',gfg);
app.use('/leetcode',leetcode);
app.use('/codechef',codechef);
app.use('/codeforces',codeforces);




app.listen(3000,()=>{
    console.log("server is connected");
})


