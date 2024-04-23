import faceboookIcon from '/assets/icon-facebook.svg'
import twitterIcon from '/assets/icon-twitter.svg'
import instagramIcon from '/assets/icon-instagram.svg'
import youtubeIcon from '/assets/icon-youtube.svg'
import arrowDown from '/assets/icon-down.svg'
import arrowUp from '/assets/icon-up.svg'
import { useDarkMode } from '../DarkModeContext';

type OverviewProps = {
    about: string,
    svgIcon: string,
    quantity: string,
    arrowIcon: string,
    percentage: string,
    altText: string
}

const overviewData: OverviewProps[] = [
    {
        about: 'Page Views',
        svgIcon: faceboookIcon,
        quantity: '87',
        arrowIcon: arrowUp,
        percentage: '3%',
        altText: 'Facebook Icon'
    },
    {
        about: 'Likes',
        svgIcon: faceboookIcon,
        quantity: '52',
        arrowIcon: arrowDown,
        percentage: '2%',
        altText: 'Facebook Icon'
    },
    {
        about: 'Likes',
        svgIcon: instagramIcon,
        quantity: '5462',
        arrowIcon: arrowUp,
        percentage: '2257%',
        altText: 'Instagram Icon'
    },
    {
        about: 'Profile Views',
        svgIcon: instagramIcon,
        quantity: '52k',
        arrowIcon: arrowUp,
        percentage: '1375%',
        altText: 'Instagram Icon'

    },
    {
        about: 'Retweets',
        svgIcon: twitterIcon,
        quantity: '117',
        arrowIcon: arrowUp,
        percentage: '303%',
        altText: 'Twitter Icon'
    },
    {
        about: 'Likes',
        svgIcon: twitterIcon,
        quantity: '507',
        arrowIcon: arrowUp,
        percentage: '553%',
        altText: 'Twitter Icon'
    },
    {
        about: 'Likes',
        svgIcon: youtubeIcon,
        quantity: '107',
        arrowIcon: arrowDown,
        percentage: '19%',
        altText: 'Youtube Icon'
    },
    {
        about: 'Total Views',
        svgIcon: youtubeIcon,
        quantity: '1407',
        arrowIcon: arrowDown,
        percentage: '12%',
        altText: 'Youtube Icon'
    },
]

const OverviewCards: React.FC<{ data: OverviewProps }> = ({ data }) => {
    const { isDarkMode } = useDarkMode();
    const colorClass = data.arrowIcon === arrowDown ? 'text-red' : 'text-green';

    return (
        <div className={`pt-[1.688rem] pb-[1.188rem] pl-[1.5rem] pr-[1.938rem] rounded-[.313rem]
            cursor-pointer  ${isDarkMode ? 'bg-dark-background' : 'bg-light-background'} 
            ${isDarkMode ? 'hover:bg-dark-cards-hover' : 'hover:bg-light-cards-hover'}`}>
            <div className='flex justify-between'>
                <h3 className={`text-[.875rem] font-bold ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                    {data.about}
                </h3>
                <img src={data.svgIcon} alt={data.altText} />
            </div>
            <div className='flex items-center justify-between mt-[1.33rem]'>
                <span className={`text-[2rem] font-bold ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                    {data.quantity}
                </span>
                <div className='flex items-center gap-[.18rem]'>
                    <img src={data.arrowIcon} alt="Arrow Icon" />
                    <span className={`text-[.75rem] ${colorClass}`}>
                        {data.percentage}
                    </span>
                </div>
            </div>
        </div>
    )
}

export { OverviewCards, overviewData }
