System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters: [],
        execute: function () {
            User = class User {
                constructor(id, name) {
                    this.id = id;
                    this.name = name;
                }
            };
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.js.map