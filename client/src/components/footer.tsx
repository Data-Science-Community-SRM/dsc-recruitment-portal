'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="flex items-center bg-inherit justify-center gap-7 py-12"
    >
      <motion.div
        className="flex items-center justify-center gap-7"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        key={isVisible ? 'visible' : 'hidden'}
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
