const express = require('express');
const app = express();
const port = 3000;

const mock = {
  scanContainer: {
    containerBarcode: "ZI998",
    containerGuid: "c13b5bb0-b62d-4fd8-8542-1e6cf9388c19",
    containerUid: "phantom96sbs",
    groupName: "96 SBS rack",
    scanTime: "20250704 143211",
    orientationBarcodes: {
      orientationBarcode: [{
        row: 0,
        column: 0,
        barcode: "ZIA200045678",
        decodeStatus: "SUCCESS",
        x: 2780,
        y: 580
      }]
    },
    scanId: "a7e2cd1f-13fa-4c3a-91b6-91f117f65d79",
    scanTimeAnswers: {
      scanTimeAnswer: [{
        answer: "Alex",
        fullQuestion: "What is your name?",
        shortQuestion: "name"
      }]
    },
    tubeBarcodes: {
      tubeBarcode: [
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
        },
        {
          row: 2,
          column: 8,
          decodeStatus: "EMPTY",
          x: 2370,
          y: 720
        },
        {
          row: 4,
          column: 4,
          decodeStatus: "EMPTY",
          x: 1950,
          y: 1080
        },
        {
          row: 8,
          column: 10,
          decodeStatus: "EMPTY",
          x: 100,
          y: 1850
        }
      ]
    }
  }
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
// 404 Handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}/dp5/remote/v1`);
});