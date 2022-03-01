const projectManager = (() => {
  const projects = [];

  function getProjects() {
    return projects;
  };

  function addProject(project) {
    projects.push(project);
  };

  // work on a delete Project function 
  // 
  // 

  return { getProjects, addProject }
})();

export default projectManager;
