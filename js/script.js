const buttonMarkReadAll = document.querySelector('.notifications__mark-read-all');
const notificationCount = document.querySelector('.notifications__count');

let newNotifications = document.querySelectorAll('.notification.new');

buttonMarkReadAll.addEventListener('click', e => {
   newNotifications.forEach(notification => {
      notification.classList.remove('new');
   });
   notificationCount.innerText = 0;
})