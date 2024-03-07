import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface AddSubscriberRequestBody {
  email: string;
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body as AddSubscriberRequestBody;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  try {
    await axios.post(
      `https://us21.api.mailchimp.com/3.0/lists/b109c3c444/members`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    res.status(200).json({ message: "Subscriber added successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error adding subscriber" });
  }
};
