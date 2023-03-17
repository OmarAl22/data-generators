var faker = require('faker');
var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
var flag = [true,false];
var date =  faker.date.past();
var date2 =  faker.date.past();
var activityType = ["IN_PASSENGER_VEHICLE","IN_TRAM","STILL","WALKING","MOTORCYCLING","CYCLING","IN_BUS","IN_FERRY","RUNNING", "FLYING"];


let startLocation = {
  "latitudeE7": faker.address.latitude(),
  "longitudeE7": faker.address.longitude(),
  "sourceInfo": {
    "deviceTag": helper.getFakeNumber(11111111,999999999)
  }
}

let endLocation = {
  "latitudeE7": faker.address.latitude(),
  "longitudeE7": faker.address.longitude(),
  "sourceInfo": {
    "deviceTag": helper.getFakeNumber(11111111,999999999)
  }
}

let activities = [  {    "activityType": activityType[helper.getFakeNumber(0,9)],    "probability": helper.getFakeNumber(0, 100)  }]

let waypointPath = {
  "waypoints": [
    {
      "latE7": faker.address.latitude(),
      "lngE7": faker.address.longitude(),
    },  
  ],
  "source": "INFERRED",
  "roadSegment": [
    {
      "placeId": faker.random.uuid(),
      "duration": helper.getFakeNumber(100, 200) + "s"
    }
  ],
  "distanceMeters": helper.getFakeNumber(1000, 5000),
  "travelMode": "DRIVE",
  "confidence": 0.0
}

let parkingEvent = {
  "location": {
    "latitudeE7": faker.address.latitude(),
    "longitudeE7": faker.address.longitude(),
    "accuracyMetres": helper.getFakeNumber(100, 200)
  },
  "method": "END_OF_ACTIVITY_SEGMENT",
  "locationSource": "FROM_RAW_LOCATION",
  "timestamp": date.toISOString()
}

let activitySegment = {
  "startLocation": startLocation,
  "endLocation": endLocation,
  "duration": {
    "startTimestamp": date.toISOString(),
    "endTimestamp": date2.toISOString()
  },
  "distance": helper.getFakeNumber(1000, 5000),
  "activityType": "IN_PASSENGER_VEHICLE",
  "confidence": "LOW",
  "activities": activities,
  "waypointPath": waypointPath,
  "parkingEvent": parkingEvent
}

let deviceSettings =
    {
       "deviceTag":helper.getFakeNumber(11111111,999999999),
       "reportingEnabled":flag[helper.getFakeNumber(0,1)],
       "legalCountryCode":"us",
       "devicePrettyName":faker.name.firstName(),
       "platformType":"IOS",
       "deviceCreationTime":date2,
       "latestLocationReportingSettingChange":{
          "reportingEnabledModificationTime":date2
       },
       "iosVersion":helper.getFakeNumber(10,20)+"." + helper.getFakeNumber(0,10),
       "deviceSpec":{
          "device":"device name"
       }
    }

let location = {
  "latitudeE7": Math.round(parseFloat(faker.address.latitude()) * 1e7),
  "longitudeE7": Math.round(parseFloat(faker.address.longitude()) * 1e7),
  "placeId":faker.random.uuid(),
  "address":faker.address.streetAddress(),
  "name":faker.company.companyName(),
  "sourceInfo":{
    "deviceTag":helper.getFakeNumber(11111111,999999999)
  },
  "locationConfidence":helper.getFakeNumber(0,100),
  "calibratedProbability":helper.getFakeNumber(0,100)
}

let placeVisit = {
  "location": location,
  "duration": {
    "startTimestamp": faker.date.recent().toISOString(),
    "endTimestamp": faker.date.recent().toISOString()
  },
  "placeConfidence": "MEDIUM_CONFIDENCE",
  "centerLatE7": location.latitudeE7,
  "centerLngE7": location.longitudeE7,
  "visitConfidence": helper.getFakeNumber(0, 100),
  "otherCandidateLocations": [],
  "editConfirmationStatus": "NOT_CONFIRMED",
  "locationConfidence": helper.getFakeNumber(0, 100),
  "placeVisitType": "SINGLE_PLACE",
  "placeVisitImportance": "MAIN"
};

let placeVisitObj = {
    placeVisit: placeVisit,
}
let activitySegmentObj = {
    activitySegment: activitySegment,
}

let timelineObjects = {
    "timelineObjects": []
  };
  
  for (let i = 0; i < helper.getFakeNumber(1, 7); i++) {
    if (i%2 == 0) {
      timelineObjects.timelineObjects.push(activitySegmentObj);
    } else {
      timelineObjects.timelineObjects.push(placeVisitObj);
    }
  }
  
  var json = JSON.stringify(timelineObjects);
  console.log(json);