
fetch(`https://api.github.com/users/gentleiyke/repos?per_page=5`)
  .then(response => response.json())
  .then(getRepos => {
    const classRepos = document.getElementById('upcoming-api');

    // Create an unordered list to hold the repositories
    const listRepos = document.createElement('ul');

    getRepos.forEach(repo => {
      // Create a list item for each repository
      const nameRepos = document.createElement('li');
      nameRepos.innerHTML = `
            <a href="${repo.html_url}">${repo.name}</a> 
            <sup>
                ${repo.language || 'Unknown'} | 
                ${repo.stargazers_count || ''} |
                ${repo.visibility}
            </sup>`;

      const desRepos = document.createElement('li');
      desRepos.textContent =   `${repo.description || 'No description available'}`;
    
      // Append the list item to the repository list
      listRepos.appendChild(nameRepos);
      listRepos.appendChild(desRepos);
    });

    // Append the repository list to the container
    classRepos.appendChild(listRepos);
    
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });



