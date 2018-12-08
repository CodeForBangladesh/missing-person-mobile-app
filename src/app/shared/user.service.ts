import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class UserService {

    // TODO:: Read from config file.
    private registerEndpoint: string = 'http://a708121a.ngrok.io/api/v1/auth/register';

    constructor(private http: HttpClient) {
    }

    public register(email: string, password: string) {
        return this.http.post<any>(this.registerEndpoint, {email: email, password: password});
    }

    private handleError(err: HttpErrorResponse | any) {
        console.error('An error occurred', err);
        return throwError(err.message || err);
    }

}
