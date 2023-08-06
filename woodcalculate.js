// 1. chair --> 3 cft
// 2. table --> 10 cft
// 3. bed --> 50 cft

function woodCalculate(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = perChairWood * chair;
    const tableWood = perTableWood * table;
    const bedWood = perBedWood * bed;
    
    const totalWood = chairWood + tableWood + bedWood

    return totalWood;
}
const totalWood = woodCalculate(1, 3, 1)
console.log("Total Wood Required", totalWood);