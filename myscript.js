
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
    
    // pgCount =   0;
    // getRepos.forEach(repo => {
    //     pgCount++
    // });

    // console.log('Count:', pgCount);

    // // Pagination
    // const paginationContainer = pgCount;
    // paginationContainer.innerHTML = ''; // Clear previous controls

    // const previousButton = document.createElement('button');
    // previousButton.textContent = 'Previous';
    // previousButton.addEventListener('click', () => {
    //   if (currentPage > 1) {
    //     currentPage--;
    //     classRepos.appendChild(listRepos);
    //   }
    // });
    // const nextButton = document.createElement('button');
    // nextButton.textContent = 'Next';
    // nextButton.addEventListener('click', () => {
    //   currentPage++;
    //   classRepos.appendChild(listRepos);
    // });
    
    // paginationContainer.appendChild(previousButton);
    // paginationContainer.appendChild(nextButton);
    
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });

//   pgRepos();
//   function pgRepos() {
//     const paginationContainer = document.getElementById('upcoming-api');
//     paginationContainer.innerHTML = ''; // Clear previous controls
  
//     const previousButton = document.createElement('button');
//     previousButton.textContent = 'Previous';
//     previousButton.addEventListener('click', () => {
//       if (currentPage > 1) {
//         currentPage--;
//         fetchRepos();
//       }
//     });
  
//     const nextButton = document.createElement('button');
//     nextButton.textContent = 'Next';
//     nextButton.addEventListener('click', () => {
//       currentPage++;
//       fetchRepos();
//     });
  
//     paginationContainer.appendChild(previousButton);
//     paginationContainer.appendChild(nextButton);
//   }

