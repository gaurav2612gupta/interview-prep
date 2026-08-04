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

  // Safe reference to dataset
  const topics = (typeof dsaTopicsData !== 'undefined' && Array.isArray(dsaTopicsData)) ? dsaTopicsData : [];
  const lldData = (typeof lldTopicsData !== 'undefined') ? lldTopicsData : { fundamentals: [], classicProblems: [] };
  const hldData = (typeof hldTopicsData !== 'undefined') ? hldTopicsData : { buildingBlocks: [], classicSystems: [] };
  const roadmapInfo = (typeof roadmapData !== 'undefined') ? roadmapData : { weeks: [] };

  // Total questions count calculation
  let totalDsaQuestionsCount = 0;
  topics.forEach(topic => {
    totalDsaQuestionsCount += (topic.questions || []).length;
  });

  // Set of open topic accordion IDs (default all topics open so all questions are visible)
  let openTopicIds = new Set(topics.map(t => t.id));

  // Helper: find question by ID
  function findQuestionById(qid) {
    for (const topic of topics) {
      for (const q of (topic.questions || [])) {
        if (q.id === qid) return q;
      }
    }
    return null;
  }

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
        const panel = document.getElementById(`tab-${targetTab}`);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* -------------------------------------------------------------
     Render DSA Section & Accordions
  ------------------------------------------------------------- */
  function renderDsaTopics() {
    if (!dsaAccordionContainer) return;
    dsaAccordionContainer.innerHTML = '';

    const searchTerm = (globalSearchInput && typeof globalSearchInput.value === 'string') ? globalSearchInput.value.toLowerCase().trim() : '';
    const selectedDiff = difficultyFilter ? difficultyFilter.value : 'all';
    const selectedStatus = statusFilter ? statusFilter.value : 'all';

    topics.forEach((topic) => {
      const topicQuestions = topic.questions || [];

      // Filter questions in topic safely
      const filteredQuestions = topicQuestions.filter(q => {
        const qTitle = String(q.title || '').toLowerCase();
        const qIdStr = String(q.id || '');
        const qCompanies = Array.isArray(q.company) ? q.company : [];

        const matchesSearch = !searchTerm ||
                              qTitle.includes(searchTerm) ||
                              qIdStr.includes(searchTerm) ||
                              qCompanies.some(c => String(c).toLowerCase().includes(searchTerm));
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

      // Automatically open topic if active search term is entered
      if (searchTerm !== '' && filteredQuestions.length > 0) {
        openTopicIds.add(topic.id);
      }

      const completedInTopic = topicQuestions.filter(q => completedSet.has(q.id)).length;
      const totalInTopic = topicQuestions.length;
      const isOpen = openTopicIds.has(topic.id);

      const topicSection = document.createElement('div');
      topicSection.className = 'dsa-topic-section';
      topicSection.setAttribute('data-topic-id', topic.id);

      const headerDiv = document.createElement('div');
      headerDiv.className = `topic-header ${isOpen ? 'open' : ''}`;
      headerDiv.setAttribute('data-action', 'toggle-accordion');
      headerDiv.setAttribute('data-topic-id', topic.id);
      headerDiv.innerHTML = `
        <div class="topic-meta">
          <div class="topic-badge-icon">
            <i class="fas fa-layer-group"></i>
          </div>
          <div>
            <div class="topic-title">${topic.name || 'Topic'}</div>
            <div class="topic-desc">${topic.description || ''}</div>
          </div>
        </div>
        <div class="topic-progress-info">
          <div class="topic-count">${completedInTopic} / ${totalInTopic} Completed</div>
          <span class="chevron-icon"><i class="fas fa-chevron-down"></i></span>
        </div>
      `;

      const listDiv = document.createElement('div');
      listDiv.className = `questions-list ${isOpen ? 'show' : ''}`;

      let rowsHtml = '';
      filteredQuestions.forEach(q => {
        const isChecked = completedSet.has(q.id);
        const hasNote = Boolean(notesMap[q.id]);
        const qCompanies = Array.isArray(q.company) ? q.company : [];
        const companyTagsHtml = qCompanies.map(c => `<span class="tag-co">${c}</span>`).join('');

        rowsHtml += `
          <tr class="q-row ${isChecked ? 'completed' : ''}" data-qid="${q.id}">
            <td style="width: 40px; text-align: center;">
              <div class="custom-checkbox ${isChecked ? 'checked' : ''}" data-action="toggle-done" data-qid="${q.id}">
                ${isChecked ? '<i class="fas fa-check"></i>' : ''}
              </div>
            </td>
            <td style="width: 60px; color: var(--text-muted); font-size: 0.82rem;">#${q.id}</td>
            <td>
              <a href="${q.link || '#'}" target="_blank" rel="noopener noreferrer" class="q-title-link">
                <span class="q-title">${q.title || ''}</span>
                <i class="fas fa-external-link-alt lc-icon"></i>
              </a>
            </td>
            <td style="width: 110px;">
              <span class="badge-diff ${q.difficulty || 'Easy'}">${q.difficulty || 'Easy'}</span>
            </td>
            <td>
              <div class="company-tags">${companyTagsHtml}</div>
            </td>
            <td style="width: 50px; text-align: center;">
              <button class="btn-note ${hasNote ? 'has-note' : ''}" data-action="open-note" data-qid="${q.id}" title="Add/Edit Notes">
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

      topicSection.appendChild(headerDiv);
      topicSection.appendChild(listDiv);
      dsaAccordionContainer.appendChild(topicSection);
    });
  }

  // Toggle completion function
  function toggleQuestionDone(qid) {
    if (completedSet.has(qid)) {
      completedSet.delete(qid);
    } else {
      completedSet.add(qid);
    }

    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(Array.from(completedSet)));
    renderDsaTopics();
    updateStatistics();
  }

  /* -------------------------------------------------------------
     Render LLD Section
  ------------------------------------------------------------- */
  function renderLldModule() {
    if (!lldGridContainer) return;
    lldGridContainer.innerHTML = '';

    const classicProbs = lldData.classicProblems || [];
    classicProbs.forEach(prob => {
      const card = document.createElement('div');
      card.className = 'lld-card';
      
      const patternTags = (prob.patterns || []).map(p => `<span class="tag-pattern">${p}</span>`).join('');
      const conceptTags = (prob.concepts || []).map(c => `<span class="tag-concept">${c}</span>`).join('');
      const linksHtml = (prob.links || []).map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-link"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${prob.title || ''}</h3>
            <span class="badge-diff ${prob.difficulty || 'Medium'}">${prob.difficulty || 'Medium'}</span>
          </div>
          <p class="card-desc">${prob.description || ''}</p>
          <div class="meta-tags">
            ${patternTags}
            ${conceptTags}
          </div>
          <div class="card-key-list">
            <div class="key-lbl">Key Classes & Interfaces</div>
            <div class="key-items">${(prob.keyClasses || []).join(' • ')}</div>
          </div>
        </div>
        <div class="resource-links">
          ${linksHtml}
        </div>
      `;
      lldGridContainer.appendChild(card);
    });

    // Render Fundamentals Section
    const lldFundContainer = document.getElementById('lld-fundamentals-container');
    if (lldFundContainer) {
      lldFundContainer.innerHTML = '';
      const fundamentals = lldData.fundamentals || [];
      fundamentals.forEach(fund => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let content = `<h3 style="font-size: 1.25rem; font-weight:700; margin-bottom:8px; color: var(--accent-purple);">${fund.title || ''}</h3>`;
        content += `<p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:14px;">${fund.description || ''}</p>`;

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
    if (!hldGridContainer) return;
    hldGridContainer.innerHTML = '';

    const classicSystems = hldData.classicSystems || [];
    classicSystems.forEach(sys => {
      const card = document.createElement('div');
      card.className = 'hld-card';

      const componentTags = (sys.keyComponents || []).map(c => `<span class="tag-concept">${c}</span>`).join('');
      const highlightsHtml = (sys.architectureHighlights || []).map(h => `<li style="margin-bottom:6px; font-size:0.87rem; color: var(--text-secondary);">${h}</li>`).join('');
      const linksHtml = (sys.links || []).map(l => `<a href="${l.url}" target="_blank" class="res-link"><i class="fas fa-globe"></i> ${l.title}</a>`).join('');

      card.innerHTML = `
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="card-title">${sys.title || ''}</h3>
            <span class="badge-diff ${sys.difficulty || 'Medium'}">${sys.difficulty || 'Medium'}</span>
          </div>
          <p class="card-desc">${sys.description || ''}</p>
          <div style="font-size:0.8rem; color: var(--accent-amber); font-weight:600; margin-bottom:12px;">
            <i class="fas fa-tachometer-alt"></i> Scale Target: ${sys.scale || 'N/A'}
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

    // Render Building Blocks
    const hldBlocksContainer = document.getElementById('hld-building-blocks-container');
    if (hldBlocksContainer) {
      hldBlocksContainer.innerHTML = '';
      const blocks = hldData.buildingBlocks || [];
      blocks.forEach(block => {
        const box = document.createElement('div');
        box.className = 'hero-banner';
        box.style.marginBottom = '20px';

        let conceptsListHtml = (block.keyConcepts || []).map(c => `<li style="margin-bottom:6px; font-size:0.9rem;">${c}</li>`).join('');
        let linksHtml = (block.resources || []).map(r => `<a href="${r.url}" target="_blank" class="res-link"><i class="fas fa-external-link-alt"></i> ${r.name}</a>`).join('');

        box.innerHTML = `
          <h3 style="font-size: 1.2rem; font-weight:700; margin-bottom:6px; color: var(--accent-emerald);">${block.title || ''}</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px;">${block.description || ''}</p>
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

    const weeks = roadmapInfo.weeks || [];
    weeks.forEach(w => {
      const card = document.createElement('div');
      card.className = 'roadmap-week-card';

      card.innerHTML = `
        <div class="week-badge">${w.weekNumber || ''}</div>
        <h3 class="week-title">${w.title || ''}</h3>
        <div class="week-goals-grid">
          <div class="goal-box">
            <div class="goal-title dsa"><i class="fas fa-code"></i> DSA Target</div>
            <div class="goal-desc">${w.dsaGoal || ''}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title lld"><i class="fas fa-sitemap"></i> LLD Goal</div>
            <div class="goal-desc">${w.lldGoal || ''}</div>
          </div>
          <div class="goal-box">
            <div class="goal-title hld"><i class="fas fa-network-wired"></i> HLD Target</div>
            <div class="goal-desc">${w.hldGoal || ''}</div>
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
    const percentage = totalDsaQuestionsCount > 0 ? Math.round((completedCount / totalDsaQuestionsCount) * 100) : 0;

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
     Event Delegation & Listeners
  ------------------------------------------------------------- */
  function setupEventListeners() {
    // Event delegation on DSA Accordion Container
    if (dsaAccordionContainer) {
      dsaAccordionContainer.addEventListener('click', (e) => {
        // Toggle Checkbox
        const checkbox = e.target.closest('[data-action="toggle-done"]');
        if (checkbox) {
          e.stopPropagation();
          const qid = parseInt(checkbox.getAttribute('data-qid'), 10);
          if (!isNaN(qid)) toggleQuestionDone(qid);
          return;
        }

        // Open Note Modal
        const noteBtn = e.target.closest('[data-action="open-note"]');
        if (noteBtn) {
          e.stopPropagation();
          const qid = parseInt(noteBtn.getAttribute('data-qid'), 10);
          if (!isNaN(qid)) {
            const q = findQuestionById(qid);
            openNoteModal(qid, q ? q.title : `Question #${qid}`);
          }
          return;
        }

        // Toggle Accordion Header
        const header = e.target.closest('[data-action="toggle-accordion"]');
        if (header) {
          const topicId = header.getAttribute('data-topic-id');
          if (topicId) {
            const section = header.parentElement;
            const listDiv = section ? section.querySelector('.questions-list') : null;
            if (openTopicIds.has(topicId)) {
              openTopicIds.delete(topicId);
              header.classList.remove('open');
              if (listDiv) listDiv.classList.remove('show');
            } else {
              openTopicIds.add(topicId);
              header.classList.add('open');
              if (listDiv) listDiv.classList.add('show');
            }
          }
          return;
        }
      });
    }

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
        topics.forEach(t => openTopicIds.add(t.id));
        renderDsaTopics();
      });
    }

    if (btnCollapseAll) {
      btnCollapseAll.addEventListener('click', () => {
        openTopicIds.clear();
        renderDsaTopics();
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
  function openNoteModal(qid, title) {
    currentNoteQId = qid;
    if (noteModalTitle) noteModalTitle.textContent = `Notes for #${qid} - ${title}`;
    if (noteTextarea) noteTextarea.value = notesMap[qid] || '';
    if (noteModal) noteModal.classList.add('active');
  }

  function closeNoteModal() {
    if (noteModal) noteModal.classList.remove('active');
    currentNoteQId = null;
  }

  function saveNoteModal() {
    if (!currentNoteQId) return;
    const text = noteTextarea ? noteTextarea.value.trim() : '';
    if (text) {
      notesMap[currentNoteQId] = text;
    } else {
      delete notesMap[currentNoteQId];
    }
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notesMap));
    closeNoteModal();
    renderDsaTopics();
  }
});
