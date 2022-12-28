import  { Client, Account } from 'appwrite';
import { authenticated as loggedIn, username } from "$lib/Auth/AuthStore";
import {goto} from "$app/navigation";
import {PUBLIC_PROJECT_ENDPOINT, PUBLIC_PROJECT_ID} from "$env/static/public";

const client = new Client();

client
  .setEndpoint(PUBLIC_PROJECT_ENDPOINT)
  .setProject(PUBLIC_PROJECT_ID);
  const account = new Account(client)

  export default class AppwriteManager{
    public static client:Client = client;
    public static account:Account = account;
    public static async login(email:string, password:string) {
      return account.createEmailSession(email,password);
    }

    public static async authenticated(){
      return account.get().then((res)=>{
        loggedIn.set(true);
        username.set(res.name);
      })
      .catch(()=>{
        console.debug("Not logged in")
        loggedIn.set(false)
      })
    }
    public static async logout(){
      username.set("")
      loggedIn.set(false);
      goto("/")
      return account.deleteSession('current')
    }
  }