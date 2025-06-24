function fetchAllData() {
    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'
    ];

    const requests = urls.map(url => fetch(url).then(res => res.json()));

    return Promise.all(requests)
        .then(([users, posts, comments]) => {
            return {
                users,
                posts,
                comments
            };
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
            throw error;
        });
}

fetchAllData().then(data => {
    console.log('Объединённый результат:', data);
});
