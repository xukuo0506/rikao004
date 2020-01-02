let listData =require('./public/Mock/mock.js')

module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/list',(req,res)=>{
                res.json({
                    list:listData
                })
            })
        }
    }
}