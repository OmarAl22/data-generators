const faker = require('faker');

// Function to generate a random URL
const generateRandomURL = () => {
  return faker.internet.url();
};

// Function to generate the JSON data
const generateJsonData = () => {
  const jsonData = {
    ad_group_id: "2680059592705",
    android_deep_link: "string",
    carousel_android_deep_links: ["string"],
    carousel_destination_urls: ["string"],
    carousel_ios_deep_links: ["string"],
    click_tracking_url: "string",
    creative_type: "REGULAR",
    destination_url: "string",
    ios_deep_link: "string",
    is_pin_deleted: false,
    is_removable: false,
    name: "string",
    status: "ACTIVE",
    tracking_urls: {
      impression: [generateRandomURL(), generateRandomURL()],
      click: [generateRandomURL(), generateRandomURL()],
      engagement: [generateRandomURL(), generateRandomURL()],
      buyable_button: [generateRandomURL(), generateRandomURL()],
      audience_verification: [generateRandomURL(), generateRandomURL()],
    },
    view_tracking_url: "string",
    lead_form_id: "string",
    pin_id: "394205773611545468",
    ad_account_id: "549755885175",
    campaign_id: "626735565838",
    collection_items_destination_url_template: "string",
    created_time: 1451431341,
    id: "687195134316",
    rejected_reasons: ["HASHTAGS"],
    rejection_labels: ["string"],
    review_status: "PENDING",
    type: "pinpromotion",
    updated_time: 1451431341,
    summary_status: "APPROVED",
  };

  return jsonData;
};

// Generate JSON data
const jsonData = generateJsonData();

// Convert JSON data to a string
const jsonString = JSON.stringify(jsonData, null, 2);

// Print the JSON data
console.log(jsonString);

 