const ajax = new XMLHttpRequest();

ajax.open("GET", "https://api.hnpwa.com/v0/news/1.json", false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement("ul");
newsFeed.map((feed) => {
  const li = document.createElement("li");
  li.innerHTML = `${feed.title}`;
  ul.appendChild(li);
});

document.getElementById("root").appendChild(ul);
