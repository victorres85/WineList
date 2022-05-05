

export let wineList = [
    {
        id: 1,
        tipo: 'branco',
        produtor: 'Gabriëlskloof',
        vinho: 'Sauvignon Blanc',
        regiao: 'Walker Bay',
        pais: 'South Africa',
        ano: 2021
    },
    {
        id: 2,
        tipo: "rose",
        produtor: "Denis Jamain",
        vinho: "Reuilly 'Les Chatillons'",
        regiao: "Loire",
        pais: "France",
        ano: 2020,
    },
    {
        id: 3,
        tipo: "tinto",
        produtor: "Jean-Claude Boisset",
        vinho: "Pinot Noir 'Les Ursulines'",
        regiao: "Burgundy",
        pais: "France",
        ano: 2018,
    },
    {
        id: 4,
        tipo: "rose",
        produtor: "Chateau Miraval",
        vinho: "Miraval'",
        regiao: "Côtes de Provence",
        pais: "France",
        ano: 2020,
    },
    {
        id: 5,
        tipo: "branco",
        produtor: "Roux Pere & Fils",
        vinho: "St Aubin 'Vieilles Vignes''",
        regiao: "Burgundy",
        pais: "France",
        ano: 2019,
    },
    {
        id: 6,
        tipo: "branco",
        produtor: "Cave de Hunawihr",
        vinho: "Riesling Grand Cru 'Rosacker'",
        regiao: "Alsace",
        pais: "France",
        ano: 2017,
    },
    {
        id: 7,
        tipo: "tinto",
        produtor: "Vasee Felix",
        vinho: "Cabernet Sauvignon",
        regiao: "Margaret River",
        pais: "Australia",
        ano: 2018,
    },
    {
        id: 8,
        tipo: "espumante",
        produtor: "Rathfinny",
        vinho: "Rosé Brut",
        regiao: "Sussex",
        pais: "England",
        ano: 2018,
    },
    {
        id: 9,
        tipo: "tinto",
        produtor: "Ch Durfort-Vivens",
        vinho: "Vivens",
        regiao: "Bordeaux",
        pais: "France",
        ano: 2015,
    },
    {
        id: 10,
        tipo: "branco",
        produtor: "Ca' Morlin",
        vinho: "Prosecco Superiore Asolo",
        regiao: "Veneto",
        pais: "France",
        ano: "NV",
    },
       {
        id: 11,
        tipo: "tinto",
        produtor: "Torbreck",
        vinho: "The Steading",
        regiao: "Barossa Valley",
        pais: "Australia",
        ano: 2019,
    },
    {
        id: 12,
        tipo: "Espumante",
        produtor: "Souverian",
        vinho: "Henriot Brut",
        regiao: "Champagne",
        pais: "France",
        ano: "NV",
    },
    {
        id: 13,
        tipo: "tinto",
        produtor: "Racines",
        vinho: "Pinot Noir",
        regiao: "California",
        pais: "USA",
        ano: 2019,
    }
]






function getWineList() {
    return wineList
}

export default getWineList()
