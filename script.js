const title = document.getElementById('Title')
const Description = document.getElementById('description')
const form = document.querySelector('form')
const container = document.querySelector('.container')

const task = localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];

showAllTasks();



function showAllTasks(){
  task.forEach((value, index) => {

    const div = document.createElement('div')
    div.setAttribute('class', 'tasks')

    const innerdiv = document.createElement('div')
    div.append(innerdiv);

    const p = document.createElement('p')
    p.innerHTML= value.title;
  innerdiv.append(p)

  const span = document.createElement('span')
  span.innerHTML = value.Description
  innerdiv.append(span)

  const btn = document.createElement('button')
  btn.setAttribute('class' , 'deletebtn')

  btn.innerText = '-';


  btn.addEventListener('click',()=>{

    removeTask();
    task.splice(index, 1);

    localStorage.setItem('task',JSON.stringify(task));
   
    showAllTasks();
  })

  
  div.append(btn);

  container.append(div);

   })
}

function removeTask(){
  task.forEach(()=>{
    const div = document.querySelector('.tasks')
    div.remove();
  })
}

form.addEventListener('submit',(e)=>{
 e.preventDefault()

 removeTask()


 task.push({
  title:title.value,
  Description:Description.value

 })
  localStorage.setItem('task',JSON.stringify(task));
 

showAllTasks();
})



