var path = require("path");
var fileName = __dirname;
var file = path.dirname(fileName); // reemove file name
var file2 = path.dirname(file); // remove last dir from path
const helper = require(file2+'/utils/helper.js');
let csvjson = require("csvjson");
let faker = require("faker");
const { parse } = require("json2csv");
let activity = [
  "soccer",
  "basketball",
  "tennis",
  "baseball",
  "golf",
  "running",
  "volleyball",
  "badminton",
  "swimming",
  "boxing",
  "table tennis",
  "skiing",
  "ice skating",
  "roller skating",
  "cricket",
  "rugby",
  "pool",
  "darts",
  "football",
  "bowling",
  "ice hockey",
  "surfing",
  "karate",
  "horse racing",
  "snowboarding",
  "skateboarding",
  "cycling",
  "archery",
  "fishing",
  "gymnastics",
  "figure skating",
  "rock climbing",
  "sumo wrestling",
  "taekwondo",
  "fencing",
  "water skiing",
  "jet skiing",
  "weight lifting",
  "scuba diving",
  "judo",
  "wind surfing",
  "kickboxing",
  "sky diving",
  "hang gliding",
  "bungee jumping",
];
const fields = [
  "activeduration",
  "activezoneminutes",
  "activitylevel",
  "activityname",
  "activitytypeid",
  "averageheartrate",
  "calories",
  "calorieslink",
  "duration",
  "elevationgain",
  "hasactivezoneminutes",
  "heartratelink",
  "heartratezones",
  "lastmodified",
  "logid",
  "logtype",
  "manualvaluesspecified",
  "originalduration",
  "originalstarttime",
  "starttime",
  "tcxlink",
  "distance",
  "distanceunit",
  "pace",
  "source",
  "speed",
  "steps",
  "user",
  "day",
  "period",
];
const opts = { fields };
var sync = true;
var array = [];

for (let i = 0; i < 1; i++) {
  let date = faker.date.past();
  let date_end = new Date(date.getTime());
  date_end.setHours(date.getHours() + 24);

  let minuteMultiplierItem = {
    minuteMultiplier: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    order: helper.getFakeNumber(0, 100),
    type: "Name",
    zoneName: "Name",
  };

  const activeZoneMinutesItem = {
    minutesInHeartRateZones: [
      minuteMultiplierItem,
      minuteMultiplierItem,
      minuteMultiplierItem,
    ],
    totalMinutes: helper.getFakeNumber(0, 100),
  };

  const activityLevelItem = {
    minutes: helper.getFakeNumber(0, 100),
    name: "sedentary",
  };

  let distance = {
    activity: "text",
    distance: helper.getFakeNumber(0, 100),
  };
  let heartRateZone = {
    caloriesOut: helper.getFakeNumber(0, 100),
    max: helper.getFakeNumber(0, 100),
    min: helper.getFakeNumber(0, 100),
    minutes: helper.getFakeNumber(0, 100),
    name: "text",
  };

  let manualValuesSpecifiedItem = {
    calories: false,
    distance: false,
    steps: false,
  };

  let summary = {
    activeDuration: helper.getFakeNumber(0, 10000000),

    activeZoneMinutes: [
      activeZoneMinutesItem,
      activeZoneMinutesItem,
      activeZoneMinutesItem,
    ],
    activityLevel: [
      activityLevelItem,
      activityLevelItem,
      activityLevelItem,
      activityLevelItem,
      activityLevelItem,
    ],
    activityName: activity[helper.getFakeNumber(0, 30)],
    activityTypeId: helper.getFakeNumber(0, 100000),
    averageHeartRate: helper.getFakeNumber(0, 200),
    calories: helper.getFakeNumber(0, 1000),
    caloriesLink: "http",
    duration: helper.getFakeNumber(0, 10000000),
    elevationGain: helper.getFakeNumber(0, 1000),
    hasActiveZoneMinutes: "true",

    heartRateZones: [heartRateZone, heartRateZone, heartRateZone],
    distances: [distance, distance, distance],
    heartRateLink: "http",

    heartRateZones: [heartRateZone, heartRateZone, heartRateZone],

    lastModified: date,
    logId: helper.getFakeNumber(0, 10000000000000),
    logType: "auto_detected",
    manualValuesSpecified: manualValuesSpecifiedItem,
    originalDuration: helper.getFakeNumber(0, 10000000),
    originalStartTime: faker.date.past(),
    startTime: faker.date.past(),
    steps: helper.getFakeNumber(0, 100000),
    tcxLink: "http",
  };

  if (sync) helper.getJSON(summary);
  else helper.getCSV(summary);

   
}
