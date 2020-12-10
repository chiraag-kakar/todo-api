const express =require('express');
const app = express();
const pool =  require("./db");


app.use(express.json( )) // => req body

//ROUTES//



//get all todos
app.get("/todos",async(req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
        
    }
});



//get a todo by todo_id
app.get("/todos/:id",async(req,res)=>{
    const {id} = req.params
    try {
        // res.json(req.params);
        const todo = await pool.query("SELECT * FROM  todo WHERE todo_id=$1",[id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }
});


//create a todo
app.post("/todos",async(req,res)=>{
    try {
        //await
        // console.log(req.body);
        const {description} = req.body;
        const {todo_state} = req.body;
        const {todo_priority} = req.body;
        const {created_on} = req.body;

        const newTodo = await pool.query("INSERT INTO todo (description) , (todo_state) ,(todo_priority), (created_on) VALUES ($1), ($2), ($3), ($4) RETURNING *", [description,todo_state,todo_priority,created_on]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params; //WHERE
        const {description} = req.body; //SET
        const {todo_state} = req.body;
        const {todo_priority} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1, todo_state = $2, todo_priority = $3  WHERE todo_id = $4",[description,todo_state,todo_priority, id]);

        res.json(updateTodo);
    } catch (err) {
        console.error(err.message);
    }
})


//delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1 ",[id]);
        res.json(deleteTodo);
    } catch (err) {
        
    }
})

app.listen(5000, ()=> {
    console.log("server is listening on port 5000");
})