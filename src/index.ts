interface User {
    id : string
    name : string
    password : string
    email : string
    age : number
};

// function sumOfAge (user1 : User, user2 : User){
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name : "Abhilash", age : 26}, {name : "Tango", age : 22})

// console.log(age);

type UpdatedProps = Pick <User, 'name' | 'age' | 'email' >

type UpdatePropsOptional = Partial<UpdatedProps> // Partial allows you to update any single key 

function updateUser ( updatedProps : UpdatePropsOptional){

}

// cannot change the value
const a = "abhi"; 
// a = "Tengli"

//You can change the inner value od User
const user = {
    name : "abhi",
    age : 24,
    country : "INDIA"
}
user.name = "Abhilash Tengli"



type User1 = {
     name: string //readonly will only allow you to read not write
     age: number 
}

//If you dont want to give readonly to every variable then you can give it here
const user1 : Readonly<User1> = {  
    name : "rahul",
    age : 24
}

// user1.name = "Rahul kumar" "CANNOT DO THIS IT IS READ ONLY"


