const exprss=require('express');
const signupController=require("../controllers/userController") ;

const router=exprss.Router();

router.post('/signup',signupController.createUser);

module.exports=router;

