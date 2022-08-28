import Head from 'next/head'
import {Fragment, useState} from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Main from '../components/Control'

import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MailThread from '../components/MailThread';
import Controls from '../components/Control'


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
      <div className='dark:bg-black bg-white rounded-2xl mb-8 h-[calc(100vh-5rem)] overflow-hidden'>
        <Controls />
        <div className="overflow-auto h-full">
          {mails.map(mail=>(
          <Fragment key={mail}>
            <MailThread />
          </Fragment>))}
        </div>
      </div>

    </div>
  )
}
