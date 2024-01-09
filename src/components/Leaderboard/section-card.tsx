import type { NextPage } from 'next';
import FrameComponent from './frame-component';

type SectionCardType = {
  rank?: number;
  username?: string;
  level?: number;
  points?: number;
  avatarBaseImageUrl?: string;
};

const SectionCard: NextPage<SectionCardType> = ({
  rank,
  username,
  level,
  points,
  avatarBaseImageUrl = '/-privateavatarbase@2x.png',
}) => {
  return (
    <div className="w-[1205px] flex flex-col items-start justify-start">
      <FrameComponent
        privateAvatarBase={avatarBaseImageUrl}
        frameDivPosition="relative"
        rank={rank}
        username={username}
        level={level}
        points={points}
      />
    </div>
  );
};

export default SectionCard;