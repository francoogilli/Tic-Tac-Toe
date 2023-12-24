import { Square } from "./Square"
export function WinnerModal({winner, resetGame}) {
    if (winner == null) return null
    const winnerText = winner === false ? 'Empate' : 'Ganador: '

    return (
        
              <section className="winner">
                <div className="text">
                  <h2 className="font-bold text-3xl">{winnerText}</h2>
                  <header className="win">
                    {winner && <Square>{winner}</Square>}
                  </header>
        
                  <footer className="">
                    <button className="text-white font-semibold bg-gradient-to-r from-green-500 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 mb-6 mt-1 px-6 py-2.5 rounded-2xl" onClick={resetGame}>Reiniciar</button>
                  </footer>
                </div>
              </section>
            )
          
    
}