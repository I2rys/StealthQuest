//Main
async function Make_Request(){
    const response = await fetch("/api/test?url=2c29e8c21b4dd5aac1fa3a35cd3b7d8b:357046763355663057794e62485458446f66396c7646796242513d3d")
    const response_body = await response.text()

    document.getElementById("rr").textContent = `Request response: ${response_body}`
}
