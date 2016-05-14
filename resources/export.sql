-- export this into JSON

SELECT
	jumps.fromSolarSystemID,
	ssFrom.solarSystemName AS fromSolarSystemName,
    jumps.toSolarSystemID,
    ssTo.solarSystemName AS toSolarSystemName,
    jumps.fromConstellationID,
    conFrom.constellationName AS fromConstellationName,
    jumps.toConstellationID,
    conTo.constellationName AS toConstellationName,
	jumps.fromRegionID,
    regFrom.regionName AS fromRegionName,
    jumps.toRegionID,
    regTo.regionName AS toRegionName

FROM SDE.mapSolarSystemJumps jumps
INNER JOIN SDE.mapSolarSystems ssFrom
ON ssFrom.solarSystemID = fromSolarSystemID
INNER JOIN SDE.mapSolarSystems ssTo
ON ssTo.solarSystemID = toSolarSystemID
INNER JOIN SDE.mapConstellations conFrom
ON conFrom.constellationID = fromConstellationID
INNER JOIN SDE.mapConstellations conTo
ON conTo.constellationID = toConstellationID
INNER JOIN SDE.mapRegions regFrom
ON regFrom.regionID = fromRegionID
INNER JOIN SDE.mapRegions regTo
ON regTo.regionID = toRegionID