const faker = require('faker');

const generateAudience = () => {
  return {
    ad_account_id: faker.datatype.uuid(),
    id: faker.datatype.number(10000).toString(),
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
          product_category: faker.commerce.department(),
          product_id: faker.datatype.number(1000),
          product_name: faker.commerce.productName(),
          product_price: faker.datatype.number(100).toFixed(2),
          product_quantity: faker.datatype.number(10),
          product_variant: faker.random.word(),
          product_variant_id: `${faker.datatype.number(1000)}-${faker.datatype.number(1000)}`
        },
        order_id: `X-${faker.datatype.number(100000)}`,
        order_quantity: faker.datatype.number(10),
        page_name: faker.lorem.words(3),
        promo_code: faker.random.alphaNumeric(8),
        property: faker.company.companyName(),
        search_query: faker.lorem.word(),
        value: faker.finance.amount(),
        video_title: faker.lorem.words(5)
      },
      percentage: faker.datatype.number(100),
      pin_id: [faker.datatype.number(100000).toString()],
      prefill: faker.datatype.boolean(),
      retention_days: faker.datatype.number(30),
      seed_id: [faker.datatype.uuid(), faker.datatype.uuid()],
      url: [faker.internet.url()],
      visitor_source_id: faker.datatype.uuid(),
      event_source: {
        "=": ["web", "mobile"]
      },
      ingestion_source: {
        "=": ["tag"]
      },
      engager_type: faker.datatype.number(5),
      campaign_id: [faker.datatype.uuid()],
      ad_id: [faker.datatype.uuid()],
      objective_type: [faker.random.word()],
    },
    size: faker.datatype.number(10000),
    status: faker.random.word(),
    type: "audience",
    created_timestamp: Math.floor(faker.date.past().getTime() / 1000),
    updated_timestamp: Math.floor(faker.date.recent().getTime() / 1000)
  };
};

const audience = [generateAudience()];

const json = JSON.stringify({ items: audience, bookmark: faker.random.word() }, null, 2);

console.log(json);
