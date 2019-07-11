import { BoardGame } from "./index";

describe("A popular game",() => {
  const gameInstance =new BoardGame(6,3);

  it("creates initial board", () => {
    expect(gameInstance.board).toMatchSnapshot("Initial");
  })
  it("after selecting 💛", () => {
    gameInstance.select(`💛`);
    expect(gameInstance.board).toMatchSnapshot("after selecting 💛");
  })
  it("after selecting ❤️", () => {
    gameInstance.select(`❤️`);
    expect(gameInstance.board).toMatchSnapshot("after selecting ❤️");
  })
  it("after selecting 💜", () => {
    gameInstance.select(`💜`);
    expect(gameInstance.board).toMatchSnapshot("after selecting 💜");
  })
  it("after selecting 💚", () => {
    gameInstance.select(`💚`);
    expect(gameInstance.board).toMatchSnapshot("after selecting 💚");
  })
})
