function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    let dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

function updateAge() {
    let birthDate = "2008-08-06";
    let ageElements = document.querySelectorAll("#age");
    
    ageElements.forEach(element => {
        element.textContent = calculateAge(birthDate);
    });
}

window.onload = updateAge;