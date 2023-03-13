import { useState } from "react";
import "./App.css";

function App() {
  const [cells, setCells] = useState<Array<string>>(["a", "b", "c"]);

  //définir la valeur d'une cellule
  const handleValue = (value: string, index: number) => {
    //.map permet de parcourir le tableau afin de trouver la valeur à modifier
    setCells(
      cells.map((cell, i) => {
        return i === index ? value : cell;
      })
    );
  };

  const addNewCell = (index: number) => {
    //méthode permettant d'ajouter une valeur dans un tableau à un index spécifique (n'y arrive pas avec le splice)
    setCells((prevCells) => [
      ...prevCells.slice(0, index + 1),
      "_",
      ...prevCells.slice(index + 1),
    ]);
  };

  const combinedString = cells.join("");

  return (
    <main>
      <section>
        {cells.map((cell, index) => {
          return (
            <>
              <div key={index} className="cell">
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleValue(e.target.value, index)}
                />
              </div>
              {index < cells.length - 1 && (
                <span className="gap" onClick={() => addNewCell(index)}></span>
              )}
            </>
          );
        })}
      </section>
      <div>
          <p>{combinedString}</p>
        </div>
    </main>
  );
}

export default App;
