import requests
import time
import json

url = "http://localhost:8000/"
serial = "serial1"

def main():
    print("Starting Robot Simulator")

    response = init(serial, 75)
    time.sleep(5)

    poll(serial, 70, response["command_id"], "InProgress")
    time.sleep(5)

    poll(serial, 65, response["command_id"], "InProgress")
    time.sleep(5)

    poll(serial, 60, response["command_id"], "InProgress")
    time.sleep(5)

    poll(serial, 55, response["command_id"], "Completed")
    time.sleep(5)



def init(robot_serial_number, battery_level):
    print("INIT: robot_serial_number:", robot_serial_number, "battery_level:", battery_level)

    payload = json.dumps({
        "robot_serial_number": robot_serial_number,
        "battery_level": battery_level
    })
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url+"init", headers=headers, data=payload).json()
    print(response)
    return response

def poll(robot_serial_number, battery_level, command_id, status):
    print("POLL: robot_serial_number:", robot_serial_number, "battery_level:", battery_level, "command_id:", command_id, "status:", status)

    payload = json.dumps({
        "robot_serial_number": robot_serial_number,
        "battery_level": battery_level,
        "command_id": command_id,
        "status": status
    })
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url+"poll", headers=headers, data=payload).json()
    print(response)
    return response



if __name__ == '__main__':
    main()
