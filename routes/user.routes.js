const router = require("express").Router();
const User = require("../models/User.model")

const APIHandler = require("../public/js/APIHandler")
const apiPoblenou = new APIHandler(41.406450, 2.205496)
const apiCiutatVella = new APIHandler(41.381536, 2.175636)
const apiParalel = new APIHandler(41.407566, 2.104670)



const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const {isLoggedIn, isLoggedOut} = require('../middleware/route.guard.js')



router.get('/signup',(req,res,next)=>{
    res.render('user/signup')
})

router.post('/signup', (req, res, next)=>{

    const {firstName, lastName, email, username, password} = req.body

    bcryptjs
    .genSalt(saltRounds)
        .then(salt=>bcryptjs.hash(password, salt))
        .then(hashedPassword => {
            console.log('hashedPassword is:', hashedPassword)
            return User.create({firstName, lastName, email, username, password : hashedPassword})
            
        })
        .then(userOne =>{console.log('A new user has been created:', userOne)
            req.session.currentUser = userOne    
            
            res.render('user/user-page',{userOne})})
        .catch(err => next(err))
})


module.exports = router;

router.get('/login',(req,res)=>{res.render('user/login')})


router.post('/user-page',(req,res,next)=>{

    console.log('SESSION =====> ', req.session);

    const {username, password} = req.body

    User.findOne({username})
    .then(userOne => {
        if(!userOne){
            res.redirect('/login')}
        else if(bcryptjs.compareSync(password, userOne.password))
        {
            
            req.session.currentUser = userOne
            
            res.render('user/user-page',{userOne})
        } else {
            res.redirect('/login')
        }
    })
    .catch(err=>{next(err)})
})



router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});


router.get('/user-page',isLoggedIn,(req,res)=>{
    
    const userOne = req.session.currentUser
    const resultArr = []

    apiParalel.getAirQuality().then(response => {
     
        let pm10 = (response.data.list[0].components.pm10)*100/20
        let pm25 = (response.data.list[0].components.pm2_5)*100/10
        let o3 = (response.data.list[0].components.o3)*100/80
        let no2 = (response.data.list[0].components.no2)*100/40
        
       
         let result1 = (((pm10+pm25+o3+no2)/4)*0.5)
         resultArr[0] = result1
         return resultArr
      
  
    }).then((resultArr)=>{
        apiCiutatVella.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            let result2 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[1] = result2
            return resultArr
         
    }).then((resultArr)=>{
        apiPoblenou.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result3 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[2] = result3
            return resultArr
         
    }).then((resultArr) => {
        console.log(resultArr)

        res.render('user/user-page',{userOne, resultArr})
    })
    
    })
    })
})


router.get('/user-info',isLoggedIn,(req,res)=>{
    
    const userOne = req.session.currentUser
    res.render('user/edit-user-info',{userOne})

})

router.post('/user-info',isLoggedIn,(req,res)=>{
    const userOne = req.session.currentUser
    res.render('user/edit-user-info',{userOne})
})

router.post('/user-update',isLoggedIn,(req,res)=>{
    const userId = req.session.currentUser._id
    const {firstName, secondName, email, username, avatarUrl} = req.body

    User.findByIdAndUpdate(userId,{firstName, secondName, email, username, avatarUrl},{new:true})
    .then(result =>{
        req.session.currentUser = result
        res.redirect('/user-page')
        
        console.log(req.session.currentUser)
    })

})