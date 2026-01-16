//Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).
// Create two profiles: one with a null bio and no avatar, and one with both fields set.
var profile1 = {
    username: "jagaroy10",
    bio: null
};
var profile2 = {
    username: "rijukumari12",
    bio: "Software Developer",
    avatarUrl: "http://snjnnsdjdsnlns"
};
function showProfile(profile) {
    var _a;
    var bioText = !profile.bio ? "No bio provided" : profile.bio;
    var avatarText = (_a = profile.avatarUrl) !== null && _a !== void 0 ? _a : "Default avatar";
    console.log("Username:", profile.username);
    console.log("Bio:", bioText);
    console.log("Avatar:", avatarText);
    console.log("--------------------");
}
showProfile(profile1);
showProfile(profile2);
