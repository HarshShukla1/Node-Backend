const  express = require ('express')

const app = express();
const PORT = 8000;

app.use(express.json());

const DIARY = {}
const EMAIL = new Set();


app.post('/signup',(req , res)=>{
    const {name,email,password}=  req.body;
    if(email in DIARY)
    {
        return res.status(400).json({error:"Email taked"})
    }

    const token = `${Date.now()}`
    DIARY[token] = {name,email,password};
    EMAIL.add(email)

    return res.json({status:'success',token})

});

app.post('/me',(req , res) => {
    const {token} = req.body
    if(!token)
    {
        return res.status(400).json({error:'Missing token'});
    }

    if(!(token in DIARY)){
        return res.status(400).json({error:'Invalid token'});
    }

    const entry = DIARY[token]

    return res.json({data:entry})

})

app.post("/private-data", (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Missing token' });
    }

    if (!(token in DIARY)) {
        return res.status(400).json({ error: 'Invalid token' });
    }

    return res.json({ data: { privateData: 'Access Granted' } });
});

app.listen(PORT , ()=>console.log(`Server started on PORT ${PORT}`));