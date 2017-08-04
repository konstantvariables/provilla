import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RoutingModule } from './routing.module';
//import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module'
import { JobService } from './services/job.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
// import { JobsComponent } from './jobs/jobs.component';
// import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
// import { AccountComponent } from './account/account.component';
// import { AdminComponent } from './admin/admin.component';
import { NotFoundModule } from './not-found/not-found.module';
import { LoginModule } from './login/login.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        // JobsComponent,
        // AboutComponent,
        LogoutComponent,
        // AccountComponent,
        // AdminComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RoutingModule,
        LoginModule,
        //SharedModule,
        SignupModule,
        NotFoundModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [
      AuthService,
      AuthGuardLogin,
      AuthGuardAdmin,
      JobService,
      UserService,
    ],
    schemas: [
      //CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
