
var blogData=[];
function storeInSession() {
   
   sessionStorage.setItem("empInfo",JSON.stringify(blogData));
}
function retrieveFromSession() {
   
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = readData();

   
   creatediv(formData)
    resetForm();
    blogData.push(formData);  
    console.log(blogData);
}
function readData() {
    var formData={};
    formData.title=document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    formData.imageinfo=document.getElementById("imageid").files[0].name;
    return formData;
}

function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerHTML;
    var age =  cells[1].innerHTML;
    document.getElementById("name").value=name;
    document.getElementById("age").value=age; 
    document.getElementById("b1").value="Update Record"  
}
function resetForm() {
    document.getElementById("title").value="";
    document.getElementById("desc").value="";  
    document.getElementById("imageid").value="";
}

function creatediv(formData){
let div = document.createElement('div');
div.id = 'blog';
div.className = 'container col-sm-5 border ';


let h4 = document.createElement('h4');
h4.textContent = 'Title: '+formData.title;
let p = document.createElement('p');
p.textContent = 'Description: '+formData.desc;
let img = document.createElement('img');
img.className = 'image';
img.src =  
formData.imageinfo; 


div.appendChild(h4);
div.appendChild(p);
div.appendChild(img);


document.body.appendChild(div);
}



