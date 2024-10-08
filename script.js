// Массивы для генерации забавных доменов
const adjectives = ["funny", "crazy", "wacky", "wild", "happy", "lazy", "fast"];
const nouns = ["whale", "penguin", "monkey", "lion", "octopus", "shark", "panda"];
const suffixes = [".base", ".evm", ".l2", ".crypto", ".xyz", ".defi"];

function generateDomain() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${adj}-${noun}${suffix}`;
}

document.getElementById('generate').addEventListener('click', function() {
    const domain = generateDomain();
    document.getElementById('domain-output').innerText = domain;
});
