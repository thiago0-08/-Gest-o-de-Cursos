function validarCampos() {
    var nomeCurso = document.getElementById('courseName').value;
    var codigoCurso = document.getElementById('courseCode').value;
    var coordenadorNome = document.getElementById('coordinatorName').value;
    var duracaoCurso = document.getElementById('courseDuration').value;
    var nivelCurso = document.getElementById('courseLevel').value;

    exibirIconeValidacao(nomeCurso, 'courseNameIcon');
    exibirIconeValidacao(codigoCurso, 'courseCodeIcon');
    exibirIconeValidacao(coordenadorNome, 'coordinatorNameIcon');
    exibirIconeValidacao(duracaoCurso, 'courseDurationIcon');
    exibirIconeValidacao(nivelCurso, 'courseLevelIcon');

    if (nomeCurso === '' || codigoCurso === '' || coordenadorNome === '' || duracaoCurso === '' || nivelCurso === '') {
        alert("Por favor, preencha todos os campos.");
        return false;
    } else {
        alert("Curso editado com sucesso!");
        setTimeout(function () {
            window.location.replace("index.html");
        }, 100);
        return true; 
    }
}

function exibirIconeValidacao(valorCampo, idIcone) {
    var icone = document.getElementById(idIcone);
    if (valorCampo !== '') {
        icone.innerHTML = '<i class="bi bi-check-circle text-success"></i>';
    } else {
        icone.innerHTML = '';
    }
}