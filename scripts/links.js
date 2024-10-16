const baseURL = 'https://iankaz.github.io/wdd230/';
const linksURL = 'https://iankaz.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const container = document.querySelector('.card .links-list');
    container.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        container.appendChild(weekTitle);

        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = baseURL + link.url;
            linkElement.textContent = link.title;
            container.appendChild(linkElement);
        });
    });
}

getLinks();
