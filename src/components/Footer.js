import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-white  shadow mt-4 dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2030 <Link to="/" className="hover:underline">CineMate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="#" target="_blank" className="hover:underline mr-4 md:mr-6">Instagram</Link>
                    </li>
                    <li>
                        <Link to="#" target="_blank" className="hover:underline mr-4 md:mr-6">LinkedIn</Link>
                    </li>
                    <li>
                        <Link to="#" target="_blank" className="hover:underline mr-4 md:mr-6">Youtube</Link>
                    </li>
                    <li>
                        <Link to="#" target="_blank" className="hover:underline">Github</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
