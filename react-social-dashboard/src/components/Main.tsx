import { FollowersCards, followersData, } from "./FollowersCards"
import { OverviewCards, overviewData } from "./OverviewCards"
import { useEffect } from "react"
import { useDarkMode } from "../DarkModeContext"

const Main = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.remove('body-dark-mode');
            document.body.classList.add('body-light-mode');
            document.body.style.setProperty('--before-bg-color', '#F7F9FF');
        } else {
            document.body.classList.add('body-dark-mode');
            document.body.classList.remove('body-light-mode');
            document.body.style.setProperty('--before-bg-color', '#20222F');
        }
    }, [isDarkMode]);

    return (
        <main className="px-[1.5rem] mb-[2.81rem] xl:mb-[4.688rem]">
            <div className="max-w-[1110px] mx-auto">
                <section className="grid gap-[1.5rem] xl:gap-[1.875rem] mb-[2.875rem] grid-cols-dynamic">
                    {followersData.map((followers, index) => (
                        <div key={index}>
                            <FollowersCards key={index} data={followers} index={index} />
                        </div>
                    ))}
                </section>

                <h2 className="text-white text-[1.5rem] font-bold mb-[.68rem] md:mb-6">
                    Overview - Today
                </h2>
                <section className="grid gap-4 grid-cols-dynamic">

                    {overviewData.map((overview, index) => (
                        <OverviewCards key={index} data={overview} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Main