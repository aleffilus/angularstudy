System.register(["./model"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1, Mock;
    return {
        setters: [
            function (model_1_1) {
                model_1 = model_1_1;
            }
        ],
        execute: function () {
            Mock = class Mock {
                constructor() {
                    this.alessandro = new model_1.Person(1, "Alessandro Oliveira", "alessandro@fillustec.com.br");
                }
            };
            exports_1("Mock", Mock);
        }
    };
});
//# sourceMappingURL=mock.js.map