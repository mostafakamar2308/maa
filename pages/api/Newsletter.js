const { google } = require("googleapis");
const path = require("path");

export default async function handler(req, res) {
  const { method } = req;
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), "secrets.json"),
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = process.env.SHEETS_ID;
  switch (method) {
    case "GET":
      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
      });
      res.status(200).json(getRows.data.values);
      break;
    case "POST":
      const { name, email } = req.body;
      if (!email | !name) {
        res.status(400).json({
          code: 404,
          error: "Please fill in all the fields",
        });
      }

      const getRowsForValidation = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!B:B",
      });
      const isThere = getRowsForValidation.data.values.filter(
        (ele) => ele[0] === email
      );
      if (isThere.length > 0) {
        return res.status(400).json({ code: 400, msg: "تم تسجيلك من قبل" });
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
      return res.status(200).json({ code: 200, msg: "تم تسجيلك بنجاح" });
      break;
  }
}
