The project I built is a simple study reminder app that works like a to-do list. The problem I wanted to solve was how to let users enter a subject and time, list them on the page, and remind them when it’s time to study.

I used HTML to create the input boxes for subject and time, and a button to add reminders. I also added a `<ul>` tag to display the list of tasks.

In JavaScript my main function `addTask()` collects what the user enters using `document.getElementById().value`. It checks if both inputs are filled; if not, it shows an alert. When they are filled, it creates a new list item (`<li>`) with the subject and time, plus a delete button to remove it.

I also added a `setReminder()`function that compares the current time with the one entered. If the time is still in the future, I used `setTimeout()` to pop up an alert that says, “Time to study [subject]!” at that moment. But if the time has already passed, it warns the user right away.

The design part was done with Tailwind CSS to make it look clean and centered on the screen.

Overall, the main problem was making a reminder system that works with real time, and I solved it using simple HTML, Tailwind CSS, and JavaScript together.
