import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";

import {RegistrationRoutingModule} from "./registration-routing.module";
import {RegistrationComponent} from "./registration.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {UserService} from "~/app/shared/user.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistrationRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        RegistrationComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegistrationModule {
}
