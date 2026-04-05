//  simple get api


App.get("/api/users",(req, res)=>{
    res.json({
        message:" Get Api Working",
        user: ["ALi", "Haider", "Khan"]

    })
})

// get api with prameters

app.get("/api/user/:id",(req, res) =>{
    const id = req.params.id;

    res.json({
        userid: id,
        name: "Ali"
    })
})



app.post("/api/users", (req, res)=> {
    const user = req.body;
     res.json({
        message: " user register sucssfully",
        data: "user"
     })
})
console.log(data)


const users = [];

app.post("/api/users", (req, res) => {

    users.push(req.body);

    res.json({
        message: "User Added",
        users: users
    });
});
console.log(users)