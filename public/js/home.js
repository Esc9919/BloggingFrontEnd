var carousel = $('.galery').flickity({
    autoPlay: 5000
});

var req = new XMLHttpRequest();
user = req.open("get", "/data/user");

console.log(user);