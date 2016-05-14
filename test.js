"use strict";
/**
 * Created by lich on 2016-01-05.
 */
let jumps = require("./index");

let adjacent = jumps.getAdjacentSystems("Jita").map(jump => {
    return jump.toSolarSystemName;
});

console.log(adjacent);
