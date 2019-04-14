var http = require("https");

var options = {
  "method": "POST",
  "hostname": [
    "api",
    "evenfinancial",
    "com"
  ],
  "path": [
    "leads",
    "rateTables"
  ],
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2",
    "cache-control": "no-cache",
    "Postman-Token": "7a5be88f-f3fe-46b1-ad90-f0b691bf0417"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ personalInformation: 
   { firstName: 'Jane',
     lastName: 'Doe',
     email: 'john@example.com',
     city: 'New York',
     state: 'NY',
     workPhone: '2125551234',
     primaryPhone: '2125556789',
     address1: '45 West 21st Street',
     address2: '5th Floor',
     zipcode: '10010',
     monthsAtAddress: 5,
     driversLicenseNumber: '111222333',
     driversLicenseState: 'NY',
     ipAddress: '8.8.8.8',
     activeMilitary: false,
     militaryVeteran: true,
     dateOfBirth: '1998-10-09',
     educationLevel: 'bachelors',
     ssn: '857-96-4941' },
  loanInformation: { purpose: 'home_refi', loanAmount: 10000 } }));
req.end();