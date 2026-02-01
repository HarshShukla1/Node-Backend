const db = require("./db")
const {usersTable} = require('./Drizzle/schema')

async function getAllUsers() {
    const users =await db.select().from(usersTable)
    console.log(`Users in DB`,users)
    return users;
}

async function createUsers({name,email}) {
    await db.insert(usersTable).values({
        
        name,
        email,
    })   
}

createUsers({ name:"harsh", email:'harsh@example.com'})
createUsers({ name:"abhishek", email:'abhishek@example.com'})