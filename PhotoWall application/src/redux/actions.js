//remove
export function removePost(index){

    return {
        type: 'REMOVE_POST',
        index:index
    }
}
//Adding Post
export function addPost(post){

    return {
        type: 'ADD_POST',
        post:post 
    }
}

export function addComment(comment){
    return{
            type:'ADD_COMMENT',
            comment
    }
}