fetch("instagram.json")
.then(response => response.json())
.then(posts => {

    const feed = document.getElementById("instagram-feed");

    posts.forEach(post => {

        feed.innerHTML += `
        <a class="social-item" 
           href="${post.link}" 
           target="_blank">

            <img src="${post.image}" 
                 alt="Instagram post">

        </a>
        `;

    });

})
.catch(error => {
    console.log("Instagram feed error:", error);
});
