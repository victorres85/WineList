import wineList from "./List.js";

let sortedList = wineList.sort(function (a, b) {
    return a.tipo.localeCompare(b.tipo)
})

export function Wine() {

    const filteredWines = sortedList.map((item) => (
        <div className="row">
            <p> {item.tipo} &emsp;

                <b>{item.vinho} </b> &ensp;
                {item.produtor} &ensp;

                {item.regiao} &ensp;

                {item.pais} &ensp;

                {item.ano} &ensp;
            </p>
        </div >

    ))
    return (



        <div className="p-4">
            <h4> Estilo  &emsp;  Vinho &emsp; Produtor &emsp; Região &emsp; País  &emsp; Ano </h4>
            <p>{filteredWines}</p>
        </div>
    )
}

