const getTopFriends = async (num = 1) => {
  response = await fetch(`https://randomuser.me/api/?results=${num}`);

  if (response.ok) {
    const json = await response.json();
    return Promise.resolve(json);
  } else {
    return Promise.reject("error!");
  }
};

const topFriends = document.querySelector("#top-friends");

getTopFriends(5)
  .then((json) => {
    json.results.forEach((friend) => {
      console.log(friend.picture.thumbnail);
      const img = document.createElement("img");
      img.src = friend.picture.thumbnail;
      img.style.display = "inline-block";
      img.style.margin = "25px";

      topFriends.appendChild(img);
    });
  })
  .catch((error) => console.log(error));
