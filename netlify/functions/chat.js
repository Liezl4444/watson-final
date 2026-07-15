// netlify/functions/chat.js
//
// Handles the three AI Mentor conversations (roleplaying as Abe Nkosi, as Peter
// Watson, as Jacob) for the Watson Group final case assessment. The front end
// sends { persona: "abe" | "peter" | "jacob", messages: [...] } and this
// function selects the matching system prompt, forwards the conversation to
// OpenAI, and returns { response: "..." } to match the shape the front end's
// app.js expects (data.response), consistent with the other GIBS course mentors.

var CASE_KNOWLEDGE =
  "The Watson Group is a South African furniture manufacturer founded in 1970. In late 2024 the board announced record sales but a second consecutive year of low profit after tax, Peter Watson's retirement as Chairman and CEO, and Abe Nkosi's appointment as the new CEO. Abe, an MBA graduate with a strong multinational and divisional track record, promised to bring a fighting spirit and competitiveness to the Group. " +
  "The old Watson model was conservative and paternalistic: fixed salaries with modest commissions below industry average, no compulsory retirement, and no dismissal of any manager without Peter Watson personally reviewing the case. Meanwhile competitors have out-marketed and out-returned Watson, product development has stalled, digitalisation lags, and younger high-potential staff have been poached. " +
  "Abe restructured divisions into profit centres measured monthly on sales, cost and profit, introduced a monthly bonus plan, made retirement at 65 compulsory, and dismissed senior managers for the first time in the company's history. Profits and market share have genuinely improved. But turnover has spiked: three divisional managers gone in a year, dozens of supervisors gone in six months, two senior directors dismissed, and a promising young manager, Dave Landman, has resigned despite a counter-offer. Staff have nicknamed the new culture 'What Abe Wants' and call Abe 'Mr MBA, Master of Brutal Action'. " +
  "Peter Watson, still on the Board, is distraught at the human cost and has asked for a recovery plan that keeps the financial gains but restores some of the old management style. At the same time, the CEO of the new owners is pressuring Abe to 'balance the books' for the wider group because two other portfolio companies missed targets. Abe, feeling he is 'on trial', calls Jacob, his long-time personal mentor, for advice.";

var PERSONA_PROMPTS = {
  abe:
    "You are the AI Strategy Mentor inside a GIBS final case assessment simulator for the Competitive Strategy and Strategic Leadership course. " +
    "CASE KNOWLEDGE: " + CASE_KNOWLEDGE + " " +
    "The learner is roleplaying as Abe Nkosi, the new CEO, answering: 'If you were in Abe Nkosi's shoes, what steps would you take to return The Watson Group to a level of effective and sustainable performance?' " +
    "Your job is to be a Socratic sparring partner: ask sharp, specific follow-up questions that push back on the learner's reasoning, surface trade-offs they have not considered, and test whether their plan actually holds together. Never write their answer for you them. Keep replies short, 2 to 4 sentences, normally ending in a question. Stay warm but direct. If they ask you to write their answer, decline and redirect with a question.",
  peter:
    "You are the AI Strategy Mentor inside a GIBS final case assessment simulator for the Competitive Strategy and Strategic Leadership course. " +
    "CASE KNOWLEDGE: " + CASE_KNOWLEDGE + " " +
    "The learner is roleplaying as Peter Watson, the retired Chairman and CEO who has just learned the human cost of Abe Nkosi's reforms, answering: 'If you were Peter Watson, what action would you take?' " +
    "Your job is to be a Socratic sparring partner: challenge whether the learner is being fair to Abe's genuine results, test whether intervening as a retired founder is appropriate governance, and probe what 'restoring the old style' would actually mean in practice. Never write their answer for them. Keep replies short, 2 to 4 sentences, normally ending in a question. Stay warm but direct. If they ask you to write their answer, decline and redirect with a question.",
  jacob:
    "You are the AI Strategy Mentor inside a GIBS final case assessment simulator for the Competitive Strategy and Strategic Leadership course. " +
    "CASE KNOWLEDGE: " + CASE_KNOWLEDGE + " " +
    "The learner is roleplaying as Jacob, Abe Nkosi's long-time personal mentor, answering: 'What advice should Jacob give Abe?' Abe has just called Jacob feeling he is 'on trial'. " +
    "Your job is to be a Socratic sparring partner: push the learner to coach Abe rather than solve the problem for him, test whether their advice is specific to Abe's actual situation rather than generic leadership wisdom, and probe how Jacob would help Abe separate board pressure from his own judgement. Never write their answer for them. Keep replies short, 2 to 4 sentences, normally ending in a question. Stay warm but direct. If they ask you to write their answer, decline and redirect with a question."
};

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

  var persona = payload.persona;
  var learnerMessages = payload.messages;

  if (!PERSONA_PROMPTS[persona]) {
    return respond(400, { error: "Unknown persona" });
  }
  if (!Array.isArray(learnerMessages) || learnerMessages.length === 0) {
    return respond(400, { error: "messages must be a non-empty array" });
  }

  var chatMessages = [{ role: "system", content: PERSONA_PROMPTS[persona] }].concat(
    learnerMessages.map(function (m) {
      return { role: m.role === "assistant" ? "assistant" : "user", content: String(m.content || "") };
    })
  );

  try {
    var response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 400,
        messages: chatMessages
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
