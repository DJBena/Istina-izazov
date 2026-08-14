(() => {
  const databaseHr = database;
  const databaseEn = window.i18nDatabaseEn;
  const databaseDe = window.i18nDatabaseDe;

  const databases = {
    hr: databaseHr,
    en: databaseEn,
    de: databaseDe
  };

  const ui = {
    hr: {
      pageTitle: "Istina ili izazov",
      languageLabel: "Jezik",
      playersTitle: "Unesi imena igrača",
      playerPlaceholder: "Ime igrača",
      add: "Dodaj",
      next: "DALJE",
      back: "⟵ Nazad",
      categoriesTitle: "Odaberi kategoriju",
      truth: "ISTINA",
      dare: "IZAZOV",
      needPlayers: "Dodaj barem 2 igrača.",
      bottleAlt: "Boca",
      footer: "© 2025 Free Games by BENA – Igra bez reklama i bez naplate",
      categories: {
        casual: "Opušteno",
        funny: "Smiješno",
        deep: "Duboko",
        dirty18: "Bez cenzure 18+",
        custom: "Po želji",
        drink: "Piće",
        smoke: "Dim"
      }
    },
    en: {
      pageTitle: "Truth or Dare",
      languageLabel: "Language",
      playersTitle: "Enter player names",
      playerPlaceholder: "Player name",
      add: "Add",
      next: "NEXT",
      back: "⟵ Back",
      categoriesTitle: "Choose a category",
      truth: "TRUTH",
      dare: "DARE",
      needPlayers: "Add at least 2 players.",
      bottleAlt: "Bottle",
      footer: "© 2025 Free Games by BENA – Free to play and ad-free",
      categories: {
        casual: "Casual",
        funny: "Funny",
        deep: "Deep",
        dirty18: "Dirty 18+",
        custom: "Custom",
        drink: "Drink",
        smoke: "Smoke"
      }
    },
    de: {
      pageTitle: "Wahrheit oder Pflicht",
      languageLabel: "Sprache",
      playersTitle: "Spielernamen eingeben",
      playerPlaceholder: "Spielername",
      add: "Hinzufügen",
      next: "WEITER",
      back: "⟵ Zurück",
      categoriesTitle: "Kategorie auswählen",
      truth: "WAHRHEIT",
      dare: "PFLICHT",
      needPlayers: "Füge mindestens 2 Spieler hinzu.",
      bottleAlt: "Flasche",
      footer: "© 2025 Free Games by BENA – Kostenlos und werbefrei",
      categories: {
        casual: "Locker",
        funny: "Lustig",
        deep: "Tiefgründig",
        dirty18: "Unzensiert 18+",
        custom: "Eigene Wahl",
        drink: "Trinken",
        smoke: "Rauchen"
      }
    }
  };

  function detectInitialLanguage() {
    const saved = localStorage.getItem("truthOrDareLanguage");
    if (saved && ui[saved]) return saved;

    const browserLanguage = (navigator.language || "").toLowerCase();
    if (browserLanguage.startsWith("hr")) return "hr";
    if (browserLanguage.startsWith("de")) return "de";
    return "en";
  }

  let currentLanguage = detectInitialLanguage();
  let lastQuestion = null;

  function t() {
    return ui[currentLanguage];
  }

  function getDatabase(language = currentLanguage) {
    return databases[language] || databaseHr;
  }

  function getQuestionSet(language, questionCategory, type) {
    const selectedDatabase = getDatabase(language);
    return selectedDatabase && selectedDatabase[questionCategory]
      ? selectedDatabase[questionCategory][type]
      : null;
  }

  function updateStaticUi() {
    const text = t();
    document.documentElement.lang = currentLanguage;
    document.title = text.pageTitle;

    const languageSwitcher = document.getElementById("languageSwitcher");
    if (languageSwitcher) languageSwitcher.setAttribute("aria-label", text.languageLabel);

    const playersTitle = document.querySelector("#screen1 h2");
    if (playersTitle) playersTitle.textContent = text.playersTitle;
    playerInput.placeholder = text.playerPlaceholder;
    addPlayer.textContent = text.add;
    toCategory.textContent = text.next;

    const categoriesTitle = document.querySelector("#screen2 h2");
    if (categoriesTitle) categoriesTitle.textContent = text.categoriesTitle;

    document.querySelectorAll(".backBtn").forEach(btn => {
      btn.textContent = text.back;
    });

    document.querySelectorAll(".category").forEach(btn => {
      const label = text.categories[btn.dataset.cat];
      if (!label) return;
      const span = btn.querySelector("span");
      if (span) span.textContent = label;
      else btn.textContent = label;
    });

    if (bottle) bottle.alt = text.bottleAlt;

    const footer = document.getElementById("footer");
    if (footer) footer.textContent = text.footer;

    document.querySelectorAll("[data-lang]").forEach(btn => {
      const isActive = btn.dataset.lang === currentLanguage;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function renderLastQuestion() {
    if (!lastQuestion || !screen3.classList.contains("active")) return false;

    const questionSet = getQuestionSet(
      currentLanguage,
      lastQuestion.category,
      lastQuestion.type
    );

    if (!questionSet || !questionSet[lastQuestion.index]) return false;

    const label = lastQuestion.type === "truth" ? t().truth : t().dare;
    challengeText.textContent = `${label}: ${questionSet[lastQuestion.index]}`;
    return true;
  }

  function updateGameUi() {
    if (renderLastQuestion()) return;

    if (truthBtn && dareBtn && challengeText.contains(truthBtn) && challengeText.contains(dareBtn)) {
      truthBtn.textContent = t().truth;
      dareBtn.textContent = t().dare;
    }
  }

  function setLanguage(language) {
    if (!ui[language] || !databases[language]) return;

    currentLanguage = language;
    localStorage.setItem("truthOrDareLanguage", currentLanguage);

    // Keep the original game code compatible while switching databases in memory.
    // No page reload is needed, so players, screen, bottle state and the current round stay intact.
    database = getDatabase(currentLanguage);

    updateStaticUi();
    updateGameUi();
  }

  function validateTranslationCoverage() {
    const categories = ["casual", "funny", "deep", "dirty18", "drink", "smoke"];
    const types = ["truth", "dare"];

    categories.forEach(questionCategory => {
      types.forEach(type => {
        const hrSet = getQuestionSet("hr", questionCategory, type) || [];
        ["en", "de"].forEach(language => {
          const translatedSet = getQuestionSet(language, questionCategory, type) || [];
          if (translatedSet.length !== hrSet.length) {
            console.warn(
              `[i18n] ${language}.${questionCategory}.${type} has ${translatedSet.length} items; HR has ${hrSet.length}.`
            );
          }
        });
      });
    });
  }

  toCategory.onclick = () => {
    if (players.length >= 2) {
      screen1.classList.remove("active");
      screen2.classList.add("active");
    } else {
      alert(t().needPlayers);
    }
  };

  showTruthDareButtons = function(player) {
    challengeText.innerHTML = "";
    lastQuestion = null;

    truthBtn = document.createElement("button");
    dareBtn = document.createElement("button");
    truthBtn.textContent = t().truth;
    dareBtn.textContent = t().dare;

    truthBtn.onclick = () => showQuestion(player, "truth");
    dareBtn.onclick = () => showQuestion(player, "dare");

    challengeText.appendChild(truthBtn);
    challengeText.appendChild(dareBtn);
  };

  showQuestion = function(player, type) {
    const questionSet = getQuestionSet(currentLanguage, category, type);
    if (!questionSet || !questionSet.length) return;

    const index = Math.floor(Math.random() * questionSet.length);
    lastQuestion = {
      category,
      type,
      index
    };

    renderLastQuestion();
  };

  document.querySelectorAll(".category").forEach(btn => {
    const originalClick = btn.onclick;
    btn.onclick = event => {
      lastQuestion = null;
      originalClick.call(btn, event);
    };
  });

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  validateTranslationCoverage();
  setLanguage(currentLanguage);
})();
