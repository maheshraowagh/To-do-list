
 const listContainer = document.getElementById("list-container");
const input = document.getElementById('input-box')

function addTask(){
    if(input.value === ""){
        alert('Enter your task')
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.append(li);
        let span = document.createElement('span')
         span.innerHTML="\u00d7"
         li.append(span)
    }input.value= ""
    saveData();
}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

 function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
 }

  showTask()