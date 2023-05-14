import React from "react"

import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs"

import InfiniteLogo from "public/logo.svg";

const config: DocsThemeConfig = {
    logo: (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span>
                <Image src={InfiniteLogo} alt="logo" width={96} height={96} />
            </span>
            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>infinite</p>
        </div>
    ),
    project: {
        link: 'https://github.com/SieR-VR/infinite'
    }
}

export default config;