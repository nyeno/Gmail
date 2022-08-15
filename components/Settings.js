import Image from "next/dist/client/image"

const Settings = () => {
    return (
      <div>
        <button>
          <Image src="https://ssl.gstatic.com/images/icons/material/system/svg/help_outline_24px.svg" alt="Help icon" width={30} height={30} />
        </button>
        <button>
          <Image src="https://ssl.gstatic.com/images/icons/material/system_gm/svg/settings_24px.svg" alt="Help icon" width={30} height={30} />
        </button>
        <Image src="https://lh3.googleusercontent.com/ogw/AOh-ky3IVm2VGZwuLXpBTPV86N6o3QgmE6tuaCwo6qNqPg=s64-c-mo" alt="Help icon" width={50} height={50} />
      </div>
    )
  }
  
  export default Settings
  