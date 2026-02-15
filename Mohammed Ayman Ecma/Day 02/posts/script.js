const usersSidebar = document.querySelector(".sidebar");
const postsList = document.querySelector(".content");
function getUsers(posts) {
  const users = [];
  posts.forEach((element) => {
    if (!users.includes(element.userId)) users.push(element.userId);
  });
  return users;
}
function getPosts(userId) {
  const response = fetch(`https://dummyjson.com/posts/user/${userId}`);
  const userPosts = response
    .then((res) => res.json())
    .then((data) => data.posts);

  return userPosts;
}
function renderError(DOMnode, errorMessage) {
  const error = document.createElement("p");
  error.classList.add("error");
  error.textContent = `Something went wrong: ${errorMessage}`;
  DOMnode.replaceChildren(error);
}
function renderEmptyPosts() {
  const empty = document.createElement("p");
  empty.textContent = "This user has no posts";
  empty.classList.add("empty-posts");
  postsList.replaceChildren(empty);
}
function isLoading(DOMnode) {
  const spinner = document.createElement("span");
  spinner.classList.add("loader");
  const spinnerContainer = document.createElement("div");
  spinnerContainer.classList.add("loader-container");
  spinnerContainer.appendChild(spinner);
  DOMnode.replaceChildren(spinnerContainer);
}

function renderUsers(users) {
  users.forEach((element, index) => {
    const user = document.createElement("div");
    user.classList.add("user");
    user.textContent = `User# ${element}`;
    user.dataset.userId = element;
    if (index === 0) usersSidebar.replaceChildren(user);
    else {
      usersSidebar.appendChild(user);
    }
  });
}
function renderPosts(userPosts, userId) {
  userPosts.forEach((post, index) => {
    const postDOM = document.createElement("div");
    postDOM.classList.add("post");
    // create tags eleemnts to append them where they belong
    const tags = post.tags.map((tag) => {
      const tagDOM = document.createElement("div");
      tagDOM.classList.add("tag");
      tagDOM.textContent = tag;
      return tagDOM;
    });
    postDOM.innerHTML = `
            <div class="post-header">
              <h1>User #${post.userId}</h1>
              <div class="tags-container tags-container-${userId}">
              </div>
            </div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-content">
            ${post.body}
            </p>
            <div class="post-footer">
              <div class="reaction-container">
                <span>${post.reactions.likes}</span><i class="fa-solid fa-thumbs-up"></i>
              </div>
              <div class="reaction-container">
                <span>${post.reactions.dislikes}</span><i class="fa-solid fa-thumbs-down"></i>
              </div>
              <div class="reaction-container">
                <span>${post.views}</span><i class="fa-solid fa-eye"></i>
              </div>
            </div>
  `;
    const tagsContainer = postDOM.querySelector(`.tags-container-${userId}`);

    tags.forEach((element) => {
      tagsContainer.appendChild(element);
    });
    if (index === 0)
      postsList.replaceChildren(postDOM); //first iteration replace all children then start adding new children one by one without overriding the past ones
    else postsList.appendChild(postDOM);
  });
}
function fetchPosts() {
  isLoading(usersSidebar);

  const response = fetch("https://dummyjson.com/posts");
  response
    .then((response) => response.json(response.body))
    .then((data) => {
      const posts = data.posts;
      const users = getUsers(posts);

      renderUsers(users);
      const usersList = document.querySelectorAll(".user");
      usersList.forEach((user) =>
        // change user item style on click
        user.addEventListener("click", function () {
          usersList.forEach((user) => {
            user.classList.remove("active-user");
          });
          const userId = user.dataset.userId;
          user.classList.add("active-user");
          isLoading(postsList);
          const userPosts = getPosts(userId);
          userPosts
            .then((data) => {
              console.log(data);
              if (data.length < 1) renderEmptyPosts();
              else renderPosts(data, userId);
            })
            .catch((err) => renderError(postsList, err));
        }),
      );
    })
    .catch((err) => renderError(usersSidebar, err));
}
fetchPosts();
