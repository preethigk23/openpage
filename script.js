let posts = 
[
{   
title: "Post 1",
        image: "post1.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo quis lorem aliquet consequat. Fusce vitae lacus id nisi lacinia tincidunt.",
        date: "01/10/2023",
        likes: 10,
        comments: 5
    },
    {
        title: "Post 2",
        image: "post2.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo quis lorem aliquet consequat. Fusce vitae lacus id nisi lacinia tincidunt.",
        date: "02/10/2023",
        likes: 15,
        comments: 8
    },
    {
        title: "Post 3",
        image: "post3.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo quis lorem aliquet consequat. Fusce vitae lacus id nisi lacinia tincidunt.",
        date: "03/10/2023",
        likes: 20,
        comments: 12
    },
    {
        title: "Post 4",
        image: "post4.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo quis lorem aliquet consequat. Fusce vitae lacus id nisi lacinia tincidunt.",
        date: "04/10/2023",
        likes: 15,
        comments: 20
    }        ];

function createCard(post, index) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = post.image;

    let body = document.createElement("div");
    body.className = "card-body";

    let title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = post.title;

    let content = document.createElement("p");
    content.className = "card-text";
    content.textContent = post.content;

    body.appendChild(title);
    body.appendChild(content);

    let footer = document.createElement("div");
    footer.className = "card-footer";

    let date = document.createElement("small");
    date.className = "text-muted";
    date.textContent = post.date;

    let buttons = document.createElement("span");

    let likeBtn = document.createElement("button");
    likeBtn.className = "like-btn";
    likeBtn.textContent = `👍 ${post.likes}`;

    let commentBtn = document.createElement("button");
    commentBtn.className = "comment-btn";
    commentBtn.textContent = `💬 ${post.comments}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        deletePost(index);
    };

    buttons.appendChild(likeBtn);
    buttons.appendChild(commentBtn);
    buttons.appendChild(deleteBtn);

    footer.appendChild(date);
    footer.appendChild(buttons);

    card.appendChild(img);
    card.appendChild(body);
    card.appendChild(footer);

    return card;
}

function renderPosts() {
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        let card = createCard(posts[i], i);
        postsDiv.appendChild(card);
    }
}

function openPostModal() {
    
    alert("Open modal to add a post.");
}

function addPost(title, content, image) {
    let date = new Date().toLocaleDateString();
    let newPost = {
        title: title,
        content: content,
        image: image,
        date: date,
        likes: 0,
        comments: 0
    };
    posts.push(newPost);
    renderPosts();
}

function deletePost(index) {
    posts.splice(index, 1);
    renderPosts();
}
renderPosts();