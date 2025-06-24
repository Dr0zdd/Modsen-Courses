async function loadData() {

    const urls = [
        'https://jsonplaceholder.typicode.com/users',
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/comments'
    ];

    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );

        const [users, posts, comments] = responses;

        return {users, posts, comments};
    } catch (error) {
        console.error('Ошибка при загрузке данных', error);
        throw error;
    }
}

loadData().then(data => {
    console.log('Объединенный результат', data);
})