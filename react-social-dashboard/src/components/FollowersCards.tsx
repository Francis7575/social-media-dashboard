import faceboookIcon from '/assets/icon-facebook.svg'
import twitterIcon from '/assets/icon-twitter.svg'
import instagramIcon from '/assets/icon-instagram.svg'
import youtubeIcon from '/assets/icon-youtube.svg'
import arrowDown from '/assets/icon-down.svg'
import arrowUp from '/assets/icon-up.svg'
import { useDarkMode } from '../DarkModeContext';

type FollowersProps = {
    svgIcon: string,
    user: string,
    followers: string,
    heading: string,
    arrowIcon: string,
    todayProgress: string,
    altText: string
}

const followersData: FollowersProps[] = [
    {
        svgIcon: faceboookIcon,
        user: '@nathanf',
        followers: '1987',
        heading: 'followers',
        arrowIcon: arrowUp,
        todayProgress: '12 today',
        altText: 'Facebook Icon'
    },
    {
        svgIcon: twitterIcon,
        user: '@nathanf',
        followers: '1044',
        heading: 'followers',
        arrowIcon: arrowUp,
        todayProgress: '99 today',
        altText: 'Twitter Icon'
    },
    {
        svgIcon: instagramIcon,
        user: '@realnathanf',
        followers: '11k',
        heading: 'followers',
        arrowIcon: arrowUp,
        todayProgress: '1099 today',
        altText: 'Instagram Icon'
    },
    {
        svgIcon: youtubeIcon,
        user: 'Nathan F.',
        followers: '8239',
        heading: 'subscribers',
        arrowIcon: arrowDown,
        todayProgress: '144 today',
        altText: 'Youtube Icon'
    },
]



const FollowersCards: React.FC<{ data: FollowersProps, index: number }> = ({ data, index }) => {
    const { isDarkMode } = useDarkMode();
    const borderStyles = [
        'border-t-4 border-facebook-border',
        'border-t-4 border-twitter-border',
        '',
        'border-t-4 border-youtube-border'
    ];
    const currentBorderStyle = borderStyles[index];
    const containerClass = index === 2 && 'instagram-border';
    const todayProgressColor = data.arrowIcon === arrowDown ? 'text-red' : 'text-green';

    return (
        <div className={`bg-charcoal-blue rounded-[.313rem] pt-[2.18rem] pb-[1.5rem] flex flex-col items-center relative cursor-pointer 
        ${currentBorderStyle} ${containerClass} ${isDarkMode ? 'bg-dark-background' : 'bg-light-background'}
            ${isDarkMode ? 'hover:bg-dark-cards-hover' : 'hover:bg-light-cards-hover'}`}>

            <div className='flex gap-[.5rem] mb-[1.87rem]'>
                <img src={data.svgIcon} alt={data.altText} />
                <span className={`font-bold text-[.75rem] ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                    {data.user}
                </span>
            </div>

            <div className='flex flex-col gap-[.563rem] items-center'>
                <span className={`text-[3.5rem] font-bold leading-[3rem] tracking-[-.125rem] 
                    ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                    {data.followers}
                </span>
                <h2 className={`text-[.75rem] tracking-[.313rem] uppercase ${isDarkMode ? 'text-dark-text' :
                    'text-light-text'}`}>
                    {data.heading}
                </h2>
            </div>

            <div className='flex gap-[.25rem] items-center mt-[1.563rem]'>
                <img src={data.arrowIcon} alt="Arrow Icon" />
                <span className={`text-[.75rem] font-bold ${todayProgressColor}`}>
                    {data.todayProgress}
                </span>
            </div>
        </div>
    )
}

export { FollowersCards, followersData }