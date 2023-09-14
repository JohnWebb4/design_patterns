import { logger } from "../util/logger";
import { AudioPlayer, MediaAdapter, MediaType, Mp4Player, VlcPlayer } from "./adapter";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Adapter pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Audio Player", () => {
    let audioPlayer: AudioPlayer;

    beforeEach(() => {
      audioPlayer = new AudioPlayer();
    });

    describe("when I play a mp3 type", () => {
      it("should play a mp3", () => {
        audioPlayer.play(MediaType.mp3, "aMp3.mp3");

        expect(logger.log).toHaveBeenCalledWith("Reading MP3 aMp3.mp3");
      });
    });

    describe("when I play a mp4", () => {
      it("should adapt to play a mp4 type", () => {
        audioPlayer.play(MediaType.mp4, "aMp4.mp4");

        expect(logger.log).toHaveBeenCalledWith("Reading MP4 aMp4.mp4");
      });
    });

    describe("when I play a vlc type", () => {
      it("should adapt to play a vlc", () => {
        audioPlayer.play(MediaType.vlc, "aVlc.vlc");

        expect(logger.log).toHaveBeenCalledWith("Reading VLC aVlc.vlc");
      });
    });

    describe("when I play an other type", () => {
      it("should log invalid audio type", () => {
        audioPlayer.play(MediaType.other, "anOther.other");

        expect(logger.log).toHaveBeenCalledWith("Invalid audio type other: anOther.other");
      });
    });
  });

  describe("Media Adapter", () => {
    let mediaAdapter: MediaAdapter;

    describe("when I play an other type", () => {
      it("should log invalid media type", () => {
        mediaAdapter = new MediaAdapter(MediaType.other);

        mediaAdapter.play(MediaType.other, "anOther.other");

        expect(logger.log).toHaveBeenCalledWith("Invalid media type other: anOther.other");
      });
    });
  });

  describe("Mp4Player", () => {
    let mp4Player: Mp4Player;

    beforeEach(() => {
      mp4Player = new Mp4Player();
    });

    describe("when I play a vlc type", () => {
      it("should not log", () => {
        mp4Player.playVlc();

        expect(logger.log).not.toHaveBeenCalled();
      });
    });
  });

  describe("VlcPlayer", () => {
    let vlcPlayer: VlcPlayer;

    beforeEach(() => {
      vlcPlayer = new VlcPlayer();
    });

    describe("when I play a mp4 type", () => {
      it ("should not log", () => {
        vlcPlayer.playMp4();

        expect(logger.log).not.toHaveBeenCalled();
      });
    });
  });
});
