import { BsCode, BsEmojiSunglasses, BsSun } from 'react-icons/bs';
import { GiCakeSlice} from 'react-icons/gi';
import { FaGamepad } from 'react-icons/fa';
import { BiTennisBall, BiMusic } from 'react-icons/bi';
import { ImNewspaper } from 'react-icons/im';
import { MdOutlineDesignServices } from 'react-icons/md';

export const topics = [
  {
    name: 'demo',
    id: 'Demo',
    icon: <BsCode />,
  },
  {
    name: 'design',
    id: '设计',
    icon: <MdOutlineDesignServices />,
  },
  {
    name: 'sports',
    id: '体育',
    icon: <BiTennisBall />,
  },
  {
    name: 'games',
    id: '游戏',
    icon: <FaGamepad />,
  },
  {
    name: 'food',
    id: '美食',
    icon: <GiCakeSlice />,
  },
  {
    name: 'news',
    id: '新闻',
    icon: <ImNewspaper />,
  },
  {
    name: 'life',
    id: '生活',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'entertainment',
    id: '娱乐',
    icon: <BiMusic />,
  },
  {
    name: 'others',
    id: '其他',
    icon: <BsSun />,
  },
];

export const footerList1 = ['关于', 'LIGHT Browse', '新闻编辑室']
export const footerList2 = ['LIGHT for Good','成为LIGHT的广告合作伙伴','LIGHT Jump','LIGHT 赞助' ]
export const footerList3 = ['帮助中心', '安全中心', 'Creator Partal', '社群自律公约', 'Transparency', 'Accessibility']