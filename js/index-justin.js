
// Simple navigation toggler
var state = ($(".sidebar").hasClass("toggled"));

var nav = document.getElementById("sidebarToggleTop");

nav.onclick = function() {
    state = !state;
    if (state) {
        nav.style.left = '16px';
    }
    else {
        nav.style.left = '6.5rem';
    }
}

document.body.onload = function() {
    var batteryLevelPercentageValue = document.getElementById("battery-level-percentage-value");
    var batteryLevelPercentageValueStr = document.getElementById("battery-level-percentage-value").innerHTML;
    var batteryStatusGreenLight = document.getElementById("battery-status-green-light");
    var batteryStatusRedLight = document.getElementById("battery-status-red-light");

    var value = parseInt(batteryLevelPercentageValueStr)

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


function create_robot(robot_name) {
    const USER_ENDPOINT = "http://localhost:8000/admin/robot";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "robot_serial_number": robot_name,
            "assigned" : false
        })
    };

    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));
}

function create_user(username, password, serialnumber) {
    const USER_ENDPOINT = "http://localhost:8000/user";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_name" : username,
            "password" : password,
            "robot_serial_number": serialnumber
        })
    };

    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));
}

function get_authorisation() {
    const USER_ENDPOINT = "http://localhost:8000/user";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_name" : username,
            "password" : password
        })
    };

    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));
}

function start_now_testing(task_spec, auth){
    var unix_time = Date.now();
    if (task_spec == 1) {
        task_string = "Circular";
    }

    const USER_ENDPOINT = "http://localhost:8000/command";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : auth
        },
        body: JSON.stringify({
            "robot_serial_number" : "serial2",
            "time_issued": unix_time,
            "time_instruction": [unix_time],
            "instruction" : {
                "Task": task_string
            }
        })
    };

    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));

}