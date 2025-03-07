// load post
const loadPost = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?`
  );
  const data = await res.json();
  const post = data.posts;
  showPost(post);
};
// show post
const showPost = (posts) => {
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
        <div class="bg-[#F3F3F5] rounded-lg mb-5 px-2">
                <div class="hero-content flex-col w-full p-10 lg:flex-row">
                  <div class="relative">
                    <img
                    src="${post.image}"
                    class="w-[75px] h-[75px] rounded-lg shadow-2xl"/>
                    <div class="dot h-[10px] w-[10px] rounded-full absolute left-17 bottom-17">
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between gap-3  mb-3">
                      <p class="text-[#12132DCC] font-medium">#${post.category}</p>
                      <p class="text-[#12132DCC] font-medium">Author: ${post.author?.name}</p>
                    </div>
                    <h1 class="postTitle text-xl font-bold mb-3 text-[#12132D]">${post.title}</h1>
                    <p class="py-6 mb-3 text-[#12132D99]">${post.description}</p>
                    <hr class="border-dashed mb-4 border-[#12132D40]">
                    <div class="flex justify-between">
                      <div class="flex justify-around gap-5">
                        <i class="fa-regular fa-message text-[#12132D99]"><span class="text-[#12132D99]"> ${post.comment_count}</span></i>
                        <i class="fa-regular fa-eye text-[#12132D99]"><span class="text-[#12132D99]"> ${post.view_count}</span></i>
                        <i class="fa-regular fa-clock text-[#12132D99]"><span class="text-[#12132D99]"> ${post.posted_time}</span></i>
                      </div>
                      <button class="count counting btn bg-[#10B981] text-white rounded-full p-3"><i class="fa-regular fa-envelope-open"></i></button>
                    </div>
                  </div>
                </div>
              </div>
        `;
    const activeId = postCard.querySelector(".dot");
    if (`${post.isActive}` === "true") {
      activeId.classList.add("bg-green-600");
    } else {
      activeId.classList.add("bg-red-600");
    }
    postContainer.appendChild(postCard);
  });
  //  click counter increase
  let clickButton = document.getElementsByClassName("count");
  let count = 0;
  for (let i = 0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", function () {
      const clickCounter = document.getElementById("counter");
      count++;
      clickCounter.innerText = count;
    });
  }

  // read post and sent to title div

  let postTitle = document.getElementsByClassName("postTitle");
  let clickButton2 = document.getElementsByClassName("count");
  for (let i = 0; i < clickButton2.length; i++) {
    clickButton2[i].addEventListener("click", function () {
      console.log("murad");
      console.log("clicked", postTitle);
      for (let j = 0; j < postTitle.length; j++) {
        const sendPost = postTitle[j].innerText;
        //   console.log(typeof(postTitle));
        // //  sendPost.forEach(titlePost => {
        // //     console.log(titlePost);
        // //   })
        console.log(sendPost);
        // for(let post in sendPost){
        //   console.log(post);
        // }
      }
    });
  }
};

loadPost();
const loadLatestPost = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );
  const data = await res.json();
  showLatestPost(data);
};
const showLatestPost = (posts) => {
  const latestPostContainer = document.getElementById("latest-post-container");
  posts.forEach((post) => {
    const latestPostCard = document.createElement("div");
    latestPostCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm p-6">
            <figure>
              <img
                src="${post.cover_image}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <div class="flex justify-around gap-2">
                <i class="fa-regular fa-calendar-plus text-[#12132D99] text-lg"></i>
                <p class="text-[#12132D99]">${
                  post.author?.posted_date
                    ? post.author.posted_date
                    : "No publish date"
                }</p>
              </div>
              <h2 class="card-title text-lg text-[#12132D] font-extrabold">${
                post.title
              }</h2> 
              <p class="text-[#12132D99]">${post.description}</p>
              <div class="flex justify-start gap-3">
                <img class="h-[44px] w-[44px] rounded-[44px]" src="${
                  post.profile_image
                }" alt="">
                <div>
                  <p>${post.author.name}</p>
                  <p class="text-[#12132D99]">${
                    post.author?.designation
                      ? post.author.designation
                      : "Unknown"
                  }</p>
                </div>
              </div>
            </div>
          </div>
    `;
    latestPostContainer.appendChild(latestPostCard);
  });
};
loadLatestPost();
// posts search by query/ category
const searchPost = () => {
  const searchButton = document.getElementById("search-field");
  const searchText = searchButton.value;
  loadPost(searchText);
  console.log(searchText);
};
