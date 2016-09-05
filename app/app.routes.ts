import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {MenuPage} from "./menu.component";
import {LoopTestPage} from "./loop-test.component";
import {RouteTestA, RouteTestB, RouteTestC} from "./route-test.component";

export const routes: RouterConfig = [
    { path: "", component: MenuPage },
    { path: "loopTest", component: LoopTestPage },
    { path: "routeTestA", component: RouteTestA},
    { path: "routeTestB", component: RouteTestB},
    { path: "routeTestC", component: RouteTestC}
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, {})
];