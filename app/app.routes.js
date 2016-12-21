"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var employee_component_1 = require("./employee.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'employees', component: employee_component_1.EmployeeListComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map