import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {RegistrationComponent} from "./registration.component";

const routes: Routes = [
    {path: "", component: RegistrationComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RegistrationRoutingModule {
}
