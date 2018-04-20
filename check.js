"use strict";
/**
 * nem-library 0.3.0
 */
exports.__esModule = true;
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.MAIN_NET);
var address = new nem_library_1.Address("NCGQZW-3UPZGK-5QL3ZO-75Q6IA-34A5RA-2CHEQW-HIXI");
var accountHttp = new nem_library_1.AccountHttp();
var pageable = accountHttp.allTransactionsPaginated(address);
pageable.subscribe(function (transactions) {
    // do something with the info
});
pageable.nextPage(); // Fetch the nexts 25 transactions
