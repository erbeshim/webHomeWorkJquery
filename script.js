   let colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "black",
        "purple"
    ];

    let index = 0;

    $("#rainbowBtn").on("click", function () {
        $(this).css("background-color", colors[index]);
        index++;
        
        if (index === colors.length) {
            index = 0;
        }
    });