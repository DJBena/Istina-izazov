(() => {
  const databaseHr = database;
  const databaseEn = window.i18nDatabaseEn;

  const ui = {
    hr: {
      pageTitle: "Istina ili izazov",
      playersTitle: "Unesi imena igrača",
      playerPlaceholder: "Ime igrača",
      add: "Dodaj",
      next: "DALJE",
      back: "⟵ Nazad",
      categoriesTitle: "Odaberi kategoriju",
      truth: "ISTINA",
      dare: "IZAZOV",
      needPlayers: "Dodaj barem 2 igrača.",
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
      playersTitle: "Enter player names",
      playerPlaceholder: "Player name",
      add: "Add",
      next: "NEXT",
      back: "⟵ Back",
      categoriesTitle: "Choose a category",
      truth: "TRUTH",
      dare: "DARE",
      needPlayers: "Add at least 2 players.",
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
    }
  };

  let currentLanguage = localStorage.getItem("truthOrDareLanguage") ||
    (navigator.language && navigator.language.toLowerCase().startsWith("hr") ? "hr" : "en");
  let lastQuestion = null;

  function t() {
    return ui[currentLanguage];
  }

  function updateStaticUi() {
    const text = t();
    document.documentElement.lang = currentLanguage;
    document.title = text.pageTitle;

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

    const footer = document.getElementById("footer");
    if (footer) footer.textContent = text.footer;

    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
      btn.setAttribute("aria-pressed", btn.dataset.lang === currentLanguage ? "true" : "false");
    });
  }

  function updateGameUi() {
    if (lastQuestion && screen3.classList.contains("active") && category !== "custom") {
      const questionSet = database[category] && database[category][lastQuestion.type];
      if (questionSet && questionSet.length) {
        const safeIndex = Math.min(lastQuestion.index, questionSet.length - 1);
        challengeText.textContent = `${lastQuestion.type === "truth" ? t().truth : t().dare}: ${questionSet[safeIndex]}`;
        return;
      }
    }

    if (truthBtn && dareBtn && challengeText.contains(truthBtn) && challengeText.contains(dareBtn)) {
      truthBtn.textContent = t().truth;
      dareBtn.textContent = t().dare;
    }
  }

  function setLanguage(language) {
    if (!ui[language]) return;
    currentLanguage = language;
    localStorage.setItem("truthOrDareLanguage", currentLanguage);
    database = currentLanguage === "en" ? databaseEn : databaseHr;
    updateStaticUi();
    updateGameUi();
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
    const questionSet = database[category][type];
    const index = Math.floor(Math.random() * questionSet.length);
    lastQuestion = { type, index };
    challengeText.textContent = `${type === "truth" ? t().truth : t().dare}: ${questionSet[index]}`;
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

  setLanguage(currentLanguage);
})();
