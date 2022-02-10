var app = angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/treinoA", {
        templateUrl: "treinoA.html"
    })
    $routeProvider.when("/treinoB", {
        templateUrl: "treinoB.html"
    })
})

app.controller('namesCtrl', function ($scope) {
    $scope.perfil = [{
        nome: "CLEYTON",
        idade: 27,
        codigoAluno: 22328974,
        treino: "ADAPTAÇÃO",
        professor: "FELIPE DEMATTE",
        vencimentoTreino: "04/03/2022",
        rotina: "TREINO A"
    }]
    $scope.treinoA = [
        {
            nome: "ESTEIRA",
            tempo: 15,
            serie: 1,
            carga: 0,
            descanso: 0,
            repeticoes: 0
        },
        {
            nome: "ABD PRANCHA ISOMETRIA",
            tempo: 0,
            serie: 3,
            descanso: 30,
        },
        {
            nome: "CRUCIFIXO MÁQUINA",
            tempo: 0,
            serie: 3,
            carga: 35,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "SUPINO RETO BARRA",
            tempo: 0,
            serie: 3,
            carga: 10,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "SUPINO INCLINADO HEALTERES",
            tempo: 0,
            serie: 3,
            carga: 10,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "TRICEPS POLIA BARRA RETA",
            tempo: 0,
            serie: 3,
            carga: 50,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "AGACHAMENTO SUMO HEALTERES",
            tempo: 0,
            serie: 3,
            carga: 15,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "LEG PRESS HORIZONTAL",
            tempo: 0,
            serie: 3,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "TRANSPORT",
            tempo: 1,
            serie: 3,
            carga: 0,
            descanso: 30,
            repeticoes: 15
        }]
    $scope.treinoB = [
        {
            nome: "ESTEIRA",
            tempo: 15,
            serie: 1,
            carga: 0,
            descanso: 0,
            repeticoes: 0
        },
        {
            nome: "PUXADA ALTA",
            tempo: 0,
            serie: 3,
            repeticoes: 15,
            carga: 30,
            descanso: 30,
        },
        {
            nome: "REMADA MÁQUINA FECHADA",
            tempo: 0,
            serie: 3,
            carga: 35,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "ROSCA DIRETA BARRA W",
            tempo: 0,
            serie: 3,
            carga: 15,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "LOMBAR BANCO DORSAL",
            tempo: 0,
            serie: 3,
            carga: 0,
            descanso: 30,
            repeticoes: 10
        },
        {
            nome: "MESA FLEXORA",
            tempo: 0,
            serie: 3,
            carga: 35,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "GÊMEOS SENTADO",
            tempo: 0,
            serie: 3,
            carga: 40,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "ELEVAÇÃO PÉLVICA SOLO",
            tempo: 0,
            serie: 3,
            carga: 40,
            descanso: 30,
            repeticoes: 15
        },
        {
            nome: "TRANSPORT",
            tempo: 1,
            serie: 3,
            carga: 0,
            descanso: 30,
            repeticoes: 15
        }]
})
