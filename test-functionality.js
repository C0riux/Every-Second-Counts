//Functions used within functionality.js are copied here upon every commit that alters functionality.js
//and new functions that can be tested are added to the exports

//Not all functions can be tested due to their reliance on input to/from HTML elements
//Such functions are instead tested manually

function createCountdownCard(countdownData) {
    const card = document.createElement('div');
    card.classList.add('countdownCard');

    card.dataset.endDate = countdownData.endDate;
    card.dataset.label = countdownData.label;

    const label = document.createElement('h2');
    label.textContent = countdownData.label;

    const secsRemaining = document.createElement('p');
    secsRemaining.textContent = getSecsRemaining(countdownData.endDate);

    card.append(
        label,
        secsRemaining,
    );

    return card;
}

//Gets the number of seconds remaining between the current time and the original (countdown endDate) time
function getSecsRemaining(originalDateTime) {
    //TODO: Convert to/from UTC, is currently out of sync
    return (originalDateTime - new Date()) / 1000;
}

module.exports = {getSecsRemaining};