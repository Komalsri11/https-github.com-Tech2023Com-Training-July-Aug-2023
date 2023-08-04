const UserSchema = require('../Schemas/UserSchema')


exports.getApi =  (req,res) =>{
    console.log(req.query.number)
if(Number(req.query.number) % 2 == 0)
{

    res.send(`<h1>Hi || ${req.query.number} is  Even Number</h1>`)    
}
else
{

    res.send(`<h1>Hi || ${req.query.number} is  Odd Number</h1>`)    

}
}

exports.RegisterUser  = (req,res) =>{
  
    const {name , email , mobile , address, password, gender} =  req.body;

    UserSchema.insertMany({name  : name , address : address ,  email : email ,  mobile : mobile ,  password :  password  , gender : gender}).then((result)=>{

        if(result.length > 0)
        {
            res.status(200).send({status :  200 , message : "User Registered Successfully"})
        }
        else
        {
            res.status(400).send({status :  500 , message : "Something Went Wrong !! Please Try Again"})

        }

    }).catch((err)=>{

if(err.name == 'ValidationError')
{

    res.status(400).send({status :  400 , message : `${err.message.split('Path')[1]}`})
}
else if(err.name == 'MongoBulkWriteError' && err.code == 11000){

    res.status(400).send({status :  400 , message : ` User Alreday exists with these details => ${err.message.split('{')[1].replace('}' , '')}`})

}
else
{

    res.status(500).send({status :  500 , message : "Something Went Wrong !! Please Try Again"})
}

    })

}