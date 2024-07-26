
async function GetResponse() {
    const data = fetch('http://localhost:8000');
    return (await data).json();
}

GetResponse().then(res => console.log(res))