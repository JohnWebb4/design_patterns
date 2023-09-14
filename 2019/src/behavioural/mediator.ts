import { logger } from "../util/logger";

class ChatRoom {
  public static showMessage(user: User, message: string) {
    logger.log(`${Date.now()}: [${user.name}] ${message}`);
  }
}

class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sendMessage(message: string) {
    ChatRoom.showMessage(this, message);
  }
}

export { User };
