const faker = require('faker');

const generateAudienceInsights = () => {
  const audienceInsights = {
    items: [
      {
        ad_account_id: faker.datatype.uuid(),
        id: faker.datatype.number(10000),
        name: faker.company.companyName(),
        audience_type: faker.random.word(),
        description: faker.lorem.sentence(),
        rule: {
          country: "US",
          customer_list_id: faker.datatype.uuid(),
          engagement_domain: [faker.internet.url()],
          engagement_type: "click",
          event: "checkout",
          event_data: {
            currency: "USD",
            lead_type: "Newsletter",
            line_items: {
              product_brand: faker.company.companyName(),
              product_category: faker.random.word(),
              product_id: faker.datatype.number(1000),
              product_name: faker.commerce.productName(),
              product_price: faker.commerce.price(),
              product_quantity: faker.datatype.number(10),
              product_variant: faker.random.word(),
              product_variant_id: `${faker.datatype.number(1000)}-${faker.datatype.number(10000)}`
            },
            order_id: faker.random.alphaNumeric(8),
            order_quantity: faker.datatype.number(10),
            page_name: faker.random.words(),
            promo_code: faker.random.alphaNumeric(6),
            property: faker.company.companyName(),
            search_query: faker.random.words(),
            value: faker.commerce.price(),
            video_title: faker.random.words()
          },
          percentage: faker.datatype.number(100),
          pin_id: [faker.datatype.number(100000)],
          prefill: faker.random.boolean(),
          retention_days: faker.datatype.number(30),
          seed_id: [faker.datatype.uuid(), faker.datatype.uuid()],
          url: [faker.internet.url()],
          visitor_source_id: faker.datatype.uuid(),
          event_source: {
            "=": [faker.random.arrayElement(["web", "mobile"])]
          },
          ingestion_source: {
            "=": ["tag"]
          },
          engager_type: faker.datatype.number(10),
          campaign_id: [faker.datatype.uuid()],
          ad_id: [faker.datatype.uuid()],
          objective_type: [faker.random.arrayElement(["AWARENESS", "ENGAGEMENT", "CONVERSIONS"])],
          ad_account_id: faker.datatype.uuid()
        },
        size: faker.datatype.number(10000),
        status: faker.random.word(),
        type: "audience",
        created_timestamp: Math.floor(faker.date.past().getTime() / 1000),
        updated_timestamp: Math.floor(faker.date.recent().getTime() / 1000)
      }
    ],
    bookmark: faker.random.word()
  };

  return audienceInsights;
};

const audienceInsightsData = generateAudienceInsights();
const json = JSON.stringify(audienceInsightsData, null, 2);

console.log(json);
