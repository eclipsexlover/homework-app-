document.getElementById('testBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
});

function testApp() {
    return true;
}
