function start_now_testing(){

    const USER_ENDPOINT = "http://localhost:8000/command";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "time_issued": "2021-03-11T16:30:00.000+01:00",
            "time_instruction": "2021-03-11T00:00:00.000+01:00",
            "robot_serial_number": "Task(ZigZag)"
        })
    };



    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));

}