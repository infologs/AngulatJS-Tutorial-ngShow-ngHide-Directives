var app = angular.module("app01", []);

app.controller("controller1", function () {
    this.ControllerName = "Login Page Controller";
});

app.controller("controller2", function () {
    this.ControllerName = "Registration Page Controller";
});;

app.controller("controller3", function () {
    this.Show = true;
    this.Hide = false;
});