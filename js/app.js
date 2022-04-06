// POST request that creates a Post

function createPost(){
    axios.request({
        method : "POST",
        url : 'https://jsonplaceholder.typicode.com/posts',
        headers : {
            'Content-type': 'application/json',
          },
        data : {
            body : document.getElementById('comment').value,
        }
    }).then(postSuccess).catch(postFail);
}

function updatePost(){
    axios.request({
        method : "PATCH",
        url : "https://jsonplaceholder.typicode.com/posts/101",
        headers : {
            'Content-type': 'application/json',
        },
        data : {
            body : document.getElementById('update').value
        }
    }).then(updateSuccess).catch(updateFailure);
}

function deletePost(){
    axios.request({
        method : "DELETE",
        url : "https://jsonplaceholder.typicode.com/posts/101",
        headers : {
            'Content-type': 'application/json',
        },
    }).then(deleteSuccess).catch(deleteFail);
}

function postSuccess(response){
    console.log(response.data);
    Cookies.set('postID', response.data.id);
    document.getElementById('postResult').innerText="Comment Submitted.";
}

function postFail(error){
    console.log(error);
    document.getElementById('postResult').innerText="Error, Comment has Failed to Post!";
}

function updateSuccess(response){
    console.log(response);
    console.log(response.data.body);
    document.getElementById('postResult').innerText="Update Successful!";
}

function updateFailure(error){
    console.log(error);
    document.getElementById('postResult').innerText="Error, your attempt to Update your comment has failed!";
}

function deleteSuccess(response){
    console.log(response);
    document.getElementById('postResult').innerText="Delete of comment was Successful";
    Cookies.remove('postID', response.data.id);
}

function deleteFail(error){
    console.log(error);
    document.getElementById('postResult').innerText="Error, the post has not been deleted";
}

document.getElementById('postSubmit').addEventListener('click', createPost);

document.getElementById('updateSubmit').addEventListener('click', updatePost);

document.getElementById('deleteSubmit').addEventListener('click', deletePost);