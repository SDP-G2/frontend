async function createUser(username, password, robotID) {
    const USER_ENDPOINT = "http://localhost:8000/user";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_name: username,
            password: password,
            robot_serial_number: robotID
        })
    };

    const response = await fetch(USER_ENDPOINT, params);
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }
}

async function createCommand(clean_string, time_string) {

    var time_now = Math.floor(Date.now() / 1000);

    const USER_ENDPOINT = "http://localhost:8000/command";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            robot_serial_number: localStorage.getItem('RobotID'),
            time_issued: time_now + 60,
            time_instruction: time_string,
            instruction: {
                Task: clean_string
            }
        })
    };
    const response = await fetch(USER_ENDPOINT, params);
    
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }

}
async function deleteCommand(command_number) {

    const USER_ENDPOINT = "http://localhost:8000/command/" + command_number;
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
        })
    };
    const response = await fetch(USER_ENDPOINT, params)
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }

}

async function getAuth(username, pwd) {
    const USER_ENDPOINT = "http://localhost:8000/auth";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_name: username,
            password: pwd,
        })
    };

    const response = await fetch(USER_ENDPOINT, params)
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }
}

//get battery 

async function fetchUserDetails() {

    var time_now = Math.floor(Date.now() / 1000);

    const USER_ENDPOINT = "http://localhost:8000/user";
    const params = {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    };
    const response = await fetch(USER_ENDPOINT, params)
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }

}

//get all commands 
async function fetchCommands(serialNumber) {

    var time_now = Math.floor(Date.now() / 1000);

    const USER_ENDPOINT = "http://localhost:8000/command/" + serialNumber;
    const params = {
        method: 'GET',
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    };
    const response = await fetch(USER_ENDPOINT, params)
    if (response.status !== 200) {
        return;
    } else {
        return response.json();
    }

}