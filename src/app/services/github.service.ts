import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private username = 'mazahir89';
    private client_id = '27a3fa1c4f01f337ebd5';
    private client_secret = '56095838591c19bd0b9ae044fe8c8da6937903a9';

constructor(private _http:Http){

    console.log('Github Service init..')

   }

   getUser(){
    return this._http.get('https://api.github.com/users/' +this.username)
          .map(res => res.json());

   }

    getRepos(){
    return this._http.get('https://api.github.com/users/' +this.username+ '/repos')
          .map(res => res.json());

   }
   updateUsername(username:string){
        this.username = username;
   }

}