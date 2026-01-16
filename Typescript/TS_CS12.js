// Call displayMember for two members: one with email, one without.
var books = [
    {
        title: "1984"
    },
    {
        title: "Brave New World"
    },
    {
        title: "Fahrenheit 1984"
    },
];
//TEXT REPORT
function reportGenerator(books) {
    var report = "Book report\n";
    report = report + "=========\n";
    for (var i = 0; i < books.length; i++) {
        report += "".concat(i + 1, ".").concat(books[i].title, ".\n");
    }
    return report;
}
console.log(reportGenerator(books));
//JSON REPORT
function generateJsonReport(items) {
    return JSON.stringify(items, null, 5);
}
console.log(generateJsonReport(books));
