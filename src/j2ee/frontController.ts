import { logger } from "../util/logger";

interface IView {
  show: () => void;
}

class MenuView implements IView {
  public show() {
    logger.log("Select a game mode!");
  }
}

class GameView implements IView {
  public show() {
    logger.log("Enjoy the game!");
  }
}

class Dispatcher {
  protected menuView: MenuView;
  protected gameView: GameView;

  constructor() {
    this.menuView = new MenuView();
    this.gameView = new GameView();
  }

  public dispatch(request: string): void {
    const lowerRequest = request.toLocaleUpperCase();

    if (lowerRequest === "GAME") {
      this.gameView.show();
    } else {
      this.menuView.show();
    }
  }
}

class FrontController {
  protected dispatcher: Dispatcher;

  constructor() {
    this.dispatcher = new Dispatcher();
  }

  public dispatchRequest(request: string): void {
    this.trackRequest(request);

    if (this.isAuthenticated()) {
      this.dispatcher.dispatch(request);
    }
  }

  private isAuthenticated(): boolean {
    logger.log("Authenticated");
    return true;
  }

  private trackRequest(request: string): void {
    logger.log(`Page Request: ${request}`);
  }
}

export { FrontController };
