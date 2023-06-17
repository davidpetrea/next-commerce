import { ArrowDown } from '@assets/SvgComponents';

const ListItemArrow = () => {
  return <ArrowDown className='fill-purple-700 w-3 h-3 rotate-[270deg]' />;
};

const ListItemDiamond = () => {
  return <div className='w-1.5 h-1.5 bg-purple-700 rotate-45 rounded-[2px]' />;
};

export const productDetails: { [key: string]: { [key: string]: JSX.Element } } =
  {
    wow: {
      'power-leveling': (
        <ul className='text-[14px] font-semibold flex flex-col gap-1 mt-2'>
          <li className='flex items-center gap-2 '>
            <ListItemDiamond />
            <div className='text-green'>Fastest leveling options</div>
          </li>
          <li className='flex items-center gap-2'>
            <ListItemDiamond />
            <div>Choose any lvl range</div>
          </li>
          <li className='flex items-center gap-2'>
            <ListItemDiamond />
            <div>AFK leveling as an option</div>
          </li>
        </ul>
      ),
      'dragonflight-starter-pack': (
        <ul className='text-[14px] font-semibold flex flex-col gap-1 mt-2'>
          <li className='flex items-center gap-2 '>
            <ListItemDiamond />
            <div className='text-green'>428-444 ilvl gear</div>
          </li>
          <li className='flex items-center gap-2'>
            <ListItemDiamond />
            <div>Full run</div>
          </li>
          <li className='flex items-center gap-2'>
            <ListItemDiamond />
            <div>Guaranteed loot as an option</div>
          </li>
        </ul>
      ),
    },
  };

const details = { ...productDetails };

export default details;
