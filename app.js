const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




const app = express();
const Opinion = require('./models/opinion.js');
// const projectSettings = require('./helpers/project.js')
// console.log(projectSettings[0])

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true } ));
app.use('/public', express.static('public'))

const settings = {
    links:{
            project:{
                path:'/project',
                name:'My Project'
            },
            about:{
                path:'/about',
                name:'ABOUT ME'
            },
            shop:{
                path:'/shop',
                name:'My shop'
            },
            home:{
                path:'/',
                name:'HOME'
            }
        },
}

app.route('/')
    .get(function (req, res){
        res.render('homePage',
                        {links:{
                                project:settings.links.project,
                                about:settings.links.about,
                                shop:settings.links.shop
                                },
                        h1:'//moi_skill_na_dne'
                            });
    })
    .post(function(req,res){
        const opinion = new Opinion({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            device: req.body.device,
            comment: req.body.comment
        });
        opinion.save().then( result=>console.log(result) ).catch( err=>console.log(err) );
        res.render('homePage',{links:{
                project:settings.links.project,
                about:settings.links.about,
                shop:settings.links.shop
                },
                h1:'Спасибо за отзыв!'
            })
    })

app.get('/about', (req, res)=>{
    res.render('aboutPage',{links:{
        project:settings.links.project,
        about:settings.links.home,
        shop:settings.links.shop
    }});
})
app.get('/project', (req, res)=>{
    res.render('myProjectPage',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
    }})
})
app.get('/project/norn', (req, res)=>{
    res.render('someProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'norn',
    }})
})
app.get('/project/maket-1', (req, res)=>{
    res.render('maket1',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'maket',
    }})
})
// app.get('/shop', (req, res)=>{
//     res.render('shopPage',{links:{
//         project:settings.links.project,
//         about:settings.links.about,
//         shop:settings.links.home
//     }})
// })

// app.get('/forDev', (req,res)=>{
//     console.log(res)
// })

// Opinion.find( (err, opinions)=>{
//     if(err){ return console.log(err)}
//     console.log(opinions)
// } )


//It is 404 PAGE route!
app.get('*', (req, res)=>{
    res.render('404', {
        links:{
                project:settings.links.project,
                about:settings.links.about,
                shop:settings.links.shop
                },
                h1:'404'
    })
})

mongoose.connect('mongodb+srv://VictorRyabkov:Ryabkov2607@cluster0-ihljc.mongodb.net/moi_skill_na_dne?retryWrites=true', {
    useNewUrlParser:true
})
    .then( ()=>app.listen(80, ()=>{console.log('App was started!!!!')} ))
    .catch( (e)=>console.log(e) )
