function start_now_testing(){

    const USER_ENDPOINT = "http://localhost:8000/command";
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "robot_serial_number" : "serial1",
            "time_issued": 1615458840,
            "time_instruction": [1615458388, 1615457000, 1615458000],
            "instruction" : {
                "Abort":"Safety"
            }
        })
    };



    fetch(USER_ENDPOINT, params)
        .then(response => response.json())
        .then(data => console.log(data));

}