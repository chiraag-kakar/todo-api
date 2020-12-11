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

//get a todo by title
app.get("/todos/:title",async(req,res)=>{
    const {title} = req.body;
    try {
        const todo_title = await pool.query("SELECT * FROM  todo WHERE title=$1",[title]);
        res.json(todo_title.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get a todo by date
app.get("/todos/:created_on",async(req,res)=>{
    const {created_on} = req.body;
    try {
        const todo_date = await pool.query("SELECT * FROM  todo WHERE created_on=$1",[created_on]);
        res.json(todo_date.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get a todo by state
app.get("/todos/:todo_state",async(req,res)=>{
    const {todo_state} = req.body;
    try {
        const todo_by_state = await pool.query("SELECT * FROM  todo WHERE todo_state=$1",[todo_state]);
        res.json(todo_by_state.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
//get a todo by priority
app.get("/todos/:todo_priority",async(req,res)=>{
    const {title} = req.body;
    try {
        const todo_by_priority = await pool.query("SELECT * FROM  todo WHERE todo_priority=$1",[todo_priority]);
        res.json(todo_by_priority.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a todo
app.post("/todos",async(req,res)=>{
    try {
        //await
        // console.log(req.body);
        const {title} = req.body;
        const {description} = req.body;
        const {todo_state} = req.body;
        const {todo_priority} = req.body;
        const {created_on} = req.body;

        const newTodo = await pool.query("INSERT INTO todo (title), (description) , (todo_state) ,(todo_priority), (created_on) VALUES ($1), ($2), ($3), ($4), ($5) RETURNING *", [title, description, todo_state, todo_priority, created_on]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params; //WHERE
        const {title} = req.body;
        const {description} = req.body; //SET
        const {todo_state} = req.body;//SET
        const {todo_priority} = req.body;//ET
        const updateTodo = await pool.query("UPDATE todo SET title = $1, description = $2, todo_state = $3, todo_priority = $4  WHERE todo_id = $5",[title,description,todo_state,todo_priority,id]);

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