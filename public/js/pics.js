console.log("App Starting");



function getPics() {
$.ajax({
    type: "GET",
    url: "/api/pics",
    dataType: "JSON",
}).then((result) => {
    console.log(result);
    postPics(result);
}).catch((err) => {
    console.log(err);
});
}

getPics()


function postPics(results) {

    results.forEach(pic => {
        var picLink = pic.pictureLink.slice(7)
        var img = $("<img>");
        img.attr("src", picLink);
        $("#picsContainer").prepend(img)
    });

}



