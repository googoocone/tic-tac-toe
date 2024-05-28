import logoImg from "../../public/game-logo.png"

export default function Head() {
  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <img src={logoImg} alt="" />
    </header>
  )
}