import type { SelectedPage } from '../Texts/pages';
import { Link } from 'react-scroll';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void
}

const CustomLink = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <Link
        to={lowerCasePage}
        smooth={true}
        duration={100}
        offset={-100}
        onClick={()=>setSelectedPage(lowerCasePage)}
        className={`${selectedPage == lowerCasePage ? "text-primary": ""} transition duration-500 hover:text-blue-400 `}
    >
        {page}
    </Link>
  )
}

export default CustomLink