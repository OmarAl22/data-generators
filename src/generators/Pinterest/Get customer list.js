const faker = require('faker');

const generateCustomerList = () => {
  const customerList = {
    ad_account_id: faker.datatype.uuid(),
    created_time: Math.floor(faker.date.past().getTime() / 1000),
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    num_batches: faker.datatype.number(10),
    num_removed_user_records: faker.datatype.number(100),
    num_uploaded_user_records: faker.datatype.number(1000),
    status: faker.random.arrayElement(["PROCESSING", "COMPLETE", "ERROR"]),
    type: "customerlist",
    updated_time: Math.floor(faker.date.recent().getTime() / 1000),
    exceptions: {}
  };

  return customerList;
};

const customerLists = [generateCustomerList()];
const json = JSON.stringify(customerLists, null, 2);

console.log(json);