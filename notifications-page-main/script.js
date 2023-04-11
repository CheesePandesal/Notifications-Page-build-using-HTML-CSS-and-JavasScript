const parentElement = document.querySelector(".notifications-container");
const matchingElements = parentElement.querySelectorAll(".active");
let notifications = parentElement.querySelectorAll('.notification');
let activeElement1 = document.querySelector('#notification1');
let activeElement2 = document.querySelector('#notification2');
let activeElement3 = document.querySelector('#notification3');
let redDots = parentElement.querySelectorAll('.red-dot');
let redDot1 = parentElement.querySelector('#red-dot1')
let redDot2 = parentElement.querySelector('#red-dot2')
let redDot3 = parentElement.querySelector('#red-dot3')
let counter = document.querySelector('#counter')
let markAllAsRead = parentElement.querySelector('a');

let count = matchingElements.length;
 matchingElements.forEach((matchingElement) => {
    matchingElement.onclick = () => {
        console.log('clicked')
        matchingElement.classList.remove('active');
        let redDot = matchingElement.querySelector('.red-dot');
        redDot.classList.remove('show')
        count = count - 1;
        counter.textContent = count
                    
                        
                    
        }
})

markAllAsRead.onclick = () => {
    count = 0;
    counter.textContent = count;
    notifications.forEach((notification) => {
        notification.classList.remove('active')
        let redDot = notification.querySelector('.red-dot');
        redDot.classList.remove('show')
    })

    
}

/*
THIS IS MY FIRST TRY. AS YOU CAN SEE, IT IS NOT DYNAMIC
activeElement1.onclick = () => {
    console.log('clicked')
    activeElement1.classList.remove('active');
    if(count!=0) {
        count = count - 1;
        counter.textContent = count}
    redDot1.classList.remove('show')
}
activeElement2.onclick = () => {
    console.log('clicked')
    activeElement2.classList.remove('active');
    if(count!=0) {
        count = count - 1;
        counter.textContent = count}
        redDot2.classList.remove('show')
}
activeElement3.onclick = () => {
    console.log('clicked')
    activeElement3.classList.remove('active');
    if(count!=0) {
        count = count - 1;
        counter.textContent = count}
        redDot3.classList.remove('show')
}
    

*/