// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form handler for Formspree
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('successMessage').style.display = 'block';
      form.reset();
      setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
      }, 5000);
    } else {
      alert("Oops! Something went wrong.");
    }
  }).catch(error => {
    alert("Error! Try again later.");
  });
});

// Popup functionality (shared across "What I Do" and "Services")
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close-btn');

// Descriptions for both sections (data-info attribute-based)
const descriptions = {
  ai: "I build AI solutions such as human action recognition, predictive modeling, and more using TensorFlow, PyTorch, and OpenCV.",
  data: "As a Data Analyst, I explore data insights using tools like Pandas and Matplotlib for storytelling and dashboards.",
  web: "I design responsive and modern web interfaces using HTML, CSS, and JavaScript.",
  dashboard: "I create interactive dashboards for data visualization and decision-making using tools like Power BI and Python.",
  form: "I design and build responsive landing forms for web pages, integrated with backend tools or APIs.",
  
  // New "Services" section
  ml: "Design, train, and Evaluate Machine learning models tailored to specific datasets and business goals.",
  llm: "Build and Integrate LLM-powered applications for summarization, sentiment analysis, chatbots, and custom NLP tasks.",
  deploy: "Handle complete Deployment pipelines — from model serving to integration with APIs and frontend applications.",
  collab: "Work with teams to brainstorm, implement, and optimize AI projects in collaborative environments."
};



// Attach popup behavior to all .circle elements
document.querySelectorAll('.circle').forEach(circle => {
  circle.addEventListener('click', () => {
    const infoKey = circle.getAttribute('data-info');
    popupText.textContent = descriptions[infoKey] || "More info coming soon!";
    popup.style.display = 'flex';
  });
});

// Close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});


