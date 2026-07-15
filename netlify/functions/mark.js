// netlify/functions/mark.js
//
// Marks the learner's final Watson Group essay (written as Abe Nkosi) against
// the official 100-mark rubric. The front end sends { rubric, report } and
// this function returns { response: "<JSON string>" } for the front end to
// parse, matching the same { response } contract used by chat.js.

var CASE_KNOWLEDGE =
  "The Watson Group is a South African furniture manufacturer founded in 1970. In late 2024 the board announced record sales but a second consecutive year of low profit after tax, Peter Watson's retirement as Chairman and CEO, and Abe Nkosi's appointment as the new CEO. " +
  "The old Watson model was conservative and paternalistic: fixed salaries with modest commissions below industry average, no compulsory retirement, and no dismissal of any manager without Peter Watson personally reviewing the case. Competitors have out-marketed and out-returned Watson, product development has stalled, digitalisation lags, and younger high-potential staff have been poached. " +
  "Abe restructured divisions into profit centres measured monthly on sales, cost and profit, introduced a monthly bonus plan, made retirement at 65 compulsory, and dismissed senior managers for the first time in the company's history. Profits and market share have genuinely improved, but turnover has spiked and trust has been damaged. Peter Watson wants a recovery plan that keeps the financial gains while restoring some of the old management style, while the new owners are pressuring Abe to deliver even more.";

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  var apiKey = process.env.OPEN_AI_KEY || process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return respond(500, { error: "Server is missing the OpenAI API key. Set OPEN_AI_KEY in Netlify site settings." });
  }

  var payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return respond(400, { error: "Invalid JSON body" });
  }

  if (!payload.rubric || !payload.report) {
    return respond(400, { error: "rubric and report are required" });
  }

  var systemPrompt =
    "You are an assessor marking a learner's Watson Group Strategic Turnaround essay for a GIBS Strategic Leadership course. The learner wrote the essay in role as Abe Nkosi, the new CEO, tasked with fixing the company, then closed with a short reflection connecting Watson Group to their own organisation. " +
    "CASE KNOWLEDGE: " + CASE_KNOWLEDGE + " " +
    "RUBRIC (six criteria, total 100 marks):\n" + payload.rubric + "\n\n" +
    "Mark the learner's submitted responses against each criterion using the band descriptors. Be fair, specific, and developmental, this is formative practice feedback, not a final grade. " +
    "Respond with ONLY valid JSON, no markdown fences, no commentary, in exactly this shape: " +
    '{"criteria":[{"id":"diagnosis","marksAwarded":0,"rationale":""},{"id":"frameworks","marksAwarded":0,"rationale":""},{"id":"advice","marksAwarded":0,"rationale":""},{"id":"process","marksAwarded":0,"rationale":""},{"id":"evidence","marksAwarded":0,"rationale":""},{"id":"personal","marksAwarded":0,"rationale":""}],"strengths":"","nextSteps":""} ' +
    "Rationale for each criterion should be 1 to 2 sentences, specific to what the learner wrote. Strengths and nextSteps should each be 2 to 3 sentences, developmental in tone.";

  try {
    var response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 1200,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: payload.report }
        ]
      })
    });

    var data = await response.json();
    var text = data && data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : "";

    return respond(200, { response: text });
  } catch (err) {
    return respond(502, { error: "Could not reach OpenAI" });
  }
};

function respond(statusCode, bodyObj) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyObj)
  };
}
