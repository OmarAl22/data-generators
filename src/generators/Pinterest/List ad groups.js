const faker = require('faker');

const generateAdGroup = () => {
  const adGroupId = faker.datatype.uuid();
  const campaignId = faker.datatype.uuid();
  const startTime = Math.floor(faker.date.recent().getTime() / 1000);
  const endTime = startTime + faker.datatype.number({ min: 3600, max: 86400 }); // Add 1-24 hours

  const adGroup = {
    name: `Ad Group For Pin: ${faker.datatype.number(100000000000)}`,
    status: "ACTIVE",
    budget_in_micro_currency: faker.datatype.number(1000000, 10000000),
    bid_in_micro_currency: faker.datatype.number(1000000, 10000000),
    optimization_goal_metadata: {
      conversion_tag_v3_goal_metadata: {
        attribution_windows: {
          click_window_days: 0,
          engagement_window_days: 0,
          view_window_days: 0,
        },
        conversion_event: "PAGE_VISIT",
        conversion_tag_id: faker.datatype.uuid(),
        cpa_goal_value_in_micro_currency: faker.datatype.string(),
        is_roas_optimized: true,
        learning_mode_type: "ACTIVE",
      },
      frequency_goal_metadata: {
        frequency: 0,
        timerange: "DAY",
      },
      scrollup_goal_metadata: {
        scrollup_goal_value_in_micro_currency: faker.datatype.string(),
      },
    },
    budget_type: "DAILY",
    start_time: startTime,
    end_time: endTime,
    targeting_spec: {
      AGE_BUCKET: ["35-44", "50-54"],
      APPTYPE: ["ipad", "iphone"],
      AUDIENCE_EXCLUDE: [faker.datatype.string()],
      AUDIENCE_INCLUDE: [faker.datatype.string()],
      GENDER: ["unknown"],
      GEO: [faker.datatype.string()],
      INTEREST: [faker.datatype.string()],
      LOCALE: [faker.datatype.string()],
      LOCATION: [faker.datatype.string()],
      SHOPPING_RETARGETING: [
        {
          lookback_window: 30,
          exclusion_window: 14,
          tag_types: [0, 6],
        },
      ],
      TARGETING_STRATEGY: ["CHOOSE_YOUR_OWN"],
    },
    lifetime_frequency_cap: 100,
    tracking_urls: {
      impression: [faker.internet.url(), faker.internet.url()],
      click: [faker.internet.url(), faker.internet.url()],
      engagement: [faker.internet.url(), faker.internet.url()],
      buyable_button: [faker.internet.url(), faker.internet.url()],
      audience_verification: [faker.internet.url(), faker.internet.url()],
    },
    auto_targeting_enabled: true,
    placement_group: "ALL",
    pacing_delivery_type: "STANDARD",
    campaign_id: campaignId,
    billable_event: "CLICKTHROUGH",
    bid_strategy_type: "MAX_BID",
    id: adGroupId,
    ad_account_id: faker.datatype.uuid(),
    created_time: Math.floor(faker.date.past().getTime() / 1000),
    updated_time: Math.floor(faker.date.recent().getTime() / 1000),
    type: "adgroup",
    conversion_learning_mode_type: "ACTIVE",
    summary_status: "RUNNING",
    feed_profile_id: campaignId,
    dca_assets: null,
  };

  return adGroup;
};

const adGroups = [generateAdGroup()];
const json = JSON.stringify({ items: adGroups, bookmark: faker.random.word() }, null, 2);

console.log(json);
