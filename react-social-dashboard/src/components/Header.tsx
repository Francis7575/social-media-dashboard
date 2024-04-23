import buttonActive from '/assets/button-active.svg'
import buttonInactive from '/assets/button-inactive.svg'
import { useDarkMode } from '../DarkModeContext';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className='pt-[2.25rem] px-[1.5rem] mb-[2.75rem] md:mb-[2.875rem]'>
            <div className='max-w-[1110px] mx-auto md:flex md:justify-between md:items-center'>
                <div className={`font-bold  pb-[1.5rem] md:pb-0 ${isDarkMode ? 'border-b border-solid border-slate-blue' :
                    'border-b border-solid border-cool-gray'} md:border-b-0`}>
                    <h1 className={`text-[1.5rem] md:text-[1.75rem] ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                        Social Media Dashboard
                    </h1>
                    <p className={`text-[.875rem] ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                        Total Followers: 23,004
                    </p>
                </div>

                <div className='flex justify-between items-center mt-[1.18rem] md:mt-0 gap-[.813rem]'>
                    <span className={`text-[.875rem] font-bold ${isDarkMode ? 'text-dark-text' : 'text-cool-gray'}`}>
                        Dark Mode
                    </span>
                    <button onClick={toggleDarkMode} className='relative'>
                        <img src={isDarkMode ? buttonActive : buttonInactive}
                            alt="Toggle Button"
                            className={`transition-transform duration-300 ease-in-out transform 
                                    ${isDarkMode ? 'scale-90' : ''}`} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header