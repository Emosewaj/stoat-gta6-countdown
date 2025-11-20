const fs = require("fs");

function log(message, mode = "log") {
    let date = new Date();
    let hr = date.getHours().toString();
    let min = date.getMinutes().toString();
    let sec = date.getSeconds().toString();

    if (hr.length < 2) hr = "0" + hr;
    if (min.length < 2) min = "0" + min;
    if (sec.length < 2) sec = "0" + sec;

    let ts = `[${hr}:${min}:${sec}]`;
    let level = `[${mode.toUpperCase()}]`;

    let prefix = `${ts}${level}`.padEnd(17, " ");

    let logfunc = mode == "warn" ? console.warn : (mode == "error" ? console.error : console.log);
    logfunc(`${prefix} ${message}`);
}

function warn(message) {
    log(message, "warn");
}

function error(message) {
    log(message, "error");
}

function saveChannelMap(channelMap) {
    fs.writeFileSync("./data/channel-map.json", JSON.stringify(channelMap, null, 1));
}

module.exports = {
    log,
    warn,
    error,
    saveChannelMap,
}