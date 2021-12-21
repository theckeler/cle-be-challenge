// `/api/hello.js`
export default function hello(req, res) {
  res.statusCode = 200;
  res.json({ message: "Look ma, I made a json. This is the index" });
}
