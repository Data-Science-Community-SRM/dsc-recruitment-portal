'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

  return (
    <div
      className="flex items-center bg-inherit justify-center gap-7 py-12"
    >
      <motion.div
        className="flex items-center justify-center gap-7"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link href="https://www.instagram.com/dscommunity_srm/">
          <Image alt="instagram" width={30} height={30} src="/insta.png" />
        </Link>
        <Link href="https://www.linkedin.com/company/dscommunitysrm/mycompany/">
          <Image alt="linkedin" width={30} height={30} src="/linkedin.png" />
        </Link>
        <Link href="https://x.com/dscommunitysrm">
          <Image alt="twitter" width={30} height={30} src="/twitter-x.png" />
        </Link>
      </motion.div>
    </div>
  );
}
