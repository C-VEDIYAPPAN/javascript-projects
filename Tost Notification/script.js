const notification = document.querySelector(".notification"),
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails ={
    timer: 5000,
    success:{
        icon: "fa-circle-check",
        text: "Success: This is a success toast."
    },
    error:{
        icon: "fa-circle-xmark",
        text: "Error: This is an error toast."
    },
    warning:{
        icon: "fa-triangle-exclamation",
        text: "Warning: This is a Warning toast."
    },
    info:{
        icon: "fa-circle-info",
        text: "Info: This is a information toast."
    }
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createTost = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");//creating a new li element for the toast
    toast.className = `toast ${id}`;//setting the classes for the toast
    //setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notification.appendChild(toast);//append the toast to the notification ul
    //set timer to remove toast in specific time
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}
// adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener("click", () => createTost(btn.id));
})