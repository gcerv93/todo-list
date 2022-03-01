const navStuff = (() => {
  const addProjectForm = document.querySelector('.project-form');
  const addProjectBtn = document.querySelector('.add-project-btn');

  addProjectBtn.addEventListener('click', () => {
    addProjectForm.style.display = 'flex';

    const formCancel = document.querySelector('.project-cancel-btn');
    formCancel.addEventListener('click', () => {
      addProjectForm.style.display = 'none';
    })
  })
})(); 

export default navStuff;
