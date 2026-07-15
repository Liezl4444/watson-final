(function () {
  "use strict";

  /* ===================== Case knowledge (for display) ===================== */

  var CASE_TEXT_A =
    "In late 2024, the board of directors of The Watson Group simultaneously announced to the press: the highest sales in the company's history; a second year of low profits after tax; the retirement of Peter Watson, who had been Chairman and CEO of the Group for many years; the appointment of Nonkululeko Sibanda, the Deputy Chairperson, as the incoming Chair of the Board; and the appointment of Abe Nkosi as the new Chief Executive Officer.\n\n" +
    "Founded in 1970, the Watson Group had long been identified as a family business in style and ownership, built on high ethical standards, a quality product, and family values. In 2023 the organisation was renamed from Watson Brothers to The Watson Group, and 45% of the shares were sold to a new investor; by 2024 the family owned less than half the shares.\n\n" +
    "Watson was a widely respected manufacturer and distributor of quality, branded furniture for South Africa, Kenya, Ghana and Zambia, processed across four South African plants plus a new Ghana plant, employing roughly 2,500 people.\n\n" +
    "A long-serving manager explained the original success: production- and volume-oriented strategy, quality at an affordable cost, limited competition. But in the past decade, major competitors, one in particular a first-class marketing group that has doubled sales and profits in five years, have outpaced Watson in returns and market aggression. Gross sales grew to over R6.5bn, but net profits and market share have dropped. Product range, marketing technique and production technology are out of date. Productivity has lagged, labour disputes have not helped, currency weakness has hurt margins, and younger high-potential staff have been lured away by competitors. R&D spend was cut back after the 1990s, and there has been no major product introduction for years.\n\n" +
    "Structurally, Watson was organised into manufacturing (four regional divisions) and sales and distribution (eight product-type divisions plus regional sales divisions). Sales staff were on fixed salaries with modest commissions, compensation below industry average. Management was conservative: inflation-linked annual increases regardless of performance, no compulsory retirement, and no dismissal of any manager without Peter Watson personally reviewing the case. Executive turnover had historically been very low; the family trust supported employees and community organisations for 60 years.\n\n" +
    "Despite this, younger staff had been rumbling. Watson also acknowledged itself as behind on digitalisation: systems were efficient but slow, and top management lacked real-time performance data.\n\n" +
    "At the November 2024 management conference in Sandton, after the long-service awards, Peter Watson announced that an entrepreneurial investment group would shortly buy a stake and take control, and that Abe Nkosi would take over as CEO from month-end. Abe, MBA 2014, five years at a multinational in strategy and marketing, then youngest divisional managing director in the history of the YES Group, growing his division to be the most profitable, spoke of infusing the Group with 'a fighting spirit' and competitiveness, closing with: 'Once we have done that, I have but one goal, each month must be better than the last.'";

  var CASE_TEXT_B =
    "Steve Conradie, General Manager of Watson's Gauteng Sales Division and a 20-year Watson veteran with a strong sales-growth and cost-control record, visits Peter Watson, who has stayed on the Board at Abe's request. Conradie is troubled: Dave Landman, his most promising young manager, is resigning, citing the stress of Watson's new culture, code-named 'What Abe Wants' by staff.\n\n" +
    "Conradie describes real change: three divisional managers lost in a year, a couple of dozen middle and first-line supervisors gone in six months, two senior directors dismissed, previously unheard of, and intensified inter-divisional competition, turning 'a cooperative group into a competitive jungle.' Divisions now operate as profit centres measured monthly on sales, cost and profit against budget. A monthly bonus plan is working: most of Conradie's sales team hit a 25% bonus for five months running, and Conradie himself was the only divisional manager to hit 100% bonus in December.\n\n" +
    "But Conradie is torn: results are genuinely better, profits improved this year, yet he feels the 'Watson spirit', the end-of-month lunches, quarterly golf days, personal loyalty, is being lost, alongside senior people who gave decades to the company. He asks Peter Watson to speak to Abe, nicknamed 'Mr MBA, Master of Brutal Action' by some staff.";

  var CASE_TEXT_C =
    "Abe Nkosi, after a hard training session, reflects in the sauna on the past year: the numbers show a real turnaround, the board is pleased, his bonus paid off his mortgage, and the sales bonus plan has made Watson's salaries competitive and lifted market share.\n\n" +
    "Earlier that day, Peter Watson met Abe for lunch, visibly distraught, with a list of managers who had left Watson over the past ten months. Pensions are poor; Watson only introduced a compulsory pension scheme ten years ago. Abe had ended the practice of allowing staff to work past 65 and insisted on retirement at 65 to bring in new, more tech-savvy talent; there were many tearful retirement parties. Abe funded generous termination settlements from the year's increased profits and cost cutting.\n\n" +
    "Peter Watson, emotional, describes record staff turnover, unprecedented internal competition between divisions, and says 'there was more to life than numbers.' He asks for a recovery plan for the next board meeting that maintains the financial gains but has Abe 'take his foot off the accelerator' and use more of Watson's former management style.\n\n" +
    "That afternoon, Dave Landman's resignation letter arrives despite a promised promotion and a 35% salary increase. As Abe leaves for the gym, the CEO of the new owners phones: two of their other portfolio companies missed targets, so the group is relying on Watson to 'balance the books' this quarter. Abe, feeling he is 'on trial,' decides to call Jacob, his long-time personal mentor, for advice as he drives home.";

  var CASE_TEXTS = { A: CASE_TEXT_A, B: CASE_TEXT_B, C: CASE_TEXT_C };

  /* ===================== Simulation data ===================== */

  var SIMULATIONS = [
    {
      id: "abe",
      moduleClass: "module1",
      cardNumber: "1",
      cardTitle: "Simulation A: In Abe Nkosi's Shoes",
      cardDescription: "Step into the new CEO's chair and test your turnaround thinking.",
      casePart: "A",
      caseLabel: "Case Document A: The Handover",
      photo: "assets/abe-nkosi.jpg",
      profileKicker: "Simulation A \u00b7 AI Mentor Moment",
      profileRole: "Strategic sparring partner",
      profilePurpose: "You are Abe Nkosi. If you were in his shoes, what steps would you take to return The Watson Group to a level of effective and sustainable performance? State your position, then defend it.",
      profileChip: "Roleplay: Abe Nkosi, CEO of The Watson Group",
      conversationTitle: "If you were Abe Nkosi\u2026",
      conversationSubtitle: "Case Document A \u00b7 The handover",
      briefIntro: "Read Case Document A before you begin. Speak as Abe Nkosi: what would you actually do to fix Watson Group, and why?",
      insights: [
        "Distinguishing the financial symptom from the deeper structural and cultural causes",
        "Weighing short-term performance pressure against long-term organisational health",
        "Deciding what to change immediately and what to sequence later",
        "Anticipating how the board and the workforce will each react to your plan"
      ],
      promptList: [
        "State your initial position: as Abe Nkosi, what would you do first?",
        "The Mentor will push back on your reasoning. Respond directly.",
        "Defend or revise your position until it holds up to scrutiny.",
        "Mark this reflection complete when you have a position you would stand behind."
      ]
    },
    {
      id: "peter",
      moduleClass: "module2",
      cardNumber: "2",
      cardTitle: "Simulation B: In Peter Watson's Shoes",
      cardDescription: "See the turnaround through the eyes of the man who built the culture Abe is dismantling.",
      casePart: "B",
      caseLabel: "Case Document B: Steve Conradie's Visit",
      photo: "assets/peter-watson.jpg",
      profileKicker: "Simulation B \u00b7 AI Mentor Moment",
      profileRole: "Strategic sparring partner",
      profilePurpose: "You are Peter Watson. If you were Peter Watson, what action would you take? He has just learned the human cost of Abe's reforms. State what you would do, then defend it.",
      profileChip: "Roleplay: Peter Watson, retired Chairman and CEO",
      conversationTitle: "If you were Peter Watson\u2026",
      conversationSubtitle: "Case Document B \u00b7 Steve Conradie's visit",
      briefIntro: "Read Case Document B before you begin. Speak as Peter Watson: what action would you actually take, knowing what you now know?",
      insights: [
        "Recognising what Abe's reforms have genuinely improved, not just what they have cost",
        "Separating personal loyalty from sound governance",
        "Judging how much authority a retired founder still has, and should use",
        "Weighing intervention against trusting the new CEO's mandate"
      ],
      promptList: [
        "State your initial position: as Peter Watson, what would you do?",
        "The Mentor will push back on your reasoning. Respond directly.",
        "Defend or revise your position until it holds up to scrutiny.",
        "Mark this reflection complete when you have a position you would stand behind."
      ]
    },
    {
      id: "jacob",
      moduleClass: "module3",
      cardNumber: "3",
      cardTitle: "Simulation C: Advising Abe as Jacob",
      cardDescription: "Give the mentor's advice Abe is driving home to receive.",
      casePart: "C",
      caseLabel: "Case Document C: Abe's Reflection",
      photo: "assets/jacob.jpg",
      profileKicker: "Simulation C \u00b7 AI Mentor Moment",
      profileRole: "Strategic sparring partner",
      profilePurpose: "You are Jacob, Abe's long-time personal mentor. What advice should Jacob give Abe? Abe is on the phone, feeling he is 'on trial'. State your advice, then defend it.",
      profileChip: "Roleplay: Jacob, Abe Nkosi's personal mentor",
      conversationTitle: "What advice should Jacob give Abe?",
      conversationSubtitle: "Case Document C \u00b7 Abe's reflection",
      briefIntro: "Read Case Document C before you begin. Speak as Jacob: what would you actually tell Abe right now, and why?",
      insights: [
        "Coaching a leader rather than solving the problem for them",
        "Naming the trade-off between performance and organisational trust honestly",
        "Helping Abe distinguish board pressure from his own judgement",
        "Giving advice specific to Abe's situation rather than generic leadership platitudes"
      ],
      promptList: [
        "State your initial advice: as Jacob, what would you tell Abe?",
        "The Mentor will push back on your reasoning. Respond directly.",
        "Defend or revise your advice until it holds up to scrutiny.",
        "Mark this reflection complete when you have advice you would stand behind."
      ]
    }
  ];

  var SIM_ORDER = ["abe", "peter", "jacob"];

  /* ===================== Essay rubric (Abe's-voice framing, official rubric preserved for marking) ===================== */

  var CRITERIA = [
    {
      id: "diagnosis", num: 1, title: "Your Diagnosis", marks: 25,
      why: "As CEO, your diagnosis is the foundation everything else is built on. Separate symptoms, like declining profit and high turnover, from the deeper strategic, organisational, cultural and leadership root causes.",
      questions: [
        "What evidence tells you Watson's problem is more than a financial issue?",
        "Which issues are symptoms, and which are root causes?",
        "How are Watson's environment, strategy, organisation and leadership misaligned?"
      ],
      placeholder: "As CEO, what is really happening at Watson Group? Distinguish symptoms from root causes...",
      band: [
        ["22\u201325", "Clear, insightful diagnosis. Distinguishes symptoms from root causes across market, organisation, culture and leadership."],
        ["18\u201321", "Clear diagnosis of most major issues; some connections between market, organisation, culture and leadership underdeveloped."],
        ["13\u201317", "Identifies some relevant problems; more descriptive than analytical; may focus mainly on obvious issues."],
        ["0\u201312", "Superficial or incomplete diagnosis; largely repeats case facts or treats the issue as a single problem."]
      ]
    },
    {
      id: "frameworks", num: 2, title: "Your Frameworks", marks: 18,
      why: "Frameworks are tools for judgement, not labels to name-drop. Show how you see Watson's environment, strategy, organisation and leadership interacting as a system.",
      questions: [
        "Which course frameworks give you the clearest lens on this situation?",
        "Can you show how Watson's environment, strategy, organisation and leadership are misaligned, rather than just naming a framework?"
      ],
      placeholder: "Which frameworks are you applying to make sense of Watson Group, and how exactly do they apply here?",
      band: [
        ["16\u201318", "Applies frameworks meaningfully and selectively; integrated into the argument rather than listed."],
        ["13\u201315", "Uses relevant frameworks appropriately; some applications uneven or treated separately."],
        ["9\u201312", "Refers to frameworks but application is limited, mechanical or loosely connected to the case."],
        ["0\u20138", "Little or no meaningful use of course frameworks."]
      ]
    },
    {
      id: "advice", num: 3, title: "Your Decisions as CEO", marks: 22,
      why: "You have improved performance and introduced necessary urgency, but your approach has also damaged trust and morale. A strong response holds both realities at once rather than simply defending or second-guessing yourself.",
      questions: [
        "What have you improved, and what has your approach damaged?",
        "What would a balanced, context-sensitive way forward actually look like?"
      ],
      placeholder: "What are you deciding to do as CEO, and why is it the right call given both performance and organisational health?",
      band: [
        ["19\u201322", "Balanced, practical, context-sensitive decisions recognising both performance gains and damage to trust and culture."],
        ["16\u201318", "Sound decisions addressing both performance and organisational health; some room for more specificity."],
        ["11\u201315", "Generally relevant decisions but may be one-sided or under-qualified."],
        ["0\u201310", "Weak, unrealistic or one-dimensional decisions; may simply justify past actions without reflection."]
      ]
    },
    {
      id: "process", num: 4, title: "Your Turnaround Plan", marks: 15,
      why: "A list of good ideas is not a turnaround plan. Sequence your actions: what happens first, next and over time, and anticipate the risks along the way.",
      questions: [
        "What will you do first, next, and over time?",
        "What risks or trade-offs will you need to manage during the turnaround?"
      ],
      placeholder: "Lay out your phased turnaround plan. What happens first, what follows, and what risks need managing?",
      band: [
        ["13\u201315", "Clear, phased plan; explains first, next and over time; balances short-term performance with long-term renewal; anticipates risk."],
        ["10\u201312", "Logical actions with some sequencing; aware the turnaround must be managed as a process."],
        ["7\u20139", "Actions with limited sequencing; reads more like a list than a plan."],
        ["0\u20136", "Little or no process; actions unsequenced or disconnected from implementation."]
      ]
    },
    {
      id: "evidence", num: 5, title: "Your Evidence and Reasoning", marks: 10,
      why: "Strong analysis is anchored in the case, not general opinion. Show that your diagnosis and your plan are tightly connected and supported by specific evidence.",
      questions: [
        "Which specific pieces of case evidence most strongly support your argument?",
        "Do your decisions clearly follow from your diagnosis, or are they only loosely connected?"
      ],
      placeholder: "Point to the specific case evidence underpinning your diagnosis and plan, and show how they connect as a system.",
      band: [
        ["9\u201310", "Specific case evidence; coherent, persuasive reasoning; diagnosis and plan strongly connected as a system."],
        ["7\u20138", "Relevant case evidence; generally clear reasoning; most decisions flow from the diagnosis."],
        ["5\u20136", "Some evidence used; reasoning uneven, descriptive or partially unsupported."],
        ["0\u20134", "Little or no case evidence; reasoning unclear or unsupported."]
      ]
    },
    {
      id: "personal", num: 6, title: "From Watson to My Organisation", marks: 10,
      why: "Watson Group is a mirror. Hold your own organisation up against it: what's similar, what's different, and what one realistic leadership action follows from that comparison.",
      questions: [
        "How does the Watson Group situation compare with your own organisational, industry or leadership context?",
        "What is one practical leadership action you could realistically take, including a risk or trade-off you would need to manage?"
      ],
      placeholder: "Connect one Watson Group issue to your own context. Apply a course framework, and identify one practical leadership action with a realistic risk or trade-off.",
      band: [
        ["9\u201310", "Thoughtful, specific connection to own context; applies a framework; identifies a practical action with a realistic risk or trade-off."],
        ["7\u20138", "Clear connection to own context; uses a relevant framework and identifies a practical action."],
        ["5\u20136", "General connection to own context; application may be descriptive or loosely linked."],
        ["0\u20134", "Little or no meaningful personal application; generic or disconnected from the case."]
      ]
    }
  ];

  var TOTAL_MARKS = CRITERIA.reduce(function (sum, c) { return sum + c.marks; }, 0);
  var MIN_WORDS = 40;
  var MIN_SIM_MESSAGES = 2;
  var CHAT_ENDPOINT = "/.netlify/functions/chat";
  var MARK_ENDPOINT = "/.netlify/functions/mark";

  /* ===================== State ===================== */

  var state = {
    completed: {},          // { abe: true, peter: false, jacob: false }
    simMessages: {},        // { abe: [{role,content}], ... }
    simSentCount: {},       // { abe: 2, ... }
    activeSim: null,
    essayResponses: {},
    essayFeedback: null
  };
  SIM_ORDER.forEach(function (id) {
    state.completed[id] = false;
    state.simMessages[id] = [];
    state.simSentCount[id] = 0;
  });

  /* ===================== DOM helpers ===================== */

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function wordCount(text) {
    var t = (text || "").trim();
    if (!t) return 0;
    return t.split(/\s+/).length;
  }

  function allSimsComplete() {
    return SIM_ORDER.every(function (id) { return state.completed[id]; });
  }

  /* ===================== Hub rendering ===================== */

  function renderFullCase() {
    var container = document.getElementById("fullCaseText");
    if (container.childElementCount > 0) return;
    var parts = [
      { label: "Part A \u2014 The handover", text: CASE_TEXT_A },
      { label: "Part B \u2014 Steve Conradie's visit to Peter Watson", text: CASE_TEXT_B },
      { label: "Part C \u2014 Abe Nkosi's reflection", text: CASE_TEXT_C }
    ];
    parts.forEach(function (p) {
      var h4 = el("h3", { text: p.label });
      container.appendChild(h4);
      p.text.split("\n\n").forEach(function (para) {
        var pEl = el("p", { class: "case-extract", text: para });
        container.appendChild(pEl);
      });
    });
  }

  function renderStepper() {
    var stepper = document.getElementById("assessmentStepper");
    stepper.innerHTML = "";
    SIMULATIONS.forEach(function (sim, idx) {
      var li = el("li", { "data-complete": state.completed[sim.id] ? "true" : "false" }, [
        el("span", { class: "step-dot", "aria-hidden": "true", text: String(idx + 1) }),
        el("span", { text: sim.cardTitle.replace(/^Simulation [A-Z]: /, "") })
      ]);
      stepper.appendChild(li);
    });
    var essayLi = el("li", { "data-complete": state.essayFeedback ? "true" : "false" }, [
      el("span", { class: "step-dot", "aria-hidden": "true", text: "4" }),
      el("span", { text: "Final essay" })
    ]);
    stepper.appendChild(essayLi);
  }

  function renderHub() {
    renderStepper();
    var grid = document.getElementById("moduleGrid");
    grid.innerHTML = "";

    SIMULATIONS.forEach(function (sim) {
      var card = el("button", {
        type: "button",
        class: "module-card " + sim.moduleClass,
        "aria-label": "Open " + sim.cardTitle
      }, [
        el("span", { class: "module-number", text: "Simulation " + sim.cardNumber }),
        el("span", { class: "module-title", text: sim.cardTitle }),
        el("span", { class: "module-description", text: sim.cardDescription }),
        el("span", { class: "module-link", text: state.completed[sim.id] ? "Completed \u2713 \u00b7 Revisit" : "Begin \u2192" })
      ]);
      card.addEventListener("click", function () { openSimulation(sim.id); });
      grid.appendChild(card);
    });

    var unlocked = allSimsComplete();
    var essayCard = el("button", {
      type: "button",
      class: "module-card module4" + (unlocked ? "" : " locked"),
      "aria-label": unlocked ? "Open the final essay" : "Final essay, locked until all three simulations are complete",
      "aria-disabled": unlocked ? "false" : "true"
    }, [
      el("span", { class: "module-number", text: "Final" }),
      el("span", { class: "module-title", text: "Your Final Essay" }),
      el("span", { class: "module-description", text: "Write and submit your CEO turnaround essay for AI marking against the official rubric." })
    ]);
    if (unlocked) {
      essayCard.appendChild(el("span", { class: "module-link", text: state.essayFeedback ? "Marked \u2713 \u00b7 Revisit" : "Begin \u2192" }));
      essayCard.addEventListener("click", openEssay);
    } else {
      essayCard.appendChild(el("span", { class: "lock-note" }, [
        el("span", { class: "lock-icon", "aria-hidden": "true" }),
        el("span", { text: "Complete all 3 simulations first" })
      ]));
    }
    grid.appendChild(essayCard);
  }

  /* ===================== Simulation conversation view ===================== */

  function openSimulation(id) {
    var sim = SIMULATIONS.filter(function (s) { return s.id === id; })[0];
    if (!sim) return;
    state.activeSim = id;

    document.getElementById("profileKicker").textContent = sim.profileKicker;
    document.getElementById("profileRole").textContent = sim.profileRole;
    document.getElementById("profilePurpose").textContent = sim.profilePurpose;
    document.getElementById("profileChip").textContent = sim.profileChip;
    setProfilePhoto(sim);
    document.getElementById("conversationTitle").textContent = sim.conversationTitle;
    document.getElementById("conversationSubtitle").textContent = sim.conversationSubtitle;
    document.getElementById("briefIntro").textContent = sim.briefIntro;

    var insightList = document.getElementById("insightList");
    insightList.innerHTML = "";
    sim.insights.forEach(function (text, idx) {
      var unlocked = state.simSentCount[id] > idx;
      var li = el("li", { class: unlocked ? "unlocked" : "" }, [
        el("span", { class: "lock", "aria-hidden": "true", text: unlocked ? "\u2713" : "\ud83d\udd12" }),
        el("span", { class: "insight-text", text: unlocked ? text : "Keep the conversation going to unlock this insight" })
      ]);
      insightList.appendChild(li);
    });

    var promptList = document.getElementById("promptList");
    promptList.innerHTML = "";
    sim.promptList.forEach(function (text) {
      promptList.appendChild(el("li", { text: text }));
    });

    renderChatLog(id);
    updateMarkCompleteButton(id);
    renderCaseDocument(sim);

    document.getElementById("hub").hidden = true;
    document.getElementById("essayView").classList.remove("active");
    document.getElementById("mentorView").hidden = false;

    var dialog = document.getElementById("setupDialog");
    document.getElementById("setupTitle").textContent = "Start: " + sim.cardTitle;
    document.getElementById("setupText").textContent = sim.briefIntro;
    if (typeof dialog.showModal === "function" && state.simMessages[id].length === 0) {
      dialog.showModal();
    }

    document.getElementById("userInput").focus();
  }

  function setProfilePhoto(sim) {
    var wrap = document.getElementById("profilePhotoWrap");
    var img = document.getElementById("profilePhoto");
    if (!sim.photo) { wrap.hidden = true; return; }
    img.onerror = function () { wrap.hidden = true; };
    img.onload = function () { wrap.hidden = false; };
    img.alt = sim.profileChip;
    img.src = sim.photo;
  }

  function renderCaseDocument(sim) {
    document.getElementById("caseDocSummary").textContent = "Read " + sim.caseLabel;
    var textContainer = document.getElementById("caseDocText");
    textContainer.innerHTML = "";
    CASE_TEXTS[sim.casePart].split("\n\n").forEach(function (para) {
      textContainer.appendChild(el("p", { text: para }));
    });
    var downloadBtn = document.getElementById("caseDocDownloadBtn");
    downloadBtn.onclick = function () { downloadCaseDocument(sim); };
  }

  function downloadCaseDocument(sim) {
    var text = sim.caseLabel + "\n\n" + CASE_TEXTS[sim.casePart];
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "Watson Group - " + sim.caseLabel + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function renderChatLog(id) {
    var log = document.getElementById("chatLog");
    var sim = SIMULATIONS.filter(function (s) { return s.id === id; })[0];
    log.innerHTML = "";
    if (state.simMessages[id].length === 0) {
      log.appendChild(el("div", { class: "empty-state", id: "emptyState" }, [
        el("div", { class: "es-icon", "aria-hidden": "true", text: "\ud83d\udcbc" }),
        el("p", { text: "Your conversation will appear here. Say hello, or answer the opening question, to begin." })
      ]));
      return;
    }
    state.simMessages[id].forEach(function (m) {
      appendMessageBubble(m.role, m.content, sim);
    });
  }

  function appendMessageBubble(role, text, sim) {
    var log = document.getElementById("chatLog");
    var emptyState = document.getElementById("emptyState");
    if (emptyState) emptyState.remove();

    var avatar = el("div", { class: "avatar", "aria-hidden": "true" });
    if (role === "assistant" && sim && sim.photo) {
      var img = document.createElement("img");
      img.src = sim.photo;
      img.alt = "";
      img.onerror = function () { img.remove(); avatar.textContent = "AI"; };
      avatar.appendChild(img);
    } else {
      avatar.textContent = role === "assistant" ? "AI" : "You";
    }
    var bubble = el("div", { class: "bubble" }, [el("p", { text: text })]);
    var message = el("div", { class: "message " + (role === "assistant" ? "mentor" : "user") }, [avatar, bubble]);
    log.appendChild(message);
    log.scrollTop = log.scrollHeight;
  }

  function updateMarkCompleteButton(id) {
    var btn = document.getElementById("markCompleteBtn");
    var hint = document.getElementById("completeHint");
    if (state.completed[id]) {
      btn.textContent = "Reflection complete \u2713";
      btn.classList.add("done");
      btn.disabled = true;
      hint.textContent = "This reflection is marked complete. You can keep chatting if you like.";
      return;
    }
    btn.classList.remove("done");
    btn.textContent = "Mark this reflection complete";
    var ready = state.simSentCount[id] >= MIN_SIM_MESSAGES;
    btn.disabled = !ready;
    hint.textContent = ready
      ? "You're ready. Mark this reflection complete to unlock the next step."
      : "Send at least " + MIN_SIM_MESSAGES + " messages, then mark this reflection complete to unlock the next step.";
  }

  function persona_system_key(id) { return id; }

  function sendChatMessage() {
    var id = state.activeSim;
    if (!id) return;
    var sim = SIMULATIONS.filter(function (s) { return s.id === id; })[0];
    var input = document.getElementById("userInput");
    var text = input.value.trim();
    if (!text) return;

    appendMessageBubble("user", text, sim);
    state.simMessages[id].push({ role: "user", content: text });
    state.simSentCount[id] += 1;
    input.value = "";

    var sendBtn = document.getElementById("sendBtn");
    sendBtn.disabled = true;
    input.disabled = true;

    var statusMsg = el("div", { class: "message mentor", id: "typingIndicator" }, [
      el("div", { class: "avatar", "aria-hidden": "true", text: "AI" }),
      el("div", { class: "bubble" }, [el("p", { text: "Thinking\u2026" })])
    ]);
    document.getElementById("chatLog").appendChild(statusMsg);
    document.getElementById("chatLog").scrollTop = document.getElementById("chatLog").scrollHeight;

    fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ persona: persona_system_key(id), messages: state.simMessages[id] })
    }).then(function (res) { return res.json(); })
      .then(function (data) {
        var indicator = document.getElementById("typingIndicator");
        if (indicator) indicator.remove();
        var reply = (data && data.response) ? data.response : "I couldn't quite process that, could you try rephrasing?";
        appendMessageBubble("assistant", reply, sim);
        state.simMessages[id].push({ role: "assistant", content: reply });
        refreshInsightsUnlocked(id);
        updateMarkCompleteButton(id);
      })
      .catch(function () {
        var indicator = document.getElementById("typingIndicator");
        if (indicator) indicator.remove();
        document.getElementById("chatLog").appendChild(el("div", { class: "error-box", text: "The Mentor could not respond right now. Please try again." }));
      })
      .finally(function () {
        sendBtn.disabled = false;
        input.disabled = false;
        input.focus();
      });
  }

  function refreshInsightsUnlocked(id) {
    var sim = SIMULATIONS.filter(function (s) { return s.id === id; })[0];
    var insightList = document.getElementById("insightList");
    var items = insightList.querySelectorAll("li");
    sim.insights.forEach(function (text, idx) {
      var unlocked = state.simSentCount[id] > idx;
      var li = items[idx];
      if (!li) return;
      li.className = unlocked ? "unlocked" : "";
      li.innerHTML = "";
      li.appendChild(el("span", { class: "lock", "aria-hidden": "true", text: unlocked ? "\u2713" : "\ud83d\udd12" }));
      li.appendChild(el("span", { class: "insight-text", text: unlocked ? text : "Keep the conversation going to unlock this insight" }));
    });
  }

  /* ===================== Essay view ===================== */

  function renderEssayCriteria() {
    var container = document.getElementById("essayCriteriaContainer");
    if (container.childElementCount > 0) return;

    CRITERIA.forEach(function (c) {
      var triggerId = "essay-trigger-" + c.id;
      var panelId = "essay-panel-" + c.id;

      var trigger = el("button", {
        type: "button", class: "essay-trigger", id: triggerId,
        "aria-expanded": "false", "aria-controls": panelId
      }, [
        el("span", { class: "trigger-left" }, [
          el("span", { class: "crit-num", "aria-hidden": "true", text: String(c.num) }),
          el("span", { class: "crit-title", text: c.title })
        ]),
        el("span", { class: "marks-pill", text: c.marks + " marks" })
      ]);
      var chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      chevron.setAttribute("class", "chevron");
      chevron.setAttribute("width", "18"); chevron.setAttribute("height", "18");
      chevron.setAttribute("viewBox", "0 0 20 20"); chevron.setAttribute("aria-hidden", "true");
      chevron.innerHTML = '<path d="M5 7l5 6 5-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
      trigger.appendChild(chevron);

      var whyBox = el("div", { class: "essay-why" });
      whyBox.innerHTML = "<strong>Why this matters:</strong> " + c.why;

      var qList = el("ul", { class: "essay-questions" }, c.questions.map(function (q) { return el("li", { text: q }); }));

      var label = el("label", { class: "field-label", for: "essay-input-" + c.id, text: "Your response" });
      var textarea = el("textarea", { id: "essay-input-" + c.id, placeholder: c.placeholder, "aria-describedby": "essay-counter-" + c.id });
      var meta = el("div", { class: "essay-field-meta" }, [
        el("span", { id: "essay-counter-" + c.id, text: "0 words (aim for at least " + MIN_WORDS + ")" })
      ]);

      var guideDetails = el("details", { class: "essay-marking-guide" }, [el("summary", { text: "See the marking guide for this section" })]);
      var table = el("table", {}, []);
      table.appendChild(el("thead", {}, [el("tr", {}, [el("th", { text: "Marks" }), el("th", { text: "What this looks like" })])]));
      table.appendChild(el("tbody", {}, c.band.map(function (row) {
        return el("tr", {}, [el("td", { text: row[0] }), el("td", { text: row[1] })]);
      })));
      guideDetails.appendChild(table);

      var panel = el("div", { id: panelId, role: "region", "aria-labelledby": triggerId, class: "essay-panel", hidden: "" },
        [whyBox, qList, label, textarea, meta, guideDetails]);

      var item = el("div", { class: "essay-item" }, [el("h2", { style: "margin:0" }, [trigger]), panel]);
      container.appendChild(item);

      trigger.addEventListener("click", function () {
        var expanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!expanded));
        if (expanded) panel.setAttribute("hidden", ""); else panel.removeAttribute("hidden");
      });

      textarea.addEventListener("input", function () {
        state.essayResponses[c.id] = textarea.value;
        var wc = wordCount(textarea.value);
        document.getElementById("essay-counter-" + c.id).textContent = wc + " word" + (wc === 1 ? "" : "s") + (wc < MIN_WORDS ? " (aim for at least " + MIN_WORDS + ")" : " \u2713");
        updateEssaySubmitState();
      });
    });
  }

  function updateEssaySubmitState() {
    var allReady = CRITERIA.every(function (c) { return wordCount(state.essayResponses[c.id]) >= MIN_WORDS; });
    var btn = document.getElementById("essaySubmitBtn");
    var guard = document.getElementById("essayGuardMsg");
    btn.disabled = !allReady;
    guard.style.display = allReady ? "none" : "block";
  }

  function openEssay() {
    renderEssayCriteria();
    updateEssaySubmitState();
    document.getElementById("hub").hidden = true;
    document.getElementById("mentorView").hidden = true;
    document.getElementById("essayView").classList.add("active");
    document.getElementById("essayView").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function buildReportText() {
    return CRITERIA.map(function (c) {
      return c.title + " (" + c.marks + " marks)\n" + (state.essayResponses[c.id] || "").trim();
    }).join("\n\n");
  }

  function rubricText() {
    return CRITERIA.map(function (c) {
      return c.title + " (max " + c.marks + " marks):\n" + c.band.map(function (b) { return "  " + b[0] + " marks: " + b[1]; }).join("\n");
    }).join("\n\n");
  }

  function submitEssayForMarking() {
    var btn = document.getElementById("essaySubmitBtn");
    var status = document.getElementById("essaySubmitStatus");
    btn.disabled = true;
    status.textContent = "Marking your essay against the rubric\u2026 this can take up to a minute.";

    fetch(MARK_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rubric: rubricText(), report: buildReportText() })
    }).then(function (res) { return res.json(); })
      .then(function (data) {
        var raw = (data && data.response) ? data.response : "";
        raw = raw.trim().replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
        var parsed = JSON.parse(raw);
        state.essayFeedback = parsed;
        renderFeedback(parsed);
        status.textContent = "Marking complete. Your feedback report is below.";
      })
      .catch(function () {
        status.textContent = "";
        document.getElementById("essaySubmitStatus").appendChild(el("div", { class: "error-box", text: "Marking did not complete successfully. Please try submitting again." }));
      })
      .finally(function () { btn.disabled = false; });
  }

  function renderFeedback(feedback) {
    var content = document.getElementById("feedbackContent");
    content.innerHTML = "";
    var total = feedback.criteria.reduce(function (sum, c) { return sum + (Number(c.marksAwarded) || 0); }, 0);

    content.appendChild(el("div", { class: "total-score-card" }, [
      el("div", { class: "score-figure", text: total + " / " + TOTAL_MARKS }),
      el("p", { text: "Overall rubric score (practice feedback, not an official grade)" })
    ]));

    feedback.criteria.forEach(function (fc) {
      var crit = CRITERIA.filter(function (c) { return c.id === fc.id; })[0] || { title: fc.id, marks: "?" };
      content.appendChild(el("div", { class: "crit-feedback-card" }, [
        el("h3", { text: crit.title }),
        el("span", { class: "band-pill", text: fc.marksAwarded + " / " + crit.marks + " marks" }),
        el("p", { text: fc.rationale })
      ]));
    });

    content.appendChild(el("div", { class: "feedback-summary-box" }, [
      el("h3", { text: "Strengths" }),
      el("p", { text: feedback.strengths }),
      el("h3", { text: "Next steps", style: "margin-top:12px" }),
      el("p", { text: feedback.nextSteps })
    ]));

    document.getElementById("feedbackReport").hidden = false;
    document.getElementById("feedbackReport").scrollIntoView({ behavior: "smooth", block: "start" });
    renderStepper();
  }

  function copyFeedback() {
    var lines = ["THE WATSON GROUP \u2014 FINAL ESSAY (as Abe Nkosi)", ""];
    CRITERIA.forEach(function (c) {
      lines.push(c.title + " (" + c.marks + " marks)");
      lines.push((state.essayResponses[c.id] || "").trim());
      lines.push("");
    });
    if (state.essayFeedback) {
      lines.push("---- FEEDBACK REPORT ----");
      var total = state.essayFeedback.criteria.reduce(function (sum, c) { return sum + (Number(c.marksAwarded) || 0); }, 0);
      lines.push("Total: " + total + " / " + TOTAL_MARKS, "");
      state.essayFeedback.criteria.forEach(function (fc) {
        var crit = CRITERIA.filter(function (c) { return c.id === fc.id; })[0] || { title: fc.id, marks: "?" };
        lines.push(crit.title + ": " + fc.marksAwarded + " / " + crit.marks);
        lines.push(fc.rationale, "");
      });
      lines.push("Strengths: " + state.essayFeedback.strengths);
      lines.push("Next steps: " + state.essayFeedback.nextSteps);
    }
    var text = lines.join("\n");
    var btn = document.getElementById("copyFeedbackBtn");
    function done(ok) {
      btn.textContent = ok ? "Copied!" : "Copy my report & feedback";
      if (ok) setTimeout(function () { btn.textContent = "Copy my report & feedback"; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }).catch(function () { done(false); });
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(true); } catch (e) { done(false); }
      document.body.removeChild(ta);
    }
  }

  /* ===================== Navigation ===================== */

  function returnToHub() {
    document.getElementById("mentorView").hidden = true;
    document.getElementById("essayView").classList.remove("active");
    document.getElementById("hub").hidden = false;
    renderHub();
    document.getElementById("hub").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearCurrentSim() {
    var id = state.activeSim;
    if (!id) return;
    state.simMessages[id] = [];
    state.simSentCount[id] = 0;
    renderChatLog(id);
    refreshInsightsUnlocked(id);
    updateMarkCompleteButton(id);
  }

  function copyCurrentTranscript() {
    var id = state.activeSim;
    if (!id) return;
    var lines = state.simMessages[id].map(function (m) {
      return (m.role === "assistant" ? "AI Mentor: " : "You: ") + m.content;
    });
    var text = lines.join("\n\n");
    var btn = document.getElementById("copyBtn");
    function done(ok) {
      btn.textContent = ok ? "Copied!" : "Copy text";
      if (ok) setTimeout(function () { btn.textContent = "Copy text"; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }).catch(function () { done(false); });
    } else { done(false); }
  }

  /* ===================== Init ===================== */

  function init() {
    renderFullCase();
    renderHub();

    document.getElementById("hubBtn").addEventListener("click", returnToHub);
    document.getElementById("hubBtnEssay").addEventListener("click", returnToHub);
    document.getElementById("clearBtn").addEventListener("click", clearCurrentSim);
    document.getElementById("copyBtn").addEventListener("click", copyCurrentTranscript);
    document.getElementById("printBtn").addEventListener("click", function () { window.print(); });

    document.getElementById("chatForm").addEventListener("submit", function (e) {
      e.preventDefault();
      sendChatMessage();
    });

    document.getElementById("markCompleteBtn").addEventListener("click", function () {
      var id = state.activeSim;
      if (!id) return;
      state.completed[id] = true;
      updateMarkCompleteButton(id);
      renderStepper();
    });

    document.getElementById("essaySubmitBtn").addEventListener("click", submitEssayForMarking);
    document.getElementById("copyFeedbackBtn").addEventListener("click", copyFeedback);
    document.getElementById("printFeedbackBtn").addEventListener("click", function () { window.print(); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();