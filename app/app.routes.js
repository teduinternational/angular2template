"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var notfound_component_1 = require("./notfound.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map