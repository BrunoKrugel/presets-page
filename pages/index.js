import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const inter = Inter({ subsets: ['latin'] })

const BEFORE_IMAGE = {
  imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/Before/Joker.jpg'
};
const AFTER_IMAGE = {
  imageUrl: 'https://raw.githubusercontent.com/BrunoKrugel/presets-info/main/After/Joker.jpg'
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div>
            <ReactBeforeSliderComponent
              firstImage={BEFORE_IMAGE}
              secondImage={AFTER_IMAGE}
            />
          </div>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="https://github.com/BrunoKrugel/presets-info/blob/main/Before/Joker.jpg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
      </main>
    </>
  )
}