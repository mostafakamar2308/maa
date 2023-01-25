export default function handler(req, res) {
  const { name, email } = req.body;
  if (!email | !name) {
    return res.status(400).json({
      error: "Please fill in all the fields",
    });
  }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: "",
        },
      },
    ],
  };
  const postData = JSON.stringify(data);

  fetch("https://us13.api.mailchimp.com/3.0/lists/" + process.env.ListId, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.MailChimpAPIKey,
    },
    body: postData,
  })
    .then((response) => {
      console.log(res.statusCode);
      console.log("success");
      return "success";
    })
    .catch((err) => {
      console.log(err);
    });

  res.status(200).json("success");
}
