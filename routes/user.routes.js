const router = require("express").Router();
const User = require("../models/User.model")
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const {isLoggedIn, isLoggedOut} = require('../middleware/route.guard.js')



const APIHandler = require("../public/js/APIHandler")
const apiParalel = new APIHandler(41.357233, 2.145260)
const apiPoblenou = new APIHandler(41.406594, 2.208730)
const apiCiutatVella = new APIHandler(41.378796, 2.171962)
const apiBarceloneta = new APIHandler(41.382563,2.191118)
const apiEixample = new APIHandler(41.391308, 2.146699)
const apiSagrada = new APIHandler(41.411345, 2.165699)
const apiPastor = new APIHandler(41.449040, 2.192275)
const apiGuinardo = new APIHandler(41.436333, 2.152755)
const apiSarria = new APIHandler(41.411211, 2.124733)
const apiCorts = new APIHandler(41.379472,  2.103971)
const apiSants = new APIHandler(41.369851, 2.132886)




router.get('/signup',(req,res,next)=>{
    res.render('user/signup')
})

router.post('/signup', (req, res, next)=>{

    const {firstName, lastName, email, username, password} = req.body

    if(!firstName || !lastName || !email || !username || !password){

        res
        .status(500)
        res.render('user/signup',{errorMessage: 'All fields are required'})
        return
    }

    const emailCheck = /^\S+@\S+\.\S+$/
    if(!emailCheck.test(email)){
        res.render('user/signup',{errorMessage: 'Please use a valid email address'})
    return
    }


    const passCheck = /.{8,}/;
  if (!passCheck.test(password)) {
    res
      .status(500)
      .render('user/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }


    User.findOne({username})
    .then(user=>{
        if(user){
            res.render('user/signup',{errorMessage: 'Username already exist'})
        } else {
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
        }
    })
})


module.exports = router;

router.get('/login',(req,res)=>{res.render('user/login')})


router.post('/user-page',(req,res,next)=>{

    console.log('SESSION =====> ', req.session);

    const {username, password} = req.body

    

    User.findOne({username})
    .then(userOne => {
        if(!userOne){
            res
            .status(500)
            .render('user/login',{errorMessage:'Incorrect username or password'})}
        else if(bcryptjs.compareSync(password, userOne.password))
        {
            req.session.currentUser = userOne
            
            res.render('user/user-page',{userOne})
            
        } else {
            res
            .status(500)
            .render('user/login',{errorMessage:'Incorrect username or password'})}
       
        
    })
    .catch(err=>{next(err)})
})



router.get('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});


router.get('/user-page',isLoggedIn,(req,res)=>{
    
    const userOne = req.session.currentUser
    /* res.render('user/user-page',{userOne}) */
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
         
    }).then((resultArr)=>{
        apiBarceloneta.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result4 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[3] = result4
            return resultArr
         
    }).then((resultArr)=>{
        apiEixample.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result5 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[4] = result5
            return resultArr
         
    }).then((resultArr)=>{
        apiSagrada.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result6 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[5] = result6
            return resultArr
         
    }).then((resultArr)=>{
        apiPastor.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result7 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[6] = result7
            return resultArr
         
    }).then((resultArr) => {
        apiGuinardo.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result8 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[7] = result8
            return resultArr
         
    }).then((resultArr) => {
        apiSarria.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result9 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[8] = result9
            return resultArr
         
    }).then((resultArr) => {
     apiCorts.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result10 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[9] = result10
            return resultArr
         
    }).then((resultArr) => {
        apiSants.getAirQuality().then(response => {
     
            let pm10 = (response.data.list[0].components.pm10)*100/20
            let pm25 = (response.data.list[0].components.pm2_5)*100/10
            let o3 = (response.data.list[0].components.o3)*100/80
            let no2 = (response.data.list[0].components.no2)*100/40
            
           
            const result11 = (((pm10+pm25+o3+no2)/4)*0.5)
            resultArr[10] = result11
            return resultArr
         
    }).then((resultArr) => {
        console.log(resultArr)

        res.render('user/user-page',{userOne, resultArr})
    })
})
})
})
})
})   
})
})
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
    const {firstName, lastName, email, username, avatarUrl} = req.body

    User.findByIdAndUpdate(userId,{firstName, lastName, email, username, avatarUrl},{new:true})
    .then(result =>{
        req.session.currentUser = result
        res.redirect('/user-page')
        
        console.log(req.session.currentUser)
    })

})