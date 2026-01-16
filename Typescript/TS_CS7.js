var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
var staffMembers = [
    { id: 1, name: "Ram", role: Role.Doctor },
    { id: 2, name: "Sam", role: Role.Nurse },
    { id: 3, name: "Jodu", role: Role.Admin }
];
for (var _i = 0, staffMembers_1 = staffMembers; _i < staffMembers_1.length; _i++) {
    var staff = staffMembers_1[_i];
    console.log("Name:".concat(staff.name));
    console.log("Role:".concat(Role[staff.role]));
    console.log("-------------------");
}
