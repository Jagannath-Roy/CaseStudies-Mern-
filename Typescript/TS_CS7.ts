enum Role {
  Doctor,
  Nurse,
  Admin
}

interface Staff {
  id: number;
  name: string;
  role: Role;
}


const staffMembers: Staff[] = [
  { id: 1, name: "Ram", role: Role.Doctor },
  { id: 2, name: "Sam", role: Role.Nurse },
  { id: 3, name: "Jodu", role: Role.Admin }
];


for(const staff of staffMembers){

    console.log(`Name:${staff.name}`);
    console.log(`Role:${Role[staff.role]}`);

    console.log(`-------------------`);

}

