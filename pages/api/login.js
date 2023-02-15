import cookie from "cookie";

export default async function handler(req, res) {
  const { method } = req;
  const { username, password } = req.body;

  if (method === "POST") {
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.SESSION_TOKEN, {
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    );
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  }
}
