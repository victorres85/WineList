import wineList from "./List.js";

export function Wine() {

    const filteredWines = wineList.map((item) => (
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

