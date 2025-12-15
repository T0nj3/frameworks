document.addEventListener("DOMContentLoaded", () => {
  
    const toggleBtn = document.getElementById("togglePostFormBtn");
    const postForm = document.getElementById("postForm");
    const closeBtn = document.getElementById("closePostFormBtn");
  
    
    if (toggleBtn && postForm && closeBtn) {
     
      toggleBtn.addEventListener("click", () => {
        postForm.classList.toggle("hidden"); 
      });
  
  
      closeBtn.addEventListener("click", () => {
        postForm.classList.add("hidden"); 
      });
    } else {
      console.warn("one or more elements not found!");
    }
  });