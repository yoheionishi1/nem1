"use strict";
exports.__esModule = true;
var nem_library_1 = require("nem-library");
// Initialize NEMLibrary for TEST_NET Network
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.MAIN_NET);
var transferTransaction = nem_library_1.TransferTransaction.create(nem_library_1.TimeWindow.createWithDeadline(), new nem_library_1.Address("NBD2XF-ROPDMP-YV7TVX-ZVCTFZ-YH6GJZ-UK2OFS-ZO2F"), new nem_library_1.XEM(1), nem_library_1.PlainMessage.create("a transaction"));
