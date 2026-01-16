use("Database1");

// db.Lesson2.find();

// Add a new vegan dish called “Tofu Buddha Bowl” (cuisine: “Asian”, price: $9.50, tags: [“vegan”, “gluten-free”], available: true).




// db.Lesson2.insertOne(
// {
//     name:"Tofu Buddha Bowl",
//     cuisine :"Asian",
//     price: 9.50,
//     tags : ["vegan","gluten-free"],
//     available:true

// }
// )

// db.Lesson2.find(

//     {
//         available:true,
//         tags:"vegan",
//         price :{$lt:12}

//     },
//     {
//         _id:0,
//         name:1,
//         price:1
//     }
// )


// Update the price of “Tofu Buddha Bowl” to $10.00 and add a “popular” tag.


// db.Lesson2.updateOne(
// {
//    name:"Tofu Buddha Bowl"

// },
// {
//     $set:{price:10.00},
//     $push:{tags:"popular"}
// }


// )





// Delete the dish “Old Special Soup” from the menu.

// db.Lesson2.deleteOne(
//     {name:"Old Special Soup"}
// )