// SDE 2 Preparation Dashboard Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // Storage Keys
  const STORAGE_KEY_COMPLETED = 'sde2_completed_questions_v1';
  const STORAGE_KEY_NOTES = 'sde2_question_notes_v1';

  // Load Saved Progress
  let completedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED) || '[]'));
  let notesMap = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTES) || '{}');

  // DOM Elements
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const dsaAccordionContainer = document.getElementById('dsa-accordion-container');
  const lldGridContainer = document.getElementById('lld-grid-container');
  const hldGridContainer = document.getElementById('hld-grid-container');
  const roadmapContainer = document.getElementById('roadmap-timeline-container');

  // Global Controls & Stats
  const globalSearchInput = document.getElementById('dsa-search-input');
  const difficultyFilter = document.getElementById('difficulty-filter');
  const statusFilter = document.getElementById('status-filter');
  const btnExpandAll = document.getElementById('btn-expand-all');
  const btnCollapseAll = document.getElementById('btn-collapse-all');
  const btnExportData = document.getElementById('btn-export-data');
  const btnImportData = document.getElementById('btn-import-data');
  const fileImportInput = document.getElementById('file-import-input');

  // Stats Displays
  const statTotalQuestions = document.getElementById('stat-total-questions');
  const statDsaCompleted = document.getElementById('stat-dsa-completed');
  const statDsaPercent = document.getElementById('stat-dsa-percent');
  const dsaProgressBarFill = document.getElementById('dsa-progress-fill');
  const headerDsaCount = document.getElementById('header-dsa-count');
  const headerDsaPercent = document.getElementById('header-dsa-percent');

  // Modal Elements
  const noteModal = document.getElementById('note-modal');
  const noteModalTitle = document.getElementById('note-modal-title');
  const noteTextarea = document.getElementById('note-textarea');
  const btnSaveNote = document.getElementById('btn-save-note');
  const btnCloseNote = document.getElementById('btn-close-note');
  let currentNoteQId = null;

  // Total questions count calculation
  let totalDsaQuestionsCount = 0;
  dsaTopicsData.forEach(topic => {
    totalDsaQuestionsCount += topic.questions.length;
  });

  // Initialize Dashboard
  init();

  function init() {
    setupTabNavigation();
    renderDsaTopics();
    renderLldModule();
    renderHldModule();
    renderRoadmapModule();
    updateStatistics();
    setupEventListeners();
  }

  /* -------------------------------------------------------------
     Tab Navigation
  ------------------------------------------------------------- */
  function setupTabNavigation() {
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        navTabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });
  }

  /* -------------------------------------------------------------
     Render DSA Section & Accordions
  ------------------------------------------------------------- */
  function renderDsaTopics() {
    dsaAccordionContainer.innerHTML = '';

    const searchTerm = globalSearchInput ? globalSearchInput.value.toLowerCase().trim() : '';
    const selectedDiff = difficultyFilter ? difficultyFilter.value : 'all';
    const selectedStatus = statusFilter ? statusFilter.value : 'all';

    dsaTopicsData.forEach((topic, index) => {
      // Filter questions in topic
      const filteredQuestions = topic.questions.filter(q => {
        const matchesSearch = q.title.toLowerCase().includes(searchTerm) ||
                              q.id.toString().includes(searchTerm) ||
                              q.company.some(c => c.toLowerCase().includes(searchTerm));
        const matchesDiff = selectedDiff === 'all' || q.difficulty === selectedDiff;
        const isDone = completedSet.has(q.id);
        const matchesStatus = selectedStatus === 'all' || 
                              (selectedStatus === 'done' && isDone) ||
                              (selectedStatus === 'todo' && !isDone);
        return matchesSearch && matchesDiff && matchesStatus;
      });

      // Skip topic if filtering produces 0 questions
      if (filteredQuestions.length === 0 && (searchTerm !== '' || selectedDiff !== 'all' || selectedStatus !== 'all')) {
        return;
      }

      const completedInTopic = topic.questions.filter(q => completedSet.has(q.id)).length;
      const totalInTopic = topic.questions.length;

      const topicSection = document.createElement('div');
      topicSection.className = 'dsa-topic-section';
      topicSection.setAttribute('data-topic-id', topic.id);

      const headerDiv = document.createElement('div');
      headerDiv.className = `topic-header ${index === 0 ? 'open' : ''}`;
      headerDiv.innerHTML = `
        <div class="topic-meta">
          <div class="topic-badge-icon">
            <i class="fas fa-layer-group"></i>
          </div>
          <div>
            <div class="topic-title">${topic.name}</div>
            <div class="topic-desc">${topic.description}</div>
          </div>
        </div>
        <div class="topic-progress-info">
          <div class="topic-count">${completedInTopic} / ${totalInTopic} Completed</div>
          <span class="chevron-icon"><i class="fas fa-chevron-down"></i></span>
        </div>
      `;

      const listDiv = document.createElement('div');
      listDiv.className = `questions-list ${index === 0 ? 'show' : ''}`;

      let rowsHtml = '';
      filteredQuestions.forEach(q => {
        const isChecked = completedSet.has(q.id);
        const hasNote = Boolean(notesMap[q.id]);
        const companyTagsHtml = q.company.map(c => `<span class="tag-co">${c}</span>`).join('');

        rowsHtml += `
          <tr class="q-row ${isChecked ? 'completed' : ''}" data-qid="${q.id}">
            <td style="width: 40px; text-align: center;">
              <div class="custom-checkbox ${isChecked ? 'checked' : ''}" onclick="toggleQuestionDone(${q.id}, event)">
                ${isChecked ? '<i class="fas fa-check"></i>' : ''}
              </div>
            </td>
            <td style="width: 60px; color: var(--text-muted); font-size: 0.82rem;">#${q.id}</td>
            <td>
              <a href="${q.link}" target="_blank" rel="noopener noreferrer" class="q-title-link">
                <span class="q-title">${q.title}</span>
                <i class="fas fa-external-link-alt lc-icon"></i>
              </a>
            </td>
            <td style="width: 110px;">
              <span class="badge-diff ${q.difficulty}">${q.difficulty}</span>
            </td>
            <td>
              <div class="company-tags">${companyTagsHtml}</div>
            </td>
            <td style="width: 50px; text-align: center;">
              <button class="btn-note ${hasNote ? 'has-note' : ''}" onclick="openNoteModal(${q.id}, '${escapeQuotes(q.title)}')" title="Add/Edit Notes">
                <i class="${hasNote ? 'fas' : 'far'} fa-sticky-note"></i>
              </button>
            </td>
          </tr>
        `;
      });

      listDiv.innerHTML = `
        <table class="q-table">
          <thead>
            <tr>
              <th style="width: 40px;">Status</th>
              <th style="width: 60px;">ID</th>
              <th>Problem Title</th>
              <th>Difficulty</th>
              <th>Top Companies</th>
              <th style="text-align: center;">Notes</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml || '<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-muted);">No questions match current filters.</td></tr>'}
          </tbody>
        </table>
      `;

      // Toggle accordion event
      headerDiv.addEventListener('click', () => {
        const isOpen = headerDiv.classList.contains('open');
        if (isOpen) {
          headerDiv.classList.remove('open');
          listDiv.classList.remove('show');
        } else {
          headerDiv.classList.add('open');
          listDiv.classList.show ? listDiv.classList.show() : listDiv.classList.add('show');
        }
      });

      topicSection.appendChild(headerDiv);
      topicSection.appendChild(listDiv);
      dsaAccordionContainer.appendChild(topicSection);
    });
  }

  // Window scoped function to toggle completion
  window.toggleQuestionDone = function(qid, event) {
    if (event) event.stopPropagation();

    if (completedSet.has(qid)) {
      completedSet.delete(qid);
    } else {
      completedSet.add(qid);
    }

    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedSet)));
    renderDsaTopics();
    updateStatistics();
  };

  /* -------------------------------------------------------------
     Render LLD Section
  ------------------------------------------------------------- */
  function renderLldModule() {
    lldGridContainer.innerHTML = '';

    // Render Classic LLD Questions Grid
    lldTopicsData.classicProblems.forEach(prob => {
      const card = document.createElement('div');
      card.className = 'lld-card';
      
      const patternTags = prob.patterns.map(p => `<span class="tag-pattern">${p}</span>`).join('');
      const conceptTags = prob.concepts.map(c => `<span class="tag-concept">${c}</span>`).join('');
      const linksHtml = prob.links.map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-link"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${prob.title}</h3>
            <span class="badge-diff ${prob.difficulty}">${prob.difficulty}</span>
          </div>
          <p class="card-desc">${prob.description}</p>
          <div class="meta-tags">
            ${patternTags}
            ${conceptTags}
          </div>
          <div class="card-key-list">
            <div class="key-lbl">Key Classes & Interfaces</div>
            <div class="key-items">${prob.keyClasses.join(' • ')}</div>
          </div>
        </div>
        <div class="resource-links">
          ${linksHtml}
        </div>
      `;
      lldGridContainer.appendChild(card);
    });

    // Render Fundamentals Section in LLD Fundamentals tab
    const lldFundContainer = document.getElementById('lld-fundamentals-container');
    if (lldFundContainer) {
      lldFundContainer.innerHTML = '';
      lldTopicsData.fundamentals.forEach(fund => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let content = `<h3 style="font-size: 1.25rem; font-weight:700; margin-bottom:8px; color: var(--accent-purple);">${fund.title}</h3>`;
        content += `<p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:14px;">${fund.description}</p>`;

        if (fund.keyTakeaways) {
          content += `<ul style="padding-left:20px; font-size:0.9rem; color:var(--text-primary); margin-bottom:14px;">`;
          fund.keyTakeaways.forEach(t => content += `<li style="margin-bottom:4px;">${t}</li>`);
          content += `</ul>`;
        }

        if (fund.patterns) {
          content += `<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:12px; margin-bottom:14px;">`;
          fund.patterns.forEach(p => {
            content += `
              <div style="background:rgba(10,14,23,0.6); padding:12px; border-radius:8px; border:1px solid var(--glass-border);">
                <div style="font-weight:700; font-size:0.95rem; color:var(--accent-cyan);">${p.name} <span style="font-size:0.75rem; color:var(--text-muted);">(${p.type})</span></div>
                <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">${p.usage}</div>
              </div>
            `;
          });
          content += `</div>`;
        }

        if (fund.resources) {
          content += `<div style="display:flex; gap:16px; flex-wrap:wrap;">`;
          fund.resources.forEach(r => content += `<a href="${r.url}" target="_blank" class="res-link"><i class="fas fa-book"></i> ${r.name}</a>`);
          content += `</div>`;
        }

        box.innerHTML = content;
        lldFundContainer.appendChild(box);
      });
    }
  }

  /* -------------------------------------------------------------
     Render HLD Section
  ------------------------------------------------------------- */
  function renderHldModule() {
    hldGridContainer.innerHTML = '';

    // Render Classic HLD Systems
    hldTopicsData.classicSystems.forEach(sys => {
      const card = document.createElement('div');
      card.className = 'hld-card';

      const componentTags = sys.keyComponents.map(c => `<span class="tag-concept">${c}</span>`).join('');
      const highlightsHtml = sys.architectureHighlights.map(h => `<li style="margin-bottom:6px; font-size:0.87rem; color: var(--text-secondary);">${h}</li>`).join('');
      const linksHtml = sys.links.map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-globe"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${sys.title}</h3>
            <span class="badge-diff ${sys.difficulty}">${sys.difficulty}</span>
          </div>
          <p class="card-desc">${sys.description}</p>
          <div style="font-size:0.8rem; color: var(--accent-amber); font-weight:600; margin-bottom:12px;">
            <i class="fas fa-tachometer-alt"></i> Scale Target: ${sys.scale}
          </div>
          <div class="meta-tags" style="margin-bottom:12px;">
            ${componentTags}
          </div>
          <div class="card-key-list">
            <div class="key-lbl">Architecture Highlights & Tradeoffs</div>
            <ul style="padding-left: 18px; margin:0;">${highlightsHtml}</ul>
          </div>
        </div>
        <div class="resource-links">
          ${linksHtml}
        </div>
      `;
      hldGridContainer.appendChild(card);
    });

    // Render Building Blocks & Framework
    const hldBlocksContainer = document.getElementById('hld-building-blocks-container');
    if (hldBlocksContainer) {
      hldBlocksContainer.innerHTML = '';
      hldTopicsData.buildingBlocks.forEach(block => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let conceptsListHtml = block.keyConcepts.map(c => `<li style="margin-bottom:6px; font-size:0.9rem;">${c}</li>`).join('');
        let linksHtml = block.resources.map(r => `<a href="${r.url}" target="_blank" class="res-link"><i class="fas fa-external-link-alt"></i> ${r.name}</a>`).join('');

        box.innerHTML = `
          <h3 style="font-size: 1.2rem; font-weight:700; margin-bottom:6px; color: var(--accent-emerald);">${block.title}</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">${block.description}</p>
          <ul style="padding-left:20px; color:var(--text-primary); margin-bottom:14px;">${conceptsListHtml}</ul>
          <div style="display:flex; gap:16px; flex-wrap:wrap;">${linksHtml}</div>
        `;
        hldBlocksContainer.appendChild(box);
      });
    }
  }

  /* -------------------------------------------------------------
     Render Roadmap Section
  ------------------------------------------------------------- */
  function renderRoadmapModule() {
    if (!roadmapContainer) return;
    roadmapContainer.innerHTML = '';

    roadmapData.weeks.forEach(w => {
      const card = document.createElement('div');
      card.className = 'roadmap-week-card';

      card.innerHTML = `
        <div class="week-badge">${w.weekNumber}</div>
        <h3 class="week-title">${w.title}</h3>
        <div class="week-goals-grid">
          <div class="goal-box">
            <div class="goal-title dsa"><i class="fas fa-code"></i> DSA Target</div>
            <div class="goal-desc">${w.dsaGoal}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title lld"><i class="fas fa-sitemap"></i> LLD Goal</div>
            <div class="goal-desc">${w.lldGoal}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title hld"><i class="fas fa-network-wired"></i> HLD Target</div>
            <div class="goal-desc">${w.hldGoal}</div>
          </div>
        </div>
      `;
      roadmapContainer.appendChild(card);
    });
  }

  /* -------------------------------------------------------------
     Update Dashboard Statistics
  ------------------------------------------------------------- */
  function updateStatistics() {
    const completedCount = completedSet.size;
    const percentage = Math.round((completedCount / totalDsaQuestionsCount) * 100);

    if (statTotalQuestions) statTotalQuestions.textContent = totalDsaQuestionsCount;
    if (statDsaCompleted) statDsaCompleted.textContent = completedCount;
    if (statDsaPercent) statDsaPercent.textContent = `${percentage}%`;

    if (headerDsaCount) headerDsaCount.textContent = `${completedCount}/${totalDsaQuestionsCount}`;
    if (headerDsaPercent) headerDsaPercent.textContent = `${percentage}%`;

    if (dsaProgressBarFill) {
      dsaProgressBarFill.style.width = `${percentage}%`;
    }
  }

  /* -------------------------------------------------------------
     Event Listeners
  ------------------------------------------------------------- */
  function setupEventListeners() {
    if (globalSearchInput) {
      globalSearchInput.addEventListener('input', () => renderDsaTopics());
    }
    if (difficultyFilter) {
      difficultyFilter.addEventListener('change', () => renderDsaTopics());
    }
    if (statusFilter) {
      statusFilter.addEventListener('change', () => renderDsaTopics());
    }

    if (btnExpandAll) {
      btnExpandAll.addEventListener('click', () => {
        document.querySelectorAll('.topic-header').forEach(h => h.classList.add('open'));
        document.querySelectorAll('.questions-list').forEach(l => l.classList.add('show'));
      });
    }

    if (btnCollapseAll) {
      btnCollapseAll.addEventListener('click', () => {
        document.querySelectorAll('.topic-header').forEach(h => h.classList.remove('open'));
        document.querySelectorAll('.questions-list').forEach(l => l.classList.remove('show'));
      });
    }

    // Export Data JSON
    if (btnExportData) {
      btnExportData.addEventListener('click', () => {
        const backupData = {
          completedQuestions: Array.from(completedSet),
          notes: notesMap,
          exportDate: new Date().toISOString()
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `sde2_prep_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
      });
    }

    // Import Data JSON
    if (btnImportData && fileImportInput) {
      btnImportData.addEventListener('click', () => fileImportInput.click());
      fileImportInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
          try {
            const imported = JSON.parse(evt.target.result);
            if (imported.completedQuestions) {
              completedSet = new Set(imported.completedQuestions);
              localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedSet)));
            }
            if (imported.notes) {
              notesMap = imported.notes;
              localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notesMap));
            }
            renderDsaTopics();
            updateStatistics();
            alert("Progress data successfully imported!");
          } catch (err) {
            alert("Failed to parse imported JSON file.");
          }
        };
        reader.readAsText(file);
      });
    }

    // Note Modal Controls
    if (btnCloseNote) {
      btnCloseNote.addEventListener('click', closeNoteModal);
    }
    if (btnSaveNote) {
      btnSaveNote.addEventListener('click', saveNoteModal);
    }
  }

  // Note Modal Window Functions
  window.openNoteModal = function(qid, title) {
    currentNoteQId = qid;
    noteModalTitle.textContent = `Notes for #${qid} - ${title}`;
    noteTextarea.value = notesMap[qid] || '';
    noteModal.classList.add('active');
  };

  function closeNoteModal() {
    noteModal.classList.remove('active');
    currentNoteQId = null;
  }

  function saveNoteModal() {
    if (!currentNoteQId) return;
    const text = noteTextarea.value.trim();
    if (text) {
      notesMap[currentNoteQId] = text;
    } else {
      delete notesMap[currentNoteQId];
    }
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notesMap));
    closeNoteModal();
    renderDsaTopics();
  }

  function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }
});
