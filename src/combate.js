

function combateAtaque(ataque, defensor, buff, debuffs,) {

    buff = [1.2, 1.5] 
    debuffs = [0.3, 0.5]



    let bonusArma = 0
    if (ataque.arma !== null) {
        bonusArma = ataque.arma.bonus
    }

    let bonusEscudo = 0
    if (defensor.escudo !== null) {
        bonusEscudo = defensor.escudo.bonus
    }

    let coisa = (ataque.ataque + bonusArma * - defensor.defesa - bonusEscudo )
    if (coisa < 0) {
        return 0
    }

    else {
        return coisa
    }




}
function VerificaSeDeuCerto(cenario, resultadoEsperado, ataque, defensor, buff, debuffs) {

    const resultadoAtaque = combateAtaque(ataque, defensor, buff, debuffs)
    if (resultadoAtaque == resultadoEsperado) {
        console.log(cenario + ' Acertou!! ' + resultadoAtaque)
    }
    else {
        console.log(cenario + ' Errouu!! ' + resultadoAtaque)
    }
}



VerificaSeDeuCerto('00. ', 1.2, { ataque: 0, arma: { bonus: 1 } }, { defesa: 0, escudo: null })
VerificaSeDeuCerto('01. ', 8, { ataque: 9, arma: null }, { defesa: 1, escudo: null })
VerificaSeDeuCerto('02. ', 0, { ataque: 1, arma: null }, { defesa: 9, escudo: null })
VerificaSeDeuCerto('03. ', 2, { ataque: 0, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
VerificaSeDeuCerto('04. ', 5, { ataque: 3, arma: { bonus: 2 } }, { defesa: 0, escudo: null })
VerificaSeDeuCerto('05. ', 4, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: null })
VerificaSeDeuCerto('06. ', 3, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 1 } })
VerificaSeDeuCerto('07. ', 2, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 2 } })
VerificaSeDeuCerto('08. ', 0, { ataque: 3, arma: { bonus: 2 } }, { defesa: 1, escudo: { bonus: 5 } })
VerificaSeDeuCerto('09. ', 9, { ataque: 9, arma: { bonus: 9 } }, { defesa: 5, escudo: { bonus: 4 } })









