import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

import MailControls from "../components/MailControl";

import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import ShortcutIcon from '@mui/icons-material/Shortcut';
import DownloadIcon from '@mui/icons-material/Download';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Home() {
  
  const [isHover, setHover] = useState(false);


  return (
    <div>
      <Head>
        <title>sample subject</title>
        <meta name="description" content="Gmail Clone" />
        <link
          rel="icon"
          href="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
        />
      </Head>
      <div className="dark:bg-black bg-white px-8 rounded-2xl mr-8 overflow-hidden">
          <MailControls />
          <div className="pb-2 overflow-auto h-[calc(100vh-9rem)]">
            <div className="flex justify-between">
              <a href='' className="font-normal text-2xl mb-8 ml-16">
                sample subject
                <span className="text-xs bg-[#dddddd] pb-0.5 px-1 ml-2 rounded-md">Inbox <CloseRoundedIcon className="text-xs"/></span>
              </a>
              <div className="space-x-6">
                <LocalPrintshopOutlinedIcon fontSize="small"/>
                <OpenInNewOutlinedIcon fontSize="small"/>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <div className="flex">
                <Image
                  src="https://lh3.googleusercontent.com/ogw/AOh-ky3IVm2VGZwuLXpBTPV86N6o3QgmE6tuaCwo6qNqPg=s64-c-mo"
                  alt="User Image"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-3.5">
                  <p className="font-medium">Mofe Kayode
                    <span className="font-thin text-xs ml-2 text-gray-500">&lt;<span>mofekayode@gmail.com</span>&gt;</span>
                  </p>
                  <p className="text-gray-600 text-sm">to me
                    <ArrowDropDownOutlinedIcon fontSize="small"/>
                  </p>
                </div>
                
              </div>
              <div className="flex space-x-2 items-center">
                  <AttachmentOutlinedIcon fontSize="small" className="text-gray-700 pt-px"/>
                  <p className="text-gray-700 text-xs pr-2 pt-px">Sep 3, 2022, 12:02 AM (1 day ago)</p>
                  <div className="space-x-6">
                    <StarBorderOutlinedIcon fontSize="small" />
                    <ReplyOutlinedIcon fontSize="small"/>
                    <MoreVertOutlined fontSize="small"/>
                  </div>
                  
              </div>
            </div>

            <p className="whitespace-pre ml-16 mb-12 text-sm" > 
              Hello Laura <br />

              This is a <a href="https://github.com/nyeno/Planet-Fact-Site/blob/main/src/Components/PhoneNav.js" className="inline text-blue-600 underline" target="_blank">sample</a> subject with some attachments.😃
            </p>
            <div className="ml-16 relative ">
              <div className="overflow-hidden ">
                <iframe
                className="overflow-hidden "
                src={`https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=65f9c4c3da&attid=0.1&permmsgid=msg-f:1742900821744299490&th=1830071026ce2de2&view=att&disp=inline&realattid=f_l7l2zkxx0&saddbat=ANGjdJ-cxkZB5a3UOOG-LcSuBCnG7pODq2sQtE2qyL1Rh6kAkQhOk7FhoksxlbRc0Qm3HJv3nnEhWDjXjEnJaSvKqnvtVd4A1TUGNriGmJCZs3MLZP-93aXB1O6uA20zyCcB4JBq9oRiu000OD5a89m4CwaeSCMQmIZXvgepeezfQBSbTpG8rNhyPjQajaXriC4AhLCvWtBZ-5qP-gE3DqmgowmDhE09UrVGc8BYc6QCP93d7xxZAjWmtxAmXlHCcPNfGjsowTkIG-ng00Nrl5_H9WMvCD9ljT8kYEpRC_lv1lCz4zOh7xXLXEBHnba_OKBZdIeUvBox2q10gnr1XQnc3pFYrzuFYhpn19beomggyZLy51JGwNICTbWA9BaOqIahikqxHfaxPDZbfqkHbUV4t-4Fs3nPBBZ-ugVLAcGBULKpi9rMPOoc-L7Wpeyhq8PH-ZGdWhgUzTZXv40VGebTN5Zfv8FceP67zHFjgtQ2QTnLt9CjYwqnKNnW7DY5S7VFB7SX7eDtkwKlPhI8UhoUnh2Dt_0nAZnmHJeWa8fXALYbrLQmNC4aXFnTsnm_D7Gpy8TiBS_5xkQ7GL-W9L72ttG1-o8YgicLP4Ohs-rKc9a5RzwNuJeZ2QndM8PAxlwo1fUkQpcLJPY9qj2-7D4EtjtPOyyBX0qWxYPZmcLEs_p5CLHCJrqexAnZjwMu0xBLwmPVn7EKueXkNAFhVqNBvB3j8izRuyI_eHaf9ION_iiKtTN41vfM0kkAqrI'#view=fitH''#zoom=10'`}
                width={192}
                height={150}
                ></iframe>
                <div onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
                 className={`bg-[#F5F5F5] w-48 absolute p-2 flex  ${
                  isHover ? "h-full top-0 left-0" : "max-h-8 bottom-0 left-0 overflow-hidden" 
                }`}

            >
              <div className="mx-2">
                <span className="bg-[#EA4335] text-white text-[8px] font-bold p-1 rounded-sm">PDF</span>
              </div>
                <div className="text-sm font-medium text-[#777777]">
                    <p>Resume of Mofe Kayode.docx.pdf</p>
                    <p className="font-thin py-2">76 KB</p>
                    <div className="my-2 space-x-2 flex">
                      <div className="text-white bg-neutral-800/90 px-2 py-1 rounded-sm"><DownloadIcon fontSize="small"/></div>
                      <div className="text-white bg-neutral-800/90 px-2 py-1 rounded-sm"><FolderOpenIcon fontSize="small"/></div>
                    </div>
                </div>
                
                
              </div>
              </div>
            
            </div>
            <div className="ml-16">
              <button>
                <ReplyOutlinedIcon />
                Reply
              </button>
              <button>
                <ShortcutIcon />
                Forward
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
