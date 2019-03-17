const kijiji = require("kijiji-scraper");
 
let options = {
    minResults: 10,
    maxResults: -1
};
 
let params = {
    locationId: 1700272,  // Same as kijiji.locations.ONTARIO.GTA
    categoryId: 760,  
    sortByName: "priceAsc",  // Show the cheapest listings first
    keywords: 'macbook',
    maxPrice: 2000,
    minPrice: 500
};
 
// Scrape using returned promise
kijiji.search(params, options).then(function(ads) {
    // Use the ads array
    const arr =[];
    for (let i = 0; i < ads.length; ++i) {
        //console.log('----------------------------------');
        console.log(ads[i].title);
        //console.log(ads[i].image);
        //console.log(ads[i].attributes.price);

    }
    
}).catch(console.error);
 
// Scrape using optional callback parameter
function callback(err, ads) {
    if (!err) {
        // Use the ads array
        for (let i = 0; i < ads.length; ++i) {
            console.log(ads[i].title);
            
        }
    }
}
kijiji.search(params, options, callback);

