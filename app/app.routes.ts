import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {MenuPage} from "./menu.component";
import {LoopTestPage} from "./loop-test.component";
import {RouteTestAPage} from "./route-test-a.component"
import {RouteTestBPage} from "./route-test-b.component"

export const routes: RouterConfig = [
    { path: "", component: MenuPage },
    { path: "loopTest", component: LoopTestPage },
    { path: "routeTestA", component: RouteTestAPage},
    { path: "routeTestB", component: RouteTestBPage}
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];