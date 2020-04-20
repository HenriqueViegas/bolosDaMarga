var app = angular.module("BolosDaMarga", [])

app.controller("ConteudoController", ['$scope', function ($scope) {

    document.getElementById('navbar').querySelectorAll('a').forEach(link => {
        const conteudo = document.getElementById('conteudo')

        link.onclick = function (e) {
            e.preventDefault()
            fetch(link.href)
                .then(resp => resp.text())
                .then(html => conteudo.innerHTML = html)
        }
    })

    $scope.bolos = [
        {
            nomeDoBolo: "Bolo Branco",
            descricao: "Bolo branco com recheio de creme de confeiteiro, morangos e cobertura de chantili.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$ 80,00",
            imagem: "../img/morangoCremeChantili.jpg"
        },
        {
            nomeDoBolo: "Bolo de Ganache",
            descricao: "Bolo com massa e recheio de chocolate (2 camadas) coberto com ganache de alta qualidade.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$ 70,00",
            imagem: "../img/morangoeGanache.jpg"
        },
        {
            nomeDoBolo: "Naked de Churros",
            descricao: "Bolo naked recheado de doce de leite com cobertura de doce de leite e decorado com minichurros fritos.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$ 75,00",
            imagem: "../img/nakedChurros.jpg"
        },
        {
            nomeDoBolo: "Red Velvet",
            descricao: "Bolo Red Velvet (massa de chocolate com corante) com recheio e cobertura de cream cheese e decorado com frutas vermelhas.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$ 85,00",
            imagem: "../img/redVelvet.jpg"
        },
        {
            nomeDoBolo: "Kit Kat & Confettis",
            descricao: "Bolo massa de chocolate e recheio de chocolate, decorado com Kit Kat ao redor e cobertura de Confettis.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$ 90,00",
            imagem: "../img/kit-kat-confeti.jpg"
        },
        {
            nomeDoBolo: "Bolo Nestlé",
            descricao: "Bolo com massa de chocolate e recheio de chocolate, envolvido com pedaços de chocolate Nestlé e decorado com granulado e confetes de chocolate.",
            gluten: "Contém Glúten e Lactose.",
            preco: "R$75,00",
            imagem: "../img/brigadeiroNestleClassic.jpg"
        }
    ]

}])