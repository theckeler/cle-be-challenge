import { playerDetails } from "../data/PlayerDetails";
import { playerOverviews } from "../data/PlayerOverviews";

export default function playersExport(req, res) {
  const { query } = req;

  if (query && query.playerId) {
    let message = {};

    playerDetails.filter(function (el) {
      if (Number(el.playerId) === Number(query.playerId)) {
        message = el;
      }
    });

    res.statusCode = 200;
    res.json({ playerDetail: message });
  } else {
    res.statusCode = 200;
    res.json({ players: playerOverviews });
  }
}
