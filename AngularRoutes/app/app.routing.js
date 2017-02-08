System.register(["@angular/router", "./home/home.component", "./dashboard/dashboard.component", "./login/login.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, dashboard_component_1, login_component_1, appRoutes, appRoutingProviders, rounting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                //Rounting Configuration
                {
                    path: '', component: home_component_1.HomeComponent
                },
                {
                    path: 'login', component: login_component_1.LoginComponent
                },
                {
                    path: 'dashboard', component: dashboard_component_1.DashboardComponent
                }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
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
            exports_1("rounting", rounting = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map