document.addEventListener("DOMContentLoaded", () => {
    const archiveLink = document.getElementById('archive-link')
    const archiveURL = "https://archive.is/newest/" + window.location.href
    archiveLink.innerHTML = archiveURL
    
    console.log('archiveURL', archiveURL)
}
