import RootLayout from '@/components/RootLayout'
import PrivateHeader from '@/components/header/PrivateHeader'
import Account from '@/components/settings/Account'
import Membership from '@/components/settings/Membership'
import Notifications from '@/components/settings/Notifications'
import Publishing from '@/components/settings/Publishing'
import SecurityAndApps from '@/components/settings/SecurityAndApps'
import Link from 'next/link'
import React from 'react'

function SuggestedHelp() {
    return <div className='p-3 flex flex-col gap-3'>
        <h1 className='font-bold text-xl'>Suggested help articles</h1>
        <Link className='text-sm hover:text-black' href={'/'}>Sign in or sign up to Medium</Link>
        <Link className='text-sm hover:text-black' href={'/'}> Your profile page</Link>
        <Link className='text-sm hover:text-black' href={'/'}>
            Writing and publishing your first story</Link>
        <Link className='text-sm hover:text-black text-gray-800' href={'/'}>About Medium's distribution system</Link>
        <Link className='text-sm hover:text-black text-gray-800' href={'/'}>Get started with the Partner Program</Link>
    </div>
}

function Settings() {
    const tabs = [
        { label: 'Account', children: <Account /> },
        { label: 'Publishing', children: <Publishing /> },
        { label: 'Notification', children: <Notifications /> },
        { label: 'Membership & Payments', children: <Membership /> },
        { label: 'Security & Apps', children: <SecurityAndApps /> },
    ]
    return (
        <>
            <PrivateHeader />
            <RootLayout header={'Settings'} tabs={tabs} rightSideBar={<SuggestedHelp />} />
        </>
    )
}

export default Settings