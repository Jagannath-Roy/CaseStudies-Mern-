function parseDate(data) {
    try {
        var user = JSON.parse(data);
        console.log(user.name);
    }
    catch (error) {
        console.log("Invalid JSON");
    }
}
parseDate('{name:"Jaga","roll":10}');
console.log("Continues");
