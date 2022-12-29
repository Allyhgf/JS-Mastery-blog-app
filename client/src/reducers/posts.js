export default (posts = [], action) => {
    switch (action) {
        case 'CREATE':
            return posts;
            break;
        case 'FETCH_ALL':
            return posts;
            break;
        default:
            return posts;
            break;
    }
}