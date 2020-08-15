$( document ).ready(function() {
    $("h3").css("text-decoration", "underline");
    $("ul").css("border", "solid 5px ccc");
});

var primark = {
    company: "Primark",
    stores: 375,
    founded: 1969,
    CEO: "Paul Marchant",
    headquarters: "Mary St, Dublin",
    bio: function(){
        this.company + " is a company led by CEO " + this.CEO + " and headquartered at " + this.headquarters;
    }
}

document.getElementById("demo").innerText = primark.CEO