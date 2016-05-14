"use strict";
let jumps = require('./resources/jumps.json');
/**
 * Get list of adjacent systems
 * @param nameOrID system's name or id
 * @return {Array} list of adjacent systems
 */
module.exports.getAdjacentSystems = function(nameOrID){
    let field = (isNaN(parseInt(nameOrID)))?"fromSolarSystemName":"fromSolarSystemID";
    let stargates = jumps.filter(jump => {
        return jump[field] == nameOrID;
    });
    return stargates.map( gate =>{
        return {
            id: gate.toSolarSystemID,
            name: gate.toSolarSystemName
        }
    })
};
/**
 * Get system ID (3XXXXXXXX) from its name
 * @param nameOrID name or ID
 * @return ID
 */
module.exports.getSysIDByName = function(nameOrID){
	let stargate = jumps.find(jump => {
        return jump["fromSolarSystemName"] == nameOrID || jump["fromSolarSystemID"] == nameOrID;
    });
	return stargate.fromSolarSystemID
};
/**
 * Get all information about system: system, constellation and region names/ids
 * @param nameOrID system's name or id
 * @return {{sysID: *, sysName: *, constID: *, constName: *, regionID: *, regionName: *}}
 */
module.exports.getSystemInfo = function(nameOrID){
	let field = (isNaN(parseInt(nameOrID)))?"fromSolarSystemName":"fromSolarSystemID";
    let stargate = jumps.find(jump => {
        return jump[field] == nameOrID;
    });
    return {
		"sysID" : stargate["fromSolarSystemID"],
		"sysName" : stargate["fromSolarSystemName"],
		"constID" : stargate["fromConstellationID"],
		"constName" : stargate["fromConstellationName"],
		"regionID" : stargate["fromRegionID"],
		"regionName" : stargate["fromRegionName"]
	}
};

