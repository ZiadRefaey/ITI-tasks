/*
Create a function to add a new ues
Create a function to get user by ID
Create a function to get user status
Create a function to get user status if exists

User Schema:
    UserID: number | string
    userName: string
    userAge: Number
    useraddress:userAddress Optional
    userStatus: Busy | Active | Away

Address Schema:
    country:string
    city:string;
    postal-code: number
*/
const usersList: IUser[] = [];
type status = "Busy" | "Active" | "Away";
interface IUser {
  userID: number | string;
  userName: string;
  userAge: number;
  userAddress?: IUserAddress;
  userStatus: status;
  getUserStatus(): status;
  getUserAddress(): IUserAddress | "does not exist";
}
interface IUserAddress {
  country: string;
  city: string;
  postalCode: number;
}
function addUser(userObject: IUser): void {
  usersList.push(userObject);
  console.log(usersList);
}
function getUserById(id: number): IUser | "not found" {
  const user = usersList.find((user) => user.userID === id);
  if (user) {
    return user;
  } else return "not found";
}
function getUserAddress(this: IUser): IUserAddress | "does not exist" {
  if (this.userAddress) {
    return this.userAddress;
  } else {
    return "does not exist";
  }
}
function getUserStatus(this: IUser): status {
  return this.userStatus;
}
const user1: IUser = {
  userAge: 25,
  userName: "ziad",
  userID: 1,
  userStatus: "Active",
  userAddress: {
    city: "Arish",
    country: "Egypt",
    postalCode: 123,
  },
  getUserAddress,
  getUserStatus,
};
const user2: IUser = {
  userAge: 24,
  userName: "omar",
  userID: 2,
  userStatus: "Busy",
  userAddress: {
    city: "Arish",
    country: "Egypt",
    postalCode: 213,
  },
  getUserAddress,
  getUserStatus,
};
addUser(user1);
addUser(user2);
console.log(user1.getUserStatus());
console.log(user1.getUserAddress());
console.log(getUserById(2));
