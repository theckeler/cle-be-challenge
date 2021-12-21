import { playerOverviews } from "./test.js";
import { playerDetails } from "./test.js";
import { playerOverviews } from "./test.js";

const express = require("express");
const app = express.Router();
const asyncHandler = require("express-async-handler");

app.get(
  "/players",
  asyncHandler(async function (req, res) {
    let playersOverviews = { players: playerOverviews };
    return res.json(playersOverviews);
  })
);

app.get(
  "/players/:playerId",
  asyncHandler(async function (req, res) {
    let singlePlayer = playerDetails.find(
      (obj) => obj.playerId === req.params.playerId
    );
    let playerInfo = { playerDetails: singlePlayer };
    return res.json(playerInfo);
  })
);

app.get(
  "/pitches/:playerId",
  asyncHandler(async function (req, res) {
    let singlePlayerPitches = playerDetails.filter(
      (obj) => obj.pitcherId === req.params.playerId
    );
    let playerInfo = { pitches: singlePlayerPitches };
    return res.json(playerInfo);
  })
);

module.exports = app;
