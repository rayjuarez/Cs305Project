import Express from "express";
const app = Express();
const http = import("http");
import path from "path";
const __dirname = path.resolve();
app.use(Express.static("styler"));
const PORT = process.env.PORT || 3000;

  app.get('/', (request, response) => {
    response.sendFile(__dirname + '/webpage/index.html');
  });
  app.get('/index.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/index.html');
  });
  app.get('/form.html', (request, response) => {
    response.sendFile(__dirname + '/webpage/form.html');
  });
  app.get('/games.html', (request, response) => {
    response.sendFile( __dirname + '/webpage/games.html');
  });

  const listener = app.listen(PORT, () => {
      console.log("Project website is LIVE at " + PORT);
    });
