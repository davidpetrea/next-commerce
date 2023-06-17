import FAQ from './gold/FAQ';

export const gamesDetails: {
  [key: string]: {
    [key: string]: { title: JSX.Element; content: JSX.Element };
  };
} = {
  wow: {
    '/': {
      title: (
        <h1 className='font-bold self-start text-3xl lg:text-6xl'>
          World of Warcraft
        </h1>
      ),
      content: (
        <div>
          Overgear provides cheap WoW boosting of all types: character or PvP
          boosting, Raid or Dungeon carry, Powerleveling, farming & more to save
          your time. Buy WoW carry, book a slot in our live chat and enjoy your
          WoW boost! Online support will provide you with all the details about
          our WoW services 24/7.
        </div>
      ),
    },
    gold: {
      title: (
        <h1 className='font-bold self-start text-3xl lg:text-6xl'>WoW Gold</h1>
      ),
      content: (
        <>
          <div>
            WoW Gold in Dragonflight is still the most important currency, which
            provides you with a lot of opportunities. For Gold, you can buy
            mounts, pets, transmog items, and, what is more important,
            consumables for any content, and even Mythic raid gear.
          </div>
          <FAQ />
        </>
      ),
    },
  },
};

const details = { ...gamesDetails };

export default details;
