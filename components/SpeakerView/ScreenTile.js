import Tile from '../Tile';

export const ScreenTile = ({
  height,
  maxWidth,
  ratio: initialRatio,
  sessionId,
}) => {
  return (
    <Tile
      mirrored={false}
      aspectRatio={initialRatio}
      isScreen
      sessionId={sessionId}
      style={{
        height,
        maxWidth,
      }}
    />
  );
};
