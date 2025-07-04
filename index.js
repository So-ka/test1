const express = require('express');
const app = express();
const port = 3000;

const mock = {
  scanContainer: {
    containerBarcode: "ZI471",
    containerGuid: "4ce768ec-6275-4219-909a-e553b6e75564",
    containerUid: "mirage96sbs",
    groupName: "96 SBS rack",
    scanTime: "20200810 170126",
    orientationBarcodes: {
      orientationBarcode: [{
        row: 0,
        column: 0,
        barcode: "ZIA100010342",
        decodeStatus: "SUCCESS",
        x: 2748,
        y: 560
      }]
    },
    scanId: "da2806f0-f0d0-4b4c-9731-16432edf655b",
    scanTimeAnswers: {
      scanTimeAnswer: [{
        answer: "Simon",
        fullQuestion: "What is your name?",
        shortQuestion: "name"
      }]
    },
    tubeBarcodes: {
      tubeBarcode: [
        {
          row: 1,
          column: 1,
          barcode: "ZI1000950395",
          decodeStatus: "SUCCESS",
          x: 2892,
          y: 437
        },
        {
          row: 1,
          column: 2,
          barcode: "ZI1000950423",
          decodeStatus: "SUCCESS",
          x: 2665,
          y: 437
        },
        {
          row: 1,
          column: 5,
          barcode: "ZI1020950423",
          decodeStatus: "SUCCESS",
          x: 2665,
          y: 437
        },
        {
          row: 7,
          column: 7,
          barcode: "ZI1010950423",
          decodeStatus: "SUCCESS",
          x: 2665,
          y: 437
        },
        {
          row: 2,
          column: 1,
          decodeStatus: "EMPTY",
          x: 617,
          y: 2029
        },
        {
          row: 2,
          column: 2,
          decodeStatus: "EMPTY",
          x: 390,
          y: 2029
        }
      ]
    }
  }
};

app.use(express.json());

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

// 404 Handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Mock API running at http://localhost:${port}/dp5/remote/v1`);
});