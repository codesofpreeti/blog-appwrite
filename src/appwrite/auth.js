import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAcc=await this.account.create(ID.unique(), email, password, name);
      if(userAcc){
        //next method
        return this.login({email,password});
      }
      else{
        return userAcc;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({email,password}){
    try {
        return await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        throw error;
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        throw error;
    }
    return null;

  }
  async logout(){
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        console.log("no user logged in")
    }
  }
}

const authservice = new AuthService();
export default authservice;
