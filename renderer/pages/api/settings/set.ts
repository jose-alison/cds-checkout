import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const settings = JSON.parse(req.body);
  const formData = new URLSearchParams();
  formData.append("name", settings.name);
  formData.append("value", settings.value);
  const response = await fetch("http://127.0.0.1:5000/settings/write", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
