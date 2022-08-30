import Head from 'next/head'
import {Fragment, useState} from 'react'
import { useTheme } from 'next-themes'

import MailThread from '../components/MailThread';
import Controls from '../components/Control'
import Tabs from '../components/Tabs';


export default function Home() {
  const {theme, setTheme} = useTheme('light')
  const [mails, setMails] = useState(Array(100).fill())
  
  return (
   
    <div>
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Gmail Clone" />
        <link rel="icon" href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" />
      </Head>
      <div className='dark:bg-black bg-white rounded-2xl mr-8 h-[calc(100vh-6rem)] overflow-hidden'>
        <Controls />
        <div className="overflow-auto h-[88%] pb-2">
          <Tabs />
          {mails.map(mail=>(
          <Fragment key={mail}>
            <MailThread />
          </Fragment>))}
        </div>
      </div>

    </div>
  )
}
