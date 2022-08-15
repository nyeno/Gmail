import Image from "next/image"
import Item from "../Shared/NavItem"



const SideNav = () => {
  return (
    <div>
      <div>
      <Image src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png" alt="Gmail Logo" width={80} height={30} />
      </div>
      <nav>
        <Item text="Inbox" icon="https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/inbox/fill1/20px.svg"/>
        <Item text="Starred" icon="https://www.gstatic.com/images/icons/material/system_gm/2x/star_border_black_20dp.png"/>
        <Item text="Sent" icon="https://www.gstatic.com/images/icons/material/system_gm/2x/send_black_20dp.png"/>
        <Item text="Drafts" icon="https://www.gstatic.com/images/icons/material/system_gm/2x/insert_drive_file_black_20dp.png"/>
        <Item text="Scheduled" icon="https://www.gstatic.com/images/icons/material/system_gm/2x/schedule_send_black_20dp.png"/>
        <Item text="Trash" icon="https://www.gstatic.com/images/icons/material/system_gm/2x/delete_black_20dp.png"/>
      </nav>
    </div>
  )
}

export default SideNav