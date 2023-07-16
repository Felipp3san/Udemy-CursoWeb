function compras(trabalho1, trabalho2)
{
    const comprarSorvete = trabalho1 || travalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel};
}

trabalho1 = true;
trabalho2 = false;

console.log(compras(trabalho1, trabalho2).comprarTv32);
console.log(compras(trabalho1, trabalho2));

