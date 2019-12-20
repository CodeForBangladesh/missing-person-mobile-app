import {Component, OnInit} from "@angular/core";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    public input: any;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.input = {
            "email": "",
            "password": "",
            "confirmPassword": ""
        }
    }

}
