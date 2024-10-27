new Date().getFullYear()
const currentyear = document.querySelector(".currentyear").innerHTML = new Date().getFullYear();

// cheeseburger

const hamburger = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

let comments = [
    {
        username: 'crab',
        commentContent: 'what'
    },
    {
        username: 'jim',
        commentContent: 'cant wait to use this method on my cat irl'
    },

];

if (localStorage.getItem('comments') !== null) {
    comments = JSON.parse(localStorage.getItem('comments'));
}

// form toggling

const makeComment = document.querySelector('#makecomment');
const form = document.querySelector('#form');
const sidebar = document.querySelector('#sidebar');
const buttons = document.querySelector('#form-buttons');

// creating a cancel button inside the form
const cancel = document.createElement('a');
cancel.setAttribute('href', '#commentsection');

cancel.textContent = 'Cancel';

buttons.appendChild(cancel);

makeComment.addEventListener('click', () => {
    form.classList.toggle('openForm');
    makeComment.classList.toggle('openForm');
});

// HEHEHEHEHEHEHEHEHEHEHEHEH 
cancel.addEventListener('click', () => {
    form.classList.remove('openForm');
    makeComment.classList.remove('openForm');
});




function createComment(comments) {
    document.querySelector('#commentsection').innerHTML = '';

    comments.forEach(comment => {
        let div = document.createElement('commentDiv');
        div.classList.add('comment');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        p.classList.add('commentinput');

        h2.innerHTML = `<span class='user'>${comment.username}</span> "commented": `;
        p.textContent = comment.commentContent;

        div.appendChild(h2);
        div.appendChild(p);

        document.querySelector('#commentsection').appendChild(div);

    });
};

createComment(comments);


// adding objects to my comments array
const addComment = function createNewComment(noSub) {
    noSub.preventDefault();
    let newComment = {
        username: document.querySelector('#username').value,
        commentContent: document.querySelector('#comment').value
    }
    if (newComment.username !== '' && newComment.commentContent !== '') {
        comments.unshift(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));
        createComment(comments);
    }
};


const submitComment = document.querySelector('#submitcomment');

submitComment.addEventListener('click', addComment);

