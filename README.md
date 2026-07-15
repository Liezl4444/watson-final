# Watson Group Final Case Assessment — deployment notes

Target site: https://gibs-strategic-watsoncase.netlify.app/

## What's different from your other course mentors

This build follows your standard pattern (index.html + styles.css + app.js at
site root, netlify/functions/, OpenAI via OPEN_AI_KEY, netlify.toml with
ALLOWALL headers) with two additions specific to a final assessment:

- **Two functions, not one.** `chat.js` handles the three roleplay
  conversations (as Abe, as Peter Watson, as Jacob). `mark.js` is new: it
  handles the essay marking call, which needs a different system prompt (the
  full rubric) and a larger max_tokens (1200, versus 400 for chat replies) to
  fit six criteria of structured JSON feedback.
- **Hard-gated flow.** The essay module card stays visually locked until all
  three simulations are marked complete by the learner (a self-report button
  that unlocks after they've sent at least 2 messages in that conversation).
  This is all tracked in-memory in app.js; there is no database, so progress
  does not persist across a page refresh. If you want progress to survive a
  refresh or a closed tab, that would need a small persistence layer (for
  example writing completion state to Netlify's own data store, or asking
  learners not to refresh mid-assessment) — flag it if that matters for this
  cohort.

## Before going live

1. **Set the environment variable.** Netlify dashboard → Site settings →
   Environment variables → add `OPEN_AI_KEY` with your OpenAI key (the
   function also accepts `OPENAI_API_KEY` if that's what's already set for
   your other mentors).
2. **Confirm the real logo is in place** at `assets/gibs-logo-vert.jpg` (I
   removed the placeholder I used for local testing).
3. **Do one live smoke test** end to end: all three simulations, essay
   unlock, essay submission, and a real marked feedback report. I've tested
   the full flow and logic against mocked API responses (zero console errors,
   zero accessibility violations across every state), but haven't been able
   to test against the real OpenAI endpoint or your live Netlify deployment
   from here.
4. **Cost note:** `mark.js` requests 1200 tokens per essay submission, higher
   than the 400 used for chat replies, since it needs to return structured
   feedback across all six rubric criteria in one call. Worth keeping an eye
   on usage once real cohorts start submitting.

## Terminology check

I used "CEO" throughout, matching the case text's own description of Abe
Nkosi's role, rather than "COO" as mentioned earlier. Worth a quick check
with the course facilitator that this is the intended title before this goes
live, since students roleplaying Abe will be reading the case documents
directly.

## Design update: navy/gold flagship visual system

The interface now uses the same navy/gold/cream design language as the Mr. Jonas
build (Playfair Display headings, DM Sans body, navy for structure and
navigation, gold for primary actions and accents). This replaced the original
GIBS Mentor Hub teal/purple/orange palette. All existing CSS class names and
JS logic are unchanged; only the colour tokens and fonts changed, so this
should not affect anything else you've customised.

**Avatar photos:** once you've generated the three persona photos, drop them
into an `assets` folder at the site root with these exact filenames:

- `assets/abe-nkosi.jpg`
- `assets/peter-watson.jpg`
- `assets/jacob.jpg`

The interface already looks for these paths and will show them automatically
in both the profile card and the chat bubbles once they exist. Until then, it
gracefully falls back to a plain navy circle with initials, so nothing looks
broken in the meantime.