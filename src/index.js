document.addEventListener("DOMContentLoaded", () =>{

  document.getElementById("create-task-form").addEventListener("submit",(event) =>{
    event.preventDefault();
    const description= document.querySelector("#new-task-description").value;
        toDoList(description);

})
