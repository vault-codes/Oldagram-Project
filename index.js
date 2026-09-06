const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postEl = document.getElementById("post-container")



function renderProfile(){
   

    let postDom = ""

    
      

    for(i=0; i< posts.length; i++){

        postDom += `
        <section>
             <div id="post-container">

                <div class="profile-info" id="profile-info">
                    <img src="${posts[i].avatar}" alt=" an avatar  image of the user who made the post" class="avatar-profile"/>

                <h2 class="float-bold-text"> ${posts[i].name}</h2>
                <p class="float-small-text"> ${posts[i].location}</p>




                </div>

                <div class="post-image-container">

                <img src="${posts[i].post}" alt="post  displaying a portrait image " class="post-image" /> 

                </div>
            
                <div class="flex-icon">

                    <img src="./Images/icon-heart.png" alt="heart icon for likes" class="icon-img"/>
                <img src="./Images/icon-comment.png" alt="comment  icon for comment" class="icon-img"/>
                <img src="./Images/icon-dm.png" alt="Dm icon for messaging" class="icon-img"/>



                </div>

                <div class="activity-container" id="activity-container">
 


                    <h2> ${posts[i].likes} likes</h2>

                <h2> ${posts[i].username} <span class="small-text">${posts[i].comment} </span></h2>


                </div>
            </div>
           


        </section>`


 
       

    
}
 
 postEl.innerHTML = postDom

   
}

renderProfile()









