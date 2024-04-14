document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const formStateKey = 'feedback-form-state';
  
    const saveFormState = () => {
      const formData = {
        email: form.email.value,
        message: form.message.value
      };
      localStorage.setItem(formStateKey, JSON.stringify(formData));
    };
  
    const loadFormState = () => {
      const savedData = localStorage.getItem(formStateKey);
      if (savedData) {
        const formData = JSON.parse(savedData);
        form.email.value = formData.email;
        form.message.value = formData.message;
      }
    };
  
    loadFormState();
  
    form.addEventListener('input', saveFormState);
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log({
        email: form.email.value,
        message: form.message.value
      });
      localStorage.removeItem(formStateKey);
      form.reset();
    });
  });
  