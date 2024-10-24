async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const membersData = await response.json();
        const qualifiedMembers = filterQualifiedMembers(membersData.members);
        displaySpotlightMembers(qualifiedMembers);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

function filterQualifiedMembers(members) {
    return members.filter(member => 
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
}

function displaySpotlightMembers(members) {
    const spotlightSection = document.getElementById('spotlight-section');
    spotlightSection.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <${member.headingLevel}>${member.name}</${member.headingLevel}>
            <p>${member.description}</p>
        `;
        spotlightSection.appendChild(listItem);
    });
}

function displayBanner() {
    const today = new Date();
    const day = today.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    if (day === 1 || day === 2 || day === 3) {
        const banner = document.createElement('div');
        banner.id = 'meet-greet-banner';
        banner.innerHTML = `
            <p>Join our Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
            <button onclick="closeBanner()">❌</button>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
    }
}

function closeBanner() {
    const banner = document.getElementById('meet-greet-banner');
    if (banner) {
        banner.remove();
    }
}

// Fetch members and display on page load
getMembers();
displayBanner();
