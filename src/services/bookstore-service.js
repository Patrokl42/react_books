
export default class BookstoreService {

    data = [
        {  id:1,
            title: 'Production readi microservices',
            author: 'Marlin Monro',
            price: 32,
            coverImage: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        },
        {  id: 2,
            title: 'Good, bad and the dirty',
            author: 'Oleg Savka',
            price: 228,
            coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75) {
                    reject(new Error('Bad Too bad'))
                } else {
                    resolve(this.data);
                }
            },700);
        })
    }
}