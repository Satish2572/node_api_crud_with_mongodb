module.exports = (req,resp,next) =>{
    if(!req.query.age){
        resp.send("Please provide your age !");
    }
    else if(parseInt(req.query.age)<18){
        resp.send("You are not old enough to access this page!");
    }
    next();
}