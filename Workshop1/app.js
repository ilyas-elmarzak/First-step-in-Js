function addFavoriteBook(bookName){
    var FavoriteBooks = ['Book1' , 'Book2' , 'Book3'];
    var book = FavoriteBooks.includes('Great');
    if (book !== true){
        FavoriteBooks.push('Great')
    }else{
        console.log('is already exist')
    }
    // console.log(FavoriteBooks)
    // function printFavoriteBooks(){
    //     var num = FavoriteBooks.length;
    //     console.log('livre favoris:'+' '+num);
    //     for (let i=0; i > FavoriteBooks.length; i++)
    //     console.log(FavoriteBooks[i]);
    
    
    function printFavoriteBooks(){
        var num = FavoriteBooks.length;
        console.log('livre favoris:'+' '+num);
        for(let element of FavoriteBooks){
            console.log(element)
        }
        for (let i=0; i< num; i++){
            console.log(FavoriteBooks[i]);
        }
    }printFavoriteBooks()

}addFavoriteBook()




