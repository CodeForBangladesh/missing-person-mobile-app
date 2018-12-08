import {Component, OnInit} from "@angular/core";
import {UserService} from "~/app/shared/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
    selector: "Registration",
    moduleId: module.id,
    templateUrl: "./registration.component.html"
})
export class RegistrationComponent implements OnInit {

    public input: any;
    public errorMsg: string;
    public hasError: boolean;
    private EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.initFields();
    }

    public register() {

        this.validateFields();
        //TODO: Handle error response properly.
        this.userService.register(this.input.email, this.input.password).pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.hasError = true;
                    this.errorMsg = "We are experiencing technical difficulties, please try again later.";
                });
    }

    private initFields() {
        this.input = {
            "email": "",
            "password": "",
            "confirmPassword": ""
        }
    }
    private validateFields() {

        this.hasError = true;

        if(this.input.email.length == 0) {
            this.errorMsg = "Email field can not be empty.";
        } else if (!this.EMAIL_REGEX.test(String(this.input.email).toLowerCase())) {
            this.errorMsg = "Not an valid email.";
        } else if (String(this.input.password).length == 0) {
            this.errorMsg = "Password field can not be empty.";
        } else if (String(this.input.confirmPassword).length == 0) {
            this.errorMsg = "Confirm Password field can not be empty.";
        } else if (this.input.password !== this.input.confirmPassword) {
            this.errorMsg = "Password field and Confirm Password field need to be matched.";
        } else {
            this.hasError = false;
            this.errorMsg = "";
        }
    }
}
