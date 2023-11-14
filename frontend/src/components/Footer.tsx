const menuItems = [
    {
        text: 'Home',
        target: '#'
    },
    {
        text: 'Work',
        target: '#'
    },
    {
        text: 'Services',
        target: '#'
    },
    {
        text: 'About',
        target: '#'
    },
]

export default function Footer () {
    return(
        <>
           <div className='px-[100px] py-16 flex flex-row bg-primary justify justify-between'>
                <div className='flex flex-col gap-4'>
                    <p className='text-6xl'>Team</p>
                    <div className='flex flex-row gap-8 text-2xl'>
                        {menuItems.map((item, key) => {
                            return(
                                <a key={key} href={item.target}>{item.text}</a>
                            )
                        })}
                    </div>
                    <div className='text-xl pt-4 font-light'>@ 2023 all rights reserved.</div> 
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-3xl font-semibold">We are social</p>
                    <p className="text-2xl font-light">We want to get to know you</p>
                </div>
            </div>
        </>
    )
}