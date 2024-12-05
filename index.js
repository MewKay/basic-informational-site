const http = require("http");
const fs = require("fs/promises");

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  const filepath = req.url === "/" ? "./index.html" : `.${req.url}.html`;

  try {
    const data = await fs.readFile(filepath, { encoding: "utf-8" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
  } catch (e) {
    console.error(e);
    res.writeHead(404, { "Content-Type": "text/html" });
    const page404 = await fs.readFile("./404.html", { encoding: "utf-8" });
    res.write(page404);
  }

  res.end();
});

server.listen(PORT);
