import React, { useState } from 'react'

function RootLayout({ header, actionComponent, rightSideBar, tabs = {} }) {
    const [activeTab, setActiveTab] = useState(tabs && tabs[0].label);
    return (
        <div className='flex px-32'>
            <div className='flex w-full'>
                <div className='p-10 w-full border-r-2'>
                    <div className='flex justify-between items-center w-full'>
                        {/* header */}
                        <h1 className='text-[50px] font-medium'>{header}</h1>
                        {/* action (right hand)*/}
                        {actionComponent}
                    </div>
                    {/* Tabs */}
                    <div className='flex gap-4 my-5'>
                        {tabs && tabs.map((tab, index) => {
                            return <h5 className={`cursor-pointer ${activeTab === tab.label ? 'border-b' : ""} border-black`} onClick={() => setActiveTab(tab.label)}>{tab.label}</h5>
                        })}
                    </div>
                    {tabs && tabs.map((tab, index) => {
                            return activeTab === tab.label && tab.children
                        })
                    }
                </div>
                <div className='w-96'>
                    {rightSideBar}
                </div>
            </div>
        </div>
    )
}

export default RootLayout