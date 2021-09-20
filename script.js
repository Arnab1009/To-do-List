// Function to create a new task
const createTask = () => {
    const task = document.getElementById('taskCollector');
    const taskStr = '<strong>' + task.value + '<strong>';

    // Create li
    const node = document.createElement("LI");
    node.className = "listItem";

    // Create node text and add to node
    const nodeText = document.createElement("span");
    nodeText.className = "task";
    nodeText.innerHTML = taskStr;
    node.appendChild(nodeText);

    // Create node dismiss button and add to node
    const nodeBtn = document.createElement("span");
    nodeBtn.className = "deleteTask";
    nodeBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    node.appendChild(nodeBtn);

    // Add node to task list and clear out the input field
    document.getElementById("listCollector").appendChild(node);
    task.value = "";

    // Add event listener for marking task
    nodeText.addEventListener('click', () => {
        markItem(nodeText);
    });

    // Add event listener for deleting task
    nodeBtn.addEventListener('click', () => {
        deleteItem(nodeBtn);
    });
}

const deleteItem = (obj) => {
    document.getElementById("listCollector").removeChild(obj.parentElement);
}

const markItem = (obj) => {
    const classList = obj.classList;
    let isComplete = false;
    for(var i = 0; i < classList.length ; i++){
        if(classList[i] == 'markComplete'){
            isComplete = true;
        }
    }

    if(isComplete){
        obj.classList.remove("markComplete");
        obj.parentElement.classList.remove("markComplete");
    } else {
        obj.classList.add("markComplete");
        obj.parentElement.classList.add("markComplete");
    }
}