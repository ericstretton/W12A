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

function postSuccess(response){
    console.log(response.data);
    Cookies.set('sessionToken', response.data.id);
    document.getElementById('postResult').innerText="Comment Submitted.";
}

function postFail(error){
    console.log(error);
    document.getElementById('postResult').innerText="Error, Comment has Failed to Post!";
}

document.getElementById('postSubmit').addEventListener('click', createPost);
