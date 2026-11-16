document.addEventListener("DOMContentLoaded", async function () {
    const newCountdownForm = document.getElementById('new-countdown-form');
    const feedbackText = document.getElementById('feedbackText');
    const countdownList = document.getElementById('countdownList');
    //feedbackText.textContent = "-1";


    newCountdownForm.addEventListener('submit', async event => {
        //feedbackText.textContent = "1";
        event.preventDefault();

        const formData = {
            label: document.getElementById('countdownLabel').value.trim(),
            date: document.getElementById('countdownDate').value.trim(),
            time: document.getElementById('countdownTime').value.trim(),
        };

        try {
            dateTime = new Date(formData.date + "T" + formData.time + "Z");
        }
        catch {
            feedbackText.textContent = "ERROR: Your date/time did not match the format.";
            return 1;
        }

        countdownList.append(createCountdownCard({label: formData.label, endDate: dateTime}));
        feedbackText.textContent = "Success!";
    });

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

    function getSecsRemaining(originalDateTime) {
        //TODO: Convert to/from UTC, is currently out of sync
        return (originalDateTime - new Date()) / 1000;
    }

    //feedbackText.textContent = "0";
});