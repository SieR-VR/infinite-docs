import React from "react"

import Image from "next/image";
import { useRouter } from "next/router";
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
    docsRepositoryBase: 'https://github.com/SieR-VR/infinite-docs/tree/main',
    project: {
        link: 'https://github.com/SieR-VR/infinite'
    },
    useNextSeoProps: () => {
        return {
            defaultTitle: 'Infinite-lang docs',
            titleTemplate: '%s | Infinite-lang docs',
            additionalLinkTags: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/logo.svg',
                    sizes: "200x200",
                }
            ]
        }
    }
}

export default config;