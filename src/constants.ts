import { mainnet } from 'wagmi';

/** Horizontal page padding to be used across the app */
export const pagePaddingX = '5%';

/** Navbar height */
export const navBarHeight = '84px';
export const bannerHeight = '50px';

export const LOCALSTORAGE_USER_KEY = 'user';
export const LOCALSTORAGE_AUTH_TOKEN_KEY = 'authtoken';

export const DOMAIN =
  process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? 'https://itsc.vercel.app'
    : process.env.NEXT_PUBLIC_APP_ENV === 'development'
    ? 'localhost'
    : 'localhost';

export const websiteUrl =
  process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? `https://${DOMAIN}`
    : process.env.NEXT_PUBLIC_APP_ENV === 'development'
    ? `http://${DOMAIN}:3000`
    : `https://${DOMAIN}`;
export const websiteDescription =
  'DBY Club is a solution for creators, fans, collectives, accelerators, web3 companies, distributors, other DAOs, and media outlets to pitch, select, and collaborate on creative DAO projects.';
export const websiteLogoUrl = `${websiteUrl}/banner.png`;

// export const docsUrl =
//   'https://dbyclub.notion.site/dbyclub/Des-Beaux-Yeux-A-Decentralized-Production-House-7291a0a1346f442fb910b65b9db459f1';
// export const contactEmail = 'mailto:adam@dbyclub.xyz';
// export const discordUrl = 'https://discord.gg/xxkDE5QaF4';
// export const twitterUrl = 'https://twitter.com/DBYclub';
// export const linkedInUrl =
//   'https://www.linkedin.com/company/des-beaux-yeux-dao';
// export const communityDeckUrl = 'https://info.dbyclub.xyz/CommunityDeck.html';

export const titleAddon = 'Impatient Tiger Social Club';
export const baseTitle = 'ITSC | ';
export const homeTitle = baseTitle + titleAddon;

export const zIndexes = {
  loadingBar: 10,
  menuList: 10,
  navbar: 2,
  hero: 1,
};

console.log(
  'process.env.NEXT_PUBLIC_APP_ENV ',
  process.env.NEXT_PUBLIC_APP_ENV,
);
export const CHAIN =
  process.env.NEXT_PUBLIC_APP_ENV === 'production' ? mainnet : mainnet;
