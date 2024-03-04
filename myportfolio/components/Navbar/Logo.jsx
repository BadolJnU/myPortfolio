import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' width={74} height={70} priority alt="logo image"/>
    </Link>
  )
}

export default Logo