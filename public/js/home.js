var carousel = $('.galery').flickity({
    autoPlay: 5000
});

var xhr = new XMLHttpRequest();
xhr.open("get", "http://localhost:3000/data/user");
let user;
xhr.onload = () => {
    user = xhr.response;
    console.log(user);
}

xhr.send();
