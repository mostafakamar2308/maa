const { google } = require("googleapis");

export default async function handler(req, res) {
  if (req.method === "GET") {
    const auth = new google.auth.GoogleAuth({
      keyFile: "./secrets.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = process.env.SHEETS_ID;

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Sheet1!A:B",
    });
    return res.status(200).json(getRows.data.values);
  }
  if (req.method === "POST") {
    const { name, email } = req.body;
    if (!email | !name) {
      return res.status(400).json({
        error: "Please fill in all the fields",
      });
    }
    const auth = new google.auth.GoogleAuth({
      keyFile: "./secrets.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = process.env.SHEETS_ID;

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Sheet1!B:B",
    });
    const isThere = getRows.data.values.filter((ele) => ele[0] === email);
    if (isThere.length > 0) {
      return res.status(200).json({ msg: "تم تسجيلك من قبل" });
    }
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[name, email, true, false]],
      },
    });
    return res.status(200).json({ msg: "تم تسجيلك بنجاح" });
  }
}
