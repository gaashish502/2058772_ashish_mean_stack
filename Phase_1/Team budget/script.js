var empData=[];

function onFormSubmit() {
    console.log("Test");
    var formData = readData();
    empData.push(formData);  
    localStorage.setItem("empInfo",JSON.stringify(empData)); 
    console.log(empData);
}


function readData() {
    var formData={};
    formData.clientName=document.getElementById("clientName").value;
    formData.name = document.getElementById("pname").value;
    formData.budget = document.getElementById("budget").value;
    return formData;
}


function displayData() {
    var empObj = localStorage.getItem("empInfo");
    var empJson = JSON.parse(empObj)
    console.log(empJson);
    console.log(empJson[0].clientName)
   
    var tableContent=""
    var startTable ="<table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
    for (let i = 0; i < empJson.length; i++) { 
        tableContent +="<tr><td>"+empJson[i].clientName+"</td><td>"+empJson[i].name+"</td><td>"+empJson[i].budget+"</td></tr>"
      }
 
    
    var endTable="</table>"
    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;

}


