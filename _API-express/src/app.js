const express = require("express");

const app = express();

const projects = [
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res) {
  // res.send(projects);
  const { start } = req.query;
  const { limit } = req.query;
  res.json(projects.slice(start, limit));
});

app.listen(3100);
