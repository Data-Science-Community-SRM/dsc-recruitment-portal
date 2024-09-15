import Image from "next/image"

export default function Footer(){
    return(
        <div className="flex items-center justify-center gap-7 my-10"> 
            <a href="https://www.instagram.com/dscommunity_srm/"> <Image alt="instagram" width={36} height={34} src="/insta.png" /> </a>
            <a href="https://www.linkedin.com/company/dscommunitysrm/mycompany/"> <Image alt="linkedin" width={36} height={34} src="/linkedin.png" /> </a>
            <a href="https://x.com/dscommunitysrm"> <Image alt="twitter" width={36} height={34} src="/twitter-x.png" /> </a>
            
        </div>
    )
}