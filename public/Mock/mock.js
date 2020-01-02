let Mock = require('mockjs')


let data=Mock.mock({
    "list|10":[
        {
            "id|+1":0,
            "name":"@cname()",
            "text":"@ctitle()",
            "img":"@image(50x50,@color())"
        }
    ]
})


module.exports =data.list