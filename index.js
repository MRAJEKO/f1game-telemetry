const { F122UDP } = require("f1-22-udp");
/*
 *   'port' is optional, defaults to 20777
 *   'address' is optional, defaults to localhost, in certain cases you may need to set address explicitly
 */

const f122 = new F122UDP();
f122.start();

f122.on("carTelemetry", (data) => {
    console.log(data);
});

f122.on("lapData", (data) => {
    console.log(data);
});

f122.on("event", (data) => {
    console.log(data);
});
