var image = 1;
const maxImage = 4;

function slider() {
    console.log("123");
    setInterval(function() {
        let source = "url('./img/slider/image" + image.toString() + ".png')";
        document.getElementById("sliderImage").style.backgroundImage = source;
        image++;
        console.log(image);
        if (image > maxImage) image = 1;
    }, "5000");
}

function sliderNext() {
    image++;
    if (image > maxImage) image = 1;
    let source = "url('./img/slider/image" + image.toString() + ".png')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}

function sliderPrevious() {
    image--;
    if (image < 1) image = maxImage;
    let source = "url('./img/slider/image" + image.toString() + ".png')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}