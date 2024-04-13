// import { resolve } from "path";
import auth from '@react-native-firebase/auth';
import { User } from './src/common/types';

const USERNAME = "Amrit";
const PASS = "123";

function sleep(ms: number | undefined) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

export async function signUp(username: string, password: string, callback: (arg0: string) => void) {
//after 5 seconds
await sleep(2000); 
 if(username === USERNAME && password === PASS)
 {
   callback("SUCCESS");
 }
  else { callback("Login failed!");
}
}

export function signUpUser(username: string,password: string): Promise<any>{
return auth().createUserWithEmailAndPassword(username,password);
}

export function signInAsync(username: string, password: string){
   return auth().signInWithEmailAndPassword(username, password);
   }

export async function fetchUser(userId: string): Promise<User | undefined >
{
   await sleep(2000);
   const avatarUrl = "https://gravatar.com/avatar/872bdd6da4f5ed4c6d74aa69a8c429de?s=400&d=robohash&r=x";
   return {id: userId, firstName: "Gurjeet", lastName: "Singh", avatarUrl: avatarUrl};
}
