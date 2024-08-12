"use client";

export default function Hero() {
    return (
        <div className="h-screen w-screen flex-grow-1 text-white text-opacity-75 items-center justify-start flex ps-80">
            <div className="flex flex-col gap-4 max-w-[500px]">
                <h5 className="text-5xl text-sky-400 -mx-1">Hello!</h5>
                <div className="flex text-sm flex-nowrap">
                    My name is
                    <span className="contents text-sky-400">
                        &nbsp;Ray Yu&nbsp;
                    </span>
                    and I am a 29 year old experienced
                    <span className="contents text-sky-400">
                        &nbsp;software development engineer&nbsp;
                    </span>
                    based in WuHan.
                </div>
                <p className="flex text-sm">
                    Throughout my career, I have held various roles, including
                    that of a development engineer and project leader, across
                    multiple companies. This has allowed me to gain extensive
                    work experience in the field.
                </p>
                <p className="flex text-sm">
                    Currently, I am working remotely for
                    <span className="contents text-sky-400">
                        &nbsp;semfoundry.com&nbsp;
                    </span>
                    .
                </p>
                <div className="flex gap-2 text-neutral-500 mt-2">
                    <span className="underline text-sm underline-offset-2 cursor-pointer hover:bg-white hover:text-black px-1 -mx-1">
                        github
                    </span>
                    <a
                        href="mailto:pazzitul@gmail.com"
                        target="_blank"
                        className="underline text-sm underline-offset-2 cursor-pointer hover:bg-white hover:text-black px-1 -mx-1"
                    >
                        email
                    </a>
                    {/* <span className="underline text-sm underline-offset-2 cursor-pointer hover:bg-white hover:text-black px-1 -mx-1">
                        blog
                    </span> */}
                </div>
            </div>
        </div>
    );
}
