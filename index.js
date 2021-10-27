//Dependencies
const String_Crypto = require("string-crypto")
const Express_Param = require("express-param")
const Request = require("request")
const Express = require("express")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

const { encryptString, decryptString } = new String_Crypto()

///Configurations
//Express
Web.use(Express_Param())

//Main
Web.use(Express.static(__dirname + "/public"))

Web.use("/api/test", function(req, res){
    var url = req.fetchParameter(["url"]).url

    if(!url){
        return
    }

    url = decryptString(url, "RN2ionuionu5oa2inu5jaio5n25uio")

    console.log(`Decrypted url: ${url}`)
    Request(url, function(err, rres, body){
        if(err){}

        res.send(`${url} | Request made & Success!`)
    })
})

//Listener
Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}.`)
})
