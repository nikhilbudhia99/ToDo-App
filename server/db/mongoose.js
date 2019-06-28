var mongoose=require('mongoose')

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Practice',{ useNewUrlParser: true },()=>{
    console.log('db online')
});

module.exports ={
    mongoose:mongoose
};