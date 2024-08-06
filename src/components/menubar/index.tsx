const MENU_ITEMS = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

export default function Menubar() {
    return (
        <header className="absolute top-0 text-white text-opacity-80 w-full px-24 z-10">
            <nav className="flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">My Website</h1>
                <ul className="flex space-x-4">
                    {MENU_ITEMS.map((item) => (
                        <li key={item.title} className='cursor-pointer text-sm'>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
