let characterAboutMe=document.querySelector(".characterAboutMe");
let characterImage=document.querySelector(".characterImage");
characterImage.onmouseover = mouseOver;
characterAboutMe.onmouseout = mouseOut;

function mouseOver() {
   characterAboutMe.innerHTML ="test";
}

function mouseOut() {
   characterAboutMe.innerHTML =this.characterAboutMe.innerHTML;
}
*/
var itemReviewLaptop = [
    "The best laptop this year. I love HackHTML!",
    "I laughed, I cried, then I laughed again. I really love HackHTML!",
    "I could not sleep after using this laptop because I love HackTHML!"
];
var itemReviewKey = [
    "The best key this year. I love HackHTML!",
    "I laughed, I cried, then I laughed again. I really love HackHTML!",
    "I could not sleep after using this key because I love HackTHML!"
];
var itemReviewPlaceholder1 = [
    "The best placeholder this year. I love HackHTML!",
    "I laughed, I cried, then I laughed again. I really love HackHTML!",
    "I could not sleep after using this placeholder because I love HackTHML!"
];


$(".laptop").click(function() {
    itemChoice = "Latop";
    $(".key").css("border", "none");
    $(".placeholder1").css("border", "none");
    $(".laptop").css("border", "5px solid black");
    $(".itemReviews").text("");
    for (var review of itemReviewLaptop) {
        $(".itemReviews").append(`<p>${review}</p>`);
    }
});
$(".key").click(function() {
    itemChoice = "Hack Key";
    $(".key").css("border", "5px solid purple");
    $(".laptop").css("border", "none");
    $(".placeholder1").css("border", "none");
    $(".itemReviews").text("");
    for (var review of itemReviewKey) {
        $(".itemReviews").append(`<p>${review}</p>`);
    }
});
$(".placeholder1").click(function() {
    itemChoice = "Placeholder";
    $(".placeholder1").css("border", "5px solid blue");
    $(".key").css("border", "none");
    $(".laptop").css("border", "none");
    $(".itemReviews").text("");
    for (var review of itemReviewPlaceholder1) {
        $(".itemReviews").append(`<p>${review}</p>`);
    }
});
