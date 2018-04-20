/**
 * nem-library 0.3.0
 */

import { AccountHttp, Address, NEMLibrary, NetworkTypes } from "nem-library";

NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);
let address = new Address("NCGQZW-3UPZGK-5QL3ZO-75Q6IA-34A5RA-2CHEQW-HIXI");
let accountHttp = new AccountHttp();

let pageable = accountHttp.allTransactionsPaginated(address);

pageable.subscribe(transactions => {
    // do something with the info
});

pageable.nextPage(); // Fetch the nexts 25 transactions