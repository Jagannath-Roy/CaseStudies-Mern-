//Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).

type Profile = {
   username : string;
   bio : string | null;
   avatarUrl?:string;

}

// Create two profiles: one with a null bio and no avatar, and one with both fields set.

let profile1:Profile = {

    username:"jagaroy10",
    bio : null


}

let profile2:Profile = {

    username:"rijukumari12",
    bio : "Software Developer",
    avatarUrl:"http://snjnnsdjdsnlns"


}

function showProfile(profile: Profile): void {
  const bioText = !profile.bio ? "No bio provided" : profile.bio;
  const avatarText = profile.avatarUrl ?? "Default avatar";

  console.log("Username:", profile.username);
  console.log("Bio:", bioText);
  console.log("Avatar:", avatarText);
  console.log("--------------------");
}

showProfile(profile1);
showProfile(profile2);

