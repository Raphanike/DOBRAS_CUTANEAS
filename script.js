function calcular() {
    let idade = parseFloat(document.getElementById("idade").value);
    let estatura = parseFloat(document.getElementById("estatura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let sexo = document.getElementById("sexo").value;
    
    let pCintura = parseFloat(document.getElementById("pCintura").value);
    let pQuadril = parseFloat(document.getElementById("pQuadril").value);
    let pAbdomen = parseFloat(document.getElementById("pAbdomen").value);
    let pAntebraco = parseFloat(document.getElementById("pAntebraco").value);

    let dSum7 = ["dSubescapular", "dTriceps", "dPeitoral", "dAxilar", "dSuprailiaca", "dAbdominal", "dCoxa"]
        .map(id => parseFloat(document.getElementById(id).value))
        .reduce((a, b) => a + b, 0);

    let Dc = sexo === "masculino" 
        ? 1.1010 - 0.00041150 * dSum7 + 0.00000069 * dSum7 ** 2 - 0.00022631 * idade - 0.000059239 * pAbdomen + 0.000190632 * pAntebraco
        : 1.0970 - 0.00046971 * dSum7 + 0.00000056 * dSum7 ** 2 - 0.00012828 * idade;

    let percGordura = ((4.95 / Dc) - 4.50) * 100;
    let IMC = peso / (estatura * estatura);
    let RCQ = pCintura / pQuadril;
    
    // Correção: IC agora é dividido por 100
    let IC = (pCintura / (0.109 * Math.sqrt(peso / estatura))) / 100;

    document.getElementById("resultado").innerHTML = `
        % Gordura: ${percGordura.toFixed(2)}% <br>
        IMC: ${IMC.toFixed(2)} <br>
        RCQ: ${RCQ.toFixed(2)} <br>
        IC: ${IC.toFixed(4)}
    `;
}
