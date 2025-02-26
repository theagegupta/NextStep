document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let isLoading = false;
    const ITEMS_PER_PAGE = 5;
    let currentPage = 1;
  
    // Add event listener for dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', toggleDarkMode);
    }
  
    // Add event listener for mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('hidden');
      });
    }
  
    // Load questions from localStorage or use defaults
    let questions = loadFromLocalStorage() || [
      {
        id: 1,
        title: "How to switch careers?",
        body: "I'm considering switching from marketing to data science. Any advice?",
        tags: ["career", "data science"],
        answered: false,
        likes: 0,
        dislikes: 0,
        likedBy: new Set(),
        dislikedBy: new Set()
      },
      {
        id: 2,
        title: "Best resources for learning programming?",
        body: "I want to learn programming. What are the best online resources?",
        tags: ["programming", "resources"],
        answered: true,
        answer: "There are many great resources available. Some popular ones include freeCodeCamp, Codecademy, and Coursera.",
        likes: 0,
        dislikes: 0,
        likedBy: new Set(),
        dislikedBy: new Set()
      },
      {
        id: 3,
        title: "Tips for a successful job interview?",
        body: "I have an important job interview next week. What are some tips to succeed?",
        tags: ["interview", "job"],
        answered: true,
        answer: "Practice common interview questions, research the company, and dress appropriately.",
        likes: 0,
        dislikes: 0,
        likedBy: new Set(),
        dislikedBy: new Set()
      }
    ];
  
    // Initialize the question form
    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
      questionForm.addEventListener('submit', handleQuestionSubmit);
    }
  
    // Set up filter event listeners
    const searchBar = document.getElementById('searchBar');
    const filterTags = document.getElementById('filterTags');
    const filterStatus = document.getElementById('filterStatus');
    
    if (searchBar) searchBar.addEventListener('input', renderQuestions);
    if (filterTags) filterTags.addEventListener('change', renderQuestions);
    if (filterStatus) filterStatus.addEventListener('change', renderQuestions);
  
    // Initialize the page
    renderQuestions();
    populateTagFilter();
  
    // Helper Functions
    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
  
    function handleQuestionSubmit(e) {
      e.preventDefault();
      
      const titleInput = document.getElementById('questionTitle');
      const bodyInput = document.getElementById('questionBody');
      const tagsInput = document.getElementById('tags');
      
      if (!titleInput.value || !bodyInput.value) {
        showNotification('Please fill out all required fields', 'error');
        return;
      }
      
      const newQuestion = {
        id: Date.now(),
        title: titleInput.value,
        body: bodyInput.value,
        tags: tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
        answered: false,
        likes: 0,
        dislikes: 0,
        likedBy: new Set(),
        dislikedBy: new Set()
      };
      
      questions.push(newQuestion);
      saveToLocalStorage();
      renderQuestions();
      populateTagFilter();
      
      // Reset form
      titleInput.value = '';
      bodyInput.value = '';
      tagsInput.value = '';
      
      showNotification('Question submitted successfully!', 'success');
    }
  
    function showNotification(message, type = 'success') {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: 'right',
        className: `toast toast-${type}`,
      }).showToast();
    }
  
    function handleError(fn) {
      return async (...args) => {
        try {
          await fn(...args);
        } catch (error) {
          console.error('An error occurred:', error);
          showNotification('Something went wrong. Please try again.', 'error');
        }
      };
    }
  
    function saveToLocalStorage() {
      const questionsToSave = questions.map(q => ({
        ...q,
        likedBy: Array.from(q.likedBy),
        dislikedBy: Array.from(q.dislikedBy)
      }));
      localStorage.setItem('questions', JSON.stringify(questionsToSave));
    }
  
    function loadFromLocalStorage() {
      const saved = localStorage.getItem('questions');
      if (!saved) return null;
  
      const parsed = JSON.parse(saved);
      return parsed.map(q => ({
        ...q,
        likedBy: new Set(q.likedBy),
        dislikedBy: new Set(q.dislikedBy)
      }));
    }
  
    function renderQuestions() {
      const unansweredList = document.getElementById('unansweredQuestions');
      const answeredList = document.getElementById('answeredQuestions');
      
      if (!unansweredList || !answeredList) return;
  
      if (isLoading) {
        document.getElementById('browse-questions').innerHTML = showLoadingState();
        return;
      }
  
      unansweredList.innerHTML = '';
      answeredList.innerHTML = '';
  
      // Apply filters
      const filter = searchBar ? searchBar.value.toUpperCase() : '';
      const tagFilter = filterTags ? filterTags.value : '';
      const statusFilter = filterStatus ? filterStatus.value : '';
  
      const filteredQuestions = questions.filter(q => {
        const matchesSearch = q.title.toUpperCase().includes(filter);
        const matchesTag = !tagFilter || q.tags.includes(tagFilter);
        const matchesStatus = !statusFilter ||
          (statusFilter === 'answered' ? q.answered : !q.answered);
        return matchesSearch && matchesTag && matchesStatus;
      });
  
      // Pagination
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const paginatedQuestions = filteredQuestions.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
      );
  
      paginatedQuestions.forEach(q => {
        // Create question card
        const li = document.createElement('li');
        li.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow', 'flex', 'flex-col');
        const tags = q.tags.map(tag => `<button class="bg-accent text-primary px-2 py-1 rounded-full text-xs">${tag}</button>`).join(' ');
        li.innerHTML = `
          <h4 class="text-xl font-semibold text-primary">${q.title}</h4>
          <p class="text-secondary">${q.body}</p>
          <div class="mt-2">${tags}</div>
          <div class="flex justify-between mt-2">
            <div>
              <button class="likeBtn bg-green-500 text-accent px-2 py-1 rounded">👍 Like (${q.likes})</button>
              <button class="dislikeBtn bg-red-500 text-accent px-2 py-1 rounded">👎 Dislike (${q.dislikes})</button>
            </div>
            <button class="answerBtn bg-primary text-accent px-2 py-1 rounded">Answer</button>
            <button class="shareBtn bg-blue-500 text-accent px-2 py-1 rounded">🔗 Share</button>
          </div>
        `;
  
        if (q.answered) {
          const answer = document.createElement('p');
          answer.classList.add('mt-2', 'text-neutral', 'italic');
          answer.textContent = `Answer: ${q.answer}`;
          li.appendChild(answer);
          answeredList.appendChild(li);
        } else {
          unansweredList.appendChild(li);
        }
  
        // Voting functionality with toggle
        const likeBtn = li.querySelector('.likeBtn');
        const dislikeBtn = li.querySelector('.dislikeBtn');
  
        likeBtn.addEventListener('click', handleError(async () => {
          const userId = 'current-user'; // Replace with actual user authentication
          if (q.likedBy.has(userId)) {
            q.likedBy.delete(userId);
            q.likes--;
            likeBtn.classList.remove('liked');
          } else {
            if (q.dislikedBy.has(userId)) {
              q.dislikedBy.delete(userId);
              q.dislikes--;
              dislikeBtn.classList.remove('disliked');
            }
            q.likedBy.add(userId);
            q.likes++;
            likeBtn.classList.add('liked');
          }
          saveToLocalStorage();
          renderQuestions();
        }));
  
        dislikeBtn.addEventListener('click', handleError(async () => {
          const userId = 'current-user';
          if (q.dislikedBy.has(userId)) {
            q.dislikedBy.delete(userId);
            q.dislikes--;
            dislikeBtn.classList.remove('disliked');
          } else {
            if (q.likedBy.has(userId)) {
              q.likedBy.delete(userId);
              q.likes--;
              likeBtn.classList.remove('liked');
            }
            q.dislikedBy.add(userId);
            q.dislikes++;
            dislikeBtn.classList.add('disliked');
          }
          saveToLocalStorage();
          renderQuestions();
        }));
  
        // Answer functionality (inline form)
        const answerBtn = li.querySelector('.answerBtn');
        answerBtn.addEventListener('click', () => {
          const existingForm = li.querySelector('.answer-form');
          if (existingForm) {
            existingForm.remove();
          } else {
            const form = document.createElement('div');
            form.classList.add('answer-form', 'mt-2');
            form.innerHTML = `
              <textarea class="w-full p-2 border rounded" placeholder="Type your answer here" rows="3"></textarea>
              <button class="submitAnswerBtn bg-green-500 text-accent px-2 py-1 rounded mt-2">Submit Answer</button>
            `;
            li.appendChild(form);
            form.querySelector('.submitAnswerBtn').addEventListener('click', () => {
              const text = form.querySelector('textarea').value;
              if (text.trim() !== '') {
                q.answer = text;
                q.answered = true;
                saveToLocalStorage();
                renderQuestions();
              }
            });
          }
        });
  
        // Share functionality with toggle
        const shareBtn = li.querySelector('.shareBtn');
        shareBtn.addEventListener('click', () => {
          const existingShareOptions = li.querySelector('.share-options');
          if (existingShareOptions) {
            existingShareOptions.remove();
          } else {
            const shareOptions = `
              <div class="share-options bg-white p-4 rounded-lg shadow-lg mt-2">
                <h4 class="text-lg font-semibold mb-2">Share via:</h4>
                <ul class="space-y-2">
                  <li><a href="https://api.whatsapp.com/send?text=${encodeURIComponent(q.title)}" target="_blank" class="flex items-center space-x-2 text-green-500"><i class="fab fa-whatsapp"></i><span>WhatsApp</span></a></li>
                  <li><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="flex items-center space-x-2 text-blue-600"><i class="fab fa-facebook"></i><span>Facebook</span></a></li>
                  <li><a href="mailto:?subject=${encodeURIComponent(q.title)}&body=${encodeURIComponent(q.body)}" class="flex items-center space-x-2 text-red-500"><i class="fas fa-envelope"></i><span>Email</span></a></li>
                </ul>
              </div>
            `;
            const shareContainer = document.createElement('div');
            shareContainer.innerHTML = shareOptions;
            li.appendChild(shareContainer);
          }
        });
      });
  
      renderPagination(filteredQuestions.length);
    }
  
    function showLoadingState() {
      return `<div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>`;
    }
  
    function renderPagination(totalItems) {
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
      const paginationContainer = document.createElement('div');
      paginationContainer.className = 'flex justify-center gap-2 mt-4';
  
      paginationContainer.innerHTML = `
        <button id="prevPage" 
          ${currentPage === 1 ? 'disabled' : ''}
          class="px-4 py-2 rounded bg-primary text-white disabled:opacity-50">
          Previous
        </button>
        <span class="px-4 py-2">
          Page ${currentPage} of ${totalPages || 1}
        </span>
        <button id="nextPage"
          ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''}
          class="px-4 py-2 rounded bg-primary text-white disabled:opacity-50">
          Next
        </button>
      `;
  
      // Remove any existing pagination container first
      const existingPagination = document.getElementById('paginationContainer');
      if (existingPagination) {
        existingPagination.remove();
      }
  
      paginationContainer.id = 'paginationContainer';
      const browseQuestionsSection = document.getElementById('browse-questions');
      if (browseQuestionsSection) {
        browseQuestionsSection.appendChild(paginationContainer);
        
        // Add event listeners to pagination buttons
        const prevPageBtn = document.getElementById('prevPage');
        const nextPageBtn = document.getElementById('nextPage');
        
        if (prevPageBtn) {
          prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage--;
              renderQuestions();
            }
          });
        }
        
        if (nextPageBtn) {
          nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
              currentPage++;
              renderQuestions();
            }
          });
        }
      }
    }
  
    function populateTagFilter() {
      if (!filterTags) return;
      
      const tagSet = new Set();
      questions.forEach(q => q.tags.forEach(tag => tagSet.add(tag)));
  
      filterTags.innerHTML = '<option value="">All Tags</option>'; // Reset options
      tagSet.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        filterTags.appendChild(option);
      });
    }
  });
  