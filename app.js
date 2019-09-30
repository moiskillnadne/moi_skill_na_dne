const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');




const app = express();
const Opinion = require('./models/opinion.js');
// const projectSettings = require('./helpers/project.js')
// console.log(projectSettings[0])

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true } ));
app.use('/public', express.static('public'));

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
    res.render('norn',{links:{
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
        data:'My First Landing',
    }})
})
app.get('/project/example1', (req, res)=>{
    res.render('example1',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'My First Landing',
    }})
})
app.get('/project/3Dcards', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'3D cards',
            description:'Это демонстрация навыков на чистом JavaScript. В данном примере вы можете увидеть карточки с 3D эффектом. Такие карточки можно использовать в любом интернет-магазине, красивой фото галерее и в принципе для привлекательного HOVER эффекта.',
            attention:'Для получения полного спектра возможностей, рекомендуется зайти с ПК',
        },
        links:{
            demo: '/project/exampleCard',
            github:'https://github.com/Swipe98rus/3D-Animation',
            img:'/public/img/icon/web-programming.svg'
        }
    }})
})
app.get('/project/exampleCard', (req, res)=>{
    res.render('exampleCard',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'3D cards',
    }})
})
app.get('/project/todos', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'ToDos',
            description:'Очередная демонстрация навыков чистого JavaScript. Это небольшое приложение выполняет роль todo листа. Где вы в свою очередь можете записать несколько задач на день и закрывать их по мере выполнения. В этом проекте использовался localStorage, благодаря которому, вы можете после добавления задач:закрыть вкладку, закрыть браузер, делать все что вы хотите, а после, вернутся и все ваши записи останутся. LocalStorage позволяет сделать это эффективно, не подключая стороних библиотек или БД.',
            attention:'',
        },
        links:{
            demo: '/project/exampleToDos',
            github:'https://github.com/Swipe98rus/ToDos',
            img:'/public/img/icon/web-programming.svg'
        }
    }})
})
app.get('/project/exampleToDos', (req, res)=>{
    res.render('todos',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'ToDos',
    }})
})
app.get('/project/tick-tack-toe', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'Крестики - Нолики',
            description:'Данный проект я создал в качестве тестового задания для работодателя. Это самая обычная игра Крестики-Нолики. Такое задание часто спрашивают для понимания зрелости программиста. На примере этой игры можно хорошо посмотреть насколько у новичка развита логика и сколько он предусмотрит исходов игры. Я рад, что мне дали это задание, ибо это был интересный опыт и хорошая практика.',
            attention:'',
        },
        links:{
            demo: '/project/tick-tack-toe-game',
            github:'https://github.com/Swipe98rus/tick-tack-toe',
            img:'/public/img/icon/web-programming.svg'
        },
    }})
})
app.get('/project/tick-tack-toe-game', (req, res)=>{
    res.render('tick-tack-toe',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:'ToDos',
    }})
})
app.get('/project/lightrope', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'Cristmas lights',
            description:'Идея для реализации была найдена в подборке интересных проектов для начинающих. В начале разработки я думал, что будет легко, но даже здесь я нашел подводные камни с которыми еще не встречался. Благодаря этой новогодней гирлянде я научился работать с новым типом input`а. Считаю этот проект полезным и интересным для себя.',
            attention:'',
        },
        links:{
            demo: '/project/lightrope/example',
            github:'https://github.com/Swipe98rus/cristamas-lights',
            img:'/public/img/icon/web-programming.svg'
        },
    }})
})
app.get('/project/lightrope/example', (req, res)=>{
    res.render('lightrope',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'Cristmas lights',
            description:'Идея для реализации была найдена в подборке интересных проектов для начинающих. В начале разработки я думал, что будет легко, но даже здесь я нашел подводные камни с которыми еще не встречался. Благодаря этой новогодней гирлянде я научился работать с новым типом input`а. Считаю этот проект полезным и интересным для себя.',
            attention:'',
        },
        links:{
            demo: '/project/lightrope/example',
            github:'https://github.com/Swipe98rus/cristamas-lights',
            img:'/public/img/icon/web-programming.svg'
        },
    }})
})
app.get('/project/dashboard', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'Dashboard',
            description:'На этом проекте отработал навыки фреймворка Meteor и научился пользоваться Meteor/React/MongoDB конфигом. На примере вы увидите доску продуктивности.',
            attention:'',
        },
        links:{
            demo: 'http://moiskillnadne.ru:3000',
            github:'https://github.com/Swipe98rus/Dashboard-for-productivity',
            img:'/public/img/icon/web-programming.svg'
        },
    }})
})
app.get('/project/tv-app', (req, res)=>{
    res.render('pageForJsProject',{links:{
        project:settings.links.home,
        about:settings.links.about,
        shop:settings.links.shop,
        data:{
            name:'TV APP',
            description:'Учебный проект для первой работы! Суть приложения: научится работать со стороними APIs и управлять хранилищем для больших приложений. В приложении можно вбить название любимого фильма, благодаря чему появится список с подходящими результатами. Присутствует сортировка, и поиск по году.',
            attention:'',
        },
        links:{
            demo: '/project/tv-app/example',
            github:'https://github.com/Swipe98rus/tv-app',
            img:'/public/img/icon/web-programming.svg'
        },
    }})
})


app.use(express.static(path.join(__dirname, 'react-tv-app')));
app.get('/project/tv-app/example', (req, res)=>{
    res.sendFile(path.join(__dirname, 'react-tv-app', 'index.html'));
});
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
