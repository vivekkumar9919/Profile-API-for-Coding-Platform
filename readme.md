
# Profile API for Coding Platform
This API typically provides a set of RESTful endpoints that developers can interact with to retrieve their coding profile information of geeksforgeeks, leetcode, codechef, and codeforces

The purpose of this API is to provide a simple and convenient way for users to manage their profiles on these coding platforms and showcase their coding skills and achievements to others. This can be particularly useful for individuals who are looking to showcase their abilities to potential employers or to build their online coding presence.

 ## Coding Platforms supported:
 - codeforces<br>
 - codechef<br>
 - leetcode<br>
 - geeksforgeeks


## Features
User can fetch profile info like 
- rating, ranking, rating history
- solutions, problems solved by user

## Base URL
```https://coding-platform-profile-api.onrender.com/<platform>/<username>/```<br>
    This will return user data in json format.



### **Example**

#### Example request for geeksforgeeks :
```https://coding-platform-profile-api.onrender.com/geeksforgeeks/varanasisk0011```<br>
    *[https://coding-platform-profile-api.onrender.com/geeksforgeeks/varanasisk0011](https://coding-platform-profile-api.onrender.com/geeksforgeeks/varanasisk0011)*

#### Response Data :
```json
{
"username": "varanasisk0011",
"collage_rank": "3",
"institute_name": "Feroze Gandhi Institute of Engineering and Technology (FGIET) Rae Bareli ",
"language_used": "C++, Javascript, Python",
"overall_coding_score": "1205",
"total_problems_solved": "421",
"monthly_score": "32",
"school_problems_solved": 8,
"basic_problems_solved": 52,
"easy_problems_solved": 181,
"medium_problems_solved": 157,
"hard_problems_solved": 23
}

```
#### Example request for leetcode :
```https://coding-platform-profile-api.onrender.com/leetcode/vivek9919```<br>
    *[https://coding-platform-profile-api.onrender.com/leetcode/vivek9919](https://coding-platform-profile-api.onrender.com/leetcode/vivek9919)*

#### Response Data :
```json
{
"username": "vivek9919",
"name": "Vivek Kumar",
"rank": "242,965",
"easy_problems_solved": 146,
"medium_problems_solved": 73,
"hard_problems_solved": 8,
"total_problems_solved": 227
}

```

#### Example request for codechef :
```https://coding-platform-profile-api.onrender.com/codechef/vivek9919```<br>
    *[https://coding-platform-profile-api.onrender.com/codechef/vivek9919](https://coding-platform-profile-api.onrender.com/codechef/vivek9919)*

#### Response Data :
```json
{
"username": "vivek9919",
"name": "Vivek Kumar",
"country": "India",
"rating": "1362",
"global_rank": "75421",
"country_rank": "69891",
"stars": "★",
"no_of_contest": "10",
"problems_solved": 46
}

```

#### Example request for codeforces :
```[https://competeapi.vercel.app/user/codeforces/bharanispace/```<br>
    *[https://coding-platform-profile-api.onrender.com/codeforces/Radewoosh](https://coding-platform-profile-api.onrender.com/codeforces/Radewoosh)*

#### Response Data :
```json
{
"username": "Radewoosh",
"level": "Legendary Grandmaster ",
"rating": "3602",
"highest_rating": "3720",
"total_problems_solved": 3584,
"total_problems_solved_lastyear": 421
}

```

## Authors

- [@vivekkumar9919](https://github.com/vivekkumar9919)

