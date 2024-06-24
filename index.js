document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersButton = document.getElementById('fetch-users');
    const userList = document.getElementById('user-list');

    fetchUsersButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://reqres.in/api/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayUsers(data.data);
        } catch (error) {
            console.error('Fetching user data failed:', error);
            userList.textContent = 'Something went wrong while fetching the user data.';
        }
    });

    function displayUsers(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const userImage = document.createElement('img');
            userImage.src = user.avatar;
            userImage.alt = `${user.first_name} ${user.last_name}`;

            const userName = document.createElement('h2');
            userName.textContent = `${user.first_name} ${user.last_name}`;

            const userEmail = document.createElement('p');
            userEmail.textContent = user.email;

            userCard.appendChild(userImage);
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);

            userList.appendChild(userCard);
        });
    }
});
