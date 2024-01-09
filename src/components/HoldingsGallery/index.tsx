import type { NextPage } from 'next';
import FormContainer from '~/components/HoldingsGallery/form-container';
import { useTigerNfts } from '~/hooks/useTigerNfts';

const HoldingsGallery: NextPage = () => {
  const nfts = useTigerNfts();
  return (
    <div className="relative bg-itsc-black w-full flex flex-col items-start justify-start p-4 box-border gap-[52px] text-left text-[54px] font-omegle">
      <div className="relative w-[848px] h-[65px]">
        <div className="absolute top-[0px] left-[0px] tracking-[2.87px] leading-[54px] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#fbd099,_#fcefdf_59.9%,_#ffe299)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Tigers Held
        </div>
        <img
          className="absolute top-[65px] left-[7px] max-h-full w-[841px] object-cover"
          alt=""
          src="/line-7@2x.png"
        />
      </div>
      <div className="shrink-0 flex flex-row items-center justify-center gap-[16px]">
        {nfts?.map((nft, index) => (
          <FormContainer
            key={index}
            cardTitle={nft.src} // Use the image from the NFT data
            buttonText="See More"
            tigerNumber={nft.name.split('#')[1]} // Assuming the name is in the format "ITSC #123"
            details1={nft.name}
            href={nft.href} // Use description from the NFT data
          />
        ))}
      </div>
    </div>
  );
};

export default HoldingsGallery;