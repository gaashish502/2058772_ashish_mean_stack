let http = require("http");
let url = require("url");
let fs = require("fs")
let port = 9090;

let addTask = `
    <h1 style = "text-align : center:">Task Planner<h1/> <h3 style = "text-decoration: underline">Add Task<h3/>
    <form action="/store" method="get">
        <label>Emp Id: </label> <input type="text" name="empId"/><br/>
        <label>Task Id: </label> <input type="text" name="taskId"/><br/> 
        <label>Task: </label> <input type="text" name="task"/><br/>
        <label>Deadline: </label> <input type="date" name="deadline" placeholder="mm-dd-yyyy"/><br/>
        <input type="submit" value="Add Task" />
    </form>
    <h3 style = "text-decoration: underline">Delete Task</h3>
    <form action="/delete" method="get">
        <label>Task Id</label>
        <input type="text" name="taskId"/><br/> <input type="submit" value="Delete Task"/>
    </form>
    <h3 style = "text-decoration: underline">List Tasks</h3>
    <form action="/display" method="get"> <input type="submit" value="List all tasks" />
    </form>
`
let taskResultTitles = `
<table style="border-spacing: 10px;">
<thead>
    <th>Emp ID: </th>
    <th>Task ID: </th>
    <th>Task: </th>
    <th>Deadline: </th>
</thead>
</table>
`


let server = http.createServer((req,res)=> {
    console.log(req.url)
    res.setHeader("content-type","text/html");
    res.write(addTask);

    if(req.url != "/favicon.ico"){
        var getPath = url.parse(req.url,true).pathname;
        if(getPath=="/store"){
            console.log("here")
            let info = url.parse(req.url,true).query;
            let checkAdd = true;
            let tasks = getTasks();
            for (var i in tasks){
                if (tasks[i].taskId == info.taskId){
                    checkAdd = false;
                }
            }
            if (checkAdd){
                console.log(checkAdd)
            let task = makeJSON(info.empId,info.taskId,info.task,info.deadline);
            tasks.push(task)
            var tasksString = JSON.stringify(tasks, null,2);
            fs.writeFileSync("task.json",tasksString);
            }
        }else if(getPath=="/delete"){
            let info = url.parse(req.url,true).query;
            let tasks = getTasks();
            for (var i in tasks){
                if (tasks[i].taskId == info.taskId){
                    tasks.splice(i,1);
                }
            }
            console.log(tasks)
            var tasksString = JSON.stringify(tasks, null, 2);
            fs.writeFileSync("task.json",tasksString);

        }else if(getPath=="/display"){
            let tasks = getTasks()
            let taskData = ``
            console.log(tasks)
            for (var i in tasks){
                taskData += `
                    <table style="border-spacing: 35px;">
                    <tr>
                        <td>${tasks[i].empId}</td>
                        <td>${tasks[i].taskId}</td>
                        <td>${tasks[i].task}</td>
                        <td>${tasks[i].deadline}</td>
                    </tr>
                    </table>
                `
            }
            res.write(taskResultTitles)
            res.write(taskData)
            res.write(`</table>`)
        }
        res.end();
    }
    

    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));

function makeJSON(empId,taskId,task,deadline) {
    return {"empId":empId, "taskId":taskId,"task":task, "deadline":deadline};
}
function getTasks(){
    let tasks = new Array();
    try {
        let taskData = fs.readFileSync("task.json");
        let jsonString = taskData.toString();
        let json = JSON.parse(jsonString);
        tasks = [];
        for (var i in json){
            tasks.push(json[i]);
        }
        return tasks;
      } catch (error) {
        return tasks;
    }
}

