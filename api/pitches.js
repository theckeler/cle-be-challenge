import { pitches } from "../data/Pitches";

export default function pitchesExport(req, res) {
  const { query } = req;
  if (query && query.playerId) {
    const message = pitches.filter((el) => {
      if (Number(el.pitcherId) === Number(query.playerId)) {
        return el;
      }
    });

    res.statusCode = 200;
    res.json({ pitches: message });
  } else {
    res.statusCode = 200;
    res.json({ message: "Sorry no dice." });
  }
}
