import Image from "next/dist/client/image"
const Search = () => {
    return (
      <div>
        <button>
            <Image src="https://www.gstatic.com/images/icons/material/system_gm/svg/search_24px.svg" alt="Gmail Logo" width={30} height={30} />
        </button>
        <input type="text"/>
        <button>
        <Image src="https://ssl.gstatic.com/images/icons/material/system_gm/1x/tune_gm_grey_24dp.png" alt="Gmail Logo" width={30} height={30} />
        </button>
      </div>
    )
  }
  
  export default Search
  