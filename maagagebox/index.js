const express = require("express")
const app=express()
const path = require("path");
const fs= require("fs");
const { title } = require("process");
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')


app.get("/", function(req, res) {
    fs.readdir("./files", function(err, files) {
        if (err) {
            return res.status(500).send("Files folder read nahi hua");
        }

        const tasks=files.map((file)=>{
            const massage=fs.readFileSync(path.join(__dirname,"files",file),"utf-8")
        
          return {
            title:file,
            data:massage
          } 
        })

        console.log(files);
        res.render("index", { files: tasks });
    });
});

app.post("/create",function(req,res){
    const title = req.body.title.split(" ").join("");
    const message = req.body.data;
    const filepath = path.join(__dirname, "files", title + ".txt");

    fs.writeFile(filepath,message,
        function(err) {
            if (err) {
                return res.status(500).send(err.message);
            }

            res.redirect("/");
        }
    
    )
})


app.get("/delete/:filename", (req, res) => {
    const filename = req.params.filename;

    const filepath = path.join(__dirname, "files", filename);

    fs.unlink(filepath, (err) => {
        if (err) {
            return res.status(500).send("sorry");
        }

        res.redirect("/");
    });
});



app.get("/profile/:name/:age",(req,res)=>{
    res.send(`Welcom ${req.params.name} and ade is ${req.params.age}`)
})
app.listen(3000,function(){
    console.log("its runnig")
})