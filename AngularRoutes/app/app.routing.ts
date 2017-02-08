import {Routes, RouterModule} from '@angular/router'

// imports
import {HomeComponent} from './home/home.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginComponent} from './login/login.component'

const appRoutes : Routes = [
    //Rounting Configuration
    {
        path: '' , component: HomeComponent 
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    }
    //passando parametros
    //{path: 'user/:id', component: UserComponent}
];

export const appRoutingProviders: any[] = [

];

//this.router.navigate( ['User', { id: user.id }] );
/*
        import { Router, ActivatedRoute } from '@angular/router';
        @Component({......})
        
        export class SomeClass{
            private route: ActivatedRoute,
            ngOnInit() {
              var id = this.route.snapshot.params['id']
            }
        }
 */
export const rounting = RouterModule.forRoot(appRoutes);