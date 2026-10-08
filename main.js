/* Content stays readable without JavaScript. No analytics or third-party scripts. */
(() => {
  const copy = {
    ko: {
      title: '플랜플 — 이번 목표는, 끝까지.',
      description: '이루고 싶은 목표를 오늘 끝낼 일로. TDL, 24시간 타임라인, 다중 알림, 돌아보기로 계획부터 실행까지. iPhone·iPad·Android에서 무료로 시작하세요.',
      goals: {
        reading: ['책 24권 읽기', '책 2권 끝내기', '200쪽 읽기', '30분 읽기', '나를 위한 독서 시간'],
        fitness: ['꾸준히 운동하는 해', '12번 운동하기', '3번 운동하기', '30분 걷기', '가볍게 걷는 아침'],
        study: ['자격증 취득하기', '기본서 1회독', '2개 단원 정리', '30분 복습하기', '한 단원 더 가까이']
      }
    },
    en: {
      title: 'Planple — Big goals. Done daily.',
      description: 'Turn what you want to achieve into what you do today. TDL, a daily timeline, reminders and reflection. Start free on iPhone, iPad and Android.',
      goals: {
        reading: ['Read 24 books', 'Finish 2 books', 'Read 200 pages', 'Read for 30 minutes', 'A little time for a good book'],
        fitness: ['Build a lasting exercise habit', 'Exercise 12 times', 'Move 3 times', 'Walk for 30 minutes', 'An easy morning walk'],
        study: ['Earn a certification', 'Finish the study guide', 'Review 2 chapters', 'Study for 30 minutes', 'One chapter closer']
      }
    }
  };
  let lang = 'ko';
  let goal = 'reading';
  const languageButtons = document.querySelectorAll('[data-lang]');
  const goalButtons = document.querySelectorAll('[data-goal]');
  function updateGoal() {
    document.querySelectorAll('[data-goal-text]').forEach(el => {
      el.textContent = copy[lang].goals[goal][Number(el.dataset.goalText)];
    });
    goalButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.goal === goal)));
  }
  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = copy[lang].title;
    document.querySelector('meta[name="description"]').content = copy[lang].description;
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    document.querySelectorAll('img[data-ko-src]').forEach(img => {
      const src = img.dataset[lang + 'Src'];
      if (img.getAttribute('src') !== src) img.src = src;
      img.alt = img.dataset[lang + 'Alt'];
    });
    updateGoal();
  }
  languageButtons.forEach(button => button.addEventListener('click', () => {
    const next = button.dataset.lang;
    try { localStorage.setItem('planple-lang', next); } catch (_) {}
    setLanguage(next);
  }));
  goalButtons.forEach(button => button.addEventListener('click', () => {
    goal = button.dataset.goal;
    updateGoal();
  }));
  let saved;
  try { saved = localStorage.getItem('planple-lang'); } catch (_) {}
  setLanguage(saved === 'ko' || saved === 'en' ? saved : (navigator.language || 'ko').toLowerCase().startsWith('ko') ? 'ko' : 'en');
})();
