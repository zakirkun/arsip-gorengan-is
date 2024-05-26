import { defineConfigWithTheme } from 'vitepress'
import vitepressHelper, { config } from '@huyikai/vitepress-helper';

const vitepressHelperConfig = {
  directory: 'contents',
  collapsible: true
};

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  base: '/arsip-gorengan-is/',
  title: "Arsip Gorengan IS",
  description: "Gorengan yang tidak digoreng, bukanlah gorengan namanya",
  themeConfig: {
    siteTitle: "Arsip Gorengan IS",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zakirkun/arsip-gorengan-is' }
    ],
    docFooter: {
      prev: 'Kembali',
      next: 'Selanjutnya'
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2024'
    }
  }
}

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};
