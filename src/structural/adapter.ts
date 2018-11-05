import { logger } from "../util/logger";

enum MediaType {
  mp3 = "mp3",
  mp4 = "mp4",
  vlc = "vlc",
  other = "other",
}

interface IMediaPlayer {
  play: (mediaType: MediaType, filename: string) => void;
}

interface IAdvancedMediaPlayer {
  playVlc: (filename: string) => void;
  playMp4: (filename: string) => void;
}

class VlcPlayer implements IAdvancedMediaPlayer {
  public playVlc(filename: string) {
    logger.log(`Reading VLC ${filename}`);
  }

  public playMp4() {
    return;
  }
}

class Mp4Player implements IAdvancedMediaPlayer {
  public playVlc() {
    return;
  }

  public playMp4(filename: string) {
    logger.log(`Reading MP4 ${filename}`);
  }
}

class MediaAdapter implements IMediaPlayer {
  private advancedMediaPlayer: IAdvancedMediaPlayer;

  constructor(mediaType: MediaType) {
    if (mediaType === MediaType.vlc) {
      this.advancedMediaPlayer = new VlcPlayer();
    } else if (mediaType === MediaType.mp4) {
      this.advancedMediaPlayer = new Mp4Player();
    }
  }

  public play(mediaType: MediaType, filename: string) {
    if (mediaType === MediaType.vlc) {
      this.advancedMediaPlayer.playVlc(filename);
    } else if (mediaType === MediaType.mp4) {
      this.advancedMediaPlayer.playMp4(filename);
    } else {
      logger.log(`Invalid media type ${mediaType}: ${filename}`);
    }
  }
}

class AudioPlayer implements IMediaPlayer {
  public play(mediaType: MediaType, filename: string) {
    if (mediaType === MediaType.mp3) {
      logger.log(`Reading MP3 ${filename}`);
    } else if (mediaType === MediaType.mp4 || mediaType === MediaType.vlc) {
      const mediaAdapter = new MediaAdapter(mediaType);

      mediaAdapter.play(mediaType, filename);
    } else {
      logger.log(`Invalid audio type ${mediaType}: ${filename}`);
    }
  }
}

export {
  AudioPlayer,
  MediaAdapter,
  MediaType,
  Mp4Player,
  VlcPlayer,
};
