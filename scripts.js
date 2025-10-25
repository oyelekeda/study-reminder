function addTask() {
        var subject = document.getElementById("subject").value;
        var time = document.getElementById("time").value;

        if (subject === "" || time === "") {
          alert("Please enter both subject and time.");
          return;
        }

               var list = document.getElementById("taskList");
        var item = document.createElement("li");
        item.className = "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow";
        item.innerHTML =
          "<span>" + subject + " - " + time + "</span>" +
          "<button onclick='deleteTask(this)' class='text-red-500 hover:text-red-700 font-bold'>X</button>";

        list.appendChild(item);

                setReminder(subject, time);

                document.getElementById("subject").value = "";
        document.getElementById("time").value = "";
      }

      function deleteTask(button) {
        button.parentElement.remove();
      }

      function setReminder(subject, time) {
        var now = new Date();
        var parts = time.split(":");
        var reminderTime = new Date();
        reminderTime.setHours(parts[0]);
        reminderTime.setMinutes(parts[1]);
        reminderTime.setSeconds(0);

        var difference = reminderTime - now;

        if (difference > 0) {
          setTimeout(function () {
            alert("Time to study " + subject + "!");
          }, difference);
        } else {
          alert("The time you entered has already passed!");
        }
      }
  