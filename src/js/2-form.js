document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const formStateKey = 'feedback-form-state';
  
    const saveFormState = () => {
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { email, message } = form;
      if (email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
      console.log({ email: email.value, message: message.value });
      localStorage.removeItem(formStateKey);
      form.reset();
    };
  
    loadFormState();
  
    form.addEventListener('input', saveFormState);
    form.addEventListener('submit', handleSubmit);
  });
  