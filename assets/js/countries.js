//movies.js

let countries = ['Australia', 'Ireland', 'Spain', 'Portugal', 'USA', 'France', 'Italy', 'Belgium', 'The Netherlands', 'Germany', 'Austria', 'Slovenia', 'Poland'];

let primark = {
    company: "Primark",
    stores: 375,
    founded: 1969,
    CEO: "Paul Marchant",
    industry: "fashion retailer",
    headquarters: "Mary St, Dublin",
    bio: function(){
        console.log(this.company + "is a "+ this.industry + " company led by " + this.CEO + " and headquartered at " + this.headquarters)},
    };
