//capturar evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    //const inputdatanasc = e.target.querySelector('#datanasc');
    //const inputnome = e.target.querySelector('#nome');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
   // const datanasc = Number(inputdatanasc.value); type = 'date'
   // const nome = Number(inputnome.value);

    if (!peso) {
        setResultado('Peso Invalido!', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Invalida!', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

   const msg = `Seu IMC e ${imc} e seu nivel (${nivelImc}).`; //`${nome}, tem idade de ${idade}
    setResultado(msg, true);
});

/*function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
    
}
*/

function getNivelImc(imc) {
    const nivel = ['Muito abaixo do peso', 'Abaixo do peso', 'Peso Normal', 'Acima do Peso' ,'Obesidade I', 'Obesidade II (severa)', 'Obesidade III (morbida)'];

    if (imc >= 15 ) return nivel[0]; //&& sexo == 'F'

    if (imc >= 17 ) return nivel[0]; // && sexo == 'M'

    if (imc >= 15 && imc <=16.99 ) return nivel[1]; //&& sexo == 'F'

    if (imc >= 17 && imc <=18.49 ) return nivel[1]; //sexo == 'M'

    if (imc >= 18.5 && imc <=24.99) return nivel[2];//& sexo == 'M'

    if (imc >= 17 && imc <=25.99 ) return nivel[2]; //& sexo == 'F'

    if (imc >= 26 && imc <=30.99) return nivel[3]; // & sexo == 'F'

    if (imc >= 25 && imc <=29.99) return nivel[3]; // & sexo == 'M'

    if (imc >= 31 && imc <=35.99) return nivel[4]; // & sexo == 'F'

    if (imc >= 30 && imc <=34.99 ) return nivel[4]; // && sexo == 'M'

    if (imc >= 36 && imc <=37.99 ) return nivel[5]; //& sexo == 'F'

    if (imc >= 35 && imc <=39.99 ) return nivel[5]; //& sexo == 'M'

    if (imc >= 38  ) return nivel[6]; //& sexo == 'F'

    if (imc >= 40) return nivel[6]; //  & sexo == 'M'
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

/*const msg = `${nome}, tem idade de ${idade} seu IMC e ${imc} e seu nivel (${nivelImc}).`;
    setResultado(msg, true);
    */
   