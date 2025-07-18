const express = require('express');
const app = express();
const port = 3000;

const mock = {
      scanId: "abc123",
      containerBarcode: "ZI998",
      containerName: "phantom96sbs",
      tubeBarcodes: [
        {
          row: 1,
          column: 3,
          barcode: "ZI1234567890",
          decodeStatus: "SUCCESS",
          x: 2100,
          y: 470
        },
        {
          row: 3,
          column: 6,
          barcode: "ZI0987654321",
          decodeStatus: "SUCCESS",
          x: 1800,
          y: 860
        },
        {
          row: 5,
          column: 9,
          barcode: "ZI8765432190",
          decodeStatus: "SUCCESS",
          x: 1500,
          y: 1250
        },
        {
          row: 7,
          column: 1,
          barcode: "ZI7654321098",
          decodeStatus: "SUCCESS",
          x: 1100,
          y: 1720
        },
        {
          row: 6,
          column: 5,
          barcode: "ZI3456789012",
          decodeStatus: "SUCCESS",
          x: 1650,
          y: 1400
        }
      ]
    };

app.use(express.json());
//


// Route: /PHPApi/dp5/remote/v1
app.all('/dp5/remote/v1/', (req, res) => {
  if (req.method === 'POST') {
    res.json({ error: "OK" });
  } else {
    res.status(200).json({ error: "OK" });
  }
}
);
app.all('/dp5/remote/v1/scan', (req, res) => {
  if (req.method === 'POST') {
    res.json(mock);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
});
app.get('/dp5/remote/v1/system/version', (req, res) => {
  res.json({
    version: "1.0.0",
    build: "20250704",
    apiVersion: "v1",
    statuscode: 200,
  });
});
app.get('/dp5/remote/v1/containers', (req, res) => {
  res.json([{
    uid: "c48-1",
    type: "mirage48sbs",
    name: "48-Well Rack 1",
    barcode: "RACK1234567890",
    status: "READY"
  }, {
    uid: "c96-1",
    type: "mirage96sbs",
    name: "96-Well Rack 1",
    barcode: "RACK0987654321",
    status: "READY"
  }]);
});

// 404 Handler for unmatched routes
// app.use((req, res) => {
//   res.status(404).json({ error: "Not Found" });
// });

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}/dp5/remote/v1`);
});