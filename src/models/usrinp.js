const mongoose = require('mongoose');
const validator = require('validator');

const usrSchema = mongoose.Schema(
    {

        name:{
            type:String ,
            require : true ,
            minLength : 3
            

        }
        ,


        no:{
            type:Number , 
            require : true,
            min:10
        }
,
        email:{
            type:String ,
            require : true ,
            validate(val)
            {
                if(!validator.isEmail(val))
                { throw new Error ("Invalid Email Id") }
            }
            
        } ,
        message:{
            type:String ,
            require : true ,
            minLength : 3
            
    
        } ,

        date:
        {
             type:Date,
             default: Date.now
        }

     
    } 

   
);

//we need a collection

const user = mongoose.model("weacoll" , usrSchema);

module.exports = user;