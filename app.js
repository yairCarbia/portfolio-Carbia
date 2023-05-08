const commandLine = document.getElementById('command-line');

commandLine.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        let command = this.value.trim().toLowerCase();
        let output = document.createElement('p');
        output.innerHTML = `> ${command}`;
        document.querySelector('.command-output').appendChild(output);
        this.value = '';
        executeCommand(command);
    }
});

function executeCommand(command) {
    switch (command) {
        case 'about':
            displayAbout();
            break;
        case 'projects':
            displayProjects();
            break;
        case 'contact':
            displayContact();
            break;
        case 'experience':
            displayExp();
            break;
        case 'skills':
            displaySkills();
            break;
        case 'help':
            displayHelp();
            break;
        default:
            displayError();
    }
}

function displayAbout() {
    let output = document.createElement('p');
    output.innerHTML = 'Hola , mi nombre es Yair Carbia y soy Fullstack Developer.<br>Auxiliar informático en Armada Argentina.<br>Estudiante de la Lic. en Informática .';
    document.querySelector('.command-output').appendChild(output);
}
function displaySkills() {
    let output = document.createElement('p');
    output.innerHTML = 'Mis habilidades: <br>HTML5<br>CSS3<br>JAVASCRIPT<br>REACT.JS<br>NODE.JS<br>EXPRESS<br>MONGODB<br>SQL';
    document.querySelector('.command-output').appendChild(output);
}
function displayProjects() {
    let output = document.createElement('p');
    output.innerHTML = `Algunos de mis proyectos:
    <br><a href="https://github.com/yairCarbia/CarbiaMotorsReactJS">Carbia Motors</a>
    <br><a href="https://github.com/yairCarbia/google-project">Google Project</a>
    <br><a href="https://github.com/yairCarbia/BebidasScript">BebidasScript</a>
    <br><a href="https://github.com/yairCarbia/DevzTask_BackEnd">DevzTask Backend</a>
    <br><a href="https://github.com/yairCarbia/DevzTask_FrontEnd">DevzTask FronEnd</a>`;
    `;
    `;
    document.querySelector('.command-output').appendChild(output);
}
function displayExp() {
    let output = document.createElement('p');
    output.innerHTML = 'ARMADA ARGENTINA.<br>AUXILIAR INFORMATICO.<br> TAREAS:<br>Soport técnico.<br>Consultas SQL.<br>Desarrollo Web.';
    document.querySelector('.command-output').appendChild(output);
}
function displayContact() {
    let output = document.createElement('li');
    output.innerHTML = `<br><a href='https://www.linkedin.com/in/carbiayair/'>LinkedIn</a>
    <br><a href='https://github.com/yairCarbia'>GitHub</a>`;
    document.querySelector('.command-output').appendChild(output);
}
function displayHelp() {
    let output = document.createElement('li');
    output.innerHTML = `Puedes utilizar los siguientes comandos: <br>about<br>projects<br>contact<br>experience<br>skills`;
    document.querySelector('.command-output').appendChild(output);
}

function displayError() {
    let output = document.createElement('p');
    output.innerHTML = 'Comando no reconocido';
    document.querySelector('.command-output').appendChild(output);
}
