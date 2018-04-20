import {
    NEMLibrary, NetworkTypes, Address, TransferTransaction, Transaction, TimeWindow,
    XEM, PlainMessage
} from "nem-library";

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);

const transferTransaction: Transaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address("NBD2XF-ROPDMP-YV7TVX-ZVCTFZ-YH6GJZ-UK2OFS-ZO2F"),
    new XEM(1),
    PlainMessage.create("a transaction")
);

