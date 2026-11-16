document.addEventListener("DOMContentLoaded", async function () {
    const newCountdownForm = document.getElementById('new-countdown-form');
    const feedbackText = document.getElementById('feedbackText');
    const countdownList = document.getElementById('countdownList');
    //feedbackText.textContent = "-1";

    //Listens to the New Countdown Form submit button, collects the form's data, verifies it is formatted correctly
    //and passes the data off to be rendered in HTML and saved to the browser
    newCountdownForm.addEventListener('submit', async event => {
        //feedbackText.textContent = "1";
        //Uncertain if calling this is necessary since the form has no action attached. Consider testing and removing?
        event.preventDefault();

        const formData = {
            //Trimming for the off chance the user left whitespace in the boxes
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

        //TODO: Call function to save data to cookie
    });

    //Creates the HTML architecture for displaying preexisting and newly-created countdowns
    //also embeds countdown data into the HTML elements for future use by countdown.js
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

    //feedbackText.textContent = "0";
});