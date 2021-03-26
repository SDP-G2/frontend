// Simple navigation toggler
var state = ($(".sidebar").hasClass("toggled"));

var nav = document.getElementById("sidebarToggleTop");

nav.onclick = function () {
    state = !state;
    if (state) {
        nav.style.left = '16px';
    }
    else {
        nav.style.left = '6.5rem';
    }
}

//onload

document.body.onload = function () {
    var username = localStorage.getItem('Username');
    document.getElementById("welcome_user").innerHTML = username;
    document.getElementById("name_dropdown").innerHTML = username;
    fetchUserDetails().then((response) => {
        if (response) {
            document.getElementById("battery_value").innerText = response.battery_level;

            var batteryStatusGreenLight = document.getElementById("battery-status-green-light");
            var batteryStatusRedLight = document.getElementById("battery-status-red-light");
            var value = response.battery_level;

            if ((value >= 50) && (value <= 100)) {
                batteryStatusGreenLight.style.display = "inline";
            }
            else if ((value >= 0) && (value < 50)) {
                batteryStatusRedLight.style.display = "inline";
                $(batteryLevelStatus_modal).modal();
            }
            else {
                batteryLevelPercentageValue.innerText = "NULL";
            }
        }
    })
}
